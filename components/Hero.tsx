"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Calendar,
  Car,
  Search,
  ShoppingBag,
  UserCheck,
} from "lucide-react";

const tabs = [
  { id: "rent", label: "Rent a Car", icon: Car },
  { id: "buy", label: "Buy a Car", icon: ShoppingBag },
  { id: "chauffeur", label: "Chauffeur", icon: UserCheck },
];

const locations = [
  "Tirana",
  "Tirana International Airport (TIA)",
  "Durrës",
  "Vlorë",
  "Sarandë",
  "Shkodër",
  "Berat",
  "Gjirokastër",
  "Korçë",
];

const carTypes = [
  "All Types",
  "Economy",
  "SUV",
  "Luxury",
  "Convertible",
  "Minivan",
  "Pickup",
];

export default function Hero() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("rent");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [carType, setCarType] = useState("All Types");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      type: activeTab,
      pickup,
      dropoff,
      pickupDate,
      dropoffDate,
      carType,
    });
    router.push(`/search?${params.toString()}`);
  };

  return (
    <section
      className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(26,26,26,0.9) 0%, rgba(196,18,48,0.75) 100%), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80') center/cover no-repeat",
      }}
    >
      {/* Overlay pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-crimson/20 border border-crimson/40 text-crimson-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 bg-crimson rounded-full animate-pulse" />
          Albania&apos;s #1 Car Marketplace — Zero Commission
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Find Your Perfect Car
          <br />
          <span className="text-crimson">Anywhere in Albania</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Connect directly with local Albanian suppliers. No booking fees, no middlemen. 
          From Tirana to the Albanian Riviera.
        </p>

        {/* Search Widget */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex border-b border-gray-100">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-colors ${
                  activeTab === id
                    ? "text-crimson border-b-2 border-crimson bg-red-50"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSearch} className="p-4 md:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {/* Pickup */}
              <div className="relative lg:col-span-1">
                <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                  Pick-up Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-crimson" />
                  <select
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full pl-9 pr-3 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-crimson/30 focus:border-crimson appearance-none bg-white"
                  >
                    <option value="">Select location</option>
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Drop-off */}
              <div className="relative lg:col-span-1">
                <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                  Drop-off Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <select
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    className="w-full pl-9 pr-3 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-crimson/30 focus:border-crimson appearance-none bg-white"
                  >
                    <option value="">Same as pick-up</option>
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Pickup Date */}
              <div className="relative lg:col-span-1">
                <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                  Pick-up Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-crimson/30 focus:border-crimson"
                  />
                </div>
              </div>

              {/* Dropoff Date */}
              <div className="relative lg:col-span-1">
                <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                  Drop-off Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="date"
                    value={dropoffDate}
                    onChange={(e) => setDropoffDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-crimson/30 focus:border-crimson"
                  />
                </div>
              </div>

              {/* Car Type */}
              <div className="relative lg:col-span-1">
                <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                  Car Type
                </label>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <select
                    value={carType}
                    onChange={(e) => setCarType(e.target.value)}
                    className="w-full pl-9 pr-3 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-crimson/30 focus:border-crimson appearance-none bg-white"
                  >
                    {carTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-crimson text-white font-bold py-4 rounded-xl hover:bg-crimson-800 transition-all duration-200 flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl"
            >
              <Search className="w-5 h-5" />
              Search Available Cars
            </button>
          </form>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {[
            { label: "Active Listings", value: "500+" },
            { label: "Albanian Suppliers", value: "80+" },
            { label: "Cities Covered", value: "12" },
            { label: "Happy Customers", value: "10K+" },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-extrabold text-white">{value}</div>
              <div className="text-gray-400 text-sm mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
