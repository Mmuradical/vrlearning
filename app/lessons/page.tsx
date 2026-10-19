import Image from "next/image";
import Link from "next/link";
import Header from '@/components/Header';
import Footer from '@/components/Footer';



const navLinks = [
  { label: "Lessons", href: "/lessons" },
  { label: "Pricing", href: "/pricing" },
  { label: "Articles", href: "/articles" },
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

type Lesson = {
  title: string;
  subtitle: string;
  description: string;
  grades: string;
  image: string; //public
  imageAlt: string;
  imageSide: "left" | "right";
  activities: string[];
  note?: { title: string; text: string };
};

const lessons: Lesson[] = [
  {
    title: "ISS:",
    subtitle: "Curiosity in Orbit",
    description:
      "Step aboard the International Space Station to explore how astronauts and scientists experiment, problem-solve, and conduct research in orbit.",
    grades: "4-12",
    image: "/Lesson1.png",
    imageAlt: "International Space Station orbiting Earth",
    imageSide: "left",
    activities: ["Explore the ISS", "Experiments in Orbit"],
  },
  {
    title: "Space Exploration:",
    subtitle: "Characteristics of Celestial Bodies",
    description:
      "Explore the planets and moons of our solar system, comparing their unique characteristics and discovering what makes Earth different.",
    grades: "6-9",
    image: "/lesson2.png",
    imageAlt: "Earth, the Sun and a planet",
    imageSide: "right",
    activities: [
      "Scale in the Solar System",
      "Scavenger Hunt",
      "Tour Through the Solar System",
      "Asteroid Dodgeball",
      "Ordering the Planets",
    ],
  },
  {
    title: "Atoms & Molecules:",
    subtitle: "The Particle Model of Matter",
    description:
      "Go beyond the microscopic level to explore how particles behave and how the particle model helps explain the properties of different substances.",
    grades: "5-7",
    image: "/lesson3.png",
    imageAlt: "Colorful molecule model",
    imageSide: "right",
    activities: [
      "Particle Model of Matter: Solid",
      "Particle Model of Matter: Gas",
      "Characteristics of Gas Particles",
      "Atom Builder",
    ],
  },
  {
    title: "Atoms & Molecules:",
    subtitle: "Modelling the Atom",
    description:
      "Shrink down to the atomic scale to explore how matter is structured and how different models help us understand atoms and molecules.",
    grades: "9 & 10",
    image: "/lesson4.png",
    imageAlt: "Atom model",
    imageSide: "left",
    activities: [
      "Characteristics of Ionic Compounds",
      "Characteristics of Gas Particles",
      "Historic Models of the Atom",
      "Atom Builder",
      "Atomic Appetite",
    ],
  },
];

function LessonCard({ lesson }: { lesson: Lesson }) {
  const imageFirst = lesson.imageSide === "left";

  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-md">
      
      <div
        className={`grid grid-cols-1 md:min-h-[230px] ${
          imageFirst ? "md:grid-cols-[44fr_56fr]" : "md:grid-cols-[56fr_44fr]"
        }`}
      >
     
        <div
          className={`relative order-1 h-52 sm:h-64 md:h-auto ${
            imageFirst ? "md:order-1" : "md:order-2"
          }`}
        >
          <Image
            src={lesson.image}
            alt={lesson.imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 340px, 100vw"
          />
        </div>

     
        <div
          className={`order-2 flex flex-col justify-center px-5 py-6 ${
            imageFirst ? "md:order-2" : "md:order-1"
          }`}
        >
          <h3 className="font-display text-lg font-bold leading-tight text-[#0b1220] md:text-[15px]">
            {lesson.title}
            <span className="font-body mt-0.5 block text-base font-normal leading-tight md:text-[13px]">
              {lesson.subtitle}
            </span>
          </h3>

          <p className="mt-3 text-sm leading-5 text-gray-800 md:mt-2 md:text-[11px] md:leading-[14px]">
            {lesson.description}
          </p>

          <p className="mt-4 text-xs font-semibold text-gray-800 md:mt-3 md:text-[10px] mb-[10px]">
            Grades
          </p>
          <p className="font-display text-[32px] font-bold leading-none tracking-wide text-[#0e6f8c] [text-shadow:2px_2px_0_rgba(11,18,32,0.15)]">
            {lesson.grades}
          </p>
        </div>
      </div>

      {/* Activities */}
      <div className="bg-[#111827] px-8 py-5 text-center text-white">
        <h4 className="font-display text-base font-bold md:text-[13px]">
          Activities:
        </h4>
        <ul className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs leading-5 text-gray-200 md:mt-1.5 md:gap-x-3 md:gap-y-0.5 md:text-[10px] md:leading-[14px]">
          {lesson.activities.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>

        {lesson.note && (
          <div className="mt-4 text-left md:mt-3">
            <p className="font-display text-xs font-bold md:text-[10px]">
              {lesson.note.title}
            </p>
            <p className="mt-1 text-xs leading-5 text-gray-300 md:text-[10px] md:leading-[13px]">
              {lesson.note.text}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

export default function LessonsPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden font-body text-[#0b1220]">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-[#111827] px-6 py-16 text-center text-white md:py-28">
         
          <Image
            src="/Vr-Helmet.png"
            alt=""
            fill
            priority
            className="-z-10 object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 to-black/70" />

          <h1 className="font-display text-3xl font-extrabold tracking-wide md:text-3xl">
            Learning You Can Step Into
          </h1>
          <p className="mx-auto mt-5 max-w-[600px] text-sm leading-6 text-gray-200 md:text-[12px] md:leading-5 font-[family-name:Verdana]">
            Immersive VR lessons that help students explore complex concepts
            through experience - from planetary science to atomic structure.
          </p>
          <p className="font-display mt-6 text-sm font-extrabold md:text-xs">
            Designed for Grades 4–12.
          </p>
        </section>

        {/* LESSONS */}
        <section className="bg-[#DBF1FA] px-4 py-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-base font-bold md:text-sm">
              Explore our Lessons
            </h2>

            <div className="mt-4 space-y-8 md:space-y-9">
              {lessons.map((lesson) => (
                <LessonCard key={lesson.title + lesson.subtitle} lesson={lesson} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}