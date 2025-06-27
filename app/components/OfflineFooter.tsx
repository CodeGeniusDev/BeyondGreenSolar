export default function OfflineFooter() {
  return (
    <footer className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-[#101828] backdrop-blur-sm border-t border-gray-500 rounded-t-lg">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Jinnah Xpert Solar</h3>
          </div>

          <div className="py-4 px-6 bg-gray-800/50 rounded-lg border border-gray-700/50 max-w-md mx-auto text-white">
            <p className="text-red-300 font-medium text-center">
              "Website offline. Commitment was made, but payment wasn't."
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8 flex justify-center items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
