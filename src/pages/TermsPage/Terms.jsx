import React from 'react'
import Header from '../../components/common/Header'
import PrivacySection from '../../components/AllPrivacyComponents/PrivacySection'

const termsSections = [
  {
    id: 1,
    title: 'Acceptance of Terms',
    content: 'By accessing and using Beauté Enterprise, you accept these Terms of Use and all applicable laws. If you do not agree, please discontinue using our platform immediately.',
  },
  {
    id: 2,
    title: 'Who Can Use Beauté Enterprise',
    content: 'Beauté Enterprise is designed for users and young users under parental or guardian supervision. Parents and guardians should review and approve registration and content use.',
  },
  {
    id: 3,
    title: 'Account Creation & Responsibilities',
    content: 'You are responsible for maintaining your account confidentiality and any activity under it. Do not share your password or personal information with others.',
  },
  {
    id: 4,
    title: 'User Content & Behavior',
    content: 'Users can write, upload, and design on our platform. Please ensure your content is respectful, safe, and original. We reserve the right to remove inappropriate or harmful content.',
  },
  {
    id: 5,
    title: 'Intellectual Property Rights',
    content: 'All website materials, profiles, and content are owned by Beauté Enterprise or its licensors. You may not copy, distribute, or modify any materials without written permission.',
  },
  {
    id: 6,
    title: 'Third-Party Links',
    content: 'Beauté Enterprise may contain links to external websites such as fashion or learning platforms. We are not responsible for their content or privacy practices. Use them at your discretion.',
  },
  {
    id: 7,
    title: 'Limitation of Liability',
    content: 'Beauté Enterprise is provided "as is." We are not liable for data loss, technical issues, or any indirect damages arising from use of the platform.',
  },
  {
    id: 8,
    title: 'Account Suspension or Termination',
    content: 'We reserve the right to suspend or terminate any account that violates our terms or misuses the platform. You may also deactivate your account anytime via your account settings.',
  },
  {
    id: 9,
    title: 'Contact Us',
    content: 'For any questions about these Terms, please reach out to us: Email us at legal@beauteenterprise.com',
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

        <div className="bg-gray-100 2xl:w-9/12 w-11/12 my-20 mx-auto p-6 sm:p-10 md:p-14 rounded-lg shadow-sm">
          {termsSections.map((section) => (
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