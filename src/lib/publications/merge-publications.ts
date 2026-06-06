import {
  buildDedupeKeySet,
  getDedupeKeys,
  isDuplicate,
} from "./dedupe";
import type { Publication } from "./types";

function sortPublications(publications: Publication[]): Publication[] {
  return [...publications].sort((left, right) => {
    if (right.year !== left.year) {
      return right.year - left.year;
    }

    return left.title.localeCompare(right.title);
  });
}

export function mergePublications(
  manualPublications: Publication[],
  fetchedPublications: Publication[],
): Publication[] {
  const manualWithFormattedTitle = manualPublications.map((publication) => ({
    ...publication,
    formattedTitle: publication.formattedTitle ?? publication.title,
  }));

  const existingKeys = buildDedupeKeySet(manualWithFormattedTitle);
  const nextId =
    manualWithFormattedTitle.reduce(
      (maxId, publication) => Math.max(maxId, publication.id),
      0,
    ) + 1;

  let autoId = nextId;
  const autoAdded: Publication[] = [];

  for (const publication of fetchedPublications) {
    if (isDuplicate(publication, existingKeys)) {
      continue;
    }

    const mergedPublication: Publication = {
      ...publication,
      id: autoId,
      formattedTitle: publication.title,
    };

    autoAdded.push(mergedPublication);
    autoId += 1;

    for (const key of getDedupeKeys(mergedPublication)) {
      existingKeys.add(key);
    }
  }

  return sortPublications([...manualWithFormattedTitle, ...autoAdded]);
}

export function countNewPublications(
  manualPublications: Publication[],
  fetchedPublications: Publication[],
): number {
  const existingKeys = buildDedupeKeySet(manualPublications);
  return fetchedPublications.filter(
    (publication) => !isDuplicate(publication, existingKeys),
  ).length;
}
