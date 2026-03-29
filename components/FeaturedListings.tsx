import Link from "next/link";
import CarCard from "./CarCard";
import { carsData, categories } from "./carsData";
import { ChevronRight } from "lucide-react";

export default function FeaturedListings() {
  const featuredCars = carsData.filter((c) => c.featured || c.premium);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="section-title">Browse by Category</h2>
              <p className="section-subtitle">
                Find the perfect car for every journey across Albania
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/search?category=${cat.id}`}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${cat.bgColor} p-4 text-white hover:scale-105 transition-transform duration-200 cursor-pointer group`}
              >
                <div className="text-3xl mb-2">{cat.icon}</div>
                <div className="text-sm font-bold leading-tight">
                  {cat.title}
                </div>
                <div className="text-xs text-white/70 mt-0.5 hidden sm:block">
                  {cat.count} cars
                </div>
                <ChevronRight className="absolute bottom-3 right-3 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Listings */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="section-title">Featured Vehicles</h2>
              <p className="section-subtitle">
                Top-rated cars from trusted Albanian suppliers
              </p>
            </div>
            <Link
              href="/search"
              className="hidden sm:flex items-center gap-1 text-crimson hover:text-crimson-800 font-semibold text-sm transition-colors"
            >
              View All Cars
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/search"
              className="inline-flex items-center gap-2 bg-crimson text-white font-semibold px-6 py-3 rounded-xl hover:bg-crimson-800 transition-colors"
            >
              View All Cars
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
