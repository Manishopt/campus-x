import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function HelpCenter() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState(null)

  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: 'rocket_launch',
      articles: [
        { title: 'How to create your account', content: 'Sign up with your university email address and verify your student status.' },
        { title: 'Complete your profile', content: 'Add your major, interests, and a profile photo to connect with peers.' },
        { title: 'Join study groups', content: 'Browse and join groups related to your courses or interests.' },
        { title: 'Navigate the dashboard', content: 'Learn your way around the main features and layout.' }
      ]
    },
    {
      id: 'account-settings',
      title: 'Account Settings',
      icon: 'settings',
      articles: [
        { title: 'Change your password', content: 'Update your password regularly for account security.' },
        { title: 'Update email address', content: 'Change your verified university email if needed.' },
        { title: 'Privacy preferences', content: 'Control who can see your profile and activities.' },
        { title: 'Notification settings', content: 'Choose which notifications you receive.' }
      ]
    },
    {
      id: 'study-groups',
      title: 'Study Groups',
      icon: 'groups',
      articles: [
        { title: 'Create a study group', content: 'Start your own group for courses or projects.' },
        { title: 'Invite members', content: 'Add classmates to your private study groups.' },
        { title: 'Group chat features', content: 'Use messaging, file sharing, and video calls.' },
        { title: 'Schedule study sessions', content: 'Set up recurring meetings with your group.' }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: 'build',
      articles: [
        { title: 'Login issues', content: 'Can\'t sign in? Check your email and password.' },
        { title: 'Email verification problems', content: 'Not receiving verification emails? Check spam folder.' },
        { title: 'App performance', content: 'Slow loading? Clear cache and restart browser.' },
        { title: 'Mobile app issues', content: 'Problems with the mobile app? Update to latest version.' }
      ]
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
            <Link to="/help" className="text-sm font-semibold text-[#2D6886]">Help Center</Link>
            <Link to="/safety" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">Safety Center</Link>
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
              <Link to="/help" className="text-sm font-semibold text-[#2D6886]">Help Center</Link>
              <Link to="/safety" className="text-sm font-semibold hover:text-[#2D6886] transition-colors">Safety Center</Link>
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Help Center</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions and learn how to make the most of Digital Campus.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
                search
              </span>
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-[#2D6886]/10 focus:border-[#2D6886] text-gray-900 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Quick Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/help/getting-started" className="p-4 bg-[#2D6886]/5 border border-[#2D6886]/20 rounded-xl hover:bg-[#2D6886]/10 transition-colors">
                <span className="material-symbols-outlined text-[#2D6886] text-2xl mb-2">rocket_launch</span>
                <h3 className="font-semibold text-gray-900">Getting Started</h3>
                <p className="text-sm text-gray-600">New to Digital Campus? Start here.</p>
              </Link>
              <Link to="/help/account" className="p-4 bg-[#2D6886]/5 border border-[#2D6886]/20 rounded-xl hover:bg-[#2D6886]/10 transition-colors">
                <span className="material-symbols-outlined text-[#2D6886] text-2xl mb-2">settings</span>
                <h3 className="font-semibold text-gray-900">Account Settings</h3>
                <p className="text-sm text-gray-600">Manage your profile and preferences.</p>
              </Link>
              <Link to="/help/safety" className="p-4 bg-[#2D6886]/5 border border-[#2D6886]/20 rounded-xl hover:bg-[#2D6886]/10 transition-colors">
                <span className="material-symbols-outlined text-[#2D6886] text-2xl mb-2">security</span>
                <h3 className="font-semibold text-gray-900">Safety & Security</h3>
                <p className="text-sm text-gray-600">Keep your account safe and secure.</p>
              </Link>
            </div>
          </section>

          {/* FAQ Categories */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
            <div className="space-y-4">
              {categories.map((category) => (
                <div key={category.id} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#2D6886] text-xl">{category.icon}</span>
                      <h3 className="font-semibold text-gray-900">{category.title}</h3>
                    </div>
                    <span className="material-symbols-outlined text-gray-400 transition-transform">
                      {expandedCategory === category.id ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                  
                  {expandedCategory === category.id && (
                    <div className="px-6 pb-4 border-t border-gray-100">
                      <div className="pt-4 space-y-3">
                        {category.articles.map((article, index) => (
                          <div key={index} className="p-3 bg-gray-50 rounded-lg">
                            <h4 className="font-medium text-gray-900 mb-1">{article.title}</h4>
                            <p className="text-sm text-gray-600">{article.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Contact Support */}
          <section className="text-center">
            <div className="bg-[#2D6886]/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our support team is here to help.
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
                  to="/help/faq" 
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#2D6886] border border-[#2D6886] px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  <span className="material-symbols-outlined">question_mark</span>
                  View FAQ
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