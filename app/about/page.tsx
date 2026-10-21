import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-[#F8F7F3]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Our Team
            </p>

            <h1 className="max-w-4xl text-5xl font-bold md:text-7xl">
              The people behind TAP Education.
            </h1>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-6 py-24">

            {/* LYNDSAY */}

            <article className="grid gap-12 border-b border-gray-200 pb-20 md:grid-cols-[300px_1fr]">
              <div className="aspect-[4/5] rounded-3xl bg-gray-200" />

              <div>
                <h2 className="text-3xl font-bold">
                  Test Wilson
                </h2>

                <p className="mt-2 font-medium text-gray-500">
                  Leadership
                </p>

                <div className="mt-8 space-y-5 leading-8 text-gray-600">
                  <p>
                    Test brings experience across education, community
                    development and innovative learning initiatives.
                  </p>

                  <p>
                    Her work focuses on creating accessible opportunities that
                    connect learners and communities with emerging ideas,
                    technology and meaningful educational experiences.
                  </p>
                </div>
              </div>
            </article>

            {/* MICHAEL */}

            <article className="grid gap-12 py-20 md:grid-cols-[300px_1fr]">
              <div className="aspect-[4/5] rounded-3xl bg-gray-200" />

              <div>
                <h2 className="text-3xl font-bold">
                  Michael Avis
                </h2>

                <p className="mt-2 font-medium text-gray-500">
                  Education & Technology
                </p>

                <div className="mt-8 space-y-5 leading-8 text-gray-600">
                  <p>
                    Michael has more than 25 years of experience spanning
                    education, technology, curriculum development and digital
                    literacy.
                  </p>

                  <p>
                    His work focuses on helping learners and educators
                    understand technology and use it in practical, meaningful
                    and responsible ways.
                  </p>
                </div>
              </div>
            </article>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}