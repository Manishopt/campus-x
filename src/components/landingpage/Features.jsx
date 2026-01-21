export default function Features() {
  const features = [
    {
      icon: 'groups',
      color: '#2D6886',
      title: 'Connect with Peers',
      description: 'Find classmates in your major and build your professional network from day one.'
    },
    {
      icon: 'hub',
      color: 'indigo',
      title: 'Niche Communities',
      description: 'Join groups for specific interests, campus clubs, and micro-study topics.'
    },
    {
      icon: 'forum',
      color: 'purple',
      title: 'Peer-to-Peer Q&A',
      description: 'Get honest answers and study tips from students who already mastered your courses.'
    },
    {
      icon: 'quiz',
      color: 'teal',
      title: 'Gamified Quizzes',
      description: 'Turn studying into a game. Compete with classmates in live, collaborative quiz sessions.'
    }
  ]

  const colorClasses = {
    '#2D6886': 'bg-[#2D6886]/10 text-[#2D6886]',
    indigo: 'bg-indigo-50 text-indigo-600',
    purple: 'bg-purple-50 text-purple-600',
    teal: 'bg-teal-50 text-teal-600'
  }

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Everything you need to thrive</h2>
            <p className="text-gray-500 text-lg">Designed specifically for the academic community with a focus on trust, privacy, and meaningful collaboration.</p>
          </div>
          <div className="hidden md:block">
            <div className="flex gap-2">
              <div className="w-12 h-1 bg-[#2D6886] rounded-full"></div>
              <div className="w-4 h-1 bg-gray-200 rounded-full"></div>
              <div className="w-4 h-1 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${colorClasses[feature.color]} rounded-2xl flex items-center justify-center mb-6`}>
                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
