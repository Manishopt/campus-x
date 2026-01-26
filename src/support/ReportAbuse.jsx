import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function ReportAbuse() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    reportType: '',
    targetUser: '',
    description: '',
    evidence: '',
    contactEmail: '',
    anonymous: false
  })

  const reportTypes = [
    { value: 'harassment', label: 'Harassment or Bullying', description: 'Repeated unwanted contact or threatening behavior' },
    { value: 'spam', label: 'Spam or Scam', description: 'Unsolicited messages or fraudulent content' },
    { value: 'inappropriate', label: 'Inappropriate Content', description: 'Content that violates community guidelines' },
    { value: 'impersonation', label: 'Impersonation', description: 'Someone pretending to be another person' },
    { value: 'academic', label: 'Academic Dishonesty', description: 'Cheating, plagiarism, or academic fraud' },
    { value: 'threat', label: 'Threats or Violence', description: 'Content threatening harm to others' },
    { value: 'other', label: 'Other', description: 'Other violations not listed above' }
  ]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Report submitted:', formData)
    alert('Thank you for your report. We will review it and take appropriate action.')
  }

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
            <Link to="/login" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">Login</Link>
            <Link to="/about" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">About Us</Link>
            <Link to="/careers" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">Careers</Link>
            <Link to="/help" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">Help Center</Link>
            <Link to="/safety" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">Safety Center</Link>
            <Link to="/report" className="text-sm font-semibold text-[#2D6886]">Report Abuse</Link>
            <Link to="/contact" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">Contact Us</Link>
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
              <Link to="/login" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">Login</Link>
              <Link to="/about" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">About Us</Link>
              <Link to="/careers" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">Careers</Link>
              <Link to="/help" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">Help Center</Link>
              <Link to="/safety" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">Safety Center</Link>
              <Link to="/report" className="text-sm font-semibold text-[#2D6886]">Report Abuse</Link>
              <Link to="/contact" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">Contact Us</Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Report Abuse</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Help us keep Digital Campus safe by reporting inappropriate behavior or content.
            </p>
          </div>

          {/* Emergency Alert */}
          <section className="mb-12">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-red-600 text-2xl">emergency</span>
                <div>
                  <h2 className="text-xl font-bold text-red-900 mb-2">Emergency Situation?</h2>
                  <p className="text-red-700 mb-4">
                    If someone is in immediate danger, contact emergency services first, then file a report.
                  </p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                    Call 911
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Report Form */}
          <section className="mb-12">
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">File a Report</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Report Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    What are you reporting? *
                  </label>
                  <div className="space-y-3">
                    {reportTypes.map((type) => (
                      <label key={type.value} className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                        <input
                          type="radio"
                          name="reportType"
                          value={type.value}
                          checked={formData.reportType === type.value}
                          onChange={handleInputChange}
                          className="mt-1 text-[#2D6886]"
                          required
                        />
                        <div>
                          <div className="font-medium text-gray-900">{type.label}</div>
                          <div className="text-sm text-gray-600">{type.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Target User */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Who is being reported? *
                  </label>
                  <input
                    type="text"
                    name="targetUser"
                    value={formData.targetUser}
                    onChange={handleInputChange}
                    placeholder="Username or email address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-[#2D6886]/10 focus:border-[#2D6886] text-gray-900 placeholder-gray-400"
                    required
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Please describe what happened *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Provide as much detail as possible about the incident..."
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-[#2D6886]/10 focus:border-[#2D6886] text-gray-900 placeholder-gray-400 resize-none"
                    required
                  />
                </div>

                {/* Evidence */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Do you have any evidence?
                  </label>
                  <textarea
                    name="evidence"
                    value={formData.evidence}
                    onChange={handleInputChange}
                    placeholder="Links to posts, screenshots, or other evidence..."
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-[#2D6886]/10 focus:border-[#2D6886] text-gray-900 placeholder-gray-400 resize-none"
                  />
                </div>

                {/* Contact Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Your email address
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    placeholder="your.email@university.edu"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-[#2D6886]/10 focus:border-[#2D6886] text-gray-900 placeholder-gray-400"
                  />
                  <p className="text-sm text-gray-600 mt-1">
                    We may need to contact you for additional information.
                  </p>
                </div>

                {/* Anonymous Reporting */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="anonymous"
                    id="anonymous"
                    checked={formData.anonymous}
                    onChange={handleInputChange}
                    className="text-[#2D6886]"
                  />
                  <label htmlFor="anonymous" className="text-sm text-gray-700">
                    Submit this report anonymously
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#2D6886] hover:bg-[#2D6886]/90 text-white px-6 py-4 rounded-xl font-semibold transition-colors"
                  >
                    Submit Report
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* What Happens Next */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2D6886]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-[#2D6886] text-2xl">review</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Review</h3>
                <p className="text-sm text-gray-600">
                  Our safety team reviews all reports within 24 hours
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2D6886]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-[#2D6886] text-2xl">search</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Investigation</h3>
                <p className="text-sm text-gray-600">
                  We investigate the reported content and user behavior
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2D6886]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-[#2D6886] text-2xl">gavel</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Action</h3>
                <p className="text-sm text-gray-600">
                  We take appropriate action based on our findings
                </p>
              </div>
            </div>
          </section>

          {/* Contact Support */}
          <section className="text-center">
            <div className="bg-[#2D6886]/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Immediate Help?</h2>
              <p className="text-gray-600 mb-6">
                If you need to speak with someone immediately, our support team is available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 bg-[#2D6886] hover:bg-[#2D6886]/90 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  <span className="material-symbols-outlined">support_agent</span>
                  Contact Support
                </Link>
                <Link 
                  to="/safety" 
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#2D6886] border border-[#2D6886] px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  <span className="material-symbols-outlined">security</span>
                  Safety Center
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
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