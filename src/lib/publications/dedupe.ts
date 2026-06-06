import type { Publication } from "./types";

export function normalizeDoi(link: string): string | null {
  if (!link) return null;
  const match = link.match(/10\.\d{4,}\/[^\s?#]+/i);
  return match ? match[0].toLowerCase() : null;
}

export function doiSuffix(doi: string): string {
  const parts = doi.split("/");
  return parts[parts.length - 1]?.toLowerCase() ?? doi;
}

export function normalizeTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function getDedupeKeys(publication: Publication): string[] {
  const keys: string[] = [];
  const doi = normalizeDoi(publication.publicationLink);

  if (doi) {
    keys.push(`doi:${doi}`);
    keys.push(`suffix:${doiSuffix(doi)}`);
  }

  keys.push(`title:${normalizeTitle(publication.title)}`);
  return keys;
}

export function buildDedupeKeySet(publications: Publication[]): Set<string> {
  const keys = new Set<string>();
  for (const publication of publications) {
    for (const key of getDedupeKeys(publication)) {
      keys.add(key);
    }
  }
  return keys;
}

export function isDuplicate(
  publication: Publication,
  existingKeys: Set<string>,
): boolean {
  return getDedupeKeys(publication).some((key) => existingKeys.has(key));
}
