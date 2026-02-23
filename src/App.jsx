import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/landingpage/Header'
import Hero from './components/landingpage/Hero'
import Features from './components/landingpage/Features'
import HowItWorks from './components/landingpage/HowItWorks'
import CTA from './components/landingpage/CTA'
import Footer from './components/landingpage/Footer'
import Login from './pages/Login'
import PrivacyPolicy from './company/PrivacyPolicy'
import TermsOfService from './company/TermsOfService'
import AboutUs from './company/AboutUs'
import Careers from './company/Careers'
import HelpCenter from './support/HelpCenter'
import SafetyCenter from './support/SafetyCenter'
import ReportAbuse from './support/ReportAbuse'
import ContactUs from './support/ContactUs'
import Feed from './pages/Feed'

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-display transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/safety" element={<SafetyCenter />} />
        <Route path="/report" element={<ReportAbuse />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  )
}

export default App