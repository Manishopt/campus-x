import React, { useState } from 'react';

const Feed = () => {
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [likedPosts, setLikedPosts] = useState({});

  const categories = ['All Posts', 'Academic', 'Social', 'Events', 'Internships'];
  
  const posts = [
    {
      id: 1,
      author: 'Elena Gilbert',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKJ1Osm_xxUrIldzAeP7oCjeC1HiFjxB9kRQDhxtEir5uxRC5KWjm80QTKS4SrkQhmt21-5F8paKK2P5MKy9whNfpZgG1Pg2eAZcfQiCRFFMlwLLmme7urwN19Yh8XNl2Uas7b2GdTA1lk_i7DXq2YXAxZ6rH4k_hMCefJ-L250SakHJZi_oMxkxCqZcWPjG96S4ZPsey6lC-Qi64QQMDmEK5jDjHZ7cw_Gs38aSVDiyBhSpQ8n95y3Yo0TPOezH5ezP8Ru4D4sQK1',
      verified: true,
      university: 'UC Berkeley',
      time: '45m ago',
      content: 'Is anyone else struggling with the final proofs in Math 110? Thinking of hosting a library study session this Thursday at 6 PM. Bringing coffee and snacks! ☕️🥨',
      likes: 24,
      comments: 8,
      liked: false
    },
    {
      id: 2,
      author: 'Marcus V.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ7kp3-Tqo1wY-nEF1L03c5iBQqBR0etOVzKELDmSR2OiHPZIyaI08R4ejaf95_xrp4gtdrDRDEIwgyD1RBJCFJ7X3qSZAqqv5KjjgSBtcaq3TsvaPSiDulDri-gYLLeKxVqB6H0Lhlic9VbnD5_66HpiM2-FyHh8Bt6_n_B2YuSzUhq5fiyBQTKqoWHUa81TbyqxpY__o0v37nqwmJzBrssICCD3nVPfXkOB3KvbB1sX8e3iXFOtxeTkBTdDr55bKoD6_6EfHI0E9',
      verified: false,
      university: 'Stanford University',
      time: '3h ago',
      content: 'Campus at dusk is something else. Good luck to everyone pulling an all-nighter for midterms! 🏛️✨',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPduon6LC4C8ekM6ZqrA0rhUAwxrhhPn_i5ADKFnCGu41FZbRzGl55OrVjQfs9UzyeUny2StkV5ld7mtWnA5bdRhfc0mBb7xOHsPoCYISxCyMTlC7VDBu5eLpX1LjHLiaYNB-lHaF4s3orfjrhW7YR8SRIrF9Jc85LL0yME95B1N6WMvMXroDxGmX-1ZhxZGff4vmJ4aBVUb7whuUB_Dm6VSwcQMWScqRurxiYIkHX9dnFAK4-YCzLJPXG8yc6rJeEgB3RJ5w1jKBX',
      likes: 152,
      comments: 12,
      liked: true
    }
  ];

  const trendingTopics = [
    { category: 'Academic • Trending', title: '#CS101Midterms', description: '1.2k students discussing' },
    { category: 'Events', title: 'Spring Career Fair', description: 'Registration ends tonight' },
    { category: 'Social', title: 'Hackathon 2024', description: '45 teams registered' }
  ];

  const deadlines = [
    { title: 'Bio-Chem Lab Report', time: 'Today, 11:59 PM', color: 'bg-primary' },
    { title: 'Design Workshop', time: 'Tomorrow, 2:00 PM', color: 'bg-orange-400' }
  ];

  const handleLike = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  return (
    <div className="flex min-h-screen bg-background-light text-[#101119] font-display transition-colors duration-300">
      {/* Sidebar Navigation (Desktop) */}
      <aside className="fixed left-0 top-0 h-screen w-64 border-r border-[#e9eaf1] bg-background-light hidden lg:flex flex-col p-6 z-50">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="bg-primary size-10 rounded-xl flex items-center justify-center text-white">
            <span className="material-symbols-outlined">school</span>
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">Campus Feed</h1>
            <p className="text-xs text-[#57608e]">Verified Student</p>
          </div>
        </div>
        
        <nav className="flex flex-col gap-2 grow">
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-semibold" href="#">
            <span className="material-symbols-outlined">home</span>
            <span>Home</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#e9eaf1] transition-colors" href="#">
            <span className="material-symbols-outlined">groups</span>
            <span>Study Groups</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#e9eaf1] transition-colors" href="#">
            <span className="material-symbols-outlined">book</span>
            <span>Courses</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#e9eaf1] transition-colors" href="#">
            <span className="material-symbols-outlined">chat_bubble</span>
            <span>Messages</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#e9eaf1] transition-colors" href="#">
            <span className="material-symbols-outlined">account_circle</span>
            <span>Profile</span>
          </a>
        </nav>
        
        <div className="mt-auto pt-6 border-t border-[#e9eaf1]">
          <button className="w-full bg-primary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
            <span className="material-symbols-outlined text-[20px]">add_circle</span>
            <span>Create Post</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 flex flex-col items-center">
        {/* Top Navigation / Search Bar */}
        <header className="sticky top-0 w-full max-w-[1200px] bg-background-light/80 backdrop-blur-md z-40 px-6 py-4 flex items-center justify-between border-b border-[#e9eaf1]">
          <div className="flex-1 max-w-xl">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#57608e]">search</span>
              <input 
                className="w-full bg-[#e9eaf1] border-none rounded-xl pl-12 pr-4 py-2.5 focus:ring-2 focus:ring-primary/50 text-sm transition-all" 
                placeholder="Search campus discussions..." 
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 ml-6">
            <button className="p-2.5 rounded-xl bg-[#e9eaf1] text-[#101119] relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background-light"></span>
            </button>
            <div className="h-10 w-10 rounded-full bg-cover bg-center border-2 border-primary" 
                 style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhifSJos20Bz22HEl2Dizu689_ZbFKIZB2lacKrtkKrT1ffM_cTeW4EZBlz4Yb8cZlX8TqBuPItaqTnxjkAOB26OD0EleOg51fZGN0poj8Xv-WEUEGg0K4St3gE-ST1KSh4OIFHPwZEHgavR83xvhrOekdZeCCVejg57VpQGu-Wq1avX48Mz2Mrup-SFTHkfzvgY6uIYo_U4OoVsgqer4MrhPVpN2g0RlMTmVrsFZLl0FbbLDhXBIyqGdG7OGwParFFY7Ps61yss97")'}}>
            </div>
          </div>
        </header>

        <div className="w-full max-w-[1000px] flex gap-8 p-6">
          {/* Feed Column */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Composer */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#e9eaf1]">
              <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-full bg-cover bg-center" 
                     style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9k-L620lraYJXxsy5A0Zc52L5UMKWGjxi5P7dLbZaavMop2JFFQV8-ipMA2ZcxwYuqsSyzFa7gJWLPdh1tPEb7Zja5c-EG6aoCbiUCfw4TOLPU3ii1P4VDtH1XW9461GsX_UMj7PyG7cTZKscyrN0ljLhSHPgDsd5N_upiNClGrcVPM2znrcrNHl_1zG93-GwB_G1rGcvTbvzoYlzxEM3eKbTcAgiwt0Cx73F0CQ2TIimpilqf_AlxBRX8M6r2tukP46A9wWyKOYx")'}}>
                </div>
                <div className="flex-1">
                  <textarea 
                    className="w-full border-none focus:ring-0 text-base bg-transparent p-0 placeholder:text-[#b3b8d0] resize-none" 
                    placeholder="Share something with your campus..." 
                    rows="2"
                  />
                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#f0f1f5]">
                    <div className="flex gap-2">
                      <button className="p-2 text-[#57608e] hover:bg-[#f0f1f5] rounded-lg transition-colors">
                        <span className="material-symbols-outlined">image</span>
                      </button>
                      <button className="p-2 text-[#57608e] hover:bg-[#f0f1f5] rounded-lg transition-colors">
                        <span className="material-symbols-outlined">poll</span>
                      </button>
                      <button className="p-2 text-[#57608e] hover:bg-[#f0f1f5] rounded-lg transition-colors">
                        <span className="material-symbols-outlined">attach_file</span>
                      </button>
                    </div>
                    <button className="bg-primary text-white px-6 py-1.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Category Chips */}
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-white border border-[#e9eaf1] text-[#57608e] hover:border-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Posts */}
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e9eaf1] transition-transform hover:shadow-md">
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-11 w-11 rounded-full bg-cover bg-center border-2 border-primary/10" 
                         style={{backgroundImage: `url("${post.avatar}")`}}>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-[#101119]">{post.author}</h3>
                        {post.verified && (
                          <span className="material-symbols-outlined text-primary text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                        )}
                      </div>
                      <p className="text-xs text-[#57608e]">{post.university} • {post.time}</p>
                    </div>
                    <button className="text-[#57608e] hover:text-[#101119] transition-colors">
                      <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                  </div>
                  
                  <p className="text-[#101119] leading-relaxed mb-4">
                    {post.content}
                  </p>
                  
                  {post.image && (
                    <div className="rounded-lg overflow-hidden mb-4 aspect-video bg-[#f0f1f5]">
                      <img alt="Campus image" className="w-full h-full object-cover" src={post.image} />
                    </div>
                  )}
                  
                  <div className="flex items-center gap-6 pt-4 border-t border-[#f0f1f5]">
                    <button 
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                        likedPosts[post.id] || post.liked ? 'text-primary' : 'text-[#57608e] hover:text-primary'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: (likedPosts[post.id] || post.liked) ? "'FILL' 1" : "'FILL' 0"}}>thumb_up</span>
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-sm font-medium text-[#57608e] hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">chat_bubble_outline</span>
                      <span>{post.comments} Comments</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-sm font-medium text-[#57608e] hover:text-primary transition-colors ml-auto">
                      <span className="material-symbols-outlined text-[20px]">share</span>
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}

            {/* Feedback message */}
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#e9eaf1] rounded-full flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined text-3xl">task_alt</span>
              </div>
              <h4 className="font-bold text-lg">You're all caught up!</h4>
              <p className="text-[#57608e] text-sm mt-1">Check back later for new updates from your campus peers.</p>
              <button className="mt-6 text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                View Global Feed <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Right Sidebar (Desktop) */}
          <div className="hidden xl:flex w-72 flex-col gap-6 sticky top-24 h-fit">
            {/* Trending Widget */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e9eaf1]">
              <h3 className="font-bold text-sm uppercase tracking-wider text-[#57608e] mb-4">Campus Pulse</h3>
              <div className="flex flex-col gap-4">
                {trendingTopics.map((topic, index) => (
                  <a key={index} className="group" href="#">
                    <p className="text-xs text-[#57608e] mb-0.5">{topic.category}</p>
                    <p className="font-bold text-sm group-hover:text-primary transition-colors">{topic.title}</p>
                    <p className="text-xs text-[#57608e] mt-1">{topic.description}</p>
                  </a>
                ))}
              </div>
              <button className="w-full mt-6 text-primary text-xs font-bold py-2 border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">
                See More
              </button>
            </div>

            {/* Upcoming Deadlines */}
            <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                <h3 className="font-bold text-sm uppercase tracking-wider">Your Calendar</h3>
              </div>
              <div className="flex flex-col gap-3">
                {deadlines.map((deadline, index) => (
                  <div key={index} className="flex gap-3">
                    <div className={`w-1.5 h-auto ${deadline.color} rounded-full shrink-0`}></div>
                    <div>
                      <p className="font-bold text-sm">{deadline.title}</p>
                      <p className="text-xs text-[#57608e]">{deadline.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="px-2 flex flex-wrap gap-x-4 gap-y-2">
              <a className="text-[11px] text-[#57608e] hover:underline" href="#">Privacy Policy</a>
              <a className="text-[11px] text-[#57608e] hover:underline" href="#">Guidelines</a>
              <a className="text-[11px] text-[#57608e] hover:underline" href="#">Terms of Service</a>
              <p className="text-[11px] text-[#57608e] w-full">© 2024 Digital Campus Feed</p>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Navigation Bar */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-[#e9eaf1] flex items-center justify-around py-3 lg:hidden z-50">
        <a className="flex flex-col items-center gap-1 text-primary" href="#">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>home</span>
          <span className="text-[10px] font-bold">Home</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-[#57608e]" href="#">
          <span className="material-symbols-outlined">groups</span>
          <span className="text-[10px] font-medium">Groups</span>
        </a>
        <button className="bg-primary text-white p-2 rounded-full -mt-8 border-4 border-[#fafafa] shadow-lg">
          <span className="material-symbols-outlined">add</span>
        </button>
        <a className="flex flex-col items-center gap-1 text-[#57608e]" href="#">
          <span className="material-symbols-outlined">book</span>
          <span className="text-[10px] font-medium">Courses</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-[#57608e]" href="#">
          <span className="material-symbols-outlined">account_circle</span>
          <span className="text-[10px] font-medium">Profile</span>
        </a>
      </nav>
    </div>
  );
};

export default Feed;