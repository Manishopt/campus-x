import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function TermsOfService() {
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
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600 text-lg">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  By accessing and using Digital Campus, you accept and agree to be bound by these Terms of Service 
                  and our Privacy Policy. If you do not agree to these terms, please do not use our service.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility Requirements</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Digital Campus is exclusively available to verified students of accredited educational institutions. 
                  To use our service, you must:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Be at least 18 years of age</li>
                  <li>Have a valid university email address (.edu or official college domain)</li>
                  <li>Successfully complete email verification process</li>
                  <li>Be currently enrolled at an accredited educational institution</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Responsibilities</h2>
              <div className="text-gray-700 space-y-4">
                <p>As a user, you are responsible for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintaining confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Providing accurate and complete information</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Complying with all applicable laws and regulations</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use</h2>
              <div className="text-gray-700 space-y-4">
                <p>You agree to use Digital Campus only for lawful purposes and in accordance with these terms. 
                You must not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Impersonate any person or entity</li>
                  <li>Share false or misleading information</li>
                  <li>Engage in harassment, bullying, or threatening behavior</li>
                  <li>Post inappropriate or offensive content</li>
                  <li>Spam or send unsolicited messages</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Content and Intellectual Property</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  You retain ownership of content you post on Digital Campus. By posting content, you grant us 
                  a license to use, modify, and distribute your content for the purpose of operating and improving our service.
                </p>
                <p>
                  Digital Campus and its original content, features, and functionality are owned by us and 
                  are protected by copyright, trademark, and other intellectual property laws.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacy</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Your privacy is important to us. Please review our Privacy Policy, which also governs 
                  your use of our service, to understand our practices.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  We may terminate or suspend your account immediately, without prior notice or liability, 
                  for any reason, including if you breach the Terms of Service.
                </p>
                <p>
                  You may also terminate your account at any time through your account settings or by 
                  contacting our support team.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimers</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Digital Campus is provided on an "as is" and "as available" basis. We make no 
                  warranties, expressed or implied, and hereby disclaim all warranties including, without 
                  limitation, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  In no event shall Digital Campus, its directors, employees, partners, agents, suppliers, 
                  or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, 
                  including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  We reserve the right to modify these Terms of Service at any time. If we make material 
                  changes, we will notify you by email or by posting a notice on our site prior to the 
                  effective date of the changes.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">Email: legal@digitalcampus.edu</p>
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
                  <span className="material-symbols-outlined text-[#2D6886]">privacy_tip</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Privacy Policy</h3>
                <p className="text-gray-600 text-sm mb-4">Learn how we protect your data and privacy</p>
                <Link to="/privacy" className="inline-flex items-center gap-2 text-[#2D6886] hover:text-[#2D6886]/80 font-semibold text-sm transition-colors">
                  Read Policy
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