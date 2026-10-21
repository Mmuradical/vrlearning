"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Activity = {
  title: string;
  text?: string;
  objective?: string;
  description?: string;
};

type Lesson = {
  slug: string;
  title: string;
  subtitle: string;
  description: string; // short text for the card
  grades: string; // short label for the card
  image: string;
  imageAlt: string;
  imageSide: "left" | "right";
  activities: string[]; // card list
  // detail page
  breadcrumb: string;
  intro: string[];
  gradeList: string[];
  skills: string[];
  details: Activity[];
};

const range = (from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, i) => `Grade ${from + i}`);

const GAS: Activity = {
  title: "Characteristics of Gas Particles",
  text: "In the particle chamber, view the behavior of particles in a gas. As the in-experience teacher changes aspects of the gas, like its temperature and volume, students will identify the observable changes in the particles, including the number of collisions.",
  objective: "Observing Changes in Gas Particles",
  description:
    "Students will be able to describe the effects of temperature and volume on the behavior of gas particles and the number of particle collisions.",
};

const ATOM_BUILDER: Activity = {
  title: "Atom Builder",
  text: "Take an opportunity to manipulate subatomic particles to construct an atom in a safe environment! Students will be introduced to the structure of an atom and how to construct neutral atoms in an easy-to-learn and quick-to-master virtual environment while getting automatic and immediate feedback.",
  objective: "Construct Atomic Models",
  description:
    "Students will accurately construct Bohr models of the first 10 elements on the periodic table.",
};

