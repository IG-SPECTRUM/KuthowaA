import { Check } from "lucide-react";

export default function TrustBanner() {
  const trustItems = [
    "Proudly Made in Zambia",
    "Custom Colors & Sizes",
    "Nationwide Delivery",
    "Trusted by Homes & Airbnbs",
  ];

  const stats = [
    { value: "500+", label: "Happy Customers" },
    { value: "50+", label: "5-Star Reviews" },
    { value: "100%", label: "Premium Silk" },
    { value: "24h", label: "Customer Support" },
  ];

  return (
    <>
      <div className="bg-charcoal text-cream-deep border-y border-gold/15">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2.5 text-[11px] md:text-xs font-semibold uppercase tracking-widest"
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full border border-gold/40 flex items-center justify-center text-gold">
                <Check size={11} strokeWidth={3} />
              </div>
              <span className="text-cream-deep/90">{item}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Statistics Section */}
      <div className="bg-cream-deep py-12 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-charcoal-light/60">
              The Kuthowa Standard
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gold/20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-4">
                <div className="font-heading text-4xl md:text-5xl font-light text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-widest font-semibold text-charcoal">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
