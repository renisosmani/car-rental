import { FileText, CreditCard, Car, AlertCircle, CheckCircle, Info } from "lucide-react";

const documents = [
  {
    icon: FileText,
    title: "Valid Passport or ID",
    desc: "All renters must present a valid passport or national ID card. EU citizens can use their national ID card. Non-EU citizens must have a valid passport.",
    required: true,
  },
  {
    icon: CreditCard,
    title: "Driving Licence",
    desc: "A valid driving licence is mandatory. Licences from EU countries are accepted. Non-EU licences must be accompanied by an International Driving Permit (IDP). Minimum age is typically 21 years.",
    required: true,
  },
  {
    icon: Car,
    title: "Credit/Debit Card",
    desc: "Most suppliers require a credit card for the security deposit. Debit cards may be accepted by some suppliers. The deposit amount varies by vehicle category.",
    required: true,
  },
];

const rules = [
  "Minimum rental age is 21 years (some luxury vehicles require 25+)",
  "You must have held your driving licence for at least 1 year",
  "Third-party liability insurance is included in all rentals",
  "Additional insurance (CDW) is available and recommended",
  "Fuel policy varies by supplier — confirm before pickup",
  "Cross-border travel may require prior approval from supplier",
  "Late returns may incur additional charges",
  "Traffic fines are the responsibility of the renter",
];

export default function DocumentsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-title">Required Documents & Rental Rules</h2>
          <p className="section-subtitle">
            Everything you need to know before renting a car in Albania
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Documents */}
          <div>
            <h3 className="text-lg font-bold text-onyx mb-5 flex items-center gap-2">
              <FileText className="w-5 h-5 text-crimson" />
              Required Documents
            </h3>
            <div className="space-y-4">
              {documents.map(({ icon: Icon, title, desc, required }) => (
                <div
                  key={title}
                  className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-crimson/20 hover:bg-red-50/30 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-crimson/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-crimson" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-onyx text-sm">
                        {title}
                      </h4>
                      {required && (
                        <span className="text-xs bg-red-100 text-crimson px-2 py-0.5 rounded-full font-medium">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rules */}
          <div>
            <h3 className="text-lg font-bold text-onyx mb-5 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-crimson" />
              Rental Rules & Policies
            </h3>
            <div className="bg-gray-50 rounded-2xl p-5 space-y-3">
              {rules.map((rule, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{rule}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 p-4 bg-blue-50 rounded-xl border border-blue-100 flex gap-3">
              <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-blue-800 mb-1">
                  Important Note for Tourists
                </p>
                <p className="text-xs text-blue-700 leading-relaxed">
                  Albania has excellent road conditions on main highways, but 
                  mountain roads can be challenging. We recommend an SUV or 4x4 for 
                  rural exploration. Always confirm the vehicle&apos;s insurance coverage 
                  with the supplier before driving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
