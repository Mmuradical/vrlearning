import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        
        <Link href="/" className="text-xl font-bold">
          TAP Education
        </Link>

        <nav className="flex items-center gap-8 text-sm font-medium">
          <Link href="/">Home</Link>

          <Link href="/#about">
            About
          </Link>

          <Link href="/#programs">
            What We Do
          </Link>

          <Link href="/team">
            Our Team
          </Link>

          <Link href="/book">
            Contact
          </Link>
        </nav>

      </div>
    </header>
  );
}