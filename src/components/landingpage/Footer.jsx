import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-1.5 bg-[#2D6886] rounded text-white">
              <span className="material-symbols-outlined text-xl">school</span>
            </div>
            <h2 className="text-lg font-extrabold tracking-tight text-[#2D6886]">Digital Campus</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
            The modern social learning layer for higher education. Bridging the gap between social connection and academic success.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#2D6886] transition-colors" href="#" aria-label="Website">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#2D6886] transition-colors" href="#" aria-label="Email">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Platform</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/browse-groups" className="hover:text-[#2D6886] transition-colors">Browse Groups</Link></li>
            <li><Link to="/study-quizzes" className="hover:text-[#2D6886] transition-colors">Study Quizzes</Link></li>
            <li><Link to="/campus-events" className="hover:text-[#2D6886] transition-colors">Campus Events</Link></li>
            <li><Link to="/qa-forums" className="hover:text-[#2D6886] transition-colors">Q&A Forums</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-[#2D6886] transition-colors">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-[#2D6886] transition-colors">Careers</Link></li>
            <li><Link to="/terms" className="hover:text-[#2D6886] transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-[#2D6886] transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/help" className="hover:text-[#2D6886] transition-colors">Help Center</Link></li>
            <li><Link to="/safety" className="hover:text-[#2D6886] transition-colors">Safety Center</Link></li>
            <li><Link to="/report" className="hover:text-[#2D6886] transition-colors">Report Abuse</Link></li>
            <li><Link to="/contact" className="hover:text-[#2D6886] transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">© 2024 Digital Campus. All rights reserved.</p>
        <div className="flex gap-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
          <a className="hover:text-[#2D6886]" href="#">Facebook</a>
          <a className="hover:text-[#2D6886]" href="#">Twitter</a>
          <a className="hover:text-[#2D6886]" href="#">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
