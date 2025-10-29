import React from 'react'

export default function HelpSupport() {

    const faqs = [
    {
      question: "How do I create my first outfit board?",
      answer:
        'Go to your profile and tap "+ New Outfit". You can upload images, mix & match styles, and save your look.',
    },
    {
      question: "Can I link my favorite brands?",
      answer:
        "Yes! On the Fashion page, tap “Add Store” to link brands like Zara or H&M and explore their latest trends.",
    },
    {
      question: "How do I change my profile picture?",
      answer:
        "Go to Settings → Profile → Edit Photo, then upload or take a new picture.",
    },
    {
      question: "Why can’t I see my saved outfits?",
      answer:
        "Check your internet connection or refresh the page. If the issue continues, contact our support team.",
    },
  ];

  return (
    <div className='p-4'>
        <h4 className='md:text-2xl font-bold mb-4' >FAQ</h4>

        <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-lg p-4 "
          >
            <h3 className="font-semibold mb-1">{faq.question}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
        <div className="bg-gray-50 border space-y-4 border-gray-200 rounded-lg p-4 ">
          <p className="font-semibold mb-2">Need more help?</p>
          <p className="text-sm text-gray-700">
            <span className="font-medium ">Support Email:</span>{" "}
           <span className='text-primary' > support@yourappname.com</span>
          </p>
          <p className="text-sm text-gray-700 mt-1">
            <span className="font-medium">Response Time:</span> Within 24 hours
            (Mon–Fri)
          </p>
        </div>
        </div>

    </div>
  )
}
