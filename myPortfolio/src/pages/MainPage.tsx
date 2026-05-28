import { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, ExternalLink, MapPin, Calendar,
  Briefcase, GraduationCap, Phone, ChevronUp, Sparkles,
  Code, User, FileText, Zap, Star
} from 'lucide-react';
import profilePic from '../assets/me.jpg';
import { projects } from '../constants/projectList';

const MainPage = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experience = [
    {
      company: "Telepathy Infotech Pvt. Ltd.",
      role: "Flutter Developer (Internship → Full-Time)",
      period: "Sept 2025 – May 2026",
      location: "Jaipur, India",
      description: "Led feature development on Sugaryy, a live travel-based dating app on the Play Store, using Flutter and GetX for state management. Built REST API integrations using the HTTP package and implemented local data persistence with SharedPreferences. Integrated third-party packages for authentication, media handling, and UI enhancements. Contributed to HomeLead Agent, a real estate CRM app, using Riverpod for scalable state management. Promoted from intern to full-time Flutter Developer within 6 months based on contributions and performance.",
      gradient: "from-teal-500 to-cyan-500",
      badge: "Full-Time"
    },
    {
      company: "Sumedha Softech Pvt. Ltd.",
      role: "React Native Developer Intern",
      period: "March 2025 – July 2025",
      location: "Jaipur, India",
      description: "Developed fully functional mobile applications using React Native, contributing to a live project called PrimeBuilder. Designed and built reusable UI components and integrated third-party libraries to accelerate development. Built an Expense Tracker App as the final internship project, implementing global state management with Redux Toolkit and Context API. Gained hands-on experience in debugging, API integration, and the full mobile development lifecycle.",
      gradient: "from-indigo-500 to-violet-500",
      badge: "Internship"
    }
  ];

  const skills = {
    "Mobile Development": {
      skills: ["Flutter", "React Native", "Dart", "Android Studio"],
      gradient: "from-teal-400 to-cyan-500",
      icon: "📱"
    },
    "State Management": {
      skills: ["GetX", "Riverpod", "Redux Toolkit", "Context API"],
      gradient: "from-indigo-400 to-violet-500",
      icon: "🔄"
    },
    "Programming": {
      skills: ["Dart", "JavaScript", "TypeScript"],
      gradient: "from-cyan-400 to-teal-500",
      icon: "💻"
    },
    "Tools & Services": {
      skills: ["REST APIs", "HTTP Package", "Axios", "SharedPreferences", "Firebase", "Git"],
      gradient: "from-violet-400 to-indigo-500",
      icon: "🛠️"
    },
    "Soft Skills": {
      skills: ["Problem Solving", "Communication", "Adaptability", "Fast Learner"],
      gradient: "from-teal-400 to-indigo-500",
      icon: "🤝"
    }
  };

  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'resume', label: 'Resume', icon: FileText }
  ];

  return (
    <div className="min-h-screen text-gray-900 font-sans overflow-x-hidden relative"
      style={{ background: 'linear-gradient(135deg, #f0fdfa 0%, #e0f2fe 30%, #ede9fe 70%, #f0fdf4 100%)' }}>

      {/* Animated mesh background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, #14b8a6, #0891b2)' }} />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, #6366f1, #7c3aed)', animationDelay: '1s' }} />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, #06b6d4, #6366f1)', animationDelay: '2s' }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      {/* ──────── HEADER ──────── */}
      <header className={`relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">

          {/* Avatar */}
          <div className="flex-shrink-0 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 scale-110"
                style={{ background: 'linear-gradient(135deg, #14b8a6, #6366f1)' }} />
              <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white/60 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                style={{ backdropFilter: 'blur(10px)', boxShadow: '0 0 40px rgba(20,184,166,0.3), 0 25px 50px rgba(0,0,0,0.15)' }}>
                <img src={profilePic} alt="Bhavani Nayak" className="w-full h-full object-cover" />
              </div>
              {/* Status dot */}
              <div className="absolute -top-1 -right-1 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-white/50">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-teal-700">Open to work</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 space-y-5">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full border"
                  style={{ background: 'rgba(20,184,166,0.1)', borderColor: 'rgba(20,184,166,0.3)', color: '#0f766e' }}>
                  Flutter · Cross Platform
                </span>
                <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full border"
                  style={{ background: 'rgba(99,102,241,0.1)', borderColor: 'rgba(99,102,241,0.3)', color: '#4338ca' }}>
                  8 Months Exp
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-none tracking-tight"
                style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0d9488 50%, #4f46e5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Bhavani<br />Nayak
              </h1>
              <div className="mt-3 h-1 w-24 rounded-full" style={{ background: 'linear-gradient(90deg, #14b8a6, #6366f1)' }} />
            </div>

            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Building <span className="font-semibold text-teal-700">production-grade Flutter apps</span> — shipped Sugaryy & HomeLead Agent to the Play Store. Proficient in GetX, Riverpod & REST APIs.
            </p>

            {/* Contact row */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Mail, label: 'bhawannayak02@gmail.com', href: 'mailto:bhawannayak02@gmail.com' },
                { icon: Phone, label: '+91 6378136259', href: 'tel:+916378136259' },
                { icon: MapPin, label: 'Jaipur, Rajasthan', href: null },
              ].map((item, i) => {
                const Icon = item.icon;
                const base = "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg";
                const style = { background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(10px)', borderColor: 'rgba(255,255,255,0.8)' };
                return item.href ? (
                  <a key={i} href={item.href} className={`${base} text-gray-700 hover:text-teal-700`} style={style}>
                    <Icon size={15} /> {item.label}
                  </a>
                ) : (
                  <span key={i} className={`${base} text-gray-600`} style={style}>
                    <Icon size={15} /> {item.label}
                  </span>
                );
              })}
              <a href="https://www.linkedin.com/in/bhavani-nayak" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: 'linear-gradient(135deg, #14b8a6, #6366f1)' }}>
                <Linkedin size={15} /> LinkedIn
              </a>
              <a href="https://github.com/Bhavani-Nayak" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(10px)', borderColor: 'rgba(255,255,255,0.8)' }}>
                <Github size={15} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ──────── STICKY NAV ──────── */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'shadow-xl' : ''}`}
        style={{ background: 'rgba(240,253,250,0.7)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(20,184,166,0.15)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center gap-2 py-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = activeSection === item.id;
              return (
                <button key={item.id} onClick={() => setActiveSection(item.id)}
                  className="relative px-7 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2"
                  style={active
                    ? { background: 'linear-gradient(135deg, #14b8a6, #6366f1)', color: '#fff', boxShadow: '0 4px 20px rgba(99,102,241,0.35)' }
                    : { color: '#4b5563', background: 'transparent' }}>
                  <Icon size={16} className="transition-transform duration-300" style={active ? { transform: 'scale(1.15)' } : {}} />
                  {item.label}
                  {active && <div className="absolute inset-0 rounded-xl blur-sm opacity-40 -z-10" style={{ background: 'linear-gradient(135deg, #14b8a6, #6366f1)' }} />}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ──────── MAIN ──────── */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-14">

        {/* ── ABOUT ── */}
        {activeSection === 'about' && (
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            {/* Stats bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { value: '2', label: 'Apps on Play Store', icon: Star },
                { value: '8+', label: 'Months Experience', icon: Briefcase },
                { value: '4+', label: 'Tech Frameworks', icon: Zap },
                { value: '2', label: 'Companies Worked', icon: Sparkles },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="group rounded-2xl p-5 text-center border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(16px)', borderColor: 'rgba(255,255,255,0.8)', boxShadow: '0 4px 24px rgba(99,102,241,0.08)' }}>
                    <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, rgba(20,184,166,0.15), rgba(99,102,241,0.15))' }}>
                      <Icon size={20} style={{ color: '#14b8a6' }} />
                    </div>
                    <p className="text-3xl font-black" style={{ background: 'linear-gradient(135deg, #0d9488, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{stat.value}</p>
                    <p className="text-xs text-gray-500 font-medium mt-1">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-10">
              {/* Bio */}
              <div className="lg:col-span-2 space-y-6">
                <div className="rounded-3xl p-8 border"
                  style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255,255,255,0.9)', boxShadow: '0 8px 40px rgba(99,102,241,0.08)' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #14b8a6, #6366f1)' }}>
                      <User size={16} className="text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">About Me</h2>
                  </div>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      Flutter Developer with <span className="font-semibold text-teal-700">8 months of combined internship and full-time experience</span> building and shipping production mobile applications for Android.
                    </p>
                    <div className="rounded-2xl p-5 border-l-4" style={{ background: 'linear-gradient(135deg, rgba(20,184,166,0.06), rgba(99,102,241,0.06))', borderLeftColor: '#14b8a6' }}>
                      <p className="text-base">
                        Led development on <strong className="text-teal-700">Sugaryy</strong> — a live travel-based dating app — and contributed to <strong className="text-indigo-700">HomeLead Agent</strong>, a real estate CRM. Promoted from intern to full-time at Telepathy Infotech within <strong>6 months</strong>.
                      </p>
                    </div>
                    <p className="text-base">
                      My stack spans Flutter, GetX, Riverpod, REST APIs, React Native, and Redux Toolkit. I'm detail-oriented, adaptable, and thrive in fast-paced teams.
                    </p>
                  </div>
                </div>

                {/* Interests */}
                <div className="rounded-3xl p-8 border"
                  style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255,255,255,0.9)', boxShadow: '0 8px 40px rgba(99,102,241,0.08)' }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6366f1, #14b8a6)' }}>
                      <Sparkles size={16} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">Interests & Hobbies</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[{ emoji: "🏏", text: "Cricket" }, { emoji: "🎮", text: "Gaming" }, { emoji: "🎵", text: "Music" }, { emoji: "🎬", text: "Movies" }].map((item, i) => (
                      <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default"
                        style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(10px)', borderColor: 'rgba(255,255,255,0.9)' }}>
                        <span className="text-3xl">{item.emoji}</span>
                        <span className="text-sm font-semibold text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-5">
                {/* Quick links */}
                <div className="rounded-3xl p-6 border"
                  style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255,255,255,0.9)', boxShadow: '0 8px 40px rgba(99,102,241,0.08)' }}>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                    <h3 className="font-bold text-gray-800">Let's Connect</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { icon: Mail, label: 'Email', val: 'bhawannayak02@gmail.com', href: 'mailto:bhawannayak02@gmail.com', color: '#ef4444' },
                      { icon: Phone, label: 'Phone', val: '+91 6378136259', href: 'tel:+916378136259', color: '#14b8a6' },
                      { icon: Linkedin, label: 'LinkedIn', val: 'bhavani-nayak', href: 'https://www.linkedin.com/in/bhavani-nayak', color: '#6366f1' },
                      { icon: Github, label: 'GitHub', val: 'Bhavani-Nayak', href: 'https://github.com/Bhavani-Nayak', color: '#1f2937' },
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                          className="flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 hover:translate-x-1 hover:shadow-md group"
                          style={{ background: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.8)' }}>
                          <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                            style={{ background: `${item.color}18` }}>
                            <Icon size={17} style={{ color: item.color }} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                            <p className="text-sm font-semibold text-gray-700 truncate group-hover:text-teal-700 transition-colors">{item.val}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Mini skill badges */}
                <div className="rounded-3xl p-6 border"
                  style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255,255,255,0.9)', boxShadow: '0 8px 40px rgba(99,102,241,0.08)' }}>
                  <h3 className="font-bold text-gray-800 mb-4">Core Tech</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Flutter", "Dart", "GetX", "Riverpod", "React Native", "REST API", "Firebase", "Git"].map((s, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-full text-xs font-bold border transition-all duration-300 hover:scale-105 cursor-default"
                        style={{ background: i % 2 === 0 ? 'rgba(20,184,166,0.1)' : 'rgba(99,102,241,0.1)', borderColor: i % 2 === 0 ? 'rgba(20,184,166,0.25)' : 'rgba(99,102,241,0.25)', color: i % 2 === 0 ? '#0f766e' : '#4338ca' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Featured project */}
            <div className="rounded-3xl p-8 border relative overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255,255,255,0.9)', boxShadow: '0 8px 40px rgba(20,184,166,0.12)' }}>
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #14b8a6, #6366f1)' }} />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: '#14b8a6' }} />
                  <h2 className="text-2xl font-bold text-gray-800">Featured Project</h2>
                  <span className="ml-2 px-3 py-1 text-xs font-bold rounded-full text-white" style={{ background: 'linear-gradient(135deg, #14b8a6, #6366f1)' }}>
                    Live on Play Store
                  </span>
                </div>
                <div className="rounded-2xl p-6 border" style={{ background: 'rgba(255,255,255,0.6)', borderColor: 'rgba(20,184,166,0.2)' }}>
                  <h3 className="text-2xl font-bold mb-2">
                    <a href="https://play.google.com/store/apps/details?id=com.sugaryy"
                      className="flex items-center gap-2 group transition-colors duration-300 hover:text-teal-700"
                      target="_blank" rel="noreferrer">
                      Sugaryy – Travel Dating App
                      <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </a>
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Lead developer on a live travel-based matchmaking app. Built authentication flows, media upload, real-time feed updates, and profile management using Flutter and GetX.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Flutter", "GetX", "REST API", "SharedPreferences", "Dart"].map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-sm font-semibold"
                        style={{ background: 'rgba(20,184,166,0.12)', color: '#0f766e' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── PROJECTS ── */}
        {activeSection === 'projects' && (
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #14b8a6, #6366f1)' }}>
                <Code size={20} className="text-white" />
              </div>
              <h2 className="text-4xl font-black text-gray-800">Projects</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${project.featured ? 'lg:col-span-2' : ''}`}
                  style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255,255,255,0.9)', boxShadow: '0 4px 24px rgba(99,102,241,0.07)' }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Top gradient bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient} transition-all duration-500 ${hoveredProject === index ? 'h-2' : ''}`} />

                  {/* Glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className={`text-xl font-bold text-gray-800 transition-colors duration-300 ${hoveredProject === index ? 'text-teal-700' : ''}`}>
                        <a href={project.link} target={project.link !== '#' ? '_blank' : undefined} rel="noreferrer"
                          className="flex items-center gap-2 group/link">
                          {project.title}
                          {project.link !== '#' && (
                            <ExternalLink size={16} className="opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-300 text-teal-600" />
                          )}
                        </a>
                      </h3>
                      {project.featured && (
                        <span className="flex-shrink-0 ml-3 px-3 py-1 text-xs font-bold rounded-full text-white"
                          style={{ background: 'linear-gradient(135deg, #14b8a6, #6366f1)' }}>
                          ⭐ Featured
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, ti) => (
                        <span key={ti}
                          className="px-3 py-1.5 text-xs font-semibold rounded-full border transition-all duration-200 hover:scale-105 cursor-default"
                          style={{ background: 'rgba(255,255,255,0.7)', borderColor: 'rgba(99,102,241,0.2)', color: '#4338ca' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── RESUME ── */}
        {activeSection === 'resume' && (
          <div className={`space-y-14 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            {/* Experience */}
            <section>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #14b8a6, #6366f1)' }}>
                  <Briefcase size={20} className="text-white" />
                </div>
                <h2 className="text-4xl font-black text-gray-800">Experience</h2>
              </div>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className="group relative rounded-3xl border overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                    style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255,255,255,0.9)', boxShadow: '0 4px 24px rgba(99,102,241,0.07)' }}>
                    <div className={`h-1.5 bg-gradient-to-r ${job.gradient}`} />
                    <div className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-xl font-bold text-gray-800">{job.company}</h3>
                            <span className={`px-2.5 py-0.5 text-xs font-bold rounded-full text-white bg-gradient-to-r ${job.gradient}`}>{job.badge}</span>
                          </div>
                          <p className="text-gray-500 text-sm">📍 {job.location}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 bg-white/60 px-4 py-2 rounded-full border border-white/80 flex-shrink-0"
                          style={{ backdropFilter: 'blur(10px)' }}>
                          <Calendar size={14} />
                          {job.period}
                        </div>
                      </div>
                      <p className={`text-base font-bold mb-4 bg-gradient-to-r ${job.gradient} bg-clip-text text-transparent`}>
                        {job.role}
                      </p>
                      <p className="text-gray-600 leading-relaxed text-sm">{job.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6366f1, #14b8a6)' }}>
                  <Sparkles size={20} className="text-white" />
                </div>
                <h2 className="text-4xl font-black text-gray-800">Skills & Expertise</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {Object.entries(skills).map(([category, data], index) => (
                  <div key={category}
                    className="group rounded-3xl border p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                    style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255,255,255,0.9)', boxShadow: '0 4px 24px rgba(99,102,241,0.07)', animationDelay: `${index * 100}ms` }}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shadow-lg bg-gradient-to-r ${data.gradient}`}>
                        {data.icon}
                      </div>
                      <h3 className="font-bold text-gray-800">{category}</h3>
                    </div>
                    <div className="space-y-2">
                      {data.skills.map((skill, si) => (
                        <div key={si}
                          className="flex items-center gap-3 p-2.5 rounded-xl border transition-all duration-300 hover:translate-x-1"
                          style={{ background: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.9)' }}>
                          <div className={`w-2 h-2 rounded-full flex-shrink-0 bg-gradient-to-r ${data.gradient}`} />
                          <span className="text-sm font-medium text-gray-700">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #14b8a6, #6366f1)' }}>
                  <GraduationCap size={20} className="text-white" />
                </div>
                <h2 className="text-4xl font-black text-gray-800">Education</h2>
              </div>
              <div className="space-y-4">
                {[
                  { institution: "Rajasthan Technical University", degree: "B.Tech in Computer Science & Engineering", location: "SBCET, Jaipur", period: "2021 – 2025", primary: true },
                  { institution: "Board of Senior Secondary Education, Rajasthan", degree: "Senior Secondary Education", period: "2021" },
                  { institution: "Board of Secondary Education, Rajasthan", degree: "Secondary Education", period: "2019" },
                ].map((edu, i) => (
                  <div key={i} className={`group rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg`}
                    style={{
                      background: edu.primary ? 'linear-gradient(135deg, rgba(20,184,166,0.07), rgba(99,102,241,0.07))' : 'rgba(255,255,255,0.55)',
                      backdropFilter: 'blur(20px)',
                      borderColor: edu.primary ? 'rgba(20,184,166,0.25)' : 'rgba(255,255,255,0.9)',
                      boxShadow: '0 4px 24px rgba(99,102,241,0.06)'
                    }}>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                      <div>
                        <h3 className="font-bold text-gray-800">{edu.institution}</h3>
                        <p className={`text-sm font-semibold mt-1 ${edu.primary ? 'text-teal-700' : 'text-gray-600'}`}>{edu.degree}</p>
                        {edu.location && <p className="text-xs text-gray-500 mt-0.5">{edu.location}</p>}
                      </div>
                      <span className="flex items-center gap-1.5 text-sm text-gray-500 bg-white/60 px-3 py-1.5 rounded-full border border-white/80 flex-shrink-0"
                        style={{ backdropFilter: 'blur(10px)' }}>
                        <Calendar size={13} /> {edu.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Personal Traits */}
            <section>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)' }}>
                  <User size={20} className="text-white" />
                </div>
                <h2 className="text-4xl font-black text-gray-800">Personal Traits</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Strengths", emoji: "💪", items: ["Detail-oriented and quality-focused", "Strong UI/UX instinct for mobile apps", "Resilient and adaptable to change", "Natural leader with strong communication"], grad: "from-teal-400 to-cyan-500" },
                  { title: "Work Style", emoji: "🎯", items: ["Thrives in rapidly changing environments", "Comfortable with uncertainty and diversity", "Competitive and results-driven", "Values precision and high-quality work"], grad: "from-indigo-400 to-violet-500" },
                ].map((section, i) => (
                  <div key={i} className="rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                    style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255,255,255,0.9)', boxShadow: '0 4px 24px rgba(99,102,241,0.07)' }}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg bg-gradient-to-r ${section.grad}`}>
                        {section.emoji}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">{section.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-3 text-gray-700 text-sm hover:translate-x-1 transition-transform duration-300">
                          <div className={`w-2 h-2 rounded-full flex-shrink-0 bg-gradient-to-r ${section.grad}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      {/* ──────── FOOTER ──────── */}
      <footer className="relative z-10 mt-20 border-t" style={{ background: 'rgba(255,255,255,0.4)', backdropFilter: 'blur(20px)', borderColor: 'rgba(20,184,166,0.15)' }}>
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <div className="flex items-center justify-center gap-5 mb-6">
            {[
              { icon: Mail, href: "mailto:bhawannayak02@gmail.com", color: '#ef4444' },
              { icon: Linkedin, href: "https://www.linkedin.com/in/bhavani-nayak", color: '#6366f1' },
              { icon: Github, href: "https://github.com/Bhavani-Nayak", color: '#1f2937' },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <a key={i} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                  className="w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ background: `${s.color}12`, borderColor: `${s.color}30`, color: s.color }}>
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
          <div className="h-0.5 w-20 rounded-full mx-auto mb-5" style={{ background: 'linear-gradient(90deg, #14b8a6, #6366f1)' }} />
          <p className="font-semibold text-gray-700">© 2026 Bhavani Nayak</p>
          <p className="text-sm text-gray-400 mt-1">Flutter Developer · Building cross-platform mobile experiences</p>
        </div>
      </footer>

      {/* Scroll to top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center z-50"
        style={{ background: 'linear-gradient(135deg, #14b8a6, #6366f1)', boxShadow: '0 4px 20px rgba(99,102,241,0.4)' }}>
        <ChevronUp size={20} />
      </button>
    </div>
  );
};

export default MainPage;
