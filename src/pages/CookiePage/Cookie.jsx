import React from "react";
import Header from "../../components/common/Header";
import PrivacySection from "../../components/AllPrivacyComponents/PrivacySection";

const cookieSections = [
  {
    id: 1,
    title: "What Are Cookies?",
    content: "Cookies are text files stored on your device that help enhance your browsing experience. They remember your preferences, login status, and site activity, making your visits more efficient and personalized."
  },
  {
    id: 2,
    title: "How Beauté Uses Cookies",
    content: "We use cookies to understand user behavior, save your preferences, and enhance platform performance. Some cookies are essential, while others help us personalize your experiences."
  },
  {
    id: 3,
    title: "Types of Cookies We Use",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Essential:</strong> Enable core features like login and navigation. Example: Session cookies.</li>
        <li><strong>Performance:</strong> Monitor how users interact to improve functionality. Example: Analytics cookies.</li>
        <li><strong>Functional:</strong> Remember your settings and choices. Examples: Language or theme preferences.</li>
        <li><strong>Marketing:</strong> Deliver themed content and promotions. Example: Social media cookies.</li>
      </ul>
    )
  },
  {
    id: 4,
    title: "Managing or Disabling Cookies",
    content: "You can manage cookie preferences anytime through your browser settings. Disabling cookies may limit some features of Beauté Enterprise. Visit your browser's 'Privacy Settings' to control cookies."
  },
  {
    id: 5,
    title: "Third-Party Cookies",
    content: "We may use trusted third-party services (like analytics or social media integration) that place their own cookies. These partners follow privacy and data protection standards."
  },
  {
    id: 6,
    title: "Updates to This Cookie Policy",
    content: "We may revise this policy occasionally to reflect new features or compliance updates. Check back regularly to stay informed."
  },
  {
    id: 7,
    title: "Have Questions About Cookies?",
    content: "Our team is here to help. Email us at charly@beauiddeveloper.com"
  }
];

export default function Cookie() {
  return (
    <div>
      <Header
        title="Our Cookie Policy"
        subtitle="Beauté Enterprise uses cookies to enhance your experience, personalize content, and analyze how you interact with our platform."
        routeTitle="Cookie Policy"
      />

      <div className="bg-gray-100 2xl:w-9/12 w-11/12 my-20 mx-auto p-6 sm:p-10 md:p-14 rounded-lg shadow-sm">
        {cookieSections.map((section) => (
          <PrivacySection
            key={section.id}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </div>
  );
}