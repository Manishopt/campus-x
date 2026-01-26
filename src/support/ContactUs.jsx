import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function ContactUs() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  })

  const contactOptions = [
    {
      icon: 'support_agent',
      title: 'Live Chat Support',
      description: 'Chat with our support team in real-time',
      availability: '24/7',
      action: 'Start Chat'
    },
    {
      icon: 'email',
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond within 24 hours',
      availability: 'Response within 24 hours',
      action: 'Send Email'
    },
    {
      icon: 'forum',
      title: 'Community Forum',
      description: 'Get help from other students and our team',
      availability: 'Always available',
      action: 'Visit Forum'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Contact form submitted:', formData)
    alert('Thank you for contacting us. We will get back to you soon!')
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
            <Link to="/report" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">Report Abuse</Link>
            <Link to="/contact" className="text-sm font-semibold text-[#2D6886]">Contact Us</Link>
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
              <Link to="/report" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">Report Abuse</Link>
              <Link to="/contact" className="text-sm font-semibold text-[#2D6886]">Contact Us</Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're here to help! Get in touch with our support team for any questions or concerns.
            </p>
          </div>

          {/* Contact Options */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">How Can We Help?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {contactOptions.map((option, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                  <div className="w-16 h-16 bg-[#2D6886]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-[#2D6886] text-2xl">{option.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{option.description}</p>
                  <p className="text-xs text-gray-500 mb-4">{option.availability}</p>
                  <button className="bg-[#2D6886] hover:bg-[#2D6886]/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                    {option.action}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Form */}
          <section className="mb-12">
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-[#2D6886]/10 focus:border-[#2D6886] text-gray-900 placeholder-gray-400"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john.doe@university.edu"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-[#2D6886]/10 focus:border-[#2D6886] text-gray-900 placeholder-gray-400"
                      required
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-[#2D6886]/10 focus:border-[#2D6886] text-gray-900"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="account">Account Issues</option>
                    <option value="billing">Billing Questions</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership Opportunities</option>
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-[#2D6886]/10 focus:border-[#2D6886] text-gray-900 placeholder-gray-400"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please provide as much detail as possible..."
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-[#2D6886]/10 focus:border-[#2D6886] text-gray-900 placeholder-gray-400 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#2D6886] hover:bg-[#2D6886]/90 text-white px-6 py-4 rounded-xl font-semibold transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* Office Locations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Offices</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Headquarters</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#2D6886] mt-1">location_on</span>
                    <div>
                      <p className="font-medium text-gray-900">Digital Campus HQ</p>
                      <p>123 Campus Drive, Suite 100</p>
                      <p>University City, UC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#2D6886] mt-1">phone</span>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p>(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#2D6886] mt-1">schedule</span>
                    <div>
                      <p className="font-medium text-gray-900">Hours</p>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Support Center</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#2D6886] mt-1">location_on</span>
                    <div>
                      <p className="font-medium text-gray-900">24/7 Support Hub</p>
                      <p>456 Tech Boulevard, Floor 2</p>
                      <p>Innovation District, UC 67890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#2D6886] mt-1">phone</span>
                    <div>
                      <p className="font-medium text-gray-900">Support Hotline</p>
                      <p>1-800-CAMPUS-1</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#2D6886] mt-1">schedule</span>
                    <div>
                      <p className="font-medium text-gray-900">Hours</p>
                      <p>24/7 Online Support</p>
                      <p>Phone Support: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Link */}
          <section className="text-center">
            <div className="bg-[#2D6886]/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Before You Contact Us</h2>
              <p className="text-gray-600 mb-6">
                Check out our Help Center for quick answers to common questions.
              </p>
              <Link 
                to="/help" 
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#2D6886] border border-[#2D6886] px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                <span className="material-symbols-outlined">help_center</span>
                Visit Help Center
              </Link>
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