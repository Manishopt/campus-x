import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-display">
      {/* Top Navigation */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-gray-200 px-4 sm:px-6 md:px-20 py-4 bg-white backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center gap-3 text-[#2D6886]">
          <div className="size-8 bg-[#2D6886] rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">school</span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold leading-tight tracking-tight">DigitalCampus</h2>
        </div>
        <div className="flex gap-2 sm:gap-4">
          <button className="hidden sm:flex items-center justify-center h-10 px-5 text-gray-600 text-sm font-semibold hover:text-[#2D6886] transition-colors">
            Help
          </button>
          <button className="flex min-w-[80px] sm:min-w-[100px] cursor-pointer items-center justify-center rounded-xl h-10 px-3 sm:px-5 bg-[#2D6886] text-white text-xs sm:text-sm font-bold tracking-wide hover:bg-[#2D6886]/90 transition-all shadow-sm">
            Sign Up
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
        <div className="w-full max-w-[460px] flex flex-col gap-6 sm:gap-8">
          {/* Central Login Card */}
          <div className="bg-white border border-gray-100 subtle-shadow rounded-xl p-6 sm:p-8 md:p-10">
            {/* Badge & Header Section */}
            <div className="flex flex-col items-center text-center mb-6 sm:mb-10">
              <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-[#FFD23F]/15 px-3 sm:px-4 mb-4 sm:mb-6">
                <span className="material-symbols-outlined text-sm text-yellow-700">verified_user</span>
                <p className="text-yellow-800 text-xs font-bold uppercase tracking-widest">Verified Students Only</p>
              </div>
              <h1 className="text-[#101119] tracking-tight text-2xl sm:text-3xl font-extrabold leading-tight mb-3">
                Sign in to your campus
              </h1>
              <p className="text-gray-500 text-sm sm:text-base font-normal leading-relaxed">
                Join your peers in a distraction-free social learning environment.
              </p>
            </div>

            {/* Form Section */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col gap-2">
                <label className="flex flex-col group">
                  <span className="text-[#101119] text-sm font-bold pb-2 ml-1">University Email Address</span>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-[#2D6886] transition-colors">alternate_email</span>
                    <input 
                      className="form-input flex w-full rounded-xl text-[#101119] focus:ring-4 focus:ring-[#2D6886]/10 border border-gray-200 bg-gray-50 focus:border-[#2D6886] h-12 sm:h-14 pl-12 pr-4 placeholder:text-gray-400 text-base font-medium transition-all" 
                      placeholder="name@university.edu" 
                      type="email" 
                    />
                  </div>
                </label>
              </div>
              <button className="w-full flex cursor-pointer items-center justify-center rounded-xl h-12 sm:h-14 px-6 bg-[#2D6886] text-white text-base font-bold tracking-tight hover:brightness-110 active:scale-[0.98] transition-all shadow-md shadow-[#2D6886]/20">
                <span className="truncate">Send Verification Code</span>
              </button>
              <div className="flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-gray-50 border border-gray-100">
                <span className="material-symbols-outlined text-gray-400 text-lg shrink-0">info</span>
                <p className="text-gray-500 text-xs leading-relaxed">
                  We only support official college email addresses (e.g., .edu or college domain) to ensure a safe, verified community.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex justify-between items-center px-2">
            <Link to="/privacy" className="text-gray-400 text-xs sm:text-sm hover:text-[#2D6886] transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">lock</span>
              <span className="hidden sm:inline">Privacy Policy</span>
              <span className="sm:hidden">Privacy</span>
            </Link>
            <Link to="/terms" className="text-gray-400 text-xs sm:text-sm hover:text-[#2D6886] transition-colors">
              <span className="hidden sm:inline">Terms of Service</span>
              <span className="sm:hidden">Terms</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Visual Decor Elements (Abstract) */}
      <div className="fixed top-0 right-0 -z-10 opacity-30 pointer-events-none overflow-hidden h-full w-full">
        <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#2D6886]/10 blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-[#FFD23F]/10 blur-3xl"></div>
      </div>

      <style jsx>{`
        .subtle-shadow {
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.04), 0 8px 10px -6px rgba(0, 0, 0, 0.04);
        }
        .font-display {
          font-family: 'Manrope', sans-serif;
        }
      `}</style>
    </div>
  )
}