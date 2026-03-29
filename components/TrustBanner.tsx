import { CheckCircle, ZapOff, Users, Award } from "lucide-react";

export default function TrustBanner() {
  return (
    <>
      {/* Main Trust Banner */}
      <section className="bg-onyx text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="font-semibold">No Booking Fees</span>
            </div>
            <div className="w-px h-4 bg-gray-600 hidden sm:block" />
            <div className="flex items-center gap-2">
              <ZapOff className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              <span className="font-semibold">Zero Commission</span>
            </div>
            <div className="w-px h-4 bg-gray-600 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span className="font-semibold">Deal Direct with Albanian Suppliers</span>
            </div>
            <div className="w-px h-4 bg-gray-600 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-crimson flex-shrink-0" />
              <span className="font-semibold">Verified Rental Companies</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">How AutoShqip Works</h2>
            <p className="section-subtitle">
              The simplest way to rent a car in Albania — connect directly with suppliers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Search",
                desc: "Enter your location, dates, and preferred car type",
                icon: "🔍",
              },
              {
                step: "2",
                title: "Compare",
                desc: "Browse listings with transparent pricing and reviews",
                icon: "⚖️",
              },
              {
                step: "3",
                title: "Contact",
                desc: "Reach the supplier directly via WhatsApp, call, or email",
                icon: "📱",
              },
              {
                step: "4",
                title: "Drive!",
                desc: "Pick up your car and enjoy Albania — no hidden fees",
                icon: "🚗",
              },
            ].map(({ step, title, desc, icon }) => (
              <div key={step} className="text-center group">
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-md mb-4 text-3xl group-hover:scale-110 transition-transform">
                  {icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-crimson text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {step}
                  </div>
                </div>
                <h3 className="font-bold text-onyx text-lg mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
