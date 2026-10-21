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

// Порядок как на картинке: Pop-Up VR, TDSB, TCDSB, UTSC, VR Core, Tapvigo
// Файлы logo-popupvr.png, logo-vrcore.png, logo-tapvigo.png положите в /public
const partners = [
  { name: "Pop-Up VR", src: "/Pop-up VR.png", width: 90, height: 48 },
  { name: "Toronto District School Board", src: "/logo1.png", width: 70, height: 48 },
  { name: "Toronto Catholic District School Board", src: "/logo2.png", width: 56, height: 56 },
  { name: "University of Toronto Scarborough", src: "/logo3.png", width: 120, height: 48 },
  { name: "VR Core Education", src: "/VrCode.png", width: 130, height: 48 },
  { name: "Tapvigo", src: "/TapVigo.png", width: 110, height: 48 },
];

/* ---------- Icons (inline SVG, navy on white circle) ---------- */

function SchoolIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-[22px] w-[22px] md:h-6 md:w-6"
      fill="none"
      stroke="#12304f"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* central tower */}
      <path d="M16 3.5 22 8v19H10V8z" />
      {/* side wings */}
      <path d="M10 14H5v13h5" />
      <path d="M22 14h5v13h-5" />
      {/* window + door */}
      <circle cx="16" cy="14" r="2" />
      <path d="M14 27v-4h4v4" />
    </svg>
  );
}

