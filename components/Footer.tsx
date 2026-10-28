import Image from "next/image";
import Link from "next/link";

// TODO: replace these two with the real social pages
const FACEBOOK_URL = "https://www.facebook.com/vrlearning";
const LINKEDIN_URL = "https://www.linkedin.com/company/vr-learning";

const footerColumns = [
  {
    title: "Partners",
    links: [
      { label: "Tapvigo", href: "https://home.tapvigo.com/" },
      { label: "TapEducation", href: "https://home.tapeducation.ca/" },
      { label: "Pop-Up VR", href: "https://popupvr.ca/" },
      { label: "VRCore Education", href: "https://www.vrcore-ed.com/" },
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

const socials = [
  {
    label: "Email info@vrlearning.ca",
    href: "mailto:info@vrlearning.ca",
    icon: (
      <>
        <path d="M4 6h16v12H4z" strokeLinejoin="round" />
        <path d="M4 7l8 6 8-6" strokeLinejoin="round" />
      </>
    ),
  },
 
  {
    label: "Instagram @vr_learn",
    href: "https://www.instagram.com/vr_learn",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4.5" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="16.8" cy="7.2" r="0.6" fill="currentColor" />
      </>
    ),
  },
  // {
  //   label: "LinkedIn",
  //   href: LINKEDIN_URL,
  //   icon: (
  //     <>
  //       <path d="M6 9v9" />
  //       <path d="M6 6v.01" />
  //       <path d="M10 18v-9" />
  //       <path d="M10 13c0-2 1.5-4 4-4s4 1.5 4 4v5" />
  //     </>
  //   ),
  // },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0f1424] font-body text-white">
      {/* soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_0%,rgba(40,90,130,0.55),transparent_70%),radial-gradient(ellipse_40%_60%_at_80%_110%,rgba(150,60,90,0.45),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[1280px] px-6 pt-12 md:px-10 md:pt-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20">
          {/* brand */}
          <div>
            <Link href="/" className="block w-fit">
              <Image
                src="/footer3.png"
                alt="VR Learning"
                width={337}
                height={73}
                className="h-auto w-[240px]"
              />
            </Link>

            <h2 className="font-display mt-6 text-xl font-normal md:text-2xl">
              Learning Without Limits
            </h2>
            <p className="mt-3 max-w-[300px] text-sm leading-6 tracking-wide text-gray-300 font-[family-name:Verdana]">
              Take students beyond the classroom with affordable VR field trips.
            </p>
          </div>

          {/* columns */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-4 lg:gap-x-14">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="font-display text-sm font-bold tracking-wide">
                  {col.title}
                </h3>
                <span className="mt-2 block h-[2px] w-6 rounded bg-[#1a85a0]" />
                <ul className="mt-4 space-y-2.5 text-[13px] tracking-wide text-gray-300">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="whitespace-nowrap transition hover:text-white hover:underline font-[family-name:Verdana]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* icons only */}
            <div>
              <h3 className="font-display text-sm font-bold tracking-wide">
                Follow Us
              </h3>
              <span className="mt-2 block h-[2px] w-6 rounded bg-[#1a85a0]" />
              <ul className="mt-4 grid w-fit grid-cols-2 gap-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      title={s.label}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:border-white hover:bg-white hover:text-[#0f1424]"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        aria-hidden
                      >
                        {s.icon}
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 border-t border-white/10 py-6 text-center text-xs text-gray-400 md:mt-14 md:text-left">
          &copy; {new Date().getFullYear()} VR Learning. All rights reserved.
        </div>
      </div>
    </footer>
  );
}