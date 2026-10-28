import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/lessons", label: "Lessons" },
  { href: "/pricing", label: "Pricing" },
];

// components/Header.tsx
export default function Header() {
  return (
    <header className="relative w-full bg-[linear-gradient(90deg,#0b1220_0%,#161b2e_40%,#3a2a40_70%,#8a4559_100%)] text-white">
      <nav className="flex h-[50px] w-full items-center justify-between px-4 sm:px-8 md:grid md:grid-cols-[1fr_auto_1fr] md:px-[7%]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 justify-self-start">
          <Image
            src="/footer3.png"
            alt="logo"
            width={120}
            height={40}
            className="h-[40px] w-auto"
          />
        </Link>

        {/* Links (desktop) */}
        <ul className="font-body hidden items-center gap-10 text-sm font-medium text-white md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-opacity hover:opacity-70">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center justify-self-end gap-3">
          {/* Get Started (desktop only) */}
          <Link
            href="/book"
            className="font-body hidden items-center justify-center rounded-[4px] bg-[#111827] text-sm font-medium tracking-wide text-white transition-colors hover:bg-black md:inline-flex md:h-[26px] md:w-[150px]"
          >
            Get Started
          </Link>

          {/* Mobile menu (without JS: <details>) */}
          <details className="group md:hidden">
            <summary
              aria-label="Open menu"
              className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-md text-white ring-1 ring-white/15 [&::-webkit-details-marker]:hidden"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
                className="group-open:hidden"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
                className="hidden group-open:block"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </summary>

            <ul className="absolute inset-x-0 top-full z-50 flex flex-col bg-[#0b1220] px-4 py-2 shadow-lg sm:px-8">
              {navLinks.map((l) => (
                <li key={l.href} className="border-b border-white/10">
                  <Link
                    href={l.href}
                    className="block py-4 text-lg font-semibold text-white transition-opacity hover:opacity-70"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}

              {/* Get Started */}
              <li className="py-4">
                <Link
                  href="/book"
                  className="font-body flex h-11 w-full items-center justify-center rounded-[4px] bg-[#111827] text-base font-semibold tracking-wide text-white ring-1 ring-white/15 transition-colors hover:bg-black"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </details>
        </div>
      </nav>
    </header>
  );
}