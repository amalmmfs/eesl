import { Skeleton } from "@/components/ui/skeleton";

export default function ResearchLoading() {
  return (
    <div className="w-full bg-white border-b">
      <div className="container px-4 py-16 md:py-24 mx-auto max-w-6xl">
        <div className="space-y-16">
          <div className="space-y-4 text-center mb-8 sm:mb-12 md:mb-16">
            <Skeleton className="h-10 w-[200px] mx-auto" />
            <Skeleton className="h-6 w-[600px] mx-auto" />
          </div>

          <div className="space-y-12">
            {/* Tab List Skeleton */}
            <div className="flex gap-2 overflow-x-auto">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <Skeleton
                  key={i}
                  className="h-10 w-[150px] rounded-lg flex-shrink-0"
                />
              ))}
            </div>

            {/* Content Skeleton */}
            <div className="mt-16">
              <div className="rounded-lg border shadow-lg">
                <div className="p-6 bg-gray-100">
                  <Skeleton className="h-8 w-[300px] mb-4" />
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-[95%]" />
                      <Skeleton className="h-4 w-[90%]" />
                      <Skeleton className="h-4 w-[85%]" />
                    </div>
                    <Skeleton className="h-[400px] rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