const lessons: Lesson[] = [
  {
    slug: "iss",
    title: "ISS:",
    subtitle: "Curiosity in Orbit",
    description:
      "Step aboard the International Space Station to explore how astronauts and scientists experiment, problem-solve, and conduct research in orbit.",
    grades: "4-12",
    image: "/Lesson1.png",
    imageAlt: "International Space Station orbiting Earth",
    imageSide: "left",
    activities: ["Explore the ISS", "Experiments in Orbit"],
    breadcrumb: "ISS: Curiosity in Orbit",
    intro: [
      "Step into the boots of an astronaut to experience life beyond this world.",
      "Including mission control in Houston and a launchpad in Cape Canaveral, students will observe the journey to space to eventually set foot into the International Space Station. By participating in experiments actually done onboard the ISS, students will explore the scientific method and the science and engineering practices that allow important discoveries to be made and pivotal technologies to be developed.",
    ],
    gradeList: range(3, 12),
    skills: [
      "Communication & Collaboration",
      "Critical Thinking",
      "Curiosity & Wonder",
      "Experimental Design",
      "Scientific Inquiry",
    ],
    details: [
      {
        title: "ISS Tour",
        text: "Acquaint yourself with the different modules that make up the ISS. As students explore the ISS and partake in experiments, they will learn about the purpose of each module in the life and work of astronauts, including manipulating objects in micro gravity!",
        objective: "ISS Tour & Observations",
        description:
          "Students will observe the key components of various sections of the ISS and where they are found in the overall layout.",
      },
      {
        title: "Experiments on the ISS",
        text: "Take part in simplified versions of experiments done on the ISS, learning how microgravity plays a role in developing our understanding of science and engineering both in space and on Earth.",
      },
    ],
  },
  {
    slug: "space-exploration",
    title: "Space Exploration:",
    subtitle: "Characteristics of Celestial Bodies",
    description:
      "Explore the planets and moons of our solar system, comparing their unique characteristics and discovering what makes Earth different.",
    grades: "6-9",
    image: "/Lesson2.png",
    imageAlt: "Earth, the Sun and a planet",
    imageSide: "right",
    activities: [
      "Scale in the Solar System",
      "Scavenger Hunt",
      "Tour Through the Solar System",
      "Asteroid Dodgeball",
      "Ordering the Planets",
    ],
    breadcrumb: "Space Exploration: Characteristics of Celestial Bodies",
    intro: [
      "Take a virtual stroll through the solar system to explore the planets, their moons, and their unique characteristics. Discover how Earth's tilted axis affects the distribution of sunlight, creating seasons and influencing life on our planet. Through an immersive 3D experience, students will explore the relationship between the Earth, Sun, and Moon, uncover the causes of seasons and tides, and compare how planetary tilts affect other worlds.",
    ],
    gradeList: range(6, 9),
    skills: [
      "Cause and Effect",
      "Critical Thinking",
      "Curiosity and Wonder",
      "Evidence Gathering",
      "Measurement and Data",
      "Using Models",
      "Physical Manipulation",
      "Scientific Inquiry",
      "Spatial Reasoning",
    ],
    details: [
      {
        title: "Activity Bubbles: Ordering the Planets",
        text: 'In small groups, students will enter "activity bubbles" to engage in an interactive activity that allows them to pick up, move, and place the planets of the solar system in the correct order.',
        objective: "Order the Planets",
        description:
          "Students will place the order of the planets in our solar system.",
      },
      {
        title: "Scale in the Solar System",
        text: 'In this whole-class experience, students will be interacting with the planets of the solar system to create a more "to-scale" representation of their actual distances in space.',
      },
      {
        title: "Earth's Axis and Seasons",
        objective: "Season Identification",
        description:
          "Students will observe and recognize Earth's relationship with the Sun and how Earth's tilt causes seasons on the surface.",
      },
      {
        title: "Scavenger Hunt",
        text: "A question-based scavenger hunt to assess student knowledge of concepts covered.",
        objective: "Describe Characteristics of Celestial Bodies",
        description:
          "Students will be able to identify celestial bodies according to their characteristics.",
      },
      {
        title: "Asteroid Dodgeball",
        text: "Watch out for that asteroid! Get active and play a tag-like game called Asteroid Dodgeball. Divide into teams, hold your blaster, and launch asteroids at the other team! The team with the highest number of tags is the winner.",
      },
    ],
  },
  {
    slug: "particle-model",
    title: "Atoms & Molecules:",
    subtitle: "The Particle Model of Matter",
    description:
      "Go beyond the microscopic level to explore how particles behave and how the particle model helps explain the properties of different substances.",
    grades: "5-7",
    image: "/Lesson3.png",
    imageAlt: "Colorful molecule model",
    imageSide: "right",
    activities: [
      "Particle Model of Matter: Solid",
      "Particle Model of Matter: Gas",
      "Characteristics of Gas Particles",
      "Atom Builder",
    ],
    breadcrumb: "Atoms & Molecules: The Particle Model of Matter",
    intro: [
      "Discover what everything is made of through an immersive exploration of the particle model of matter. Students will examine how particles behave in solids, liquids, and gases, from the crystal lattice of salt to an interactive chamber demonstrating gas behaviour under different conditions. They'll also explore the building blocks of atoms and put their knowledge into practice by constructing atoms using protons, neutrons, and electrons.",
    ],
    gradeList: range(5, 7),
    skills: [
      "Cause and Effect",
      "Critical Thinking",
      "Curiosity and Wonder",
      "Pattern Recognition",
      "Measurement and Data",
      "Using Models",
      "Physical Manipulation",
      "Scientific Inquiry",
      "Spatial Design",
      "Real-World Connections",
      "Prediction",
      "Systems Thinking",
    ],
    details: [
      {
        title: "Particle Model of Matter - Solid",
        objective: "Describing Models of a Solid",
        description:
          "Students will observe and recognize the particle model of matter and how it can be used to describe a solid.",
      },
      { title: "Particle Model of Matter - Gas" },
      GAS,
      ATOM_BUILDER,
    ],
  },
  {
    slug: "modelling-the-atom",
    title: "Atoms & Molecules:",
    subtitle: "Modelling the Atom",
    description:
      "Shrink down to the atomic scale to explore how matter is structured and how different models help us understand atoms and molecules.",
    grades: "9 - 10",
    image: "/Lesson4.png",
    imageAlt: "Atom model",
    imageSide: "left",
    activities: [
      "Characteristics of Ionic Compounds",
      "Characteristics of Gas Particles",
      "Historic Models of the Atom",
      "Atom Builder",
      "Atomic Appetite",
    ],
    breadcrumb: "Atoms & Molecules: Modelling the Atom",
    intro: [
      "Explore the fascinating structure of atoms and discover how our understanding of them has evolved over time. Students will examine historical atomic models, observe the crystal lattice structure of salt, and discover how ionic compounds form. Through an interactive experience, they'll apply their knowledge of protons, neutrons, and electrons to construct atoms of the first 10 elements of the periodic table.",
    ],
    gradeList: range(9, 10),
    skills: [
      "Cause and Effect",
      "Communication and Collaboration",
      "Critical Thinking",
      "Content Mastery",
      "Curiosity and Wonder",
      "Evidence Gathering",
      "Explaining and Solving",
      "Scientific Inquiry",
      "Measurement and Data",
      "Pattern Recognition",
      "Spatial Design",
      "Using Models",
    ],
    details: [
      {
        title: "Characteristics of Ionic Compounds",
        text: "Step inside the microscopic world of a salt crystal to explore the structure and formation of ionic compounds. Students will interact with sodium and chlorine atoms, observing how they bond to form sodium chloride. Through a guided lesson, they'll discover what causes ionic bonds to form and explore the common properties of ionic compounds.",
        objective: "Describing Ionic Compounds",
        description:
          "Students will recognize and describe the formation of ionic compounds and their characteristics.",
      },
      GAS,
      {
        title: "Historic Models of the Atom",
        text: "In the particle chamber, students will observe the action of gas particles. From these particles, students will explore the different models of an atom from the billiard ball model to the Bohr model.",
        objective: "Identifying Models of the Atom",
        description:
          "Students will recognize and describe some models of the atom used through history.",
      },
      ATOM_BUILDER,
      {
        title: "Atomic Appetite",
        text: "After some practice in the Atom Builder, students will work together in small groups to build atoms once prompted by the experience. By sharing responsibilities, students can race against time - or their peers - to see how many atoms can be built accurately, gathering points by launching accurately constructed atoms into point-multiplying targets!",
        objective: "Construct Atomic Models",
        description:
          "Students will accurately construct Bohr models of the first 10 elements on the periodic table.",
      },
    ],
  },
];

