import Image from "next/image";
import Link from "next/link";
import Header from '@/components/Header';
import Footer from '@/components/Footer';



const navLinks = [
  { label: "Lessons", href: "/lessons" },
  { label: "Pricing", href: "/pricing" },
  { label: "Articles", href: "/articles" },
];

const stats = [
  {
    tag: "Learn",
    title: "VR training delivers a 75% retention rate",
    text: "Beating out lectures (5%), reading (10%), and audio-visual learning (20%).",
  },
  {
    tag: "Engage",
    title: <>3.9x more <br/> engaging</>,
    text: "Learners stay more connected with topics when they can directly engage with them.",
  },
  {
    tag: "Hands-on Tasks",
    title: <>83% of those<br />trained in VR</>,
    text: "could immediately carry out real surgery with minimal guidance. Compared to 0% of those traditionally trained.",
  },
];

const partners = [
  { name: "Toronto District School Board", src: "/logo1.png", width: 70, height: 48 },
  { name: "Toronto Catholic District School Board", src: "/logo2.png", width: 56, height: 56 },
  { name: "University of Toronto Scarborough", src: "/logo3.png", width: 120, height: 48 },
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

function SiteFooter() {
  return (
         <Footer/>

  );
}

export default function Home() {
  return (
    <>
      {/* HEADER */}


     <Header />

      <main className="overflow-x-hidden font-body text-[#0b1220]">
   
        <section className="bg-white px-4 py-8  md:py-10 max-w-5xl mx-auto">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-xl bg-[#111827] shadow-lg ">
            <div className="grid px-6 py-12 md:min-h-[550px] md:grid-cols-2 md:items-center md:px-[50px] md:py-0 !pr-[50px] !pl-[50px] ">
          
              <div className="hidden md:block" />

              <div className="flex flex-col items-start">
                <img
                  src="/footer3.png"
                  alt="VR Learning"
                  className="mb-5 h-[50px] max-h-[50px] w-auto"
                />
                <h1 className="max-w-[400px] font-display text-4xl font-bold leading-[1.15] text-white md:text-[44px]">
                  Explore Every World
                </h1>
                <p className="mt-4 max-w-[300px] text-sm leading-5 text-gray-300 md:text-[13px]">
                  Bring learning to life with immersive, in-school free-roam
                  Virtual Reality field trips.
                </p>
                <Link
                  href="/book"
                  className="mt-7 inline-flex h-[44px] items-center justify-center rounded bg-white px-12 text-sm font-semibold text-black md:h-[50px] md:w-[210px] md:px-0"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* KEY NUMBERS */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-5xl gap-8 px-6 py-12 text-center md:grid-cols-2 md:gap-10 md:py-16">
            <div>
              <p className="font-display text-3xl font-extrabold md:text 3xl">45 to 60 min</p>
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
          <h2 className="font-display px-6 pb-8 text-center text-xl font-extrabold md:pb-10 md:text-2xl md:px-8 ">
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
                    <span className="h-9 w-9 shrink-0 rounded-full bg-gray-300" />
                    <span>
                      Hosted in-school by
                      <br />
                      our trained facilitators
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-9 w-9 shrink-0 rounded-full bg-gray-300" />
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
          <div className="mx-auto grid max-w-4xl items-center lg:gap-[80px] gap-[20px] rounded-xl bg-gradient-to-r from-[#0b1220] via-[#0e6f8c] to-[#0b1220] p-4 sm:p-6 md:grid-cols-[1.4fr_1fr]  md:p-8">
            <button
              aria-label="Play video"
              className="flex aspect-video items-center justify-center rounded-lg bg-gray-300"
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="black" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

            <div className="px-2 pb-2 text-white md:p-0">
              <h3 className="font-display text-xl font-extrabold leading-tight">
                Make Learning an Adventure
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-200 md:text-[10px] md:leading-4 font-[family-name:Verdana]">
                Bring lessons to life with immersive VR experiences that make
                learning interactive, engaging, and memorable.
              </p>
              <Link
                href="/lessons"
                className="mt-5 inline-block rounded bg-white px-5 py-2.5 text-sm font-semibold text-black md:py-2 md:text-[11px]"
              >
                Explore Lesson
              </Link>
            </div>
          </div>
        </section>

        {/* PARTNER LOGOS */}
        <section className="bg-[#DBF1FA] py-5">
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-6 md:justify-around">
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
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 md:text-[10px] md:leading-5 font-[family-name:Krona One]">
              VR gives students the chance to experience complex topics
              firsthand, making learning more engaging, understandable, and
              memorable.
            </p>

            <div className="mt-10 grid lg:gap-[70px] md:mt-12 md:grid-cols-3 md:gap-8">
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

      <SiteFooter />
    </>
  );
}