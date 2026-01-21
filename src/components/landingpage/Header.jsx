export default function Header({ toggleTheme, isDark }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#2D6886] rounded-lg text-white">
            <span className="material-symbols-outlined text-2xl">school</span>
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-[#2D6886]">Digital Campus</h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-sm font-semibold hover:text-[#2D6886] transition-colors" href="#features">Features</a>
          <a className="text-sm font-semibold hover:text-[#2D6886] transition-colors" href="#communities">Communities</a>
          <a className="text-sm font-semibold hover:text-[#2D6886] transition-colors" href="#about">About</a>
          <a className="text-sm font-semibold hover:text-[#2D6886] transition-colors" href="#login">Login</a>
          <button className="bg-[#2D6886] hover:bg-[#2D6886]/90 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md shadow-[#2D6886]/20">
            Join Now
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  )
}
