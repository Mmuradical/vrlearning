"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ------------------------------------------------------------------ */
/* DATA                                                               */
/* ------------------------------------------------------------------ */

const lessons = [
  {
    id: "iss",
    title: "ISS:",
    subtitle: "Curiosity in Orbit",
    grades: "4-12",
    image: "/Lesson1.png",
  },
  {
    id: "space-exploration",
    title: "Space Exploration:",
    subtitle: "Characteristics of Celestial Bodies",
    grades: "6-9",
    image: "/lesson2.png",
  },
  {
    id: "particle-model",
    title: "Atoms & Molecules:",
    subtitle: "The Particle Model of Matter",
    grades: "5-7",
    image: "/lesson3.png",
  },
  {
    id: "modelling-the-atom",
    title: "Atoms & Molecules:",
    subtitle: "Modelling the Atom",
    grades: "9-10",
    image: "/lesson4.png",
  },
];

const stepInfo = [
  { title: "Lessons" },
  { title: "Contact Info" },
  { title: "Group Details" },
  { title: "Preferred Date" },
];

const PANEL_TEXT =
  "Immersive VR lessons that bring complex concepts to life, from planets to atoms.";

const BOOKING_EMAIL = "mdadashev13@gmail.com";

const contacts = [
  {
    title: "Message Us",
    value: "info@vrlearning.ca",
    href: "mailto:info@vrlearning.ca",
    icon: (
      <path
        d="M4 6h16v12H4zM4 7l8 6 8-6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Instagram",
    value: "vr_learn",
    href: "https://www.instagram.com/vr_learn",
    icon: (
      <path d="M6 9v9M6 6v.01M10 18v-9M10 13c0-2 1.5-4 4-4s4 1.5 4 4v5" />
    ),
  },
  {
    title: "Address",
    value: "Toronto, Ontario",
    href: "https://www.google.com/maps/place/Toronto,+ON,+Canada",
    icon: (
      <>
        <path d="M12 21s-6-5.2-6-10a6 6 0 1112 0c0 4.8-6 10-6 10z" />
        <circle cx="12" cy="11" r="2" />
      </>
    ),
  },
];

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/* ------------------------------------------------------------------ */
/* SMALL PIECES                                                       */
/* ------------------------------------------------------------------ */

const inputClass =
  "w-full rounded-md border border-[#0b1220] bg-white px-3 py-2 text-[11px] text-[#0b1220] outline-none placeholder:text-[#0b1220] focus:border-[#1a85a0] focus:ring-1 focus:ring-[#1a85a0]";

function OutlineButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="font-display rounded-md border border-[#0b1220] bg-white px-7 py-2 text-xs font-bold text-[#0b1220] transition hover:bg-gray-100 md:text-[13px]"
    >
      {children}
    </button>
  );
}

function PrimaryButton({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="font-display min-w-[100px] rounded-md border border-[#0b1220] bg-[#1a85a0] px-7 py-2 text-xs font-bold text-white shadow-[2px_3px_0_rgba(11,18,32,0.35)] transition hover:bg-[#156d84] disabled:cursor-not-allowed disabled:opacity-50 md:text-[13px]"
    >
      {children}
    </button>
  );
}

