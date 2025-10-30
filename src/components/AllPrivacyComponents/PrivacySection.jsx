import React from 'react';


// Main component to render the privacy policy sections
export default function PrivacySection({ title, content }) {
  return (
    <div className="mb-8 last:mb-0">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
        {title}
      </h2>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        {content}
      </p>
    </div>
  );
}
