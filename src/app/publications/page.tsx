"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ExternalLink } from "lucide-react";
import { publications } from "@/app/data/publications";

export default function PublicationsPage() {
  const [isClient, setIsClient] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const publicationsPerPage = 10;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredPublications = publications.filter((pub) => {
    const searchLower = search.toLowerCase();
    return (
      pub.title.toLowerCase().includes(searchLower) ||
      pub.authors.some((author) =>
        author.toLowerCase().includes(searchLower)
      ) ||
      pub.journal.toLowerCase().includes(searchLower)
    );
  });

  // Get current publications
  const indexOfLastPublication = currentPage * publicationsPerPage;
  const indexOfFirstPublication = indexOfLastPublication - publicationsPerPage;
  const currentPublications = filteredPublications.slice(
    indexOfFirstPublication,
    indexOfLastPublication
  );

  // Get unique years only from current publications
  const years = [...new Set(currentPublications.map((pub) => pub.year))].sort(
    (a, b) => b - a
  );

  // Calculate page numbers
  const pageNumbers = Math.ceil(
    filteredPublications.length / publicationsPerPage
  );

  if (!isClient) {
    return null; // Return null on server-side
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Publications
          </h1>
          <p className="text-gray-600">
            Browse our research publications and scientific contributions
          </p>
        </div>

        <div className="relative mb-12">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="search"
            placeholder="Search by Keyword, Phrase, or Author"
            className="pl-10 py-6 text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {years.map((year) => {
          const yearPublications = currentPublications.filter(
            (pub) => pub.year === year
          );
          if (yearPublications.length === 0) return null;

          return (
            <div key={year} className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">{year}</h2>
              <div className="space-y-6">
                {yearPublications.map((pub) => (
                  <div
                    key={pub.id}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <p className="text-gray-600 mb-3">
                      {pub.authors.join(", ")}
                    </p>
                    <p className="font-semibold mb-3 text-blue-600">
                      &quot;{pub.title}&quot;
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-500 italic">{pub.journal}</p>
                      <a
                        href={pub.publicationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Article
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {pageNumbers > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <div className="flex gap-2">
              {Array.from({ length: pageNumbers }, (_, i) => (
                <Button
                  key={i + 1}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  onClick={() => setCurrentPage(i + 1)}
                  className="min-w-[40px]"
                >
                  {i + 1}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, pageNumbers))
              }
              disabled={currentPage === pageNumbers}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
