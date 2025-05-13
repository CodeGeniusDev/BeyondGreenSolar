import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-[#EBEBEB] text-black px-6 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#019D4D] mb-8">Privacy Policy</h1>

        <p className="mb-4">
          At <strong>Jinnah Expert (Private) Limited</strong>, we value your privacy and are committed to protecting
          your personal data. This Privacy Policy explains how we collect, use, and protect your information.
        </p>

        <h2 className="text-2xl font-semibold text-[#019D4D] mt-8 mb-3">1. Information We Collect</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Name, email, phone number, and contact details</li>
          <li>Device and browser data</li>
          <li>Website activity and preferences</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#019D4D] mt-8 mb-3">2. How We Use Your Data</h2>
        <ul className="list-disc list-inside mb-4">
          <li>To provide and improve services</li>
          <li>To respond to your inquiries</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#019D4D] mt-8 mb-3">3. Sharing & Security</h2>
        <p className="mb-4">
          We do not sell your data. We may share it with trusted third parties to deliver our services, with strict
          confidentiality.
        </p>

        <h2 className="text-2xl font-semibold text-[#019D4D] mt-8 mb-3">4. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, correct, or delete your personal information. Contact us any time for concerns
          or requests.
        </p>

        <h2 className="text-2xl font-semibold text-[#019D4D] mt-8 mb-3">5. Updates to Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically. Please review it regularly to stay informed.
        </p>

        <h2 className="text-2xl font-semibold text-[#019D4D] mt-8 mb-3">6. Contact Us</h2>
        <p>
          For any questions, email us at:{' '}
          <a href="mailto:care@jinnahexpert.com" className="text-blue-600 underline">
            care@jinnahexpert.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
