"use client";

import { useState } from "react";
import {
  Car,
  LayoutDashboard,
  Plus,
  MessageSquare,
  BarChart3,
  Settings,
  LogOut,
  CheckCircle,
  Clock,
  TrendingUp,
  Phone,
  Mail,
  Eye,
  Star,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Active Listings", value: "12", icon: Car, change: "+2 this month", color: "bg-blue-500" },
  { label: "Total Leads", value: "847", icon: MessageSquare, change: "+34 this week", color: "bg-green-500" },
  { label: "Monthly Views", value: "3.2K", icon: Eye, change: "+18% vs last month", color: "bg-purple-500" },
  { label: "Avg. Rating", value: "4.8", icon: Star, change: "From 156 reviews", color: "bg-yellow-500" },
];

const recentLeads = [
  {
    id: 1,
    name: "Marco Rossi",
    country: "🇮🇹 Italy",
    car: "Mercedes CLS 63 AMG",
    date: "2 hours ago",
    channel: "WhatsApp",
    status: "new",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    country: "🇬🇧 UK",
    car: "BMW X5",
    date: "5 hours ago",
    channel: "Call",
    status: "contacted",
  },
  {
    id: 3,
    name: "Thomas Weber",
    country: "🇩🇪 Germany",
    car: "Range Rover Sport",
    date: "1 day ago",
    channel: "Email",
    status: "booked",
  },
  {
    id: 4,
    name: "Arben Hoxha",
    country: "🇦🇱 Albania",
    car: "Fiat Panda",
    date: "2 days ago",
    channel: "WhatsApp",
    status: "booked",
  },
];

const myListings = [
  {
    id: 1,
    name: "2013 Mercedes-Benz CLS 63 AMG",
    category: "Luxury",
    price: "€150/day",
    status: "active",
    views: 234,
    leads: 18,
    rating: 4.9,
  },
  {
    id: 2,
    name: "2022 BMW X5",
    category: "SUV",
    price: "€120/day",
    status: "active",
    views: 187,
    leads: 12,
    rating: 4.8,
  },
  {
    id: 3,
    name: "2023 Volkswagen Golf",
    category: "Economy",
    price: "€40/day",
    status: "active",
    views: 310,
    leads: 28,
    rating: 4.7,
  },
  {
    id: 4,
    name: "2020 Audi A6",
    category: "Luxury",
    price: "€90/day",
    status: "pending",
    views: 0,
    leads: 0,
    rating: 0,
  },
];

const navItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "listings", label: "My Fleet", icon: Car },
  { id: "leads", label: "Leads", icon: MessageSquare },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
];

