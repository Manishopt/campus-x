import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Careers() {
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
            <Link to="/" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">Home</Link>
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Help us build the future of student collaboration and academic success.
            </p>
          </div>

          {/* Open Positions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Open Positions</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Senior Frontend Developer</h3>
                    <p className="text-gray-600 mb-4">
                      Build intuitive, responsive interfaces that students love to use. Experience with React, 
                      TypeScript, and modern CSS frameworks required.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#2D6886]/10 text-[#2D6886] rounded-full text-sm font-medium">React</span>
                      <span className="px-3 py-1 bg-[#2D6886]/10 text-[#2D6886] rounded-full text-sm font-medium">TypeScript</span>
                      <span className="px-3 py-1 bg-[#2D6886]/10 text-[#2D6886] rounded-full text-sm font-medium">Tailwind CSS</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">Remote</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-[#2D6886] font-bold">Full-time</span>
                    <Link 
                      to="/apply/senior-frontend-developer" 
                      className="bg-[#2D6886] hover:bg-[#2D6886]/90 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Product Designer</h3>
                    <p className="text-gray-600 mb-4">
                      Create beautiful, user-centered designs for our student community. Strong portfolio 
                      demonstrating user research and interaction design required.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#2D6886]/10 text-[#2D6886] rounded-full text-sm font-medium">UI/UX</span>
                      <span className="px-3 py-1 bg-[#2D6886]/10 text-[#2D6886] rounded-full text-sm font-medium">Figma</span>
                      <span className="px-3 py-1 bg-[#2D6886]/10 text-[#2D6886] rounded-full text-sm font-medium">User Research</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">Hybrid</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-[#2D6886] font-bold">Full-time</span>
                    <Link 
                      to="/apply/product-designer" 
                      className="bg-[#2D6886] hover:bg-[#2D6886]/90 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Community Manager</h3>
                    <p className="text-gray-600 mb-4">
                      Foster engaging, safe communities for students. Experience with community management, 
                      content moderation, and student engagement preferred.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#2D6886]/10 text-[#2D6886] rounded-full text-sm font-medium">Community</span>
                      <span className="px-3 py-1 bg-[#2D6886]/10 text-[#2D6886] rounded-full text-sm font-medium">Content Moderation</span>
                      <span className="px-3 py-1 bg-[#2D6886]/10 text-[#2D6886] rounded-full text-sm font-medium">Student Engagement</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">Remote</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-[#2D6886] font-bold">Full-time</span>
                    <Link 
                      to="/apply/community-manager" 
                      className="bg-[#2D6886] hover:bg-[#2D6886]/90 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Backend Engineer</h3>
                    <p className="text-gray-600 mb-4">
                      Build scalable, secure infrastructure supporting millions of student interactions. 
                      Experience with Node.js, databases, and cloud platforms required.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#2D6886]/10 text-[#2D6886] rounded-full text-sm font-medium">Node.js</span>
                      <span className="px-3 py-1 bg-[#2D6886]/10 text-[#2D6886] rounded-full text-sm font-medium">PostgreSQL</span>
                      <span className="px-3 py-1 bg-[#2D6886]/10 text-[#2D6886] rounded-full text-sm font-medium">AWS</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">Remote</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-[#2D6886] font-bold">Full-time</span>
                    <Link 
                      to="/apply/backend-engineer" 
                      className="bg-[#2D6886] hover:bg-[#2D6886]/90 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Work With Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-gray-50">
                <div className="w-16 h-16 bg-[#2D6886]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-2xl text-[#2D6886]">workspace_premium</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Benefits</h3>
                <p className="text-gray-600">
                  Comprehensive health, dental, and vision insurance plus flexible work arrangements
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gray-50">
                <div className="w-16 h-16 bg-[#2D6886]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-2xl text-[#2D6886]">trending_up</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Opportunities</h3>
                <p className="text-gray-600">
                  Professional development budget, conference attendance, and clear career progression
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gray-50">
                <div className="w-16 h-16 bg-[#2D6886]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-2xl text-[#2D6886]">diversity_3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mission-Driven Culture</h3>
                <p className="text-gray-600">
                  Join a team passionate about transforming education and student success
                </p>
              </div>
            </div>
          </section>

          {/* Culture Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Culture</h2>
            <div className="bg-[#2D6886]/5 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">We Value</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#2D6886] mt-1">check_circle</span>
                      <span className="text-gray-700">Student-first mindset in all decisions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#2D6886] mt-1">check_circle</span>
                      <span className="text-gray-700">Innovation and continuous learning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#2D6886] mt-1">check_circle</span>
                      <span className="text-gray-700">Diversity, equity, and inclusion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#2D6886] mt-1">check_circle</span>
                      <span className="text-gray-700">Work-life balance and flexibility</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Commitment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We're building a team that reflects the diverse student communities we serve. 
                    We welcome applicants from all backgrounds and are committed to creating an inclusive 
                    environment where everyone can do their best work.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-[#2D6886] rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
              <p className="text-xl mb-6 opacity-90">
                Join us in revolutionizing how students connect and learn together.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-white text-[#2D6886] px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors"
              >
                <span>Contact Our Team</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </section>

          {/* Company Links Section */}
          <section className="mb-16">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Company</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="w-12 h-12 bg-[#2D6886]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-[#2D6886]">info</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">About Us</h3>
                  <p className="text-gray-600 text-sm mb-4">Learn more about our mission and values</p>
                  <Link to="/about" className="inline-flex items-center gap-2 text-[#2D6886] hover:text-[#2D6886]/80 font-semibold text-sm transition-colors">
                    Learn More
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