import { div } from "framer-motion/client";
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

export const metadata = {
  title: "Coming Soon | Jinnah Xpert Solar",
  description: "We're working on something amazing! Check back soon for updates.",
  robots: "noindex, nofollow",
};

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTVjLTguMjkgMC0xNS02LjcxLTE1LTE1aDkwYzAgOC4yOS02LjcxIDE1LTE1IDE1SDMweiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCkiLz48L3N2Zz4=')]"></div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[#019D4D]/5"></div>
      <div className="max-w-2xl w-full bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50">
        <div className="bg-gradient-to-r from-[#019D4D] to-[#006837] p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white/10 rounded-full">
              <FaExclamationTriangle className="text-white text-3xl" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Coming Soon
          </h1>
          <p className="text-white/90 text-lg font-semibold">
            We're working on something amazing!
          </p>
        </div>

        <div className="p-8 md:p-10">
          <div className="bg-blue-700/10 border-l-4 border-blue-700 p-5 mb-8 rounded-r-lg">
            <p className="text-blue-200 font-semibold text-base">
              <span className="font-bold">Under Construction:</span>
              We're currently working hard to bring you an amazing experience.
            </p>
            <p className="text-blue-300 font-medium mt-3">
              Stay tuned for updates as we prepare to launch something special.
            </p>
          </div>
        </div>

        <div className="px-10 pb-10">
          <Link
            href="/"
            className="inline-block bg-[#019D4D] hover:bg-[#008040] text-white font-medium text-sm px-6 py-3 rounded-lg transition duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
