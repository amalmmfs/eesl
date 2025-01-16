import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Marquee from "react-fast-marquee";

interface NewsItem {
  date: string;
  title: string;
  description: string;
  category: string;
}

const newsItems: NewsItem[] = [
  {
    date: "2024-01-15",
    title: "Breakthrough in Energy Storage Research",
    description:
      "Our team has achieved significant progress in developing new battery technology with improved efficiency.",
    category: "Research",
  },
  {
    date: "2024-01-10",
    title: "New Laboratory Equipment Installation",
    description:
      "State-of-the-art testing facilities have been added to enhance our research capabilities.",
    category: "Facility",
  },
  {
    date: "2024-01-05",
    title: "International Conference Participation",
    description:
      "EESL researchers presented their findings at the International Energy Storage Summit.",
    category: "Events",
  },
  {
    date: "2024-01-12",
    title: "Research Grant Awarded",
    description:
      "EESL secured major funding for advanced energy storage solutions development.",
    category: "Grants",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-gray-50 py-16" id="next-section">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Latest Developments
          </h2>
          <p className="text-gray-500 mt-2">
            Stay updated with our latest developments and achievements
          </p>
        </div>

        <Marquee
          gradient={true}
          speed={40}
          pauseOnHover={true}
          className="overflow-hidden"
        >
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 mx-4 w-[300px] h-[340px]"
            >
              <div className="p-6">
                <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-blue-50 text-blue-600">
                  {item.category}
                </div>
                <time className="text-sm text-gray-500 block mb-2">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                <Button variant="ghost" className="text-sm gap-2">
                  Read More <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
