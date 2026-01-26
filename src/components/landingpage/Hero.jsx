import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative py-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-zinc-900 min-h-[600px] flex items-center group">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
            <img 
              alt="Modern minimalist university library and study space" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9CHRjRoiHRWc6vrkrlqB3zK9bVILRqZtVRP0uhlOa8V5usiLm9T9iqlXY4QKlBv-xnZynX3P3RuEoBMe73g814LWVsll-Tg2DN6Z6suJ1z2-Q3_VkmSmNL3h4TGd4VQlLVxe55KwkEFTuhPT1DDBmuMqp5UUb1oFMd-pJfnkUCiOUWZ8DzULEDk0z8w70JUuTTzAIwZ96aTNR5Z5apwk5JPs2RUOOGb9xjZUAvWmWGMyZvXWMVeEzsPZMHTbXkM0c2nY1T_oEbOni"
            />
          </div>
          
          {/* Content */}
          <div className="relative z-20 px-8 md:px-16 max-w-2xl">
            {/* Verification Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 border border-green-200 text-green-700 mb-8">
              <span className="material-symbols-outlined text-lg">verified_user</span>
              <span className="text-xs font-bold uppercase tracking-wider">College Email Verified Only</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              A Digital Campus <span className="text-[#2D6886]/80 block md:inline">for Students.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-medium">
              The trusted space to connect with peers, join niche study communities, and master your courses through collaborative quizzes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/login" className="bg-[#2D6886] hover:bg-[#2D6886]/90 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center gap-2 group/btn">
                Join with your college email
                <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
