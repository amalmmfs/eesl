import { getPublications } from "@/lib/publications/get-publications";
import { PublicationsClient } from "./publications-client";

export default async function PublicationsPage() {
  const publications = await getPublications();

  return <PublicationsClient publications={publications} />;
}
