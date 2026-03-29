"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { SlidersHorizontal, LayoutGrid, List, Search, X } from "lucide-react";
import CarCard from "@/components/CarCard";
import FilterSidebar, { defaultFilters } from "@/components/FilterSidebar";
import { carsData } from "@/components/carsData";
import type { Car } from "@/components/CarCard";

const sortOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

export default function SearchPageClient() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState(defaultFilters);
  const [sortBy, setSortBy] = useState("recommended");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const type = searchParams.get("type") || "rent";
  const pickup = searchParams.get("pickup") || "";
  const pickupDate = searchParams.get("pickupDate") || "";
  const dropoffDate = searchParams.get("dropoffDate") || "";
  const carType = searchParams.get("carType") || "";

  // Init filters from URL
  useEffect(() => {
    if (carType && carType !== "All Types") {
      setFilters((f) => ({ ...f, categories: [carType] }));
    }
    if (pickup) {
      setFilters((f) => ({ ...f, locations: [pickup] }));
    }
  }, [carType, pickup]);

  const filteredCars = useCallback((): Car[] => {
    let cars = [...carsData];

    // Category filter
    if (filters.categories.length > 0) {
      cars = cars.filter((c) => filters.categories.includes(c.category));
    }

    // Brand filter
    if (filters.brands.length > 0) {
      cars = cars.filter((c) => filters.brands.includes(c.make));
    }

    // Location filter
    if (filters.locations.length > 0) {
      cars = cars.filter((c) => filters.locations.includes(c.location));
    }

    // Transmission filter
    if (filters.transmission.length > 0) {
      cars = cars.filter((c) => filters.transmission.includes(c.transmission));
    }

    // Fuel type filter
    if (filters.fuelTypes.length > 0) {
      cars = cars.filter((c) => filters.fuelTypes.includes(c.fuelType));
    }

    // Price filter
    cars = cars.filter((c) => {
      const priceEur =
        c.currency === "ALL" ? Math.round(c.dailyRate / 110) : c.dailyRate;
      return priceEur >= filters.priceMin && priceEur <= filters.priceMax;
    });

    // Sort
    if (sortBy === "price_asc") {
      cars.sort((a, b) => {
        const aP = a.currency === "ALL" ? a.dailyRate / 110 : a.dailyRate;
        const bP = b.currency === "ALL" ? b.dailyRate / 110 : b.dailyRate;
        return aP - bP;
      });
    } else if (sortBy === "price_desc") {
      cars.sort((a, b) => {
        const aP = a.currency === "ALL" ? a.dailyRate / 110 : a.dailyRate;
        const bP = b.currency === "ALL" ? b.dailyRate / 110 : b.dailyRate;
        return bP - aP;
      });
    } else if (sortBy === "rating") {
      cars.sort((a, b) => b.rating - a.rating);
    }

    return cars;
  }, [filters, sortBy]);

  const results = filteredCars();

  const tabLabels: Record<string, string> = {
    rent: "Cars for Rent",
    buy: "Cars for Sale",
    chauffeur: "Cars with Driver",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Bar */}
      <div className="bg-onyx shadow-md sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex gap-1">
              {["rent", "buy", "chauffeur"].map((t) => (
                <a
                  key={t}
                  href={`/search?type=${t}`}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    type === t
                      ? "bg-crimson text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tabLabels[t]}
                </a>
              ))}
            </div>
            {pickup && (
              <div className="flex items-center gap-1.5 bg-white/10 text-white text-xs px-3 py-1.5 rounded-full">
                <Search className="w-3.5 h-3.5" />
                {pickup}
                {pickupDate && ` · ${pickupDate}`}
                {dropoffDate && ` → ${dropoffDate}`}
              </div>
            )}
            <Link
              href="/"
              className="flex items-center gap-1 text-gray-400 hover:text-white text-xs ml-auto transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              Modify Search
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-72 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              onReset={() => setFilters(defaultFilters)}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-5 gap-3 flex-wrap">
              <div>
                <h1 className="text-lg font-bold text-onyx">
                  {results.length} {tabLabels[type]} Available
                </h1>
                {pickup && (
                  <p className="text-sm text-gray-500 mt-0.5">
                    in {pickup}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-3">
                {/* Mobile Filter Toggle */}
                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="lg:hidden flex items-center gap-2 bg-white border border-gray-200 text-sm font-medium px-3 py-2 rounded-lg shadow-sm hover:border-crimson transition-colors"
                >
                  <SlidersHorizontal className="w-4 h-4 text-crimson" />
                  Filters
                </button>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-gray-200 text-sm font-medium px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-crimson/30"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>

                {/* View Toggle */}
                <div className="hidden sm:flex border border-gray-200 bg-white rounded-lg overflow-hidden shadow-sm">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${viewMode === "grid" ? "bg-crimson text-white" : "text-gray-500 hover:bg-gray-50"}`}
                    aria-label="Grid view"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${viewMode === "list" ? "bg-crimson text-white" : "text-gray-500 hover:bg-gray-50"}`}
                    aria-label="List view"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Filter Panel */}
            {showMobileFilters && (
              <div className="lg:hidden mb-5">
                <FilterSidebar
                  filters={filters}
                  onChange={setFilters}
                  onReset={() => setFilters(defaultFilters)}
                />
              </div>
            )}

            {/* Results Grid / List */}
            {results.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
                <div className="text-5xl mb-4">🚗</div>
                <h3 className="text-lg font-bold text-onyx mb-2">
                  No cars found
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Try adjusting your filters or broadening your search.
                </p>
                <button
                  onClick={() => setFilters(defaultFilters)}
                  className="bg-crimson text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-crimson-800 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
                    : "grid grid-cols-1 gap-4"
                }
              >
                {results.map((car) => (
                  <CarCard key={car.id} car={car} compact={viewMode === "list"} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
