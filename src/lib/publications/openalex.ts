import { PUBLICATIONS_SYNC } from "./config";
import type { Publication } from "./types";

interface OpenAlexAuthor {
  display_name?: string;
}

interface OpenAlexAuthorship {
  author?: OpenAlexAuthor;
}

interface OpenAlexSource {
  display_name?: string;
}

interface OpenAlexPrimaryLocation {
  landing_page_url?: string;
  source?: OpenAlexSource;
}

interface OpenAlexWork {
  id: string;
  display_name?: string;
  doi?: string;
  publication_year?: number;
  authorships?: OpenAlexAuthorship[];
  primary_location?: OpenAlexPrimaryLocation;
}

interface OpenAlexWorksResponse {
  meta?: {
    next_cursor?: string | null;
  };
  results?: OpenAlexWork[];
}

function mapOpenAlexWork(work: OpenAlexWork): Publication | null {
  const title = work.display_name?.trim();
  const year = work.publication_year;

  if (!title || !year) {
    return null;
  }

  const authors =
    work.authorships
      ?.map((authorship) => authorship.author?.display_name?.trim())
      .filter((name): name is string => Boolean(name)) ?? [];

  const journal =
    work.primary_location?.source?.display_name?.trim() || "Unknown";

  const publicationLink = work.doi
    ? work.doi.startsWith("https://")
      ? work.doi
      : `https://doi.org/${work.doi.replace(/^https?:\/\/doi\.org\//i, "")}`
    : work.primary_location?.landing_page_url || work.id;

  return {
    id: 0,
    title,
    authors,
    journal,
    year,
    publicationLink,
  };
}

export async function fetchOpenAlexWorks(): Promise<Publication[]> {
  const publications: Publication[] = [];
  let cursor: string | null = "*";

  while (cursor) {
    const params = new URLSearchParams({
      filter: `authorships.author.id:${PUBLICATIONS_SYNC.openAlexAuthorId},type:!paratext`,
      per_page: "200",
      cursor,
    });

    const response = await fetch(
      `https://api.openalex.org/works?${params.toString()}`,
      {
        headers: {
          Accept: "application/json",
          "User-Agent": PUBLICATIONS_SYNC.userAgent,
        },
        next: { revalidate: PUBLICATIONS_SYNC.revalidateSeconds },
      },
    );

    if (!response.ok) {
      throw new Error(
        `OpenAlex request failed: ${response.status} ${response.statusText}`,
      );
    }

    const data = (await response.json()) as OpenAlexWorksResponse;

    for (const work of data.results ?? []) {
      const publication = mapOpenAlexWork(work);
      if (publication) {
        publications.push(publication);
      }
    }

    cursor = data.meta?.next_cursor ?? null;
  }

  return publications;
}
