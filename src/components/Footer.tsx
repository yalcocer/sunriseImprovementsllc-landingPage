import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  const companyEmail = "torrico@sunriseimprovementsllc.com";

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.querySelector("input") as HTMLInputElement;
    const email = input?.value || "";
    const subject = "Newsletter Subscription Request";
    const body = `Hello Sunrise Improvements Llc,\n\nPlease add me to your newsletter mailing list.\n\nMy email: ${email}\n\nThank you!`;
    window.open(
      `mailto:${companyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_blank"
    );
    input.value = "";
  };

  const navLinks = [
    { label: "About", href: "#About" },
    { label: "Projects", href: "#Gallery" },
    { label: "Services", href: "#Services" },
    { label: "Contact", href: "#Contact" },
    { label: "Gallery", href: "#GallerySection" },
  ];

  return (
    <footer className="w-full bg-[#e8edf5]" id="Footer">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Logo + tagline */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
            <img
              src={assets.logoSunrise}
              alt="Sunrise Improvements Llc"
              className="h-32 w-auto object-contain"
            />
            <p className="text-slate-600 text-sm leading-relaxed text-center">
              "Committed to your project, passionate about the results."
            </p>

            {/* Social */}
            <div className="flex justify-center gap-2 mt-1">
              <a
                href="https://www.facebook.com/profile.php?id=100083030927444"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-[#1a3a6b] hover:bg-[#f97316] transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company links */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-[#1a3a6b] text-sm font-bold tracking-wide uppercase mb-2">
                Company
              </h3>
              <div className="w-6 h-0.5 rounded-full bg-[#f97316]" />
            </div>

            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-600 text-sm hover:text-[#1a3a6b] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200 group"
                  >
                    <span className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#f97316]" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business hours */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-[#1a3a6b] text-sm font-bold tracking-wide uppercase mb-2">
                Business Hours
              </h3>
              <div className="w-6 h-0.5 rounded-full bg-[#f97316]" />
            </div>

            <ul className="flex flex-col gap-3 text-slate-600 text-sm">
              <li className="flex flex-col gap-0.5">
                <span className="text-[#1a3a6b] font-medium text-xs uppercase tracking-wide">Mon – Sat</span>
                <span>6:00 am – 10:00 pm</span>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-[#1a3a6b] font-medium text-xs uppercase tracking-wide">Sunday</span>
                <span>Closed</span>
              </li>
            </ul>

            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border border-green-300 bg-green-100">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-700 text-xs font-semibold">Open Now</span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-[#1a3a6b] text-sm font-bold tracking-wide uppercase mb-2">
                Newsletter
              </h3>
              <div className="w-6 h-0.5 rounded-full bg-[#f97316]" />
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              Latest news, projects and tips — sent to your inbox weekly.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="
                  w-full px-4 py-2.5 rounded-lg text-sm
                  bg-white border border-slate-300
                  text-slate-700 placeholder:text-slate-400
                  focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316]
                  transition-colors duration-200
                "
              />

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg text-sm font-bold text-white bg-[#f97316] hover:opacity-90 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Subscribe →
              </button>
            </form>

            <p className="text-slate-500 text-xs">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-300" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-slate-600 text-xs text-center sm:text-left">
          © 2026 Sunrise Improvements LLC. All rights reserved.
        </p>

        <div className="flex items-center gap-1.5 text-xs text-slate-600">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Virginia, USA
        </div>
      </div>
    </footer>
  );
};

export default Footer;
