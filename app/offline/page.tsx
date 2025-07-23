"use client";
import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";

// export const metadata = {
//   title: "Payment Pending | Jinnah Xpert Solar",
//   description:
//     "This website is temporarily marked due to pending payment. Please contact the developer to resolve the issue.",
//   robots: "noindex, nofollow",
// };

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTVjLTguMjkgMC0xNS02LjcxLTE1LTE1aDkwYzAgOC4yOS02LjcxIDE1LTE1IDE1SDMweiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCkiLz48L3N2Zz4=')]"></div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[#ff4d4f]/50"></div>

      {/* Main Card */}
      <div className="max-w-2xl w-full bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50">
        {/* Header */}
        <div className="bg-red-900/60 p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white/10 rounded-full">
              <FaExclamationTriangle className="text-white text-3xl" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Payment Pending
          </h1>
          <p className="text-white/90 text-lg font-semibold">
            This website is currently marked due to unpaid dues.
          </p>
        </div>

        {/* Notice Body */}
        <div className="p-8 md:p-10">
          <div className="bg-red-700/10 border-l-4 border-red-600 p-5 mb-8 rounded-r-lg">
            <p className="text-red-200 font-semibold text-base">
              This project was developed with full dedication and delivered on time.
            </p>
            <p className="text-red-300 font-medium mt-3">
              Unfortunately, despite repeated reminders, payment has not been cleared
              even after <strong>3 months</strong>.
              <br />
              <span className="block mt-2 italic">
                Respect for time and talent is the foundation of professionalism.
              </span>
            </p>
          </div>
        </div>

        {/* Back to home */}
        <div className="px-10 pb-10 text-center">
          <Link
            href="mailto:codegenius.inc@gmail.com"
            className="inline-block bg-red-900/60 hover:bg-red-900/80 text-white font-medium text-sm px-6 py-3 rounded-lg transition duration-200"
          >
            Contact now!
          </Link>
        </div>
      </div>
    </div>
  );
}
