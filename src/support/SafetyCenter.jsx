import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function SafetyCenter() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const safetyTopics = [
    {
      icon: 'verified_user',
      title: 'Account Security',
      description: 'Keep your account safe with strong passwords and two-factor authentication.',
      tips: [
        'Use a unique, strong password',
        'Enable two-factor authentication',
        'Never share your login credentials',
        'Log out from shared devices'
      ]
    },
    {
      icon: 'privacy_tip',
      title: 'Privacy Protection',
      description: 'Control your personal information and who can see your activity.',
      tips: [
        'Review your privacy settings regularly',
        'Be selective about what you share',
        'Use privacy controls for posts and groups',
        'Report suspicious accounts'
      ]
    },
    {
      icon: 'block',
      title: 'Blocking & Reporting',
      description: 'Handle unwanted interactions and report inappropriate content.',
      tips: [
        'Block users who harass you',
        'Report harmful content immediately',
        'Don\'t engage with trolls',
        'Use platform safety tools'
      ]
    },
    {
      icon: 'school',
      title: 'Academic Integrity',
      description: 'Maintain honesty and integrity in all academic interactions.',
      tips: [
        'Don\'t share exam answers',
        'Give proper credit for sources',
        'Avoid plagiarism in discussions',
        'Report academic dishonesty'
      ]
    }
  ]

  const emergencyResources = [
    {
      title: '24/7 Crisis Hotline',
      description: 'Immediate support for mental health crises',
      contact: '988',
      available: '24/7'
    },
    {
      title: 'Campus Counseling',
      description: 'Your university mental health services',
      contact: 'Contact your campus health center',
      available: 'Business hours'
    },
    {
      title: 'Emergency Services',
      description: 'For immediate danger or medical emergencies',
      contact: '911',
      available: '24/7'
    }
  ]

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
            <Link to="/safety" className="text-sm font-semibold text-[#2D6886]">Safety Center</Link>
            <Link to="/report" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">Report Abuse</Link>
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
              <Link to="/safety" className="text-sm font-semibold text-[#2D6886]">Safety Center</Link>
              <Link to="/report" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">Report Abuse</Link>
              <Link to="/contact" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">Contact Us</Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Safety Center</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your safety is our priority. Learn how to protect yourself and others while using Digital Campus.
            </p>
          </div>

          {/* Emergency Alert */}
          <section className="mb-12">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-red-600 text-2xl">emergency</span>
                <div>
                  <h2 className="text-xl font-bold text-red-900 mb-2">In Immediate Danger?</h2>
                  <p className="text-red-700 mb-4">
                    If you or someone else is in immediate danger, contact emergency services right away.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                      Call 911
                    </button>
                    <Link to="/report" className="bg-red-100 hover:bg-red-200 text-red-900 px-6 py-3 rounded-xl font-semibold transition-colors">
                      Report Emergency
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Safety Topics */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Safety Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {safetyTopics.map((topic, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#2D6886]/10 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#2D6886] text-xl">{topic.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{topic.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{topic.description}</p>
                  <ul className="space-y-2">
                    {topic.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-green-600 text-sm mt-0.5">check_circle</span>
                        <span className="text-sm text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Reporting Tools */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Reporting Tools</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#2D6886]/5 border border-[#2D6886]/20 rounded-xl p-6 text-center">
                <span className="material-symbols-outlined text-[#2D6886] text-3xl mb-3">report</span>
                <h3 className="font-bold text-gray-900 mb-2">Report Content</h3>
                <p className="text-sm text-gray-600 mb-4">Report inappropriate posts, comments, or messages</p>
                <Link to="/report" className="inline-flex items-center gap-2 bg-[#2D6886] hover:bg-[#2D6886]/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                  Report Now
                </Link>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
                <span className="material-symbols-outlined text-orange-600 text-3xl mb-3">block</span>
                <h3 className="font-bold text-gray-900 mb-2">Block User</h3>
                <p className="text-sm text-gray-600 mb-4">Block users who harass or bother you</p>
                <button className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                  Block User
                </button>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                <span className="material-symbols-outlined text-blue-600 text-3xl mb-3">privacy_tip</span>
                <h3 className="font-bold text-gray-900 mb-2">Privacy Settings</h3>
                <p className="text-sm text-gray-600 mb-4">Control who can see your profile and content</p>
                <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                  Update Settings
                </button>
              </div>
            </div>
          </section>

          {/* Emergency Resources */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Emergency Resources</h2>
            <div className="space-y-4">
              {emergencyResources.map((resource, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-2">{resource.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-gray-400">phone</span>
                          <span className="font-medium">{resource.contact}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-gray-400">schedule</span>
                          <span className="text-gray-600">{resource.available}</span>
                        </span>
                      </div>
                    </div>
                    <button className="bg-[#2D6886] hover:bg-[#2D6886]/90 text-white px-6 py-3 rounded-xl font-semibold transition-colors whitespace-nowrap">
                      Get Help
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Community Guidelines */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Community Guidelines</h2>
            <div className="bg-[#2D6886]/5 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Do's</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-green-600 mt-1">check_circle</span>
                      <span className="text-gray-700">Be respectful and inclusive</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-green-600 mt-1">check_circle</span>
                      <span className="text-gray-700">Help others learn and grow</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-green-600 mt-1">check_circle</span>
                      <span className="text-gray-700">Share accurate information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-green-600 mt-1">check_circle</span>
                      <span className="text-gray-700">Report harmful content</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Don'ts</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-red-600 mt-1">cancel</span>
                      <span className="text-gray-700">Bully or harass others</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-red-600 mt-1">cancel</span>
                      <span className="text-gray-700">Share false information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-red-600 mt-1">cancel</span>
                      <span className="text-gray-700">Violate academic integrity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-red-600 mt-1">cancel</span>
                      <span className="text-gray-700">Engage in illegal activities</span>
                    </li>
                  </ul>
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