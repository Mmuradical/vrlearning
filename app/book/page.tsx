"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';



const navLinks = [
  { label: "Lessons", href: "/lessons" },
  { label: "Pricing", href: "/pricing" },
  { label: "Articles", href: "/articles" },
];

const steps = [
  "Select Location",
  "Choose Satellite",
  "Contact Information",
  "Meet Details",
  "Choose Visit Time",
];

const locations = [
  {
    id: "s-alberta",
    banner: "S ALBERTA",
    name: "Alberta",
    place: "Alberta, AB, Canada",
    from: "from-[#2b4a8f]",
    to: "to-[#6b86c9]",
  },
  {
    id: "houston",
    banner: "HOUSTON",
    name: "Houston",
    place: "Houston, TX, USA",
    from: "from-[#2d3f86]",
    to: "to-[#7a8fd0]",
  },
  {
    id: "dallas",
    banner: "DALLAS FORT WORTH",
    name: "Dallas/Fort Worth",
    place: "Dallas, TX, USA",
    from: "from-[#33458f]",
    to: "to-[#8294d6]",
  },
  {
    id: "vancouver-island",
    banner: "VANCOUVER ISLAND",
    name: "Vancouver Island",
    place: "Vancouver Island, BC, Canada",
    from: "from-[#2a4a98]",
    to: "to-[#6d88d2]",
  },
  {
    id: "calgary",
    banner: "CALGARY",
    name: "Calgary",
    place: "Calgary, AB, Canada",
    from: "from-[#2f4c93]",
    to: "to-[#7088cc]",
  },
];

const contacts = [
  {
    title: "Message Us",
    value: "info@vrlearning.ca",
    href: "mailto:info@vrlearning.ca",
    icon: (
      <path d="M4 6h16v12H4zM4 7l8 6 8-6" strokeLinejoin="round" />
    ),
  },
  {
    title: "Instagram",
    value: "vr_learning",
    href: "https://instagram.com",
    icon: (
      <path d="M6 9v9M6 6v.01M10 18v-9M10 13c0-2 1.5-4 4-4s4 1.5 4 4v5" />
    ),
  },
  {
    title: "Address",
    value: "Toronto, Ontario",
    href: "/contact",
    icon: (
      <>
        <path d="M12 21s-6-5.2-6-10a6 6 0 1112 0c0 4.8-6 10-6 10z" />
        <circle cx="12" cy="11" r="2" />
      </>
    ),
  },
];

