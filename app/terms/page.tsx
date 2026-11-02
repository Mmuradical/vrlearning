import type { Metadata } from "next";
import Footer from "@/components/Footer"; 

export const metadata: Metadata = {
  title: "Terms and Conditions | VR Learning",
};

const sections: {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  after?: string;
}[] = [
  {
    title: "1. Terms",
    paragraphs: [
      `By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark law.`,
    ],
  },
  {
    title: "2. Use License",
    paragraphs: [
      `Permission is granted to temporarily download one copy of the materials (information or software) on the VR Learning web site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:`,
    ],
    bullets: [
      `modify or copy the materials;`,
      `use the materials for any commercial purpose, or for any public display (commercial or non-commercial);`,
      `attempt to decompile or reverse engineer any software contained on the VR Learning web site;`,
      `remove any copyright or other proprietary notations from the materials; or`,
      `transfer the materials to another person or “mirror” the materials on any other server.`,
    ],
    after: `This license shall automatically terminate if you violate any of these restrictions and may be terminated by VR Learning at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.`,
  },
  {
    title: "3. Disclaimer",
    paragraphs: [
      `The materials on the VR Learning web site are provided “as is”. VR Learning makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, VR Learning does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.`,
    ],
  },
  {
    title: "4. Limitations",
    paragraphs: [
      `In no event shall VR Learning or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on the VR Learning Internet site, even if VR Learning or a VR Learning authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.`,
    ],
  },
  {
    title: "5. Revisions and Errata",
    paragraphs: [
      `The materials appearing on the VR Learning web site could include technical, typographical, or photographic errors. VR Learning does not warrant that any of the materials on its web site are accurate, complete, or current. VR Learning may make changes to the materials contained on its web site at any time without notice. VR Learning does not, however, make any commitment to update the materials.`,
    ],
  },
  {
    title: "6. Links",
    paragraphs: [
      `VR Learning has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by VR Learning of the site. Use of any such linked web site is at the user’s own risk.`,
    ],
  },
  {
    title: "7. Site Terms of Use Modifications",
    paragraphs: [
      `VR Learning may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.`,
    ],
  },
  {
    title: "8. Governing Law",
    paragraphs: [
      `Any claim relating to the VR Learning web site shall be governed by the laws of the Province of Alberta without regard to its conflict of law provisions.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <main className="bg-white font-body text-[#0f1424]">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#0f1424] via-[#1d4ed8] to-[#1a85a0]" />

        <div className="mx-auto max-w-3xl px-6 pb-20 pt-10 md:pt-14">
          <h1 className="font-display text-4xl font-bold tracking-tight">
            Terms and Conditions
          </h1>

          {sections.map((s, idx) => (
            <section
              key={s.title}
              className={
                idx === 0 ? "mt-6" : "mt-8 border-t border-gray-200 pt-6"
              }
            >
              <h2 className="font-display text-lg font-semibold">{s.title}</h2>
              <div className="mt-3 space-y-3">
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="text-[13px] leading-6 break-words">
                    {p}
                  </p>
                ))}

                {s.bullets && (
                  <ul className="list-disc space-y-2 pl-6 text-[13px] leading-6">
                    {s.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}

                {s.after && (
                  <p className="text-[13px] leading-6 break-words">{s.after}</p>
                )}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}