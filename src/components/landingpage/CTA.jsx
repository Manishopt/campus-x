import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto rounded-[2.5rem] bg-[#2D6886] p-12 md:p-20 text-center relative overflow-hidden">
        {/* Abstract Pattern Overlays */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Ready to level up your college experience?</h2>
          <p className="text-[#2D6886]/20 text-white/80 text-lg mb-12 max-w-2xl mx-auto">Join your peers today and discover a smarter way to learn together. No ads, no noise, just students.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/login" className="bg-white text-[#2D6886] hover:bg-gray-50 px-10 py-5 rounded-2xl text-lg font-black transition-all shadow-xl shadow-black/10 w-full sm:w-auto">
              Join with your college email
            </Link>
            <button className="text-white font-bold border border-white/20 hover:bg-white/10 px-10 py-5 rounded-2xl text-lg transition-all w-full sm:w-auto">
              View Demo
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-2 text-white/60 text-sm">
            <span className="material-symbols-outlined text-base">verified</span>
            <span>Trustworthy • Secure • Student-Only</span>
          </div>
        </div>
      </div>
    </section>
  )
}
