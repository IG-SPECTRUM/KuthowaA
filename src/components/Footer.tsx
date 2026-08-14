export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: "Our Story", href: "#about" },
    { label: "Our Process", href: "#how-it-works" },
    { label: "Why Choose Silk", href: "#benefits" },
    { label: "Who We Serve", href: "#who-we-serve" },
    { label: "Inspiration Gallery", href: "#gallery" },
  ];

  const productCategories = [
    { label: "Premium Silk Pillowcases", href: "#products" },
    { label: "Silk Hair Bonnets & Scarfs", href: "#products" },
    { label: "Silk Bed Sheet Sets", href: "#products" },
    { label: "Bespoke Duvet Covers", href: "#products" },
    { label: "Luxury Bed Runners", href: "#products" },
  ];

  const customerCare = [
    { label: "Frequently Asked Questions", href: "#faq" },
    { label: "Silk Care Guide", href: "#care-guide" },
    { label: "Contact Us", href: "#contact" },
  ];

  const paymentMethods = ["Airtel Money", "MTN MoMo", "FNB eWallet", "Bank Transfer"];

  return (
    <footer className="bg-charcoal text-cream-deep">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand Column */}
        <div className="space-y-6 lg:pr-8">
          <a href="#" className="font-heading text-2xl font-semibold tracking-wide inline-block">
            <span className="text-gold italic font-normal lowercase first-letter:uppercase">Kuthowa</span> Creatives
          </a>

          <p className="text-sm font-light text-cream-deep/80 leading-relaxed">
            Zambian premium home and lifestyle brand specializing in luxury, handcrafted Silk Pillowcases, bed runners, bonnets, and bespoke bedding sets.
          </p>

          {/* Social Links */}
          <div className="pt-2">
            <h4 className="text-[10px] uppercase tracking-widest font-semibold text-gold mb-3">
              Social Media
            </h4>
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/share/18xLF51jGT/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-widest text-cream-deep/80 hover:text-gold transition-colors duration-200"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/kuthowa_creatives/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-widest text-cream-deep/80 hover:text-gold transition-colors duration-200"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="space-y-8">
          <nav aria-label="Quick Links">
            <h4 className="text-[10px] uppercase tracking-widest font-semibold text-gold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-cream-deep/80 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <nav aria-label="Customer Care">
            <h4 className="text-[10px] uppercase tracking-widest font-semibold text-gold mb-5">
              Customer Care
            </h4>
            <ul className="space-y-3">
              {customerCare.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-cream-deep/80 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Links Column 2 */}
        <div className="space-y-8">
          <nav aria-label="Product Categories">
            <h4 className="text-[10px] uppercase tracking-widest font-semibold text-gold mb-5">
              Product Categories
            </h4>
            <ul className="space-y-3">
              {productCategories.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-cream-deep/80 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-semibold text-gold mb-5">
              Delivery Information
            </h4>
            <p className="text-sm font-light text-cream-deep/80 leading-relaxed">
              Nationwide delivery available across Zambia. Standard delivery time is 3 days.
            </p>
          </div>
        </div>

        {/* Contact Column */}
        <div className="space-y-6">
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-semibold text-gold mb-5">
              Connect With Us
            </h4>
            <ul className="space-y-4">
              <li>
                <p className="text-[10px] uppercase tracking-wider text-cream-deep/50 mb-1">WhatsApp / Mobile</p>
                <a
                  href="tel:+260967046463"
                  className="text-sm font-light text-cream-deep/80 hover:text-gold transition-colors duration-200"
                >
                  +260 96 704 6463
                </a>
              </li>
              <li>
                <p className="text-[10px] uppercase tracking-wider text-cream-deep/50 mb-1">Email</p>
                <a
                  href="mailto:hello@kuthowacreatives.com"
                  className="text-sm font-light text-cream-deep/80 hover:text-gold transition-colors duration-200"
                >
                  hello@kuthowacreatives.com
                </a>
              </li>
              <li>
                <p className="text-[10px] uppercase tracking-wider text-cream-deep/50 mb-1">Business Hours</p>
                <span className="text-sm font-light text-cream-deep/80">Mon – Sat: 08:00 – 17:00</span>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div className="pt-2">
            <p className="text-[10px] uppercase tracking-widest text-cream-deep/50 mb-3">
              Payment Methods
            </p>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="text-[10px] uppercase tracking-wide px-2.5 py-1.5 border border-cream-deep/20 text-cream-deep/80 font-medium bg-white/5"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-cream-deep/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-cream-deep/60">
            &copy; {currentYear} Kuthowa Creatives. Handcrafted in Zambia. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[10px] uppercase tracking-widest text-cream-deep/60 hover:text-gold transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-cream-deep/60 hover:text-gold transition-colors duration-200">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
