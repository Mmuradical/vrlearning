import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stats = [
  {
    tag: "Learn",
    title: "VR training delivers a 75% retention rate",
    text: "Beating out lectures (5%), reading (10%), and audio-visual learning (20%).",
  },
  {
    tag: "Engage",
    title: (
      <>
        3.9x more <br /> engaging
      </>
    ),
    text: "Learners stay more connected with topics when they can directly engage with them.",
  },
  {
    tag: "Hands-on Tasks",
    title: (
      <>
        83% of those
        <br />
        trained in VR
      </>
    ),
    text: "could immediately carry out real surgery with minimal guidance. Compared to 0% of those traditionally trained.",
  },
];

const partners = [
  { name: "Pop-Up VR", src: "/Pop-up VR.png", width: 160, height: 80, href: "https://popupvr.ca" },
  { name: "Toronto District School Board", src: "/logo1.png", width: 130, height: 80, href: "https://www.tdsb.on.ca" },
  { name: "Toronto Catholic District School Board", src: "/logo2.png", width: 100, height: 88, href: "https://www.tcdsb.org" },
  { name: "University of Toronto Scarborough", src: "/logo3.png", width: 210, height: 80, href: "https://www.utsc.utoronto.ca" },
  { name: "VR Core Education", src: "/VrCode.png", width: 220, height: 80, href: "#" },
  { name: "Tapvigo", src: "/TapVigo.png", width: 180, height: 80, href: "#" },
];

/* ---------- Icons (inline SVG, navy on white circle) ---------- */

function SchoolIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-[30px] w-[30px] md:h-8 md:w-8"
      fill="none"
      stroke="#12304f"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 3.5 22 8v19H10V8z" />
      <path d="M10 14H5v13h5" />
      <path d="M22 14h5v13h-5" />
      <circle cx="16" cy="14" r="2" />
      <path d="M14 27v-4h4v4" />
    </svg>
  );
}

function Person({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="4.6" fill="#fff" stroke="none" />
      <circle cx={cx} cy={cy - 1.8} r="1.7" />
      <path d={`M${cx - 3} ${cy + 3.4}a3 3 0 0 1 6 0`} />
    </g>
  );
}

function CollaborationIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-[34px] w-[34px] md:h-9 md:w-9"
      fill="none"
      stroke="#12304f"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="16" cy="16" r="9" strokeDasharray="5 3.2" />
      <Person cx={16} cy={6.5} />
      <Person cx={25.5} cy={16} />
      <Person cx={16} cy={25.5} />
      <Person cx={6.5} cy={16} />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main className="overflow-x-hidden font-body text-[#0b1220]">
        {/* HERO */}
        <section className="relative isolate w-full overflow-hidden bg-[#0a1330]">
          <video
            className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
            src="/orbit.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0a1330]/90 via-[#0a1330]/60 to-[#0a1330]/20 md:bg-gradient-to-r md:from-[#0a1330]/90 md:via-[#0a1330]/40 md:to-transparent" />

          <div className="mx-auto flex min-h-[520px] max-w-[1280px] items-end px-6 pb-12 pt-24 md:min-h-[580px] md:items-center md:px-10 md:py-0">
            <div className="flex flex-col items-start">
              <img
                src="/footer3.png"
                alt="VR Learning"
                className="mb-5 h-[60px] w-auto md:mb-6 md:h-[80px]"
              />
              <h1 className="max-w-[360px] font-display text-4xl font-bold leading-[1.2] tracking-wide text-white md:max-w-[520px] md:text-5xl">
                Explore Every World
              </h1>
              <p className="mt-5 max-w-[360px] text-base leading-7 text-gray-200 md:max-w-[480px] md:text-lg md:leading-8">
                Bring learning to life with immersive, in-school, free-roam
                Virtual Reality field trips.
              </p>
              <Link
                href="/book"
                className="mt-8 inline-flex h-[48px] w-[170px] items-center justify-center rounded bg-white text-base font-semibold text-black transition hover:bg-gray-200 md:h-[52px] md:w-[180px]"
              >
                Book Now
              </Link>
            </div>
          </div>
        </section>

        {/* HEADING */}
        <section className="bg-white">
          <h2 className="mx-auto max-w-[1280px] px-6 pb-2 pt-12 text-center font-display text-2xl font-extrabold leading-[1.3] md:px-10 md:pt-16 md:text-3xl">
            Transform Your Space Into an Immersive Field Trip
          </h2>
        </section>

        {/* KEY NUMBERS */}
        <section className="bg-white">
          <div className="mt-6 mb-12 mx-auto grid max-w-[1280px] gap-8 px-6 py-8 text-center md:grid-cols-2 md:gap-10 md:px-10 md:py-12">
            <div>
              <p className="font-display text-3xl font-extrabold md:text-4xl">45 to 60 min</p>
              <p className="mt-2 text-base text-sky-700 md:text-lg">immersive VR session length</p>
            </div>
            <div>
              <p className="font-display text-3xl font-extrabold md:text-4xl">Up to 30 students</p>
              <p className="mt-2 text-base text-sky-700 md:text-lg">in one free-roam experience</p>
            </div>
          </div>
        </section>

        {/* FIELD TRIP */}
        <section className="bg-[#DBF1FA] px-6 py-10 md:px-10 md:py-14">
          <div className="mx-auto grid max-w-[1280px] items-center gap-8 md:grid-cols-[minmax(0,420px)_1fr] md:gap-12">
            <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl border-[6px] border-white bg-white shadow-md md:mx-0">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
                {/* Put a VR Core screenshot / in-headset still at /public/vr-headset-screenshot.png */}
                <Image
                  src="/group.png"
                  alt="In-headset view of a VR Core learning experience"
                  fill
                  priority
                  unoptimized
                  className="object-cover"
                  sizes="(min-width: 768px) 420px, 100vw"
                />
              </div>
            </div>

            <div className="space-y-5 text-sm leading-6 md:text-[15px] md:leading-7">
              <p>
                Bring cross-curricular learning to life with immersive
                free-roam VR experiences hosted right in your school.
              </p>
              <p>
                Each session is a guided journey where students can{" "}
                <strong className="font-bold text-[#12304f]">
                  explore new worlds and ideas through interactive learning.
                </strong>{" "}
                Experiences can connect with Science, Technology, Physical
                Education, and Environmental Education.
              </p>
              <p>
                Choose from single-class visits, school-wide events, or longer
                residencies based on your school&apos;s needs.
              </p>
              <p>
                The{" "}
                <strong className="font-bold text-[#12304f]">STEAM-focused experiences</strong>{" "}
                are{" "}
                <strong className="font-bold text-[#12304f]">curriculum aligned</strong>{" "}
                to heighten understanding.
              </p>

              <div className="flex flex-col gap-5 pt-2 text-sm font-semibold text-[#12304f] sm:flex-row sm:flex-wrap sm:gap-x-12">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white md:h-16 md:w-16">
                    <SchoolIcon />
                  </span>
                  <span>
                    Hosted in-school by
                    <br />
                    our trained facilitators
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white md:h-16 md:w-16">
                    <CollaborationIcon />
                  </span>
                  <span>
                    A Fully collaborative
                    <br />
                    VR Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VIDEO CTA */}
        <section className=" mt-6 mb-12 bg-white px-4 py-12 sm:px-6 md:px-10 md:py-16">
          <div className="mx-auto grid max-w-[1280px] items-center gap-5 rounded-2xl bg-[linear-gradient(90deg,#0b1a2e_0%,#1488a8_30%,#0b1a2e_100%)] p-4 shadow-lg md:grid-cols-[1.35fr_1fr] md:gap-10 md:p-6">
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-300">
              <video
                className="h-full w-full object-cover"
                src="/space-station.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="Students using VR controllers"
              />
            </div>

            <div className="px-2 pb-2 text-white md:p-0">
              <h3 className="font-display text-2xl font-bold leading-[1.3] tracking-wide md:text-3xl">
                Make Learning an Adventure
              </h3>
              <p className="mt-4 max-w-[440px] text-base leading-7 text-gray-100">
                Bring lessons to life with immersive VR experiences that make
                learning interactive, engaging, and memorable.
              </p>
              <Link
                href="/lessons"
                className="mt-6 inline-flex h-[46px] items-center justify-center rounded bg-white px-8 text-base font-semibold text-black transition hover:bg-gray-200"
              >
                Explore Lesson
              </Link>
            </div>
          </div>
        </section>

        {/* PARTNER LOGOS */}
        <section className="bg-[#DBF1FA] py-6 md:py-8">
          <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-10 gap-y-5 px-6 md:px-10 lg:flex-nowrap lg:justify-between">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={p.name}
              >
                <Image
                  src={p.src}
                  alt={p.name}
                  width={p.width}
                  height={p.height}
                  className="h-12 w-auto object-contain md:h-14"
                />
              </a>
            ))}
          </div>
        </section>

        {/* KIDS LEARN BETTER */}
        <section className="mt-6 mb-12 bg-white px-6 py-12 md:px-10 md:py-16">
          <div className="mx-auto max-w-[1280px] text-center">
            <h2 className="font-display text-2xl font-extrabold md:text-3xl">
              Kids Learn Better in VR
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 md:text-lg md:leading-8">
              VR gives students the chance to experience complex topics
              firsthand, making learning more engaging, understandable, and
              memorable.
            </p>

            <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-3 md:gap-10">
              {stats.map((s) => (
                <div key={s.tag}>
                  <span className="block rounded bg-[#12304f] py-2.5 text-base font-semibold text-white md:text-lg">
                    {s.tag}
                  </span>
                  <p className="mt-5 font-display text-xl font-normal leading-snug md:text-2xl">
                    {s.title}
                  </p>
                  <p className="mx-auto mt-3 max-w-sm text-base leading-7 text-sky-800 md:max-w-none">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPACE BANNER */}
        <section className="mt-12 mb-12 bg-white px-4 pb-12 sm:px-6 md:px-10 md:pb-16">
          <div className="relative mx-auto h-[340px] w-full max-w-[1280px] overflow-hidden rounded-xl md:h-[340px]">
            <Image
              src="/Moon-Boy2.png"
              alt="Student exploring space in VR"
              fill
              className="object-cover"
              style={{ objectPosition: "50% 96%" }}
              sizes="(min-width: 1280px) 1280px, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f28]/90 via-[#0a0f28]/40 to-transparent md:bg-gradient-to-l md:from-[#0a0f28]/70 md:via-[#0a0f28]/20" />

            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end px-6 pb-6 text-center text-white md:inset-y-0 md:left-auto md:right-0 md:w-1/2 md:justify-center md:px-10 md:pb-0">
              <h3 className="font-display text-2xl font-normal leading-tight md:text-3xl">
                Go Further for a Fraction
              </h3>
              <p className="mt-3 max-w-[440px] text-base leading-7 text-gray-100">
                VR gives students access to places they could never reach on a
                traditional field trip for a fraction of the cost.
              </p>
              <Link
                href="/lessons"
                className="mt-5 inline-flex w-fit items-center justify-center rounded bg-white px-7 py-2.5 text-base font-semibold text-black transition hover:bg-gray-200"
              >
                Explore Lesson
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}