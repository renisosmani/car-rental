import { Suspense } from "react";
import SearchPageClient from "./SearchPageClient";

export const metadata = {
  title: "Search Cars — AutoShqip",
  description: "Search available cars for rent or sale across Albania.",
};

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-crimson border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-500">Loading available cars...</p>
          </div>
        </div>
      }
    >
      <SearchPageClient />
    </Suspense>
  );
}
