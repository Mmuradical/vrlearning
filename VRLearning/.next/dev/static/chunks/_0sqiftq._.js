(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/lessons/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LessonsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const range = (from, to)=>Array.from({
        length: to - from + 1
    }, (_, i)=>`Grade ${from + i}`);
const GAS = {
    title: "Characteristics of Gas Particles",
    text: "In the particle chamber, view the behavior of particles in a gas. As the in-experience teacher changes aspects of the gas, like its temperature and volume, students will identify the observable changes in the particles, including the number of collisions.",
    objective: "Observing Changes in Gas Particles",
    description: "Students will be able to describe the effects of temperature and volume on the behavior of gas particles and the number of particle collisions."
};
const ATOM_BUILDER = {
    title: "Atom Builder",
    text: "Take an opportunity to manipulate subatomic particles to construct an atom in a safe environment! Students will be introduced to the structure of an atom and how to construct neutral atoms in an easy-to-learn and quick-to-master virtual environment while getting automatic and immediate feedback.",
    objective: "Construct Atomic Models",
    description: "Students will accurately construct Bohr models of the first 10 elements on the periodic table."
};
const lessons = [
    {
        slug: "iss",
        title: "ISS:",
        subtitle: "Curiosity in Orbit",
        description: "Step aboard the International Space Station to explore how astronauts and scientists experiment, problem-solve, and conduct research in orbit.",
        grades: "4-12",
        image: "/Lesson1.png",
        imageAlt: "International Space Station orbiting Earth",
        imageSide: "left",
        activities: [
            "Explore the ISS",
            "Experiments in Orbit"
        ],
        breadcrumb: "ISS: Curiosity in Orbit",
        intro: [
            "Step into the boots of an astronaut to experience life beyond this world.",
            "Including mission control in Houston and a launchpad in Cape Canaveral, students will observe the journey to space to eventually set foot into the International Space Station. By participating in experiments actually done onboard the ISS, students will explore the scientific method and the science and engineering practices that allow important discoveries to be made and pivotal technologies to be developed."
        ],
        gradeList: range(3, 12),
        skills: [
            "Communication & Collaboration",
            "Critical Thinking",
            "Curiosity & Wonder",
            "Experimental Design",
            "Scientific Inquiry"
        ],
        details: [
            {
                title: "ISS Tour",
                text: "Acquaint yourself with the different modules that make up the ISS. As students explore the ISS and partake in experiments, they will learn about the purpose of each module in the life and work of astronauts, including manipulating objects in micro gravity!",
                objective: "ISS Tour & Observations",
                description: "Students will observe the key components of various sections of the ISS and where they are found in the overall layout."
            },
            {
                title: "Experiments on the ISS",
                text: "Take part in simplified versions of experiments done on the ISS, learning how microgravity plays a role in developing our understanding of science and engineering both in space and on Earth."
            }
        ]
    },
    {
        slug: "space-exploration",
        title: "Space Exploration:",
        subtitle: "Characteristics of Celestial Bodies",
        description: "Explore the planets and moons of our solar system, comparing their unique characteristics and discovering what makes Earth different.",
        grades: "6-9",
        image: "/Lesson2.png",
        imageAlt: "Earth, the Sun and a planet",
        imageSide: "right",
        activities: [
            "Scale in the Solar System",
            "Scavenger Hunt",
            "Tour Through the Solar System",
            "Asteroid Dodgeball",
            "Ordering the Planets"
        ],
        breadcrumb: "Space Exploration: Characteristics of Celestial Bodies",
        intro: [
            "Take a virtual stroll through the solar system to explore the planets, their moons, and their unique characteristics. Discover how Earth's tilted axis affects the distribution of sunlight, creating seasons and influencing life on our planet. Through an immersive 3D experience, students will explore the relationship between the Earth, Sun, and Moon, uncover the causes of seasons and tides, and compare how planetary tilts affect other worlds."
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
            "Spatial Reasoning"
        ],
        details: [
            {
                title: "Activity Bubbles: Ordering the Planets",
                text: 'In small groups, students will enter "activity bubbles" to engage in an interactive activity that allows them to pick up, move, and place the planets of the solar system in the correct order.',
                objective: "Order the Planets",
                description: "Students will place the order of the planets in our solar system."
            },
            {
                title: "Scale in the Solar System",
                text: 'In this whole-class experience, students will be interacting with the planets of the solar system to create a more "to-scale" representation of their actual distances in space.'
            },
            {
                title: "Earth's Axis and Seasons",
                objective: "Season Identification",
                description: "Students will observe and recognize Earth's relationship with the Sun and how Earth's tilt causes seasons on the surface."
            },
            {
                title: "Scavenger Hunt",
                text: "A question-based scavenger hunt to assess student knowledge of concepts covered.",
                objective: "Describe Characteristics of Celestial Bodies",
                description: "Students will be able to identify celestial bodies according to their characteristics."
            },
            {
                title: "Asteroid Dodgeball",
                text: "Watch out for that asteroid! Get active and play a tag-like game called Asteroid Dodgeball. Divide into teams, hold your blaster, and launch asteroids at the other team! The team with the highest number of tags is the winner."
            }
        ]
    },
    {
        slug: "particle-model",
        title: "Atoms & Molecules:",
        subtitle: "The Particle Model of Matter",
        description: "Go beyond the microscopic level to explore how particles behave and how the particle model helps explain the properties of different substances.",
        grades: "5-7",
        image: "/Lesson3.png",
        imageAlt: "Colorful molecule model",
        imageSide: "right",
        activities: [
            "Particle Model of Matter: Solid",
            "Particle Model of Matter: Gas",
            "Characteristics of Gas Particles",
            "Atom Builder"
        ],
        breadcrumb: "Atoms & Molecules: The Particle Model of Matter",
        intro: [
            "Discover what everything is made of through an immersive exploration of the particle model of matter. Students will examine how particles behave in solids, liquids, and gases, from the crystal lattice of salt to an interactive chamber demonstrating gas behaviour under different conditions. They'll also explore the building blocks of atoms and put their knowledge into practice by constructing atoms using protons, neutrons, and electrons."
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
            "Systems Thinking"
        ],
        details: [
            {
                title: "Particle Model of Matter - Solid",
                objective: "Describing Models of a Solid",
                description: "Students will observe and recognize the particle model of matter and how it can be used to describe a solid."
            },
            {
                title: "Particle Model of Matter - Gas"
            },
            GAS,
            ATOM_BUILDER
        ]
    },
    {
        slug: "modelling-the-atom",
        title: "Atoms & Molecules:",
        subtitle: "Modelling the Atom",
        description: "Shrink down to the atomic scale to explore how matter is structured and how different models help us understand atoms and molecules.",
        grades: "9 - 10",
        image: "/Lesson4.png",
        imageAlt: "Atom model",
        imageSide: "left",
        activities: [
            "Characteristics of Ionic Compounds",
            "Characteristics of Gas Particles",
            "Historic Models of the Atom",
            "Atom Builder",
            "Atomic Appetite"
        ],
        breadcrumb: "Atoms & Molecules: Modelling the Atom",
        intro: [
            "Explore the fascinating structure of atoms and discover how our understanding of them has evolved over time. Students will examine historical atomic models, observe the crystal lattice structure of salt, and discover how ionic compounds form. Through an interactive experience, they'll apply their knowledge of protons, neutrons, and electrons to construct atoms of the first 10 elements of the periodic table."
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
            "Using Models"
        ],
        details: [
            {
                title: "Characteristics of Ionic Compounds",
                text: "Step inside the microscopic world of a salt crystal to explore the structure and formation of ionic compounds. Students will interact with sodium and chlorine atoms, observing how they bond to form sodium chloride. Through a guided lesson, they'll discover what causes ionic bonds to form and explore the common properties of ionic compounds.",
                objective: "Describing Ionic Compounds",
                description: "Students will recognize and describe the formation of ionic compounds and their characteristics."
            },
            GAS,
            {
                title: "Historic Models of the Atom",
                text: "In the particle chamber, students will observe the action of gas particles. From these particles, students will explore the different models of an atom from the billiard ball model to the Bohr model.",
                objective: "Identifying Models of the Atom",
                description: "Students will recognize and describe some models of the atom used through history."
            },
            ATOM_BUILDER,
            {
                title: "Atomic Appetite",
                text: "After some practice in the Atom Builder, students will work together in small groups to build atoms once prompted by the experience. By sharing responsibilities, students can race against time - or their peers - to see how many atoms can be built accurately, gathering points by launching accurately constructed atoms into point-multiplying targets!",
                objective: "Construct Atomic Models",
                description: "Students will accurately construct Bohr models of the first 10 elements on the periodic table."
            }
        ]
    }
];
/* ---------------------------- CARD ---------------------------- */ function LessonCard({ lesson, onOpen }) {
    const imageFirst = lesson.imageSide === "left";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: ()=>onOpen(lesson.slug),
        className: "block w-full cursor-pointer overflow-hidden rounded-xl bg-white text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-600",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `grid grid-cols-1 md:min-h-[230px] ${imageFirst ? "md:grid-cols-[44fr_56fr]" : "md:grid-cols-[56fr_44fr]"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative order-1 h-52 sm:h-64 md:h-auto ${imageFirst ? "md:order-1" : "md:order-2"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: lesson.image,
                            alt: lesson.imageAlt,
                            fill: true,
                            className: "object-cover",
                            sizes: "(min-width: 768px) 340px, 100vw"
                        }, void 0, false, {
                            fileName: "[project]/app/lessons/page.tsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/lessons/page.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `order-2 flex flex-col justify-center px-5 py-6 ${imageFirst ? "md:order-2" : "md:order-1"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display text-lg font-bold leading-tight text-[#0b1220] md:text-[15px]",
                                children: [
                                    lesson.title,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-body mt-0.5 block text-base font-normal leading-tight md:text-[13px]",
                                        children: lesson.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/app/lessons/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/lessons/page.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-sm leading-5 text-gray-800 md:mt-2 md:text-[11px] md:leading-[14px]",
                                children: lesson.description
                            }, void 0, false, {
                                fileName: "[project]/app/lessons/page.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 mb-[10px] text-xs font-semibold text-gray-800 md:mt-3 md:text-[10px]",
                                children: "Grades"
                            }, void 0, false, {
                                fileName: "[project]/app/lessons/page.tsx",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-display text-[32px] font-bold leading-none tracking-wide text-[#0e6f8c] [text-shadow:2px_2px_0_rgba(11,18,32,0.15)]",
                                children: lesson.grades
                            }, void 0, false, {
                                fileName: "[project]/app/lessons/page.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/lessons/page.tsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/lessons/page.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#111827] px-8 py-5 text-center text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-display text-base font-bold md:text-[13px]",
                        children: "Activities:"
                    }, void 0, false, {
                        fileName: "[project]/app/lessons/page.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs leading-5 text-gray-200 md:mt-1.5 md:gap-x-3 md:gap-y-0.5 md:text-[10px] md:leading-[14px]",
                        children: lesson.activities.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: a
                            }, a, false, {
                                fileName: "[project]/app/lessons/page.tsx",
                                lineNumber: 333,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/lessons/page.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/lessons/page.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/lessons/page.tsx",
        lineNumber: 278,
        columnNumber: 5
    }, this);
}
_c = LessonCard;
/* ---------------------------- DETAIL ---------------------------- */ function LessonDetail({ lesson, onBack }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "mx-auto max-w-3xl rounded-xl bg-white px-6 py-10 shadow-sm md:px-14 md:py-14",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "text-xs font-medium md:text-[11px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onBack,
                        className: "hover:underline",
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/app/lessons/page.tsx",
                        lineNumber: 353,
                        columnNumber: 9
                    }, this),
                    " > ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onBack,
                        className: "hover:underline",
                        children: "Explore"
                    }, void 0, false, {
                        fileName: "[project]/app/lessons/page.tsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, this),
                    " > ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: lesson.breadcrumb
                    }, void 0, false, {
                        fileName: "[project]/app/lessons/page.tsx",
                        lineNumber: 361,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/lessons/page.tsx",
                lineNumber: 352,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onBack,
                className: "mt-4 inline-flex items-center gap-2 rounded-md border border-[#0b1220] px-5 py-2 text-sm font-medium transition hover:bg-gray-100 md:text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        children: "‹"
                    }, void 0, false, {
                        fileName: "[project]/app/lessons/page.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this),
                    " Lessons"
                ]
            }, void 0, true, {
                fileName: "[project]/app/lessons/page.tsx",
                lineNumber: 364,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-5 text-[11px] font-bold uppercase tracking-wide text-[#0e8aa8] md:text-[10px]",
                children: "Lesson details"
            }, void 0, false, {
                fileName: "[project]/app/lessons/page.tsx",
                lineNumber: 372,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-display mt-4 text-2xl font-bold leading-tight md:text-3xl",
                children: [
                    lesson.title,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-body block text-lg font-normal md:ml-2 md:inline md:text-2xl",
                        children: lesson.subtitle
                    }, void 0, false, {
                        fileName: "[project]/app/lessons/page.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/lessons/page.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mt-6 aspect-[11/10] w-full overflow-hidden rounded-lg md:aspect-[16/12]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: lesson.image,
                    alt: lesson.imageAlt,
                    fill: true,
                    priority: true,
                    className: "object-cover",
                    sizes: "(min-width: 768px) 640px, 100vw"
                }, void 0, false, {
                    fileName: "[project]/app/lessons/page.tsx",
                    lineNumber: 384,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/lessons/page.tsx",
                lineNumber: 383,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 space-y-4 text-sm leading-6 md:text-[12px] md:leading-5",
                children: lesson.intro.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: p
                    }, p, false, {
                        fileName: "[project]/app/lessons/page.tsx",
                        lineNumber: 396,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/lessons/page.tsx",
                lineNumber: 394,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-display mt-12 text-lg font-bold text-[#0b3a5c]",
                children: "Grades"
            }, void 0, false, {
                fileName: "[project]/app/lessons/page.tsx",
                lineNumber: 400,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-3 flex flex-wrap gap-2",
                children: lesson.gradeList.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "rounded border border-[#0b1220] px-4 py-1.5 text-xs md:text-[11px]",
                        children: g
                    }, g, false, {
                        fileName: "[project]/app/lessons/page.tsx",
                        lineNumber: 405,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/lessons/page.tsx",
                lineNumber: 403,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-display mt-10 text-lg font-bold text-[#0b3a5c]",
                children: "Skills"
            }, void 0, false, {
                fileName: "[project]/app/lessons/page.tsx",
                lineNumber: 414,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-3 flex flex-wrap gap-2",
                children: lesson.skills.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "rounded border border-[#0b1220] px-4 py-1.5 text-xs md:text-[11px]",
                        children: s
                    }, s, false, {
                        fileName: "[project]/app/lessons/page.tsx",
                        lineNumber: 419,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/lessons/page.tsx",
                lineNumber: 417,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-display mt-10 text-xl font-bold text-[#0b3a5c]",
                children: "Activities"
            }, void 0, false, {
                fileName: "[project]/app/lessons/page.tsx",
                lineNumber: 428,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 space-y-8",
                children: lesson.details.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display text-base font-semibold text-[#0e8aa8]",
                                children: a.title
                            }, void 0, false, {
                                fileName: "[project]/app/lessons/page.tsx",
                                lineNumber: 434,
                                columnNumber: 13
                            }, this),
                            a.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm leading-6 md:text-[12px] md:leading-5",
                                children: a.text
                            }, void 0, false, {
                                fileName: "[project]/app/lessons/page.tsx",
                                lineNumber: 438,
                                columnNumber: 15
                            }, this),
                            a.objective && a.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "mt-5 w-full max-w-md text-left text-[11px] md:ml-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "text-[#0b3a5c]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "w-1/3 py-2 pr-4 font-bold",
                                                    children: "Objective"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/lessons/page.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 font-bold",
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/lessons/page.tsx",
                                                    lineNumber: 447,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/lessons/page.tsx",
                                            lineNumber: 445,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/lessons/page.tsx",
                                        lineNumber: 444,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "align-top",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 pr-4 text-[10px]",
                                                    children: a.objective
                                                }, void 0, false, {
                                                    fileName: "[project]/app/lessons/page.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 text-[10px]",
                                                    children: a.description
                                                }, void 0, false, {
                                                    fileName: "[project]/app/lessons/page.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/lessons/page.tsx",
                                            lineNumber: 451,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/lessons/page.tsx",
                                        lineNumber: 450,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/lessons/page.tsx",
                                lineNumber: 443,
                                columnNumber: 15
                            }, this)
                        ]
                    }, `${a.title}-${i}`, true, {
                        fileName: "[project]/app/lessons/page.tsx",
                        lineNumber: 433,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/lessons/page.tsx",
                lineNumber: 431,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/lessons/page.tsx",
        lineNumber: 351,
        columnNumber: 5
    }, this);
}
_c1 = LessonDetail;
function LessonsPage() {
    _s();
    const [activeSlug, setActiveSlug] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const active = lessons.find((l)=>l.slug === activeSlug) ?? null;
    const open = (slug)=>{
        setActiveSlug(slug);
        window.scrollTo({
            top: 0
        });
    };
    const back = ()=>{
        setActiveSlug(null);
        window.scrollTo({
            top: 0
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/lessons/page.tsx",
                lineNumber: 482,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "overflow-x-hidden font-body text-[#0b1220]",
                children: active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "bg-[#DBF1FA] px-4 py-10 md:py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LessonDetail, {
                        lesson: active,
                        onBack: back
                    }, void 0, false, {
                        fileName: "[project]/app/lessons/page.tsx",
                        lineNumber: 487,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/lessons/page.tsx",
                    lineNumber: 486,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "relative isolate overflow-hidden bg-[#111827] px-6 py-16 text-center text-white md:py-28",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/Vr-Helmet.png",
                                    alt: "",
                                    fill: true,
                                    priority: true,
                                    className: "-z-10 object-cover opacity-40",
                                    sizes: "100vw"
                                }, void 0, false, {
                                    fileName: "[project]/app/lessons/page.tsx",
                                    lineNumber: 493,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 -z-10 bg-gradient-to-b from-black/30 to-black/70"
                                }, void 0, false, {
                                    fileName: "[project]/app/lessons/page.tsx",
                                    lineNumber: 501,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-display text-3xl font-medium tracking-wide md:text-4xl",
                                    children: "Learning You Can Step Into"
                                }, void 0, false, {
                                    fileName: "[project]/app/lessons/page.tsx",
                                    lineNumber: 503,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mx-auto mt-5 max-w-[600px] text-sm leading-6 text-gray-200 md:text-[12px] md:leading-5",
                                    children: "Immersive VR lessons that help students explore complex concepts through experience - from planetary science to atomic structure."
                                }, void 0, false, {
                                    fileName: "[project]/app/lessons/page.tsx",
                                    lineNumber: 506,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-display mt-6 text-sm font-extrabold md:text-xs",
                                    children: "Designed for Grades 4–12."
                                }, void 0, false, {
                                    fileName: "[project]/app/lessons/page.tsx",
                                    lineNumber: 511,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/lessons/page.tsx",
                            lineNumber: 492,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "bg-[#DBF1FA] px-4 py-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto max-w-3xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display text-base font-bold md:text-sm",
                                        children: "Explore our Lessons"
                                    }, void 0, false, {
                                        fileName: "[project]/app/lessons/page.tsx",
                                        lineNumber: 519,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 space-y-8 md:space-y-9",
                                        children: lessons.map((lesson)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LessonCard, {
                                                lesson: lesson,
                                                onOpen: open
                                            }, lesson.slug, false, {
                                                fileName: "[project]/app/lessons/page.tsx",
                                                lineNumber: 525,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/lessons/page.tsx",
                                        lineNumber: 523,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/lessons/page.tsx",
                                lineNumber: 518,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/lessons/page.tsx",
                            lineNumber: 517,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/lessons/page.tsx",
                    lineNumber: 490,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/lessons/page.tsx",
                lineNumber: 484,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/lessons/page.tsx",
                lineNumber: 538,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/lessons/page.tsx",
        lineNumber: 481,
        columnNumber: 5
    }, this);
}
_s(LessonsPage, "EWf9RICJSCQd8XEAbuaD8TjUst8=");
_c2 = LessonsPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "LessonCard");
__turbopack_context__.k.register(_c1, "LessonDetail");
__turbopack_context__.k.register(_c2, "LessonsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
const footerColumns = [
    {
        title: "Partners",
        links: [
            {
                label: "Tapvigo",
                href: "https://home.tapvigo.com/"
            },
            {
                label: "TapEducation",
                href: "https://home.tapeducation.ca/"
            },
            {
                label: "Pop-up VR",
                href: "https://popupvr.com/"
            },
            {
                label: "VRCore Education",
                href: "https://www.vrcore-ed.com/"
            }
        ]
    },
    {
        title: "Legal",
        links: [
            {
                label: "Privacy policy",
                href: "/"
            },
            {
                label: "Terms of service",
                href: "/"
            }
        ]
    },
    {
        title: "Contact",
        links: [
            {
                label: "info@vrlearning.ca",
                href: "/"
            },
            {
                label: "Book Now",
                href: "/"
            }
        ]
    }
];
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative overflow-hidden bg-[#0f1424] font-body text-white pb-[40px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_0%,rgba(40,90,130,0.55),transparent_70%),radial-gradient(ellipse_40%_60%_at_80%_110%,rgba(150,60,90,0.45),transparent_70%)]"
            }, void 0, false, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-10 lg:flex-row lg:items-start lg:justify-between lg:px-10 lg:py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "block shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/footer3.png",
                                    alt: "VR Learning",
                                    width: 337,
                                    height: 73,
                                    className: "h-auto w-[220px]"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display text-xl font-normal md:text-[22px]",
                                        children: "Learning Without Limits"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 max-w-[260px] text-xs leading-[14px] tracking-wide font-[family-name:Verdana]",
                                        children: "Take students beyond the classroom with affordable VR field trips."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:gap-x-8",
                        children: footerColumns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[13px] font-semibold tracking-wide",
                                        children: col.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-3 space-y-1 text-[12px] tracking-wide text-gray-100",
                                        children: col.links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: l.href,
                                                    className: "transition hover:text-white hover:underline font-[family-name:Verdana]",
                                                    children: l.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 21
                                                }, this)
                                            }, l.label, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, col.title, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 33,
        columnNumber: 6
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
const navLinks = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/lessons",
        label: "Lessons"
    },
    {
        href: "/pricing",
        label: "Pricing"
    }
];
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "relative w-full bg-[linear-gradient(90deg,#0b1220_0%,#161b2e_40%,#3a2a40_70%,#8a4559_100%)] text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "flex h-[50px] w-full items-center justify-between px-4 sm:px-8 md:grid md:grid-cols-[1fr_auto_1fr] md:px-[7%]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex items-center gap-1.5 justify-self-start",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/footer3.png",
                        alt: "logo",
                        width: 120,
                        height: 40,
                        className: "h-[40px] w-auto"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "font-body hidden items-center gap-4 text-sm font-medium text-white md:flex",
                    children: navLinks.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: l.href,
                                className: "transition-opacity hover:opacity-70",
                                children: l.label
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 31,
                                columnNumber: 15
                            }, this)
                        }, l.href, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-self-end gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/book",
                            className: "font-body inline-flex h-9 items-center justify-center rounded-[4px] bg-[#111827] px-6 text-sm font-medium tracking-wide text-white transition-colors hover:bg-black md:h-[26px] md:w-[150px] md:px-0",
                            children: "Get Started"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                            className: "group md:hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                    "aria-label": "Open menu",
                                    className: "flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-md text-white ring-1 ring-white/15 [&::-webkit-details-marker]:hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            "aria-hidden": true,
                                            className: "group-open:hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M4 7h16M4 12h16M4 17h16"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 64,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            "aria-hidden": true,
                                            className: "hidden group-open:block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6 6l12 12M18 6L6 18"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "absolute inset-x-0 top-full z-50 flex flex-col bg-[#0b1220] px-4 py-2 shadow-lg sm:px-8",
                                    children: navLinks.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "border-b border-white/10 last:border-b-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: l.href,
                                                className: "block py-4 text-lg font-semibold text-white transition-opacity hover:opacity-70",
                                                children: l.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, this)
                                        }, l.href, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0sqiftq._.js.map