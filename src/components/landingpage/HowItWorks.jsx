export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Register Account',
      description: 'Create your profile with basic info to get started on the platform.',
      isSpecial: false
    },
    {
      number: '02',
      title: 'Verify .edu Email',
      description: 'Confirm your student status through your official college email address.',
      isSpecial: true,
      icon: 'mark_email_read'
    },
    {
      number: '03',
      title: 'Engage & Learn',
      description: 'Dive into communities, start a study group, and ace your classes.',
      isSpecial: false
    }
  ]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Start your digital journey</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Join thousands of students across the country in just three simple steps.</p>
        </div>
        
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-gray-200 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md transition-transform group-hover:scale-110 ${
                  step.isSpecial 
                    ? 'bg-[#2d6886]/90 text-white shadow-[#2d6886]/20' 
                    : 'bg-white border-4 border-gray-200'
                }`}>
                  {step.isSpecial ? (
                    <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                  ) : (
                    <span className="text-2xl font-black text-[#2d6886]">{step.number}</span>
                  )}
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-gray-500 max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
