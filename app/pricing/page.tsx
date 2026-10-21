import Image from "next/image";
import Link from "next/link";
import Header from '@/components/Header';
import Footer from '@/components/Footer';



const navLinks = [
  { label: "Lessons", href: "/lessons" },
  { label: "Pricing", href: "/pricing" },
  { label: "Articles", href: "/articles" },
];

const plans = [
  { range: "1 - 50", price: "1395", unit: "/Total" },
  { range: "51 - 90", price: "28", unit: "/Student" },
  { range: "91+", price: "24", unit: "/Student" },
];

const footerColumns = [
  {
    title: "Partners",
    links: [
      { label: "Tapvigo", href: "https://tapvigo.com" },
      { label: "TapEducation", href: "https://tapeducation.com" },
      { label: "Pop-Up VR", href: "https://popupvr.com" },
      { label: "VR Core Education", href: "https://vrcoreeducation.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "info@vrlearning.ca", href: "mailto:info@vrlearning.ca" },
      { label: "Book Now", href: "/book" },
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

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden bg-white font-body text-[#0b1220]">
        {/* HERO */}
        <section className="px-4 pb-8 pt-10 sm:px-6 md:pb-10 md:pt-14">
          <div className="mx-auto grid max-w-4xl items-center gap-8 md:grid-cols-[250px_1fr]">
            <div className="relative mx-auto aspect-square w-full max-w-[250px] overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/Moon-Boy.png"
                alt="Student exploring space in VR"
                fill
                priority
                className="object-cover"
                sizes="250px"
              />
            </div>

            <div className="text-center md:text-left">
              <p className="font-display text-sm font-medium text-[#0b1220] md:text-[11px]">
                Pricing
              </p>
              <h1 className="font-display mt-3 text-3xl font-bold leading-tight tracking-wide text-[#0b1220] md:text-4xl">
                Big Adventures.
                <br />
                Smaller Price Tag.
              </h1>
              <p className="mx-auto mt-4 max-w-sm text-sm leading-6 md:mx-0 md:text-[11px] md:leading-4">
                Take your class to the outer reaches of space for less than the
                cost of a traditional field trip.
              </p>
              <a
                href="/book"
                className="mt-6 inline-block rounded bg-[#02304f] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#04243b] md:py-2 md:text-[11px]"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* PRICING CARDS */}
        <section id="pricing" className="px-4 pb-16 pt-6 sm:px-6 md:pb-28">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {plans.map((p) => (
              <div
                key={p.range}
                className="flex h-44 flex-col items-center justify-center rounded-xl border border-[#02304f] bg-white text-center md:h-48"
              >
                <p className="font-display text-xl font-bold leading-none">
                  {p.range}
                </p>
                <p className="font-display text-sm font-semibold">Students</p>
                <p className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="relative font-display text-3xl font-bold text-[#1a85a0]">
                    <sup className="absolute -left-3 top-0 text-xs">$</sup>
                    {p.price}
                  </span>
                  <span className="text-xs font-medium">{p.unit}</span>
                </p>
              </div>
            ))}

            {/* Residencies */}
            <div className="flex min-h-44 flex-col items-center justify-center rounded-xl border border-[#02304f] bg-white px-4 py-4 text-center md:h-48">
              <p className="font-display text-base font-bold">Residencies</p>
              <p className="mt-3 text-xs leading-4 md:text-[9px] md:leading-3">
                A long-term, temporary educational Vr installation
              </p>
              <a
                href="/book#contact"
                className="mt-4 w-full rounded bg-[#1a85a0] py-2 text-xs font-semibold text-white transition hover:bg-[#156d84] md:py-1.5 md:text-[10px]"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}