const footerColumns = [
  {
    title: "Pages",
    links: [
      { label: "Lessons", href: "/lessons" },
      { label: "Pricing", href: "/pricing" },
      { label: "Book Now", href: "/book" },
    ],
  },
  {
    title: "Partners",
    links: [
      { label: "Tapvigo", href: "https://tapvigo.com" },
      { label: "TapEducation", href: "https://tapeducation.com" },
      { label: "Pop-Up VR", href: "https://popupvr.com" },
      { label: "VRCore Education", href: "https://vrcoreeducation.com" },
    ],
  },
  {
    title: "Contact Information",
    links: [
      { label: "info@vrlearning.ca", href: "mailto:info@vrlearning.ca" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
    ],
  },
];

function Navbar() {
  return (
       <Header />

  );
}

function SiteFooter() {
  return (
           <Footer/>

  );
}

function BookingWidget() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const currentStep = 0;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return locations;
    return locations.filter(
      (l) =>
        l.name.toLowerCase().includes(q) || l.place.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="grid gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_340px]">
      {/* LEFT: booking form */}
      <div className="min-w-0 rounded-lg border border-gray-100 bg-white p-4 sm:p-5">
        {/* Steps */}
        <ol className="flex items-center gap-2 overflow-x-auto pb-1 text-[9px] text-gray-400">
          {steps.map((s, i) => (
            <li key={s} className="flex shrink-0 items-center gap-2">
              <span
                className={`flex h-3.5 w-3.5 items-center justify-center rounded-full border ${
                  i === currentStep
                    ? "border-[#1a85a0] bg-[#1a85a0]"
                    : "border-gray-300 bg-white"
                }`}
              />
              <span className={i === currentStep ? "text-[#0b1220]" : ""}>
                {s}
              </span>
              {i < steps.length - 1 && (
                <span className="hidden w-6 border-t border-dashed border-gray-300 sm:block" />
              )}
            </li>
          ))}
        </ol>

        {/* Title */}
        <div className="mt-6 text-center">
          <h2 className="font-display text-sm font-semibold text-[#0b1220]">
            VRCORE Education Booking
          </h2>
          <p className="mt-1 text-[10px] text-gray-500">
            Select your nearest VRCORE Education location below to book your
            field trip.
          </p>
        </div>

        {/* Search */}
        <label className="mt-4 flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-gray-400 focus-within:border-[#1a85a0]">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search location name or city..."
            className="w-full bg-transparent text-[11px] text-[#0b1220] outline-none placeholder:text-gray-400"
          />
        </label>

        {/* Cards */}
        <div className="mt-4 grid max-h-[330px] grid-cols-1 gap-3 overflow-y-auto pr-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((l) => (
            <article
              key={l.id}
              className={`overflow-hidden rounded-lg border bg-white shadow-sm ${
                selected === l.id ? "border-[#1a85a0]" : "border-gray-100"
              }`}
            >
              <div
                className={`flex h-20 flex-col items-center justify-center bg-gradient-to-br ${l.from} ${l.to} px-2 text-center`}
              >
                <span className="font-display text-base font-bold leading-tight tracking-wide text-white">
                  {l.banner}
                </span>
                <span className="mt-1 text-[7px] font-semibold tracking-widest text-white/80">
                  VRCORE
                </span>
              </div>

              <div className="p-3">
                <h3 className="text-[11px] font-semibold text-[#0b1220]">
                  {l.name}
                </h3>
                <p className="mt-1 flex items-center gap-1 text-[9px] text-gray-500">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path d="M12 21s-6-5.2-6-10a6 6 0 1112 0c0 4.8-6 10-6 10z" />
                    <circle cx="12" cy="11" r="2" />
                  </svg>
                  {l.place}
                </p>
                <button
                  type="button"
                  onClick={() => setSelected(l.id)}
                  className="mt-3 w-full rounded bg-[#1a85a0] py-1.5 text-[9px] font-semibold text-white transition hover:bg-[#156d84]"
                >
                  {selected === l.id ? "Selected" : "Select Location"}
                </button>
              </div>
            </article>
          ))}

          {filtered.length === 0 && (
            <p className="col-span-full py-8 text-center text-xs text-gray-500">
              No locations found. Try a different name or city.
            </p>
          )}
        </div>
      </div>

      {/* RIGHT: illustration */}
      <div className="relative hidden min-h-[360px] overflow-hidden rounded-lg bg-gradient-to-br from-[#2a3f7e] via-[#4b5fa8] to-[#8b93d0] md:block">
        {/* Swap this block for <Image src="/booking-art.png" fill className="object-cover" alt="" /> */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.35),transparent_55%)]"
        />
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-24 w-40 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-2xl bg-white/20 ring-1 ring-white/30 backdrop-blur-sm"
        />
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden bg-white font-body text-[#0b1220]">
        {/* BOOKING */}
        <section id="book" className="px-4 pb-12 pt-10 sm:px-6 md:pb-16 md:pt-14">
          <div className="mx-auto max-w-5xl">
            <BookingWidget />
          </div>
        </section>

        {/* CONTACT STRIP */}
        <section id="contact" className="px-4 pb-16 sm:px-6 md:pb-24">
          <div className="mx-auto grid max-w-4xl gap-6 rounded-xl bg-white px-6 py-5 shadow-sm ring-1 ring-black/5 sm:grid-cols-3">
            {contacts.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="flex items-center gap-3 transition hover:opacity-80"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[#02304f]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden
                  >
                    {c.icon}
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-semibold">
                    {c.title}
                  </span>
                  <span className="block truncate text-[9px] text-gray-500">
                    {c.value}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}