function Person({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      {/* white backing to mask the dashed ring behind the person */}
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
      className="h-[26px] w-[26px] md:h-7 md:w-7"
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
        {/* HERO — full-width video background */}
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

          <div className="mx-auto flex min-h-[520px] max-w-6xl items-end px-6 pb-12 pt-24 md:min-h-[560px] md:items-center md:px-12 md:py-0 lg:px-[110px]">
            <div className="flex flex-col items-start">
              <img
                src="/footer3.png"
                alt="VR Learning"
                className="mb-8 h-[50px] max-h-[50px] w-auto"
              />
              <h1 className="max-w-[260px] font-display text-4xl font-bold leading-[1.15] tracking-wide text-white md:max-w-[300px] md:text-[40px]">
                Explore Every World
              </h1>
              <p className="mt-5 max-w-[280px] text-sm leading-5 text-gray-200 md:text-[13px]">
                Bring learning to life with immersive, in-school free-roam
                Virtual Reality field trips.
              </p>
              <Link
                href="/book"
                className="mt-9 inline-flex h-[44px] w-[140px] items-center justify-center rounded bg-white text-sm font-semibold text-black transition hover:bg-gray-200 md:h-[46px] md:w-[135px]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* KEY NUMBERS */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-5xl gap-8 px-6 py-12 text-center md:grid-cols-2 md:gap-10 md:py-16">
            <div>
              <p className="font-display text-3xl font-extrabold md:text-3xl">45 to 60 min</p>
              <p className="mt-2 text-sm text-sky-700 md:text-[11px]">
                Flexible immersive VR session length
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-extrabold md:text-3xl">Up to 30 students</p>
              <p className="mt-2 text-sm text-sky-700 md:text-[11px]">
                in one free-roam experience
              </p>
            </div>
          </div>
        </section>

        {/* FIELD TRIP */}
        <section className="bg-white">
          <h2 className="font-display px-6 pb-8 text-center text-xl font-extrabold md:px-8 md:pb-10 md:text-2xl">
            Transform Your Space Into an Immersive Field Trip
          </h2>

          <div className="bg-[#DBF1FA] px-6 py-10 md:py-14">
            <div className="mx-auto grid max-w-4xl items-center gap-8 md:grid-cols-[310px_1fr] md:gap-20">
              <div className="mx-auto w-full max-w-[310px] overflow-hidden rounded-2xl border-[8px] border-white bg-white shadow-md md:mx-0">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src="/group.png"
                    alt="Students exploring a VR experience in a school gym"
                    fill
                    priority
                    unoptimized
                    className="object-cover"
                    sizes="(min-width: 768px) 310px, 100vw"
                  />
                </div>
              </div>

              <div className="space-y-6 text-sm leading-6 md:space-y-8 md:text-[11px] md:leading-[18px]">
                <p>
                  Bring cross-curricular learning to life with immersive
                  free-roam VR experiences hosted right in your school.
                </p>
                <p>
                  Each session is a guided journey where students can{" "}
                  <strong className="font-bold text-[#12304f]">
                    explore new worlds and ideas through interactive learning.
                  </strong>{" "}
                  Experiences can connect with Science, Social Studies,
                  Technology, Physical Education, and Environmental Education.
                </p>
                <p>
                  Choose from single-class visits, school-wide events, or longer
                  residencies based on your school&apos;s needs.
                </p>
                <p>
                  The{" "}
                  <strong className="font-bold text-[#12304f]">
                    STEAM-focused experiences
                  </strong>{" "}
                  are{" "}
                  <strong className="font-bold text-[#12304f]">
                    curriculum aligned
                  </strong>{" "}
                  to heighten understanding.
                </p>

                <div className="flex flex-col gap-4 pt-2 text-xs font-semibold text-[#12304f] sm:flex-row sm:flex-wrap sm:gap-x-10 md:text-[10px]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white md:h-12 md:w-12">
                      <SchoolIcon />
                    </span>
                    <span>
                      Hosted in-school by
                      <br />
                      our trained facilitators
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white md:h-12 md:w-12">
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
          </div>
        </section>

        {/* VIDEO CTA */}
        <section className="bg-white px-4 py-12 sm:px-6 md:py-20">
          <div className="mx-auto grid max-w-4xl items-center gap-5 rounded-2xl bg-[linear-gradient(90deg,#0b1a2e_0%,#1488a8_30%,#0b1a2e_100%)] p-4 shadow-lg sm:p-5 md:grid-cols-[1.35fr_1fr] md:gap-12 md:p-6">
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
              <h3 className="max-w-[260px] font-display text-2xl font-bold leading-[1.2] tracking-wide md:text-[24px]">
                Make Learning an Adventure
              </h3>
              <p className="mt-4 max-w-[300px] text-sm leading-5 text-gray-100 md:text-[11px] md:leading-4">
                Bring lessons to life with immersive VR experiences that make
                learning interactive, engaging, and memorable.
              </p>
              <Link
                href="/lessons"
                className="mt-6 inline-flex h-[40px] items-center justify-center rounded bg-white px-8 text-sm font-semibold text-black transition hover:bg-gray-200 md:h-[34px] md:text-[11px]"
              >
                Explore Lesson
              </Link>
            </div>
          </div>
        </section>

        {/* PARTNER LOGOS */}
        <section className="bg-[#DBF1FA] py-5">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-6 lg:flex-nowrap lg:justify-between">
            {partners.map((p) => (
              <Image
                key={p.name}
                src={p.src}
                alt={p.name}
                width={p.width}
                height={p.height}
                className="h-10 w-auto object-contain md:h-12"
              />
            ))}
          </div>
        </section>

        {/* KIDS LEARN BETTER */}
        <section className="bg-white px-6 py-14 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-xl font-extrabold md:text-2xl">
              Kids Learn Better in VR
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 md:text-[10px] md:leading-5 font-[family-name:Krona_One]">
              VR gives students the chance to experience complex topics
              firsthand, making learning more engaging, understandable, and
              memorable.
            </p>

            <div className="mt-10 grid md:mt-12 md:grid-cols-3 md:gap-8 lg:gap-[70px]">
              {stats.map((s) => (
                <div key={s.tag}>
                  <span className="block rounded bg-[#12304f] py-2 text-xs font-semibold text-white md:py-1.5 md:text-[10px]">
                    {s.tag}
                  </span>
                  <p className="font-display mt-5 text-lg font-normal leading-tight">
                    {s.title}
                  </p>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-sky-800 md:max-w-none md:text-[10px] md:leading-4">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPACE BANNER */}
        <section className="bg-white px-4 pb-14 sm:px-6 md:pb-20">
          <div className="relative mx-auto h-[360px] w-full max-w-4xl overflow-hidden rounded-xl sm:h-[320px] md:h-[280px]">
            <Image
              src="/Moon-Boy2.png"
              alt="Student exploring space in VR"
              fill
              className="object-cover"
              style={{ objectPosition: "50% 96%" }}
              sizes="(min-width: 1024px) 896px, 100vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f28]/90 via-[#0a0f28]/40 to-transparent md:bg-gradient-to-l md:from-[#0a0f28]/70 md:via-[#0a0f28]/20" />

            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end px-6 pb-6 text-center text-white md:inset-y-0 md:left-auto md:right-0 md:w-1/2 md:justify-center md:pb-0">
              <h3 className="font-display text-xl font-normal leading-tight md:text-2xl">
                Go Further for a Fraction
              </h3>

              <p className="mt-3 max-w-[500px] text-sm leading-5 text-gray-100 md:max-w-[370px] md:text-[10px] md:leading-4">
                VR gives students access to places they could never reach on a
                traditional field trip for a fraction of the cost.
              </p>

              <Link
                href="/lessons"
                className="mt-4 inline-flex w-fit items-center justify-center rounded bg-white px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-200 md:py-2 md:text-[11px]"
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