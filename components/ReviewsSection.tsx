import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Arben Hoxha",
    location: "Tirana",
    rating: 5,
    date: "March 2024",
    text: "Excellent service from AutoLux. The Mercedes was immaculate and the pickup at TIA was smooth. No hidden fees, exactly as advertised. Will definitely use AutoShqip again!",
    avatar: "AH",
    car: "Mercedes-Benz CLS 63 AMG",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    location: "London, UK",
    rating: 5,
    date: "August 2024",
    text: "Perfect for our Albanian Riviera road trip! We rented a VW Golf from RivieraRent in Sarandë. WhatsApp contact was super easy, the supplier was so helpful. Highly recommend!",
    avatar: "SM",
    car: "Volkswagen Golf",
  },
  {
    id: 3,
    name: "Marco Rossi",
    location: "Milan, Italy",
    rating: 4,
    date: "July 2024",
    text: "Great platform! Found a budget Dacia Sandero for our family trip. The supplier in Durrës was very professional. The car was clean and reliable. Good value for money.",
    avatar: "MR",
    car: "Dacia Sandero",
  },
  {
    id: 4,
    name: "Blerina Koci",
    location: "Shkodër",
    rating: 5,
    date: "June 2024",
    text: "Booked through AutoShqip for a week in Vlorë. The Range Rover Sport was amazing for exploring the mountains. Supplier communication was excellent via WhatsApp. 100% recommend!",
    avatar: "BK",
    car: "Range Rover Sport",
  },
  {
    id: 5,
    name: "Thomas Weber",
    location: "Berlin, Germany",
    rating: 5,
    date: "May 2024",
    text: "Zero commission is exactly what makes this platform special. Paid directly to the supplier at a fair rate. No surprise charges. The BMW X5 from TIA was spotless.",
    avatar: "TW",
    car: "BMW X5",
  },
  {
    id: 6,
    name: "Anxhela Marku",
    location: "Durrës",
    rating: 4,
    date: "April 2024",
    text: "Very convenient to compare cars from local Albanian agencies. I found the best deal within minutes. The platform is easy to use on mobile too.",
    avatar: "AM",
    car: "Fiat Panda",
  },
];

export default function ReviewsSection() {
  const avgRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Real reviews from real travellers across Albania
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-onyx">{avgRating}</span>
            <span className="text-gray-500">
              from {reviews.length * 47}+ verified reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="card p-5 hover:border-crimson/20">
              <div className="flex items-start gap-3 mb-3">
                {/* Avatar */}
                <div className="w-10 h-10 bg-crimson rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {review.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-onyx text-sm">
                      {review.name}
                    </span>
                    <span className="text-xs text-gray-400 flex-shrink-0">
                      {review.date}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">{review.location}</div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i <= review.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-200"
                    }`}
                  />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-1 -left-1 w-5 h-5 text-crimson/20" />
                <p className="text-gray-600 text-sm leading-relaxed pl-4">
                  {review.text}
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-400">
                Rented: <span className="font-medium text-gray-600">{review.car}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
