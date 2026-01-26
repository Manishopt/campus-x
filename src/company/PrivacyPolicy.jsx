import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function PrivacyPolicy() {
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
          <div className="mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 text-lg">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  We collect information you provide directly to us, such as when you create an account, update your profile, 
                  or communicate with us. This may include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and email address</li>
                  <li>University affiliation and verification status</li>
                  <li>Profile information and preferences</li>
                  <li>Content you post or share</li>
                  <li>Communications with other users</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <div className="text-gray-700 space-y-4">
                <p>We use information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Verify student status and maintain a trusted community</li>
                  <li>Facilitate connections between verified students</li>
                  <li>Communicate with you about your account and our services</li>
                  <li>Ensure platform security and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  We do not sell, rent, or trade your personal information. We may share information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With your consent</li>
                  <li>To comply with legal requirements</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>With trusted service providers who assist in operating our platform</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                  over the internet is 100% secure.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
              <div className="text-gray-700 space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt out of certain communications</li>
                  <li>Request a copy of your data</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  If you have questions about this Privacy Policy or how we handle your information, 
                  please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">Email: privacy@digitalcampus.edu</p>
                  <p className="font-semibold">Address: 123 Campus Drive, University City, UC 12345</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Company Links Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2024 Digital Campus. All rights reserved.
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