const statusColors: Record<string, string> = {
  new: "bg-blue-100 text-blue-700",
  contacted: "bg-yellow-100 text-yellow-700",
  booked: "bg-green-100 text-green-700",
  active: "bg-green-100 text-green-700",
  pending: "bg-orange-100 text-orange-700",
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:sticky top-0 left-0 z-50 w-64 h-screen bg-onyx text-white flex flex-col transition-transform duration-200 lg:top-16 lg:h-[calc(100vh-4rem)]`}
      >
        {/* Supplier Info */}
        <div className="p-5 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-crimson rounded-xl flex items-center justify-center font-bold text-white">
              AL
            </div>
            <div>
              <div className="font-bold text-sm">AutoLux Albania</div>
              <div className="text-xs text-gray-400">Verified Supplier · Tirana</div>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1 text-xs text-green-400">
            <CheckCircle className="w-3.5 h-3.5" />
            Pro Plan · Active
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => { setActiveTab(id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                activeTab === id
                  ? "bg-crimson text-white"
                  : "text-gray-400 hover:text-white hover:bg-onyx-light"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
              {id === "leads" && (
                <span className="ml-auto bg-crimson text-white text-xs px-1.5 py-0.5 rounded-full">
                  4
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="p-4 border-t border-gray-700">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Back to Site
          </Link>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex-1 min-w-0">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center gap-4">
          <button
            className="lg:hidden text-gray-500 hover:text-onyx"
            onClick={() => setSidebarOpen(true)}
          >
            <LayoutDashboard className="w-5 h-5" />
          </button>
          <div>
            <h1 className="font-bold text-onyx text-lg capitalize">
              {activeTab === "overview"
                ? "Supplier Dashboard"
                : activeTab === "listings"
                ? "My Fleet"
                : activeTab === "leads"
                ? "Customer Leads"
                : activeTab === "analytics"
                ? "Analytics"
                : "Settings"}
            </h1>
            <p className="text-xs text-gray-500">
              Welcome back, AutoLux Albania
            </p>
          </div>
          <button className="ml-auto flex items-center gap-2 bg-crimson text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-crimson-800 transition-colors">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add New Car</span>
            <span className="sm:hidden">Add Car</span>
          </button>
        </div>

        <div className="p-4 sm:p-6 max-w-6xl">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map(({ label, value, icon: Icon, change, color }) => (
                  <div
                    key={label}
                    className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="text-2xl font-extrabold text-onyx">
                      {value}
                    </div>
                    <div className="text-sm font-medium text-gray-600 mt-0.5">
                      {label}
                    </div>
                    <div className="text-xs text-green-600 mt-1">{change}</div>
                  </div>
                ))}
              </div>

              {/* Recent Leads */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                  <h2 className="font-bold text-onyx">Recent Leads</h2>
                  <button
                    onClick={() => setActiveTab("leads")}
                    className="text-crimson text-sm font-medium flex items-center gap-1 hover:text-crimson-800 transition-colors"
                  >
                    View All
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="divide-y divide-gray-50">
                  {recentLeads.map((lead) => (
                    <div
                      key={lead.id}
                      className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-600 flex-shrink-0">
                        {lead.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-onyx text-sm truncate">
                          {lead.name}
                        </div>
                        <div className="text-xs text-gray-500 truncate">
                          {lead.country} · {lead.car}
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-2">
                        {lead.channel === "WhatsApp" && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                            WhatsApp
                          </span>
                        )}
                        {lead.channel === "Call" && (
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                            Call
                          </span>
                        )}
                        {lead.channel === "Email" && (
                          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                            Email
                          </span>
                        )}
                      </div>
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${statusColors[lead.status]}`}
                      >
                        {lead.status}
                      </span>
                      <div className="text-xs text-gray-400 flex-shrink-0 hidden md:block">
                        {lead.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* My Listings preview */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                  <h2 className="font-bold text-onyx">My Fleet</h2>
                  <button
                    onClick={() => setActiveTab("listings")}
                    className="text-crimson text-sm font-medium flex items-center gap-1 hover:text-crimson-800 transition-colors"
                  >
                    Manage Fleet
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="divide-y divide-gray-50">
                  {myListings.slice(0, 3).map((listing) => (
                    <div
                      key={listing.id}
                      className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                        <Car className="w-5 h-5 text-gray-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-onyx text-sm truncate">
                          {listing.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {listing.category} · {listing.price}
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5" />
                          {listing.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-3.5 h-3.5" />
                          {listing.leads}
                        </span>
                      </div>
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[listing.status]}`}
                      >
                        {listing.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Listings Tab */}
          {activeTab === "listings" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-500 text-sm">
                  {myListings.length} vehicles in your fleet
                </p>
                <button className="flex items-center gap-2 bg-crimson text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-crimson-800 transition-colors">
                  <Plus className="w-4 h-4" />
                  Add New Car
                </button>
              </div>
              {myListings.map((listing) => (
                <div
                  key={listing.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex items-center gap-4 hover:border-crimson/20 transition-colors"
                >
                  <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Car className="w-7 h-7 text-gray-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-onyx">{listing.name}</div>
                    <div className="text-sm text-gray-500">
                      {listing.category} · {listing.price}
                    </div>
                    {listing.rating > 0 && (
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs font-medium">{listing.rating}</span>
                      </div>
                    )}
                  </div>
                  <div className="hidden sm:flex items-center gap-6 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-onyx">{listing.views}</div>
                      <div className="text-xs text-gray-500">Views</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-onyx">{listing.leads}</div>
                      <div className="text-xs text-gray-500">Leads</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[listing.status]}`}
                    >
                      {listing.status}
                    </span>
                    <button className="text-xs text-crimson font-medium hover:text-crimson-800 transition-colors">
                      Edit
                    </button>
                  </div>
                </div>
              ))}

              {/* Add New Car Form */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-onyx mb-5 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-crimson" />
                  Add New Vehicle Listing
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Make", placeholder: "e.g., Mercedes-Benz" },
                    { label: "Model", placeholder: "e.g., C-Class" },
                    { label: "Year", placeholder: "e.g., 2022" },
                    { label: "Daily Rate (EUR)", placeholder: "e.g., 75" },
                    { label: "Weekly Rate (EUR)", placeholder: "e.g., 450" },
                    { label: "Location", placeholder: "e.g., Tirana" },
                  ].map(({ label, placeholder }) => (
                    <div key={label}>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                        {label}
                      </label>
                      <input
                        type="text"
                        placeholder={placeholder}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-crimson/30 focus:border-crimson"
                      />
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                      Description
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe the vehicle, features, included services..."
                      className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-crimson/30 focus:border-crimson resize-none"
                    />
                  </div>
                </div>
                <button className="mt-4 bg-crimson text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-crimson-800 transition-colors">
                  Submit for Review
                </button>
              </div>
            </div>
          )}

          {/* Leads Tab */}
          {activeTab === "leads" && (
            <div className="space-y-4">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                  <h2 className="font-bold text-onyx">
                    All Customer Leads
                  </h2>
                  <span className="text-xs bg-crimson text-white px-2.5 py-1 rounded-full font-medium">
                    {recentLeads.filter((l) => l.status === "new").length} New
                  </span>
                </div>
                <div className="divide-y divide-gray-50">
                  {recentLeads.map((lead) => (
                    <div
                      key={lead.id}
                      className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-600 flex-shrink-0">
                        {lead.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-onyx text-sm">
                          {lead.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {lead.country} · Interested in: {lead.car}
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5">
                          {lead.date} via {lead.channel}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href={`https://wa.me/?text=Hello ${lead.name}`}
                          className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors"
                          title="Reply on WhatsApp"
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href="mailto:"
                          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                          title="Send Email"
                        >
                          <Mail className="w-3.5 h-3.5" />
                        </a>
                        <span
                          className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[lead.status]}`}
                        >
                          {lead.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === "analytics" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "WhatsApp Leads", value: "412", pct: "49%", color: "bg-green-500" },
                  { label: "Phone Calls", value: "256", pct: "30%", color: "bg-blue-500" },
                  { label: "Email Enquiries", value: "179", pct: "21%", color: "bg-purple-500" },
                ].map(({ label, value, pct, color }) => (
                  <div
                    key={label}
                    className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                  >
                    <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center mb-3`}>
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-2xl font-extrabold text-onyx">{value}</div>
                    <div className="text-sm text-gray-500">{label}</div>
                    <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${color} rounded-full`}
                        style={{ width: pct }}
                      />
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{pct} of total</div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-onyx mb-4">
                  Monthly Performance
                </h3>
                <div className="space-y-4">
                  {[
                    { month: "January", views: 280, leads: 45 },
                    { month: "February", views: 320, leads: 52 },
                    { month: "March", views: 410, leads: 68 },
                    { month: "April", views: 380, leads: 61 },
                    { month: "May", views: 520, leads: 89 },
                    { month: "June", views: 640, leads: 112 },
                  ].map(({ month, views, leads }) => (
                    <div key={month} className="flex items-center gap-4">
                      <div className="w-20 text-sm text-gray-500">{month}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="h-2 bg-blue-400 rounded-full" style={{ width: `${(views / 640) * 100}%` }} />
                          <span className="text-xs text-gray-500">{views} views</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 bg-crimson rounded-full" style={{ width: `${(leads / 112) * 100}%` }} />
                          <span className="text-xs text-gray-500">{leads} leads</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-onyx mb-5 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-crimson" />
                  Company Profile
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Company Name", value: "AutoLux Albania" },
                    { label: "Contact Person", value: "Artan Mustafa" },
                    { label: "Phone Number", value: "+355 69 123 4567" },
                    { label: "WhatsApp Number", value: "+355 69 123 4567" },
                    { label: "Email Address", value: "info@autolux.al" },
                    { label: "Location", value: "Tirana, Albania" },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                        {label}
                      </label>
                      <input
                        type="text"
                        defaultValue={value}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-crimson/30 focus:border-crimson"
                      />
                    </div>
                  ))}
                </div>
                <button className="mt-5 bg-crimson text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-crimson-800 transition-colors">
                  Save Changes
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-onyx mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-crimson" />
                  Availability & Pricing
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "Daily Rate Increase (Peak Season %)", value: "30" },
                    { label: "Weekly Discount (%)", value: "10" },
                    { label: "Monthly Discount (%)", value: "20" },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                        {label}
                      </label>
                      <input
                        type="number"
                        defaultValue={value}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-crimson/30 focus:border-crimson"
                      />
                    </div>
                  ))}
                </div>
                <button className="mt-4 bg-crimson text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-crimson-800 transition-colors">
                  Update Pricing
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
