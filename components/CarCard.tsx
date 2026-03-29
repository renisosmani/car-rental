import {
  MessageCircle,
  Phone,
  Mail,
  Star,
  MapPin,
  Fuel,
  Settings,
  Users,
  Shield,
  Award,
  Zap,
} from "lucide-react";

export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  category: "Economy" | "SUV" | "Luxury" | "Convertible" | "Minivan";
  location: string;
  dailyRate: number;
  weeklyRate?: number;
  currency: "EUR" | "ALL";
  transmission: "Automatic" | "Manual";
  fuelType: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  seats: number;
  engine?: string;
  horsepower?: number;
  licensePlate?: string;
  imageUrl: string;
  supplier: string;
  phone: string;
  whatsapp: string;
  email: string;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  premium?: boolean;
  tags?: string[];
}

interface CarCardProps {
  car: Car;
  compact?: boolean;
}

const categoryColors: Record<string, string> = {
  Economy: "bg-green-100 text-green-700",
  SUV: "bg-blue-100 text-blue-700",
  Luxury: "bg-purple-100 text-purple-700",
  Convertible: "bg-orange-100 text-orange-700",
  Minivan: "bg-yellow-100 text-yellow-700",
};

export default function CarCard({ car, compact = false }: CarCardProps) {
  const dailyEur =
    car.currency === "ALL" ? Math.round(car.dailyRate / 110) : car.dailyRate;

  return (
    <div
      className={`card group relative flex flex-col ${
        car.premium ? "ring-2 ring-crimson" : ""
      }`}
    >
      {/* Premium Badge */}
      {car.premium && (
        <div className="absolute top-3 left-3 z-10 bg-crimson text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
          <Award className="w-3 h-3" />
          Premium
        </div>
      )}

      {/* Featured Badge */}
      {car.featured && !car.premium && (
        <div className="absolute top-3 left-3 z-10 bg-onyx text-white text-xs font-bold px-2.5 py-1 rounded-full">
          Featured
        </div>
      )}

      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={car.imageUrl}
          alt={`${car.year} ${car.make} ${car.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Category badge */}
        <span
          className={`absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-md ${
            categoryColors[car.category]
          }`}
        >
          {car.category}
        </span>
        {/* License plate if available */}
        {car.licensePlate && (
          <div className="absolute bottom-3 right-3 bg-white/90 text-onyx text-xs font-mono font-bold px-2 py-0.5 rounded border border-gray-300">
            {car.licensePlate}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        {/* Title + Rating */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-bold text-onyx text-base leading-tight">
              {car.year} {car.make} {car.model}
            </h3>
            <div className="flex items-center gap-1 mt-1">
              <MapPin className="w-3.5 h-3.5 text-crimson flex-shrink-0" />
              <span className="text-xs text-gray-500">{car.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 flex-shrink-0">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold text-onyx">
              {car.rating}
            </span>
            <span className="text-xs text-gray-400">({car.reviewCount})</span>
          </div>
        </div>

        {/* Specs */}
        {!compact && (
          <>
            {car.engine && (
              <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                <Zap className="w-3.5 h-3.5 text-crimson" />
                <span>
                  {car.engine}
                  {car.horsepower ? ` · ${car.horsepower} hp` : ""}
                </span>
              </div>
            )}
            <div className="grid grid-cols-3 gap-2 my-3 py-3 border-t border-b border-gray-100">
              <div className="flex flex-col items-center gap-1">
                <Settings className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500">{car.transmission}</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Fuel className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500">{car.fuelType}</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Users className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500">{car.seats} Seats</span>
              </div>
            </div>
          </>
        )}

        {/* Tags */}
        {car.tags && car.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {car.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="mt-auto">
          <div className="flex items-end gap-1 mb-3">
            <span className="text-2xl font-extrabold text-crimson">
              €{dailyEur}
            </span>
            <span className="text-gray-500 text-sm mb-0.5">/day</span>
            {car.weeklyRate && (
              <span className="ml-auto text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                €{car.currency === "ALL" ? Math.round(car.weeklyRate / 110) : car.weeklyRate}/week
              </span>
            )}
          </div>

          {/* Supplier */}
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-4 h-4 text-green-500" />
            <span className="text-xs text-gray-500">
              Supplied by{" "}
              <span className="font-semibold text-onyx">{car.supplier}</span>
            </span>
          </div>

          {/* Contact Buttons */}
          <div className="grid grid-cols-3 gap-2">
            <a
              href={`https://wa.me/${car.whatsapp.replace(/\D/g, "")}?text=Hello, I'm interested in the ${car.year} ${car.make} ${car.model}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold py-2 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${car.phone}`}
              className="flex flex-col items-center gap-1 bg-onyx hover:bg-onyx-light text-white text-xs font-semibold py-2 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call</span>
            </a>
            <a
              href={`mailto:${car.email}?subject=Inquiry: ${car.year} ${car.make} ${car.model}`}
              className="flex flex-col items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold py-2 rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
