"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  acsLink: string;
  pdf?: string;
}

const publications: Publication[] = [
  {
    title:
      "Evolution of Interfacial Electro-Chemo-Mechanics between Lithium Metal and Halide Solid Electrolyte",
    authors: ["L Mandal", "RK Biswas", "S Bera", "SB Ogale", "A Banerjee"],
    journal: "Chemistry of Materials 36 (20), 10336-10350",
    year: 2024,
    acsLink: "https://pubs.acs.org/doi/abs/10.1021/acs.chemmater.4c02307",
  },
  {
    title: "Electrochemical Properties of Novel Battery Materials",
    authors: ["Michael Chen", "Robert Wilson", "Emma Davis"],
    journal: "ACS Energy Letters, 8(4), 567-579",
    year: 2023,
    acsLink: "https://pubs.acs.org/doi/abs/10.1021/acs.chemmater.4c02307",
  },
];

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

  const years = [...new Set(filteredPublications.map((pub) => pub.year))].sort(
    (a, b) => b - a
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
            placeholder="Search by keyword, phrase, or author..."
            className="pl-10 py-6 text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {years.map((year) => {
          const yearPublications = filteredPublications.filter(
            (pub) => pub.year === year
          );
          if (yearPublications.length === 0) return null;

          return (
            <div key={year} className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">{year}</h2>
              <div className="space-y-6">
                {yearPublications.map((pub, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <a
                      href={pub.acsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors mb-2 block"
                    >
                      {pub.title}
                    </a>
                    <p className="text-gray-600 mb-4">
                      {pub.authors.join(", ")}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-500 italic">{pub.journal}</p>
                      <a
                        href={pub.acsLink}
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

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({
            length: Math.ceil(
              filteredPublications.length / publicationsPerPage
            ),
          }).map((_, i) => (
            <Button
              key={i}
              variant={currentPage === i + 1 ? "default" : "outline"}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
