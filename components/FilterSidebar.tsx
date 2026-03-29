"use client";

import { useState } from "react";
import { SlidersHorizontal, X, ChevronDown, ChevronUp } from "lucide-react";

interface FilterState {
  brands: string[];
  categories: string[];
  priceMin: number;
  priceMax: number;
  transmission: string[];
  fuelTypes: string[];
  locations: string[];
}

interface FilterSidebarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onReset: () => void;
}

const brands = [
  "Mercedes-Benz",
  "BMW",
  "Audi",
  "Volkswagen",
  "Toyota",
  "Fiat",
  "Dacia",
  "Porsche",
  "Range Rover",
  "Renault",
  "Hyundai",
  "Kia",
];

const carCategories = [
  "Economy",
  "SUV",
  "Luxury",
  "Convertible",
  "Minivan",
];

const transmissions = ["Automatic", "Manual"];
const fuelTypes = ["Petrol", "Diesel", "Hybrid", "Electric"];
const locations = [
  "Tirana",
  "Tirana International Airport (TIA)",
  "Durrës",
  "Vlorë",
  "Sarandë",
  "Shkodër",
];

function FilterSection({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-100 pb-4 mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-sm font-bold text-onyx mb-3 hover:text-crimson transition-colors"
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {open && children}
    </div>
  );
}

function CheckboxGroup({
  items,
  selected,
  onChange,
}: {
  items: string[];
  selected: string[];
  onChange: (val: string[]) => void;
}) {
  const toggle = (item: string) => {
    onChange(
      selected.includes(item)
        ? selected.filter((s) => s !== item)
        : [...selected, item]
    );
  };
  return (
    <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
      {items.map((item) => (
        <label key={item} className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            className="sr-only"
            checked={selected.includes(item)}
            onChange={() => toggle(item)}
          />
          <div
            className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors flex-shrink-0 ${
              selected.includes(item)
                ? "bg-crimson border-crimson"
                : "border-gray-300 group-hover:border-crimson"
            }`}
          >
            {selected.includes(item) && (
              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <span className="text-sm text-gray-600 group-hover:text-onyx transition-colors">
            {item}
          </span>
        </label>
      ))}
    </div>
  );
}

export const defaultFilters: FilterState = {
  brands: [],
  categories: [],
  priceMin: 0,
  priceMax: 500,
  transmission: [],
  fuelTypes: [],
  locations: [],
};

export default function FilterSidebar({
  filters,
  onChange,
  onReset,
}: FilterSidebarProps) {
  const hasFilters =
    filters.brands.length > 0 ||
    filters.categories.length > 0 ||
    filters.transmission.length > 0 ||
    filters.fuelTypes.length > 0 ||
    filters.locations.length > 0 ||
    filters.priceMin > 0 ||
    filters.priceMax < 500;

  return (
    <aside className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-crimson" />
          <h3 className="font-bold text-onyx">Filters</h3>
          {hasFilters && (
            <span className="w-5 h-5 bg-crimson text-white text-xs rounded-full flex items-center justify-center font-bold">
              {filters.brands.length +
                filters.categories.length +
                filters.transmission.length +
                filters.fuelTypes.length +
                filters.locations.length}
            </span>
          )}
        </div>
        {hasFilters && (
          <button
            onClick={onReset}
            className="flex items-center gap-1 text-xs text-crimson hover:text-crimson-800 font-medium"
          >
            <X className="w-3.5 h-3.5" />
            Reset
          </button>
        )}
      </div>

      {/* Price Range */}
      <FilterSection title="Daily Price (EUR)">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm font-medium text-onyx">
            <span>€{filters.priceMin}</span>
            <span>€{filters.priceMax}</span>
          </div>
          <input
            type="range"
            min={0}
            max={500}
            value={filters.priceMax}
            onChange={(e) =>
              onChange({ ...filters, priceMax: Number(e.target.value) })
            }
            className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-crimson"
          />
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Min (€)</label>
              <input
                type="number"
                min={0}
                max={filters.priceMax}
                value={filters.priceMin}
                onChange={(e) =>
                  onChange({ ...filters, priceMin: Number(e.target.value) })
                }
                className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-crimson/30"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Max (€)</label>
              <input
                type="number"
                min={filters.priceMin}
                max={500}
                value={filters.priceMax}
                onChange={(e) =>
                  onChange({ ...filters, priceMax: Number(e.target.value) })
                }
                className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-crimson/30"
              />
            </div>
          </div>
        </div>
      </FilterSection>

      {/* Category */}
      <FilterSection title="Category">
        <CheckboxGroup
          items={carCategories}
          selected={filters.categories}
          onChange={(val) => onChange({ ...filters, categories: val })}
        />
      </FilterSection>

      {/* Location */}
      <FilterSection title="Pickup Location">
        <CheckboxGroup
          items={locations}
          selected={filters.locations}
          onChange={(val) => onChange({ ...filters, locations: val })}
        />
      </FilterSection>

      {/* Brand */}
      <FilterSection title="Car Brand" defaultOpen={false}>
        <CheckboxGroup
          items={brands}
          selected={filters.brands}
          onChange={(val) => onChange({ ...filters, brands: val })}
        />
      </FilterSection>

      {/* Transmission */}
      <FilterSection title="Transmission" defaultOpen={false}>
        <CheckboxGroup
          items={transmissions}
          selected={filters.transmission}
          onChange={(val) => onChange({ ...filters, transmission: val })}
        />
      </FilterSection>

      {/* Fuel Type */}
      <FilterSection title="Fuel Type" defaultOpen={false}>
        <CheckboxGroup
          items={fuelTypes}
          selected={filters.fuelTypes}
          onChange={(val) => onChange({ ...filters, fuelTypes: val })}
        />
      </FilterSection>
    </aside>
  );
}
