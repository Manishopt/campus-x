import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header({ toggleTheme, isDark }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
          <Link to="/about" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">About</Link>
          <Link to="/login" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">Login</Link>
          <Link to="/login" className="bg-[#2D6886] hover:bg-[#2D6886]/90 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md shadow-[#2D6886]/20">
            Join Now
          </Link>
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
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4">
          <nav className="flex flex-col gap-4">
            <a className="text-sm font-semibold hover:text-[#2D6886] transition-colors" href="#features">Features</a>
            <a className="text-sm font-semibold hover:text-[#2D6886] transition-colors" href="#communities">Communities</a>
            <a className="text-sm font-semibold hover:text-[#2D6886] transition-colors" href="#about">About</a>
            <Link to="/login" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">Login</Link>
            <Link to="/login" className="bg-[#2D6886] hover:bg-[#2D6886]/90 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md shadow-[#2D6886]/20 w-full text-center">
              Join Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
