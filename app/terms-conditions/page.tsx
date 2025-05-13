import React from 'react';

const TermsConditions: React.FC = () => {
  return (
    <div className="bg-[#EBEBEB] text-black px-6 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#019D4D] mb-8">Terms & Conditions</h1>

        <p className="mb-4">
          Welcome to <strong>Jinnah Expert (Private) Limited</strong>. By using our website or services, you agree to
          the following terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold text-[#019D4D] mt-8 mb-3">1. Services Provided</h2>
        <p className="mb-4">
          We offer solar installation and energy consultancy services. The scope of services will be defined based on
          client requirements.
        </p>

        <h2 className="text-2xl font-semibold text-[#019D4D] mt-8 mb-3">2. User Responsibilities</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Provide accurate and honest information</li>
          <li>Comply with local laws and service terms</li>
          <li>Use our services lawfully and ethically</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#019D4D] mt-8 mb-3">3. Payments</h2>
        <p className="mb-4">
          Payment terms will be agreed upon in writing. All invoices must be settled in accordance with the contract.
        </p>

        <h2 className="text-2xl font-semibold text-[#019D4D] mt-8 mb-3">4. Intellectual Property</h2>
        <p className="mb-4">
          All content, images, branding, and materials on this website are owned by Jinnah Expert and cannot be reused
          without permission.
        </p>

        <h2 className="text-2xl font-semibold text-[#019D4D] mt-8 mb-3">5. Limitation of Liability</h2>
        <p className="mb-4">
          Jinnah Expert shall not be held liable for any indirect or consequential damages arising from use of our
          services.
        </p>

        <h2 className="text-2xl font-semibold text-[#019D4D] mt-8 mb-3">6. Changes to Terms</h2>
        <p className="mb-4">
          We may revise these Terms at any time. Continued use of the services indicates acceptance of updated terms.
        </p>

        <h2 className="text-2xl font-semibold text-[#019D4D] mt-8 mb-3">7. Contact</h2>
        <p>
          For questions, contact us at:{' '}
          <a href="mailto:care@jinnahexpert.com" className="text-blue-600 underline">
            care@jinnahexpert.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
