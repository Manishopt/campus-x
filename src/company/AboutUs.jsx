import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function AboutUs() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white min-h-screen flex flex-col font-display">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="p-2 bg-[#2D6886] rounded-lg text-white">
                <span className="material-symbols-outlined text-2xl">school</span>
              </div>
              <h2 className="text-xl font-extrabold tracking-tight text-[#2D6886]">Digital Campus</h2>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-10">
            <Link to="/" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">Home</Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
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
              <Link to="/" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">Home</Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">About Digital Campus</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering students to connect, collaborate, and succeed in their academic journey.
            </p>
          </div>

          {/* Mission Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  We believe that every student deserves a dedicated digital space to learn, connect, and grow. 
                  Digital Campus bridges the gap between social connection and academic success, creating a 
                  trusted environment where verified students can collaborate and thrive together.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2D6886]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[#2D6886]">verified</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Verified Community</h3>
                      <p className="text-gray-600">Only verified students with official university emails can join</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2D6886]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[#2D6886]">security</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Safe & Private</h3>
                      <p className="text-gray-600">Your data is protected and your privacy is our priority</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                  alt="Students collaborating in modern study space"
                  className="rounded-2xl shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#2D6886] mb-2">50K+</div>
                <div className="text-gray-600">Active Students</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#2D6886] mb-2">500+</div>
                <div className="text-gray-600">Universities</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#2D6886] mb-2">10K+</div>
                <div className="text-gray-600">Study Groups</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#2D6886] mb-2">1M+</div>
                <div className="text-gray-600">Questions Answered</div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-white border border-gray-200">
                <div className="w-16 h-16 bg-[#2D6886]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-2xl text-[#2D6886]">diversity_3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Inclusivity</h3>
                <p className="text-gray-600">
                  Creating a welcoming environment for students from all backgrounds and disciplines
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-white border border-gray-200">
                <div className="w-16 h-16 bg-[#2D6886]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-2xl text-[#2D6886]">school</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Excellence</h3>
                <p className="text-gray-600">
                  Fostering learning environments that promote educational success and growth
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-white border border-gray-200">
                <div className="w-16 h-16 bg-[#2D6886]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-2xl text-[#2D6886]">handshake</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
                <p className="text-gray-600">
                  Building connections that lead to meaningful academic and professional relationships
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Manish Kumar</h3>
                <p className="text-[#2D6886] font-semibold mb-2">CEO & Co-Founder</p>
                <p className="text-gray-600">Building student-first digital platforms with a focus on trust, learning, and community.</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kshitij Jain</h3>
                <p className="text-[#2D6886] font-semibold mb-2">CTO & Co-Founder</p>
                <p className="text-gray-600">Leading technology and architecture with an emphasis on security, performance, and scalability</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Harsh Agarwal</h3>
                <p className="text-[#2D6886] font-semibold mb-2">Head of Community</p>
                <p className="text-gray-600">Fostering inclusive, respectful, and engaging student communities across the platform</p>
              </div>
            </div>
          </section>

          {/* Company Links Section */}
          <section className="mb-16">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Company</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="w-12 h-12 bg-[#2D6886]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-[#2D6886]">work</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Careers</h3>
                  <p className="text-gray-600 text-sm mb-4">Join our team and help shape the future of education</p>
                  <Link to="/careers" className="inline-flex items-center gap-2 text-[#2D6886] hover:text-[#2D6886]/80 font-semibold text-sm transition-colors">
                    View Openings
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="w-12 h-12 bg-[#2D6886]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-[#2D6886]">privacy_tip</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Privacy Policy</h3>
                  <p className="text-gray-600 text-sm mb-4">Learn how we protect your data and privacy</p>
                  <Link to="/privacy" className="inline-flex items-center gap-2 text-[#2D6886] hover:text-[#2D6886]/80 font-semibold text-sm transition-colors">
                    Read Policy
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="w-12 h-12 bg-[#2D6886]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-[#2D6886]">gavel</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Terms of Service</h3>
                  <p className="text-gray-600 text-sm mb-4">Review our terms and conditions for using Digital Campus</p>
                  <Link to="/terms" className="inline-flex items-center gap-2 text-[#2D6886] hover:text-[#2D6886]/80 font-semibold text-sm transition-colors">
                    View Terms
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            2024 Digital Campus. All rights reserved.
            © 2024 Digital Campus. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <Link to="/privacy" className="text-gray-400 hover:text-[#2D6886] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-[#2D6886] text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}