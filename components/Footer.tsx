import Image from "next/image";
import Link from "next/link";


const footerColumns = [
  {
    title: "Partners",
    links: [
      { label: "Tapvigo", href: "https://home.tapvigo.com/" },
      { label: "TapEducation", href: "https://home.tapeducation.ca/" },
      { label: "Pop-up VR", href: "https://popupvr.com/" },
      { label: "VRCore Education", href: "https://www.vrcore-ed.com/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/" },
      { label: "Terms of service", href: "/" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "info@vrlearning.ca", href: "/" },
      { label: "Book Now", href: "/" },
    ],
  },
];

export default function Footer() {
  return (
     <footer className="relative overflow-hidden bg-[#0f1424] font-body text-white pb-[40px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_0%,rgba(40,90,130,0.55),transparent_70%),radial-gradient(ellipse_40%_60%_at_80%_110%,rgba(150,60,90,0.45),transparent_70%)]"
      />

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-10 lg:flex-row lg:items-start lg:justify-between lg:px-10 lg:py-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="block shrink-0">
            <Image
              src="/footer3.png"
              alt="VR Learning"
              width={337}
              height={73}
              className="h-auto w-[220px]"
            />
          </Link>

          <div>
            <h2 className="font-display text-xl font-normal md:text-[22px]">
              Learning Without Limits
            </h2>
            <p className="mt-2 max-w-[260px] text-xs leading-[14px] tracking-wide font-[family-name:Verdana]">
              Take students beyond the classroom with affordable VR field trips.
            </p>
          </div>
        </div>

      
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:gap-x-8">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[13px] font-semibold tracking-wide">
                {col.title}
              </h3>
              <ul className="mt-3 space-y-1 text-[12px] tracking-wide text-gray-100">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="transition hover:text-white hover:underline font-[family-name:Verdana]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}