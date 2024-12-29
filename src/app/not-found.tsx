import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, BatteryCharging } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-6">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <BatteryCharging className="h-24 w-24 text-blue-600 animate-pulse" />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-blue-600 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Power Outage!
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Looks like we&apos;re experiencing some technical difficulties. The
          energy source you&apos;re looking for seems to be disconnected.
        </p>

        <Link href="/">
          <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
            <Home className="h-4 w-4" />
            Back to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
