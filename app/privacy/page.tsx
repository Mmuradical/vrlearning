import type { Metadata } from "next";
import Footer from "@/components/Footer"; // import Header from "@/components/Header"; //

export const metadata: Metadata = {
  title: "Privacy Policy | VR Learning",
};

const SITE = "https://www.vrlearning.ca/";
const EMAIL = "info@vrlearning.ca";

const intro = `“VR Learning” is owned and operated by VR Learning Inc. (“us,” “we,” or “our”). This privacy policy (the “Privacy Policy”) is intended to inform you of our policies and practices regarding the collection, use, and disclosure of any information you submit to us through ${SITE}. This includes “Personal Information,” which is information about you that is personally identifiable, such as your name, email address, user ID number, and other non-public information associated with the foregoing, as well as “Anonymous Information,” which is information that is not associated with or linked to your Personal Information and does not permit the identification of individual persons.`;

const sections: { title: string; paragraphs: string[] }[] = [
  {
    title: "User Consent",
    paragraphs: [
      `By accessing or otherwise using ${SITE}, you agree to the terms and conditions of this Privacy Policy and the associated Terms of Service. You expressly consent to the processing of your Personal Information and Anonymous Information according to this Privacy Policy.`,
      `Your Personal Information may be processed by us in the country where it was collected as well as other countries (including the United States) where laws regarding processing of Personal Information may be less stringent than the laws in your country.`,
    ],
  },
  {
    title: "Regarding Children",
    paragraphs: [
      `Children under the age of 13 are not permitted to use ${SITE}, and we do not intentionally collect or maintain Personal Information from those who are under 13 years old. Protecting the privacy of children is very important to us. Thus, if we obtain actual knowledge that a user is under 13, we will take steps to remove that user’s Personal Information from our databases. We recommend that children between the ages of 13 and 18 obtain their parent’s permission before submitting information over the internet. By using VR Learning, you are representing that you are at least 18 years old, or that you are at least 13 years old and have your parents’ permission to use ${SITE}.`,
    ],
  },
  {
    title: "Collection and Use of Information",
    paragraphs: [
      `In general, we collect Personal Information that you submit to us voluntarily through ${SITE}. We also collect information that you submit in the process of creating or editing your account and user profile on ${SITE}. For example, our registration and login process requires you to provide us with your name, valid email address, and a password of your choice.`,
      `When you personalize your profile and use the features of ${SITE}, we will collect any information you voluntarily provide, and we may also request optional information to support your use of ${SITE}, such as your year of birth, gender, and other demographic information. We collect information in the form of content that you submit during your use of ${SITE}, such as photos, comments, ratings, and other information you choose to submit.`,
      `We may also collect information about you and your friends from any social network you may have connected from in order to provide you with a more personalized experience. For instance, we may collect your user ID or profile information that you have permitted to be displayed through ${SITE} in order to display you as a friend or in association with your profile and collections.`,
      `When you order our products or services, you will need to submit your credit card or other payment information so that our service providers can process your payment for those products and services. If you choose to sign up to receive information about products or services that may be of interest to you, we will collect your email address and all related information.`,
      `Additionally, we collect any information that you voluntarily enter, including Personal Information, into any postings, comments, or forums within the VR Learning community.`,
    ],
  },
  {
    title: "Personal Information from Other Sources",
    paragraphs: [
      `We may receive Personal Information about you from other sources with which you have registered, companies with which we have partnered (collectively, “Partners”), or other third parties. We may associate this information with the other Personal Information we have collected about you.`,
    ],
  },
  {
    title: "E-mail and E-mail Addresses",
    paragraphs: [
      `If you send an email to us, or fill out our “Feedback” form through ${SITE}, we will collect your email address and the full content of your email, including attached files and other information you provide. We may use and display your full name and email address when you send an email notification to a friend through ${SITE} or the social network from which you have connected to VR Learning, such as in an invitation or when sharing your content.`,
      `Additionally, we use your email address to contact you on behalf of your friends, such as when someone sends you a personal message, or for notifications from a social network or other website with which you have registered to receive such notifications. We may use this email address to contact you for notifications of limited-edition shop sales and other related information. You may indicate your preference to stop receiving further promotional communications as detailed below.`,
    ],
  },
  {
    title: "Information Collected Via Technology",
    paragraphs: [
      `As you use ${SITE}, certain information may also be passively collected and stored on our or our service providers’ server logs, including your Internet protocol address, browser type, and operating system.`,
      `We also use cookies and navigational data such as Uniform Resource Locators (URLs) to gather information regarding the date and time of your visit and the information for which you searched and viewed, or on which advertisements displayed on VR Learning you clicked. This information is collected to make VR Learning and its solutions more useful to you and to tailor the experience to meet your interests and needs.`,
      `An IP address is a number automatically assigned to your computer when you use the Internet. We or our service providers may track it when you access ${SITE}.`,
      `Cookies are small pieces of information that a website sends to your computer’s hard drive while you are viewing a website.`,
      `We may use session and persistent cookies to provide a more personal and interactive experience with VR Learning. You may remove persistent cookies or disable cookies through your browser, but some aspects of ${SITE} may not work properly.`,
      `Advertisers and ad servers may use cookies or web beacons to monitor information related to advertisements. This Privacy Policy does not cover the privacy practices of advertisers or ad servers.`,
    ],
  },
  {
    title: "Google Analytics and Cookies",
    paragraphs: [
      `We use Google Analytics to count visits to ${SITE}, but only if you press “Accept” on the cookie banner. Until you do, no Google script loads and nothing is sent to Google. If you press “Decline”, or make no choice, your visit is not counted.`,
      `When you accept, Google Analytics records the pages you view, the page you came from, how long you stay and how far you scroll, links to other websites you follow, which steps of Book Now you reach, your general location (country and region, worked out from your IP address), and your type of device, browser and language. Page addresses are sent without anything after “?” or “#”, apart from “utm_” campaign tags. We never send your name, email address, phone number, school, booking details or anything you type into a form. Google signals and ad personalisation are switched off, and we do not use this information for advertising.`,
      `Cookies: “vrlearning_cookie_choice” is set by us and remembers your choice for 12 months, after which we ask again. “_ga” and “_ga_” followed by a code are set by Google Analytics only after you accept, so that it can tell one visit from the next; they expire after 13 months. Google Analytics keeps the information it collects for 14 months.`,
      `Google LLC processes this information for us as our service provider and may store and process it outside Canada, including in the United States. Google explains how it uses information from websites that use its services at https://policies.google.com/technologies/partner-sites. The reports we keep in our own systems hold only totals, such as the number of visitors per day, never information about one person.`,
      `You can change your choice at any time with “Cookie settings” at the bottom of every page. If you change to “Decline”, we stop Google Analytics and delete its cookies from your browser. You can also block or delete cookies in your browser, or use Google’s opt-out add-on at https://tools.google.com/dlpage/gaoptout.`,
    ],
  },
  {
    title: "Use and Disclosure of Information",
    paragraphs: [
      `Except as otherwise stated in this Privacy Policy, we do not generally sell, trade, rent, or share the Personal Information that we collect with third parties unless you ask or authorize us to do so.`,
      `Personal Information you submit is used to provide and improve ${SITE}, tailor its features, performance, and support, and offer additional information, opportunities, promotions, and functionality from us, our partners, or our advertisers at your request.`,
      `We may provide Personal Information to third-party service providers that work on our behalf to provide services such as email, data analysis, marketing assistance, payment processing, and customer service. We require those providers not to use the information except as necessary to provide the relevant services.`,
      `We may share Personal Information with partners with whom we have a co-branding or promotional relationship, or other third parties about whom you are notified and do not request to opt out. This Privacy Policy does not cover those third parties’ use of your information.`,
      `We may share information with future subsidiaries, joint ventures, or companies under common control that agree to honor this Privacy Policy. Personal Information may also be among the assets transferred in a merger, acquisition, or sale.`,
      `We may disclose Personal Information in good faith to comply with relevant laws or respond to subpoenas or warrants, or to protect and defend our rights or property, you, or third parties.`,
    ],
  },
  {
    title: "The Ability of Others to View Your Information",
    paragraphs: [
      `Helping you protect your information is a vital part of our mission. It is up to you to make sure you are comfortable with the information you provide and publish.`,
      `Information you post or provide through VR Learning, such as your name, profile, comments, posts, and ratings, may be shared with other users and posted on publicly available portions of ${SITE}. Information disclosed publicly may be collected and used by others. We recommend that you use caution when giving personal information to others in public forums.`,
    ],
  },
  {
    title: "Third Party Sites and Advertising",
    paragraphs: [
      `${SITE} may contain links to other websites. We are not responsible for the privacy practices or content of those websites, and we encourage users to read each site’s privacy statement.`,
      `Access to third-party information or links is provided for convenience and does not signify our endorsement of those third parties, their products, services, locations, or content.`,
    ],
  },
  {
    title: "Your Choices Regarding Your Personal Information",
    paragraphs: [
      `We offer choices regarding the collection, use, and sharing of your Personal Information. When you receive promotional communications, you may opt out by following the unsubscribe instructions in the promotional email or by contacting us directly.`,
      `Despite your email preferences, we may send administrative emails, including confirmations and notices of updates to this Privacy Policy.`,
      `You may change profile information through your profile settings and may request deletion of Personal Information by contacting ${EMAIL}. We may be required by law or otherwise to retain information for a period of time. Deleted Personal Information may remain in our archives after it is removed from the active database.`,
    ],
  },
  {
    title: "Feedback",
    paragraphs: [
      `If you provide feedback, we may use and disclose it for any purpose provided that we do not associate it with your Personal Information. Information contained in feedback will be treated according to this Privacy Policy.`,
      `We may use feedback for marketing purposes or to add to or modify our services without paying royalties or other compensation.`,
    ],
  },
  {
    title: "Security",
    paragraphs: [
      `We are committed to protecting the security of your Personal Information. We use industry-standard security technologies and procedures to help protect it from unauthorized access, use, or disclosure. Even with these steps, no company can fully eliminate security risks associated with Personal Information.`,
    ],
  },
  {
    title: "Contact and Revisions",
    paragraphs: [
      `If you have questions or concerns about our Privacy Policy, please contact us at ${EMAIL}.`,
      `This Privacy Policy is subject to occasional revision at our discretion. If we make substantial changes in how we use Personal Information, we will post an alert on this page. If you object to any change, you must cease using VR Learning. Continued use after notice indicates acknowledgement of the change and agreement to be bound by it.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <main className="bg-white font-body text-[#0f1424]">
        {/* top gradient bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#0f1424] via-[#1d4ed8] to-[#1a85a0]" />

        <div className="mx-auto max-w-3xl px-6 pb-20 pt-10 md:pt-14">
          <h1 className="font-display text-4xl font-bold tracking-tight">
            Privacy Policy
          </h1>

          <p className="mt-5 text-[13px] leading-6">{intro}</p>

          {sections.map((s) => (
            <section
              key={s.title}
              className="mt-8 border-t border-gray-200 pt-6"
            >
              <h2 className="font-display text-lg font-semibold">{s.title}</h2>
              <div className="mt-3 space-y-3">
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="text-[13px] leading-6 break-words">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}