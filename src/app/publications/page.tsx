"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ExternalLink } from "lucide-react";
import { publications } from "../data/publications";

export default function PublicationsPage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const publicationsPerPage = 10;

  useEffect(() => {
    document.title = "Publications | EESL";
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

  const indexOfLastPublication = currentPage * publicationsPerPage;
  const indexOfFirstPublication = indexOfLastPublication - publicationsPerPage;
  const currentPublications = filteredPublications.slice(
    indexOfFirstPublication,
    indexOfLastPublication
  );

  const years = [...new Set(currentPublications.map((pub) => pub.year))].sort(
    (a, b) => b - a
  );

  const pageNumbers = Math.ceil(
    filteredPublications.length / publicationsPerPage
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 max-w-6xl">
        {/* Responsive Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-900">
            Research Publications
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Explore our contributions to electrochemical energy storage research
            and scientific advancement
          </p>
        </div>

        {/* Responsive Search */}
        <div className="relative mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto px-4">
          <div className="absolute inset-0 bg-blue-100 blur-xl opacity-20"></div>
          <div className="relative bg-white rounded-xl shadow-sm">
            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-blue-500 h-4 sm:h-5 w-4 sm:w-5" />
            <Input
              type="search"
              placeholder="Search by Keyword, Author, or Journal"
              className="pl-10 sm:pl-12 pr-4 py-4 sm:py-6 text-base sm:text-lg border-none ring-2 ring-transparent focus:ring-blue-200 rounded-xl"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Responsive Publications List */}
        {years.map((year) => {
          const yearPublications = currentPublications.filter(
            (pub) => pub.year === year
          );
          if (yearPublications.length === 0) return null;

          return (
            <div key={year} className="mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 border-b pb-3 sm:pb-4 px-4">
                {year}
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {yearPublications.map((pub) => (
                  <div
                    key={pub.id}
                    className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 mx-4"
                  >
                    <p className="text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base break-words">
                      {pub.authors.join(", ")}
                    </p>
                    <p className="font-medium mb-2 sm:mb-3 text-base sm:text-lg text-blue-600 break-words">
                      &quot;{pub.title}&quot;
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                      <p className="text-gray-600 italic text-xs sm:text-sm">
                        {pub.journal}
                      </p>
                      <a
                        href={pub.publicationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors text-xs sm:text-sm"
                      >
                        <ExternalLink className="h-3 w-3" />
                        View Article
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Responsive Pagination */}
        {pageNumbers > 1 && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 sm:mt-12 md:mt-16 px-4">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-full sm:w-auto hover:bg-blue-50"
            >
              Previous
            </Button>
            <div className="flex flex-wrap justify-center gap-2">
              {Array.from({ length: pageNumbers }, (_, i) => (
                <Button
                  key={i + 1}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`min-w-[40px] ${
                    currentPage === i + 1
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "hover:bg-blue-50"
                  }`}
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
              className="w-full sm:w-auto hover:bg-blue-50"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
