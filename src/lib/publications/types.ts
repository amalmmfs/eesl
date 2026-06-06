export interface Publication {
  id: number;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  publicationLink: string;
  formattedTitle?: string;
}