function SidePanel({ step }: { step: number }) {
  return (
    <div className="relative flex h-full min-h-[360px] flex-col items-center overflow-hidden bg-[linear-gradient(to_bottom,#a96a73_0%,#4a3f60_14%,#0d2b4d_38%,#08142a_70%,#050c18_100%)] px-8 pt-[22%] text-center text-white md:min-h-[520px]">
      <h2 className="font-display text-2xl font-bold tracking-wide">
        {stepInfo[step].title}
      </h2>

      <p className="font-display mt-5 max-w-[240px] text-sm font-semibold leading-5 text-white md:text-[15px]">
        {PANEL_TEXT}
      </p>

      <ol
        className="mt-[18%] flex items-center gap-[22px]"
        aria-label="Booking steps"
      >
        {stepInfo.map((s, i) => {
          const done = i < step;
          const current = i === step;

          return (
            <li
              key={s.title}
              aria-current={current ? "step" : undefined}
              className={`font-display flex h-[19px] w-[19px] items-center justify-center rounded-full text-[10px] font-bold ${
                current || done
                  ? "bg-[#1a85a0] text-white"
                  : "bg-white text-[#0b1220]"
              }`}
            >
              {i + 1}
            </li>
          );
        })}
      </ol>

      {/* logo */}
      <Image
        src="/footer1.png"
        alt="VR Learning"
        width={64}
        height={60}
        className="absolute bottom-[16%] right-4 h-auto w-16 mr-[10px]"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* STEP 1: LESSONS                                                    */
/* ------------------------------------------------------------------ */

function LessonStep({
  selected,
  onToggle,
}: {
  selected: string[];
  onToggle: (id: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4">
      {lessons.map((l) => {
        const active = selected.includes(l.id);

        return (
          <div
            key={l.id}
            role="checkbox"
            aria-checked={active}
            tabIndex={0}
            onClick={() => onToggle(l.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onToggle(l.id);
              }
            }}
            className={`cursor-pointer overflow-hidden rounded-[10px] border bg-white shadow-[0_2px_6px_rgba(0,0,0,0.18)] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1a85a0] ${
              active ? "border-[#0b1220]" : "border-gray-300"
            }`}
          >
            {/* image */}
            <div className="relative h-[84px] w-full md:h-[100px]">
              <Image
                src={l.image}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 768px) 190px, 45vw"
              />

              <span
                aria-hidden
                className={`absolute right-2 top-2 flex h-3.5 w-3.5 items-center justify-center rounded-full border ${
                  active
                    ? "border-green-600 bg-green-500"
                    : "border-gray-300 bg-white"
                }`}
              >
                {active && (
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12l5 5 9-10" />
                  </svg>
                )}
              </span>
            </div>

            {/* text */}
            <div className="font-display px-2 pb-2.5 pt-2 text-center">
              <p
                className={`text-[10px] leading-[15px] md:text-[11px] ${
                  active ? "text-black" : "text-[#6b7280]"
                }`}
              >
                <span className="block font-bold">{l.title}</span>
                <span className="block">{l.subtitle}</span>
              </p>

              <p
                className={`mt-1.5 text-[10px] font-bold md:text-[11px] ${
                  active ? "text-black" : "text-[#6b7280]"
                }`}
              >
                Grades{" "}
                <span className="ml-1 text-[#0e6f8c]">{l.grades}</span>
              </p>
            </div>

            {/* read more bar */}
            <Link
              href="/lessons"
              onClick={(e) => e.stopPropagation()}
              className={`font-display block py-2 text-center text-[10px] font-bold text-white md:text-[11px] ${
                active ? "bg-[#111827]" : "bg-[#9ca3af]"
              }`}
            >
              Read more
            </Link>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* STEP 4: CALENDAR                                                   */
/* ------------------------------------------------------------------ */

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function toKey(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(d.getDate()).padStart(2, "0")}`;
}

function Calendar({
  value,
  onChange,
}: {
  value: string | null;
  onChange: (key: string) => void;
}) {
  const today = startOfDay(new Date());

  const [view, setView] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const year = view.getFullYear();
  const month = view.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const offset = (new Date(year, month, 1).getDay() + 6) % 7;

  const prevDays = new Date(year, month, 0).getDate();

  const cells: { date: Date; current: boolean }[] = [];

  for (let i = offset - 1; i >= 0; i--) {
    cells.push({
      date: new Date(year, month - 1, prevDays - i),
      current: false,
    });
  }

  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({
      date: new Date(year, month, d),
      current: true,
    });
  }

  while (cells.length % 7 !== 0) {
    const n = cells.length - (offset + daysInMonth) + 1;

    cells.push({
      date: new Date(year, month + 1, n),
      current: false,
    });
  }

  const canGoPrev =
    year > today.getFullYear() ||
    (year === today.getFullYear() && month > today.getMonth());

  return (
    <div className="mx-auto max-w-[260px]">
      <div className="flex items-center justify-between rounded-md border border-gray-100 px-2 py-1 shadow-sm">
        <button
          type="button"
          aria-label="Previous month"
          disabled={!canGoPrev}
          onClick={() => setView(new Date(year, month - 1, 1))}
          className="flex h-5 w-5 items-center justify-center rounded border border-gray-200 text-gray-500 disabled:opacity-30"
        >
          &lsaquo;
        </button>

        <span className="text-[10px] font-semibold text-gray-600">
          {MONTHS[month]} {year}
        </span>

        <button
          type="button"
          aria-label="Next month"
          onClick={() => setView(new Date(year, month + 1, 1))}
          className="flex h-5 w-5 items-center justify-center rounded border border-gray-200 text-gray-500"
        >
          &rsaquo;
        </button>
      </div>

      <div className="mt-3 grid grid-cols-7 gap-y-1 text-center text-[9px]">
        {WEEKDAYS.map((w) => (
          <span key={w} className="py-1 font-semibold text-gray-400">
            {w}
          </span>
        ))}

        {cells.map(({ date, current }) => {
          const key = toKey(date);
          const past = date < today;
          const isSelected = value === key;
          const isToday = toKey(today) === key;

          return (
            <button
              key={key}
              type="button"
              disabled={past || !current}
              onClick={() => onChange(key)}
              aria-pressed={isSelected}
              className={`mx-auto flex h-6 w-6 items-center justify-center rounded text-[10px] transition ${
                isSelected
                  ? "bg-[#1a85a0] font-bold text-white"
                  : isToday
                  ? "border border-indigo-400 text-[#0b1220]"
                  : current && !past
                  ? "text-[#0b1220] hover:bg-gray-100"
                  : "text-gray-300"
              } disabled:cursor-default`}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* BOOKING WIDGET                                                     */
/* ------------------------------------------------------------------ */

type FormState = {
  lessons: string[];
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  grades: string;
  students: string;
  notes: string;
  date: string | null;
};

const emptyForm: FormState = {
  lessons: [],
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  grades: "",
  students: "",
  notes: "",
  date: null,
};

function BookingWidget() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({
      ...f,
      [key]: value,
    }));
  };

  const toggleLesson = (id: string) => {
    setForm((f) => ({
      ...f,
      lessons: f.lessons.includes(id)
        ? f.lessons.filter((x) => x !== id)
        : [...f.lessons, id],
    }));
  };

  const emailOk = /^\S+@\S+\.\S+$/.test(form.email);

  const canNext = [
    form.lessons.length > 0,
    form.fullName.trim() !== "" && emailOk,
    form.grades.trim() !== "" && form.students.trim() !== "",
    !!form.date,
  ][step];

  const next = () => setStep((s) => Math.min(s + 1, 3));

  const back = () => setStep((s) => Math.max(s - 1, 0));

  /* -------------------------------------------------------------- */
  /* SEND EMAIL: FormSubmit, fallback to mailto. No PHP / no API.   */
  /* -------------------------------------------------------------- */

  const submit = async () => {
    setSending(true);
    setError(null);

    const selectedLessons = lessons
      .filter((l) => form.lessons.includes(l.id))
      .map((l) => `${l.title} ${l.subtitle}`)
      .join(", ");

    const fields: Record<string, string> = {
      "Full Name": form.fullName,
      Email: form.email,
      "Phone Number": form.phone,
      Organization: form.organization,
      "Grade Level(s)": form.grades,
      "Number of Students": form.students,
      "Preferred Date": form.date ?? "",
      Lessons: selectedLessons,
      Notes: form.notes || "No additional notes.",
    };

    const subject = `New VR Learning Booking Request - ${form.fullName}`;

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${BOOKING_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: subject,
            _template: "table",
            _captcha: "false",
            ...fields,
          }),
        }
      );

      const data = await response.json().catch(() => null);

      if (!response.ok || data?.success === "false") {
        throw new Error(data?.message || "send failed");
      }

      setSubmitted(true);
    } catch {
      // Fallback: open the user's mail app with a prefilled email
      const body = Object.entries(fields)
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n");

      window.location.href = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  const reset = () => {
    setForm(emptyForm);
    setStep(0);
    setSubmitted(false);
    setError(null);
  };

  const chosenLessons = lessons.filter((l) => form.lessons.includes(l.id));

  return (
    <div className="mx-auto grid max-w-[960px] overflow-hidden rounded-2xl border border-[#0b1220] bg-white md:grid-cols-2">
      {/* LEFT */}
      <div className="order-2 flex min-h-[340px] flex-col px-5 py-6 md:order-1 md:px-[42px] md:py-10">
        {submitted ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <h3 className="font-display text-sm font-bold">
              Request sent. Thank you!
            </h3>

            <p className="mt-2 max-w-[260px] text-[11px] leading-4 text-gray-600">
              A member of our team will contact you at {form.email} to
              confirm the date, time, and details
              {chosenLessons.length > 0
                ? ` for ${chosenLessons
                    .map((l) => `“${l.title} ${l.subtitle}”`)
                    .join(", ")}`
                : ""}
              .
            </p>

            <div className="mt-6">
              <OutlineButton onClick={reset}>Book another visit</OutlineButton>
            </div>
          </div>
        ) : (
          <>
            {/* STEP 1 */}
            {step === 0 && (
              <LessonStep selected={form.lessons} onToggle={toggleLesson} />
            )}

            {/* STEP 2 */}
            {step === 1 && (
              <div className="flex flex-1 flex-col">
                <h3 className="font-display text-center text-[13px] font-bold">
                  Let us know how to reach you.
                </h3>

                <div className="mt-6 space-y-4">
                  <input
                    className={inputClass}
                    placeholder="Full Name"
                    autoComplete="name"
                    value={form.fullName}
                    onChange={(e) => set("fullName", e.target.value)}
                  />

                  <input
                    className={inputClass}
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                  />

                  <input
                    className={inputClass}
                    type="tel"
                    placeholder="Phone Number"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                  />

                  <input
                    className={inputClass}
                    placeholder="School or organization name"
                    autoComplete="organization"
                    value={form.organization}
                    onChange={(e) => set("organization", e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 2 && (
              <div className="flex flex-1 flex-col">
                <h3 className="font-display text-center text-[13px] font-bold">
                  Let us know about your group.
                </h3>

                <div className="mt-6 space-y-4">
                  <input
                    className={inputClass}
                    placeholder="Grade level(s)"
                    value={form.grades}
                    onChange={(e) => set("grades", e.target.value)}
                  />

                  <input
                    className={inputClass}
                    type="number"
                    min={1}
                    placeholder="Number of students"
                    value={form.students}
                    onChange={(e) => set("students", e.target.value)}
                  />

                  <textarea
                    className={`${inputClass} h-20 resize-none`}
                    placeholder="Additional notes (optional)"
                    value={form.notes}
                    onChange={(e) => set("notes", e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {step === 3 && (
              <div className="flex flex-1 flex-col">
                <Calendar
                  value={form.date}
                  onChange={(key) => set("date", key)}
                />

                <p className="mt-4 text-center text-[9px] font-semibold leading-3 text-[#0b1220]">
                  Your booking is subject to availability.
                  <br />
                  A member of our team will contact you to confirm the date,
                  time, and details.
                </p>
              </div>
            )}

            {error && (
              <p
                role="alert"
                className="mt-4 text-center text-[10px] font-semibold text-red-600"
              >
                {error}
              </p>
            )}

            {/* BUTTONS */}
            <div className="mt-auto flex items-center justify-between pt-8">
              {step > 0 ? (
                <OutlineButton onClick={back}>Back</OutlineButton>
              ) : (
                <span />
              )}

              {step < 3 ? (
                <PrimaryButton onClick={next} disabled={!canNext}>
                  Next
                </PrimaryButton>
              ) : (
                <PrimaryButton onClick={submit} disabled={!canNext || sending}>
                  {sending ? "Sending..." : "Submit a Request"}
                </PrimaryButton>
              )}
            </div>
          </>
        )}
      </div>

      {/* RIGHT: panel stretches to the full height of the card */}
      <div className="order-1 md:order-2">
        <SidePanel step={submitted ? 3 : step} />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function BookingPage() {
  return (
    <>
      <Header />

      <main className="overflow-x-hidden font-body text-[#0b1220]">
        <section
          id="book"
          className="bg-[#DBF1FA] px-4 py-10 sm:px-6 md:py-14"
        >
          <BookingWidget />
        </section>

        <section
          id="contact"
          className="bg-white px-4 py-12 sm:px-6 md:py-16"
        >
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
            {contacts.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="flex items-center gap-3 transition hover:opacity-80"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-200 text-[#02304f]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden
                  >
                    {c.icon}
                  </svg>
                </span>

                <span className="min-w-0">
                  <span className="block text-[10px] font-bold">
                    {c.title}
                  </span>

                  <span className="block truncate text-[8px]">{c.value}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}