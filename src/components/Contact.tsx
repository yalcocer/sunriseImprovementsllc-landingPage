import React from "react";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const PhoneIcon = () => (
  // <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
  //   <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 0110 2.18 2 2 0 0112 4v3a2 2 0 01-1.44 1.94 16 16 0 006.5 6.5A2 2 0 0122 16.92z" />
  // </svg>
  <FaPhone />
);

const MailIcon = () => (
  // <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
  //   <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
  //   <polyline points="22,6 12,13 2,6" />
  // </svg>
  <MdEmail />
);

const FacebookIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  </svg>
);

const SendIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "0de583c0-86c1-4e29-8571-89c7e8097dc1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent! We'll get back to you soon.");
      (event.target as HTMLFormElement).reset();
    } else {
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <section
      id="Contact"
      className="w-full py-16 md:py-24 px-4 sm:px-8 md:px-14 lg:px-24"
    >
      {/* ── Section heading ─────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto mb-10 md:mb-14">
        <p
          className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
          style={{ color: "#f97316" }}
        >
          Get In Touch
        </p>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
          style={{ color: "#1a3a6b" }}
        >
          Let's Build Something
          <br className="hidden sm:block" />
          <span style={{ color: "#f97316" }}>Together</span>
        </h2>
      </div>

      {/* ── Split card ──────────────────────────────────────────────── */}
      <div
        className="max-w-6xl mx-auto rounded-3xl overflow-hidden flex flex-col lg:flex-row"
        style={{ boxShadow: "0 20px 60px rgba(26,58,107,0.15)" }}
      >
        {/* ── LEFT: Navy info panel ──────────────────────────────────── */}
        <div
          className="
            flex flex-col justify-between
            w-full lg:w-[38%]
            px-8 py-10 md:px-10 md:py-12
          "
          style={{ backgroundColor: "#1a3a6b" }}
        >
          {/* Top text */}
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-bold leading-snug mb-3">
              Contact Information
            </h3>
            <p className="text-sm leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.55)" }}>
              Reach out directly or fill the form — we'll get back to you within 2 hours.
            </p>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-7">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: "#f97316" }}
              >
                <span className="text-white"><PhoneIcon /></span>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Call Us
                </p>
                <a
                  href="tel:2407565841"
                  className="block text-white font-semibold text-sm hover:text-orange-300 transition-colors"
                >
                  (240) 756-5841 <span className="text-orange-500"> Celso Torrico</span>
                </a>
                <a
                  href="tel:7037051661"
                  className="block text-white font-semibold text-sm hover:text-orange-300 transition-colors"
                >
                  (703) 705-1661 <span className="text-orange-500"> Carlos Losada</span>
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 mb-10">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: "#f97316" }}
              >
                <span className="text-white"><MailIcon /></span>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Email Us
                </p>
                <a
                  href="mailto:torrico@sunriseimprovementsllc.com"
                  className="block text-white font-semibold text-sm hover:text-orange-300 transition-colors"
                >
                torrico@sunriseimprovementsllc.com
                </a>
              </div>
            </div>

            {/* Response time badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-10"
              style={{ backgroundColor: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.3)" }}
            >
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse flex-shrink-0" />
              <span className="text-xs font-medium" style={{ color: "#fdba74" }}>
                We typically respond within 2 hours
              </span>
            </div>
          </div>

          {/* Bottom: social links */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>
              Follow Us
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100083030927444"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f97316")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
              >
                <span className="text-white"><FacebookIcon /></span>
              </a>
            </div>
          </div>
        </div>

        {/* ── RIGHT: White form panel ────────────────────────────────── */}
        <div className="flex-1 bg-white px-8 py-10 md:px-10 md:py-12">
          <h3
            className="text-2xl md:text-3xl font-bold mb-2"
            style={{ color: "#1a3a6b" }}
          >
            Send Us a Message
          </h3>
          <p className="text-sm text-gray-400 mb-8 leading-relaxed">
            We prioritize every inquiry and make sure you get the help you need promptly.
          </p>

          <form onSubmit={onSubmit} className="flex flex-col gap-5">
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-wide uppercase text-gray-400">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="
                    w-full px-4 py-3 rounded-xl text-sm text-gray-800
                    border border-gray-200 bg-gray-50
                    focus:outline-none focus:ring-2 focus:border-transparent
                    placeholder:text-gray-300
                    transition-all duration-200
                  "
                  style={{ "--tw-ring-color": "#1a3a6b" } as React.CSSProperties}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#1a3a6b")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e7eb")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-wide uppercase text-gray-400">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="
                    w-full px-4 py-3 rounded-xl text-sm text-gray-800
                    border border-gray-200 bg-gray-50
                    focus:outline-none focus:ring-2 focus:border-transparent
                    placeholder:text-gray-300
                    transition-all duration-200
                  "
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#1a3a6b")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e7eb")}
                />
              </div>
            </div>

            {/* Phone (optional) */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold tracking-wide uppercase text-gray-400">
                Phone{" "}
                <span className="normal-case font-normal text-gray-300">(optional)</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="(000) 000-0000"
                className="
                  w-full px-4 py-3 rounded-xl text-sm text-gray-800
                  border border-gray-200 bg-gray-50
                  focus:outline-none focus:ring-2 focus:border-transparent
                  placeholder:text-gray-300
                  transition-all duration-200
                "
                onFocus={(e) => (e.currentTarget.style.borderColor = "#1a3a6b")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e7eb")}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold tracking-wide uppercase text-gray-400">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                required
                rows={5}
                className="
                  w-full px-4 py-3 rounded-xl text-sm text-gray-800
                  border border-gray-200 bg-gray-50
                  focus:outline-none focus:ring-2 focus:border-transparent
                  placeholder:text-gray-300
                  resize-none transition-all duration-200
                "
                onFocus={(e) => (e.currentTarget.style.borderColor = "#1a3a6b")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e7eb")}
              />
            </div>

            {/* Submit */}
            <div className="flex items-center justify-between gap-4 pt-1">
              <button
                type="submit"
                disabled={!!result}
                className="
                  inline-flex items-center gap-2.5
                  px-8 py-3.5 rounded-xl
                  text-sm font-bold text-white
                  transition-all duration-200
                  hover:opacity-90 hover:scale-[1.02]
                  active:scale-95 disabled:opacity-60
                "
                style={{ backgroundColor: "#1a3a6b" }}
                onMouseEnter={(e) => !result && (e.currentTarget.style.backgroundColor = "#f97316")}
                onMouseLeave={(e) => !result && (e.currentTarget.style.backgroundColor = "#1a3a6b")}
              >
                <SendIcon />
                {result ? result : "Send Message"}
              </button>
              <p className="text-xs text-gray-300 text-right leading-snug hidden sm:block">
                Your info is safe.<br />No spam, ever.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
