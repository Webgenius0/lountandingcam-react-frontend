import React from 'react'
import Header from '../../components/common/Header'
import PrivacySection from '../../components/AllPrivacyComponents/PrivacySection'

const policySections = [
  {
    id: 1,
    title: 'Information We Collect',
    content: 'We collect personal information such as your name, email address, and account preferences to provide a better experience. We may also collect non-personal data like browser type, device, and interaction statistics for improving our services.',
  },
  {
    id: 2,
    title: 'How We Use Your Information',
    content: 'Your data helps us personalize your experience, enhance product features, and communicate important updates. We never sell or misuse your information; it\'s used solely to support your experience with Beauté Enterprise.',
  },
  {
    id: 3,
    title: 'Cookies & Tracking',
    content: 'We use cookies to improve site performance and remember your preferences. You can manage or disable cookies anytime through your browser settings.',
  },
  {
    id: 4,
    title: 'How We Protect Your Data',
    content: 'Your privacy matters. We use secure servers, data encryption, and limited-access policies to keep your personal information safe. Only authorized personnel can access your data.',
  },
  {
    id: 5,
    title: 'Your Rights & Choices',
    content: 'You can access, update, or delete your personal data anytime. To make a request, please contact our support team; we\'ll respond within 7 business days.',
  },
  {
    id: 6,
    title: 'Third-Party Tools & Integrations',
    content: 'Beauté Enterprise may use trusted third-party tools for analytics or payment processing. These partners follow strict data protection standards aligned with GDPR and CCPA guidelines.',
  },
  {
    id: 7,
    title: 'Updates to This Policy',
    content: 'We may update our Privacy Policy occasionally. Any changes will be posted here with a revised date at the top of this page.',
  },
  {
    id: 8,
    title: 'Have Questions About Your Privacy?',
    content: 'Our team is here to help. Email us at privacy@beauteenterprises.com',
  },
];

export default function Terms() {
  return (
    <div>
        <Header
  title="Terms of Use"
  subtitle="Please read these Terms of Use carefully before using Beauté Enterprise. By accessing our platform, you agree to follow these terms."
  routeTitle="Terms of Use"
/>

 <div className="bg-gray-100 2xl:w-9/12 w-11/12 my-20  mx-auto p-6 sm:p-10 md:p-14 rounded-lg shadow-sm">
        {policySections.map((section) => (
          <PrivacySection
            key={section.id}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </div>
  )
}
