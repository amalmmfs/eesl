import { unstable_cache } from "next/cache";
import { manualPublications } from "@/app/data/publications";
import { PUBLICATIONS_CACHE_TAG, PUBLICATIONS_SYNC } from "./config";
import { countNewPublications, mergePublications } from "./merge-publications";
import { fetchOpenAlexWorks } from "./openalex";
import type { Publication } from "./types";

async function loadPublications(): Promise<Publication[]> {
  try {
    const fetchedPublications = await fetchOpenAlexWorks();
    return mergePublications(manualPublications, fetchedPublications);
  } catch (error) {
    console.error("Failed to sync publications from OpenAlex:", error);
    return manualPublications.map((publication) => ({
      ...publication,
      formattedTitle: publication.formattedTitle ?? publication.title,
    }));
  }
}

const getCachedPublications = unstable_cache(
  loadPublications,
  ["publications", PUBLICATIONS_SYNC.openAlexAuthorId],
  {
    revalidate: PUBLICATIONS_SYNC.revalidateSeconds,
    tags: [PUBLICATIONS_CACHE_TAG],
  },
);

export async function getPublications(): Promise<Publication[]> {
  return getCachedPublications();
}

export async function getPublicationSyncStats(): Promise<{
  total: number;
  manualCount: number;
  autoAddedCount: number;
}> {
  try {
    const fetchedPublications = await fetchOpenAlexWorks();
    const autoAddedCount = countNewPublications(
      manualPublications,
      fetchedPublications,
    );

    return {
      total: manualPublications.length + autoAddedCount,
      manualCount: manualPublications.length,
      autoAddedCount,
    };
  } catch {
    return {
      total: manualPublications.length,
      manualCount: manualPublications.length,
      autoAddedCount: 0,
    };
  }
}