/* ---------------------------- CARD ---------------------------- */

function LessonCard({
  lesson,
  onOpen,
}: {
  lesson: Lesson;
  onOpen: (slug: string) => void;
}) {
  const imageFirst = lesson.imageSide === "left";

  return (
    <button
      type="button"
      onClick={() => onOpen(lesson.slug)}
      className="block w-full cursor-pointer overflow-hidden rounded-xl bg-white text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-600"
    >
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

          <p className="mt-4 mb-[10px] text-xs font-semibold text-gray-800 md:mt-3 md:text-[10px]">
            Grades
          </p>
          <p className="font-display text-[32px] font-bold leading-none tracking-wide text-[#0e6f8c] [text-shadow:2px_2px_0_rgba(11,18,32,0.15)]">
            {lesson.grades}
          </p>
        </div>
      </div>

      <div className="bg-[#111827] px-8 py-5 text-center text-white">
        <h4 className="font-display text-base font-bold md:text-[13px]">
          Activities:
        </h4>
        <ul className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs leading-5 text-gray-200 md:mt-1.5 md:gap-x-3 md:gap-y-0.5 md:text-[10px] md:leading-[14px]">
          {lesson.activities.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
    </button>
  );
}

/* ---------------------------- DETAIL ---------------------------- */

function LessonDetail({
  lesson,
  onBack,
}: {
  lesson: Lesson;
  onBack: () => void;
}) {
  return (
    <article className="mx-auto max-w-3xl rounded-xl bg-white px-6 py-10 shadow-sm md:px-14 md:py-14">
      <nav className="text-xs font-medium md:text-[11px]">
        <button type="button" onClick={onBack} className="hover:underline">
          Home
        </button>
        {" > "}
        <button type="button" onClick={onBack} className="hover:underline">
          Explore
        </button>
        {" > "}
        <span>{lesson.breadcrumb}</span>
      </nav>

      <button
        type="button"
        onClick={onBack}
        className="mt-4 inline-flex items-center gap-2 rounded-md border border-[#0b1220] px-5 py-2 text-sm font-medium transition hover:bg-gray-100 md:text-xs"
      >
        <span aria-hidden>&lsaquo;</span> Lessons
      </button>

      <p className="mt-5 text-[11px] font-bold uppercase tracking-wide text-[#0e8aa8] md:text-[10px]">
        Lesson details
      </p>

      <h1 className="font-display mt-4 text-2xl font-bold leading-tight md:text-3xl">
        {lesson.title}
        <span className="font-body block text-lg font-normal md:ml-2 md:inline md:text-2xl">
          {lesson.subtitle}
        </span>
      </h1>

      <div className="relative mt-6 aspect-[11/10] w-full overflow-hidden rounded-lg md:aspect-[16/12]">
        <Image
          src={lesson.image}
          alt={lesson.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="(min-width: 768px) 640px, 100vw"
        />
      </div>

      <div className="mt-12 space-y-4 text-sm leading-6 md:text-[12px] md:leading-5">
        {lesson.intro.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <h2 className="font-display mt-12 text-lg font-bold text-[#0b3a5c]">
        Grades
      </h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {lesson.gradeList.map((g) => (
          <li
            key={g}
            className="rounded border border-[#0b1220] px-4 py-1.5 text-xs md:text-[11px]"
          >
            {g}
          </li>
        ))}
      </ul>

      <h2 className="font-display mt-10 text-lg font-bold text-[#0b3a5c]">
        Skills
      </h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {lesson.skills.map((s) => (
          <li
            key={s}
            className="rounded border border-[#0b1220] px-4 py-1.5 text-xs md:text-[11px]"
          >
            {s}
          </li>
        ))}
      </ul>

      <h2 className="font-display mt-10 text-xl font-bold text-[#0b3a5c]">
        Activities
      </h2>
      <div className="mt-5 space-y-8">
        {lesson.details.map((a, i) => (
          <section key={`${a.title}-${i}`}>
            <h3 className="font-display text-base font-semibold text-[#0e8aa8]">
              {a.title}
            </h3>
            {a.text && (
              <p className="mt-2 text-sm leading-6 md:text-[12px] md:leading-5">
                {a.text}
              </p>
            )}
            {a.objective && a.description && (
              <table className="mt-5 w-full max-w-md text-left text-[11px] md:ml-4">
                <thead>
                  <tr className="text-[#0b3a5c]">
                    <th className="w-1/3 py-2 pr-4 font-bold">Objective</th>
                    <th className="py-2 font-bold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="align-top">
                    <td className="py-2 pr-4 text-[10px]">{a.objective}</td>
                    <td className="py-2 text-[10px]">{a.description}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}

/* ---------------------------- PAGE ---------------------------- */

export default function LessonsPage() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = lessons.find((l) => l.slug === activeSlug) ?? null;

  const open = (slug: string) => {
    setActiveSlug(slug);
    window.scrollTo({ top: 0 });
  };
  const back = () => {
    setActiveSlug(null);
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <Header />

      <main className="overflow-x-hidden font-body text-[#0b1220]">
        {active ? (
          <section className="bg-[#DBF1FA] px-4 py-10 md:py-12">
            <LessonDetail lesson={active} onBack={back} />
          </section>
        ) : (
          <>
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
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 to-black/70" />

              <h1 className="font-display text-3xl font-medium tracking-wide md:text-4xl">
                Learning You Can Step Into
              </h1>
              <p className="mx-auto mt-5 max-w-[600px] text-sm leading-6 text-gray-200 md:text-[12px] md:leading-5">
                Immersive VR lessons that help students explore complex
                concepts through experience - from planetary science to atomic
                structure.
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
                    <LessonCard
                      key={lesson.slug}
                      lesson={lesson}
                      onOpen={open}
                    />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </>
  );
}