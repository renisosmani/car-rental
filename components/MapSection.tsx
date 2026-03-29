import { MapPin, Phone, MessageCircle } from "lucide-react";

const hubs = [
  {
    id: "tirana",
    name: "Tirana",
    subtitle: "Capital & Main Hub",
    cars: 180,
    coords: { x: 40, y: 35 },
    color: "bg-crimson",
    featured: true,
  },
  {
    id: "tia",
    name: "TIA Airport",
    subtitle: "Tirana International",
    cars: 95,
    coords: { x: 32, y: 40 },
    color: "bg-blue-600",
    featured: true,
  },
  {
    id: "durres",
    name: "Durrës",
    subtitle: "Adriatic Coast",
    cars: 65,
    coords: { x: 25, y: 45 },
    color: "bg-teal-500",
    featured: true,
  },
  {
    id: "vlore",
    name: "Vlorë",
    subtitle: "Southern Riviera",
    cars: 48,
    coords: { x: 20, y: 68 },
    color: "bg-emerald-500",
    featured: false,
  },
  {
    id: "sarande",
    name: "Sarandë",
    subtitle: "Albanian Riviera",
    cars: 40,
    coords: { x: 22, y: 85 },
    color: "bg-cyan-500",
    featured: false,
  },
  {
    id: "shkoder",
    name: "Shkodër",
    subtitle: "Northern Albania",
    cars: 30,
    coords: { x: 30, y: 15 },
    color: "bg-purple-500",
    featured: false,
  },
];

export default function MapSection() {
  return (
    <section className="py-16 bg-onyx text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Find Cars Across Albania
          </h2>
          <p className="text-gray-400">
            Cars available at major hubs, airports, and coastal locations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Stylized Map */}
          <div className="relative bg-onyx-light rounded-3xl overflow-hidden h-96 lg:h-[480px] flex items-center justify-center border border-gray-700">
            {/* Background Map Image */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Albania_location_map.svg/600px-Albania_location_map.svg.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "grayscale(100%) invert(1)",
              }}
            />

            {/* Map overlay text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="relative w-48 h-72 opacity-30"
                style={{
                  backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Albania_location_map.svg/300px-Albania_location_map.svg.png')`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  filter: "brightness(0) invert(1)",
                }}
              />
            </div>

            {/* Location Pins */}
            {hubs.map((hub) => (
              <div
                key={hub.id}
                className="absolute group cursor-pointer"
                style={{ left: `${hub.coords.x}%`, top: `${hub.coords.y}%` }}
              >
                {/* Pulse for featured */}
                {hub.featured && (
                  <div
                    className={`absolute -inset-2 ${hub.color} rounded-full opacity-20 animate-ping`}
                  />
                )}

                {/* Pin */}
                <div
                  className={`relative w-8 h-8 ${hub.color} rounded-full flex items-center justify-center shadow-lg border-2 border-white`}
                >
                  <MapPin className="w-4 h-4 text-white" />
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white text-onyx rounded-xl shadow-xl p-3 min-w-[150px] opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-10">
                  <div className="font-bold text-sm">{hub.name}</div>
                  <div className="text-xs text-gray-500 mb-1">
                    {hub.subtitle}
                  </div>
                  <div className={`text-xs font-semibold text-white px-2 py-0.5 rounded-full ${hub.color} inline-block`}>
                    {hub.cars} cars available
                  </div>
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45" />
                </div>
              </div>
            ))}

            {/* Legend */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 justify-center">
              {hubs.map((hub) => (
                <div
                  key={hub.id}
                  className="flex items-center gap-1.5 bg-black/50 rounded-full px-3 py-1"
                >
                  <div className={`w-2.5 h-2.5 ${hub.color} rounded-full`} />
                  <span className="text-xs text-white font-medium">
                    {hub.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hub List */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-2">
              Available Pickup Locations
            </h3>
            {hubs.map((hub) => (
              <div
                key={hub.id}
                className="flex items-center justify-between p-4 bg-onyx-light rounded-xl border border-gray-700 hover:border-gray-500 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 ${hub.color} rounded-xl flex items-center justify-center`}
                  >
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{hub.name}</div>
                    <div className="text-xs text-gray-400">{hub.subtitle}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-white">
                    {hub.cars}
                  </div>
                  <div className="text-xs text-gray-400">cars</div>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="mt-6 p-4 bg-crimson/10 rounded-xl border border-crimson/30">
              <p className="text-sm text-gray-300 mb-3">
                Need help finding a car at a specific location?
              </p>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/35569000000?text=Hello, I need a car rental in Albania"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
                <a
                  href="tel:+35569000000"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
