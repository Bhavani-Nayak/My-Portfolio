import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, Briefcase, GraduationCap, Phone, ChevronDown, Sparkles, Code, User, FileText } from 'lucide-react';
import profilePic from '../assets/me.jpg'
import { projects } from '../constants/projectList';
const MainPage = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);


  const experience = [
    {
      company: "Sumedha Softech Pvt Ltd",
      role: "React Native Developer (Training)",
      period: "April 2025 – July 2025",
      description: "90-day intensive training in React Native development | Built fully functional mobile apps | Integrated third-party libraries | Designed intuitive UI components | Worked on live projects Boat-Flex and PrimeBuilder | Developed Expense Tracker App as final assignment",
      color: "from-emerald-500 to-teal-500"
    },
    {
      company: "CypherByte Technologies",
      role: "Java Developer (Internship)",
      period: "July 2024 – August 2024",
      description: "One-month internship in Java programming | Built Number Guessing Game and Library Management System | Enhanced problem-solving skills | Gained experience in object-oriented programming",
      color: "from-blue-500 to-indigo-500"
    }
  ];

  const skills = {
    "Mobile Development": {
      skills: ["React Native", "Android Studio", "UI/UX Understanding"],
      color: "from-emerald-500 to-cyan-500",
      icon: "📱"
    },
    "Programming": {
      skills: ["JavaScript", "TypeScript", "Core Java"],
      color: "from-blue-500 to-purple-500",
      icon: "💻"
    },
    "Tools & Libraries": {
      skills: ["Axios", "Redux Toolkit etc.", "Third-party Libraries Integration", "Debugging"],
      color: "from-purple-500 to-pink-500",
      icon: "🛠️"
    },
    "Soft Skills": {
      skills: ["Problem Solving", "Communication", "Team Collaboration"],
      color: "from-orange-500 to-red-500",
      icon: "🤝"
    }
  };

  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'resume', label: 'Resume', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 text-gray-900 font-sans overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header with enhanced animations */}
      <header className={`relative max-w-5xl mx-auto px-6 py-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
          <div className="flex-shrink-0 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/50 backdrop-blur-sm shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white text-5xl font-bold">
                
                <img src={profilePic} alt="B. Nayak" className="w-full h-full object" />
                </div>

              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Bhavani Nayak
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <div className="space-y-2 text-lg">
              <p className="text-gray-700 font-medium">B.Tech Graduate in Computer Science & Engineering</p>
              <p className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent flex items-center gap-2">
                <Sparkles className="text-emerald-500" size={20} />
                React Native Mobile Developer
                <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm rounded-full animate-pulse">
                  Fresher
                </span>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Navigation */}
      <nav className={`sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200/50 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-center gap-1 py-4">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 group ${
                    activeSection === item.id 
                      ? 'text-white shadow-lg transform scale-105' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  style={{
                    background: activeSection === item.id 
                      ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' 
                      : 'transparent',
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <Icon size={18} className={`transition-transform duration-300 ${activeSection === item.id ? 'scale-110' : 'group-hover:scale-110'}`} />
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-30 -z-10"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content with enhanced animations */}
      <main className="relative max-w-5xl mx-auto px-6 py-12">
        {activeSection === 'about' && (
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-2 space-y-8">
                <div className="prose prose-lg max-w-none">
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-xl first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600 first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                      B.Tech graduate in Computer Science and Engineering from SBCET, Jaipur, 
                      specializing in React Native mobile app development. With proficiency in 
                      JavaScript and TypeScript, I'm passionate about creating innovative tech 
                      solutions that solve real-world problems.
                    </p>
                    <p className="text-lg border-l-4 border-emerald-400 pl-6 bg-emerald-50/50 py-4 rounded-r-lg">
                      During my 90-day training at Sumedha Softech Pvt Ltd, I developed fully 
                      functional React Native applications, integrated third-party libraries, 
                      and designed intuitive UI components. I thrive in collaborative environments 
                      and have hands-on experience working on live projects like Boat-Flex and PrimeBuilder.
                    </p>
                    <p className="text-lg">
                      My approach combines technical expertise with strong problem-solving skills 
                      and effective communication. I'm detail-oriented, resilient, and adaptable 
                      to rapidly changing environments - qualities that make me excel in mobile 
                      app development.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Contact Card */}
                <div className="bg-gradient-to-br from-white to-blue-50/50 p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <h3 className="font-bold text-xl mb-6 text-gray-800 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Let's Connect
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: Mail, text: "bhawannayak02@gmail.com", href: "mailto:bhawannayak02@gmail.com", color: "hover:text-red-500" },
                      { icon: Phone, text: "+91 6378136259", href: "tel:+916378136259", color: "hover:text-green-500" },
                      { icon: Linkedin, text: "LinkedIn Profile", href: "https://www.linkedin.com/in/bhavani-nayak", color: "hover:text-blue-500" },
                      { icon: Github, text: "GitHub Profile", href: "https://github.com/Bhavani-Nayak", color: "hover:text-gray-800" },
                      { icon: MapPin, text: "Jaipur, Rajasthan", href: null, color: "text-gray-600" }
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="group">
                          {item.href ? (
                            <a
                              href={item.href}
                              className={`flex items-center gap-3 text-gray-600 transition-all duration-300 group-hover:translate-x-2 ${item.color}`}
                            >
                              <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                                <Icon size={18} />
                              </div>
                              <span className="text-sm font-medium">{item.text}</span>
                            </a>
                          ) : (
                            <div className={`flex items-center gap-3 ${item.color}`}>
                              <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                                <Icon size={18} />
                              </div>
                              <span className="text-sm font-medium">{item.text}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Interests Card */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <h3 className="font-bold text-xl mb-6 text-blue-800 flex items-center gap-2">
                    <Sparkles className="text-blue-600" size={20} />
                    Interests & Hobbies
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { emoji: "🏏", text: "Cricket Player" },
                      { emoji: "🎮", text: "Gaming" },
                      { emoji: "🎵", text: "Music" },
                      { emoji: "🎬", text: "Movies" }
                    ].map((interest, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-white/50 rounded-lg hover:bg-white/80 transition-all duration-300 hover:scale-105">
                        <span className="text-2xl">{interest.emoji}</span>
                        <span className="text-sm font-medium text-blue-700">{interest.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Project */}
            <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 p-8 rounded-2xl shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <h2 className="text-3xl font-bold text-gray-800">Latest Project</h2>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3">
                  <a href="https://github.com/Bhavani-Nayak/React-native/tree/main/ExpanceTracker" className="text-emerald-600 hover:text-emerald-700 transition-colors duration-300 flex items-center gap-2 group">
                    Expense Tracker App
                    <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </a>
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Final assignment project developed during React Native training. A comprehensive 
                  mobile application for tracking daily expenses with intuitive UI and seamless 
                  third-party library integration.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'projects' && (
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-12">
              <Code className="text-blue-600" size={32} />
              <h2 className="text-4xl font-bold text-gray-800">Featured Projects</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                    project.featured ? 'lg:col-span-2' : ''
                  }`}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative bg-white/90 backdrop-blur-sm p-8 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold group-hover:text-orange-500 group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                          style={{
                            backgroundImage: hoveredProject === index ? `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` : 'none'
                          }}>
                        <a href={project.link} className="flex items-center gap-2 group/link">
                          {project.title}
                          <ExternalLink size={18} className="opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all duration-300" />
                        </a>
                      </h3>
                      {project.featured && (
                        <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs rounded-full animate-pulse">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-all duration-300 hover:scale-105 cursor-default"
                          style={{
                            animationDelay: `${techIndex * 100}ms`
                          }}
                        >
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

        {activeSection === 'resume' && (
          <div className={`space-y-16 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Experience Section */}
            <section>
              <div className="flex items-center gap-3 mb-12">
                <Briefcase className="text-emerald-600" size={32} />
                <h2 className="text-4xl font-bold text-gray-800">Experience</h2>
              </div>
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full"></div>
                    <div className={`absolute left-0 top-6 w-1 bg-gradient-to-b ${job.color} rounded-full transition-all duration-500 scale-y-0 group-hover:scale-y-100 origin-top`}></div>
                    <div className="pl-12 pb-8">
                      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <h3 className="text-2xl font-bold text-gray-800">{job.company}</h3>
                          <span className="text-gray-600 flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                            <Calendar size={16} />
                            {job.period}
                          </span>
                        </div>
                        <p className={`text-lg font-semibold mb-4 bg-gradient-to-r ${job.color} bg-clip-text text-transparent`}>
                          {job.role}
                        </p>
                        <p className="text-gray-700 leading-relaxed">{job.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <div className="flex items-center gap-3 mb-12">
                <Sparkles className="text-purple-600" size={32} />
                <h2 className="text-4xl font-bold text-gray-800">Skills & Expertise</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(skills).map(([category, data], index) => (
                  <div key={category} 
                       className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100"
                       style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${data.color} rounded-xl flex items-center justify-center text-white text-xl shadow-lg`}>
                        {data.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{category}</h3>
                    </div>
                    <div className="space-y-3">
                      {data.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} 
                             className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:translate-x-2"
                             style={{ animationDelay: `${skillIndex * 100}ms` }}>
                          <div className={`w-2 h-2 bg-gradient-to-r ${data.color} rounded-full`}></div>
                          <span className="text-gray-700 font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section>
              <div className="flex items-center gap-3 mb-12">
                <GraduationCap className="text-blue-600" size={32} />
                <h2 className="text-4xl font-bold text-gray-800">Education</h2>
              </div>
              <div className="space-y-6">
                {[
                  {
                    institution: "Rajasthan Technical University",
                    degree: "B.Tech in Computer Science & Engineering",
                    location: "SBCET, Jaipur",
                    period: "2021-2025",
                    primary: true
                  },
                  {
                    institution: "Board of Senior Secondary Education, Rajasthan",
                    degree: "Senior Secondary Education",
                    period: "2021"
                  },
                  {
                    institution: "Board of Secondary Education, Rajasthan",
                    degree: "Secondary Education",
                    period: "2019"
                  }
                ].map((edu, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full"></div>
                    <div className="absolute left-0 top-6 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full transition-all duration-500 scale-y-0 group-hover:scale-y-100 origin-top"></div>
                    <div className="pl-12">
                      <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 ${edu.primary ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200' : ''}`}>
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-800">{edu.institution}</h3>
                          <span className="text-gray-600 flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full text-sm">
                            <Calendar size={14} />
                            {edu.period}
                          </span>
                        </div>
                        <p className={`font-semibold mb-1 ${edu.primary ? 'text-blue-600' : 'text-gray-700'}`}>
                          {edu.degree}
                        </p>
                        {edu.location && <p className="text-gray-600">{edu.location}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Personal Traits */}
            <section>
              <div className="flex items-center gap-3 mb-12">
                <User className="text-orange-600" size={32} />
                <h2 className="text-4xl font-bold text-gray-800">Personal Traits</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-emerald-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                      💪
                    </div>
                    <h3 className="text-xl font-bold text-emerald-800">Strengths</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Detail-oriented and quality-focused",
                      "Strong styling skills",
                      "Resilient and adaptable to change",
                      "Natural leader with strong communication"
                    ].map((strength, index) => (
                      <li key={index} className="flex items-center gap-3 text-emerald-700 hover:translate-x-2 transition-transform duration-300">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-blue-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                      🎯
                    </div>
                    <h3 className="text-xl font-bold text-blue-800">Work Style</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Thrives in rapidly changing environments",
                      "Comfortable with uncertainty and diversity",
                      "Competitive and results-driven",
                      "Values precision and high-quality work"
                    ].map((trait, index) => (
                      <li key={index} className="flex items-center gap-3 text-blue-700 hover:translate-x-2 transition-transform duration-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        {trait}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Enhanced Footer */}
      <footer className="relative mt-24 border-t border-gray-200/50 bg-gradient-to-r from-gray-50 to-blue-50/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-5xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-6 mb-6">
              {[
                { icon: Mail, href: "mailto:bhawannayak02@gmail.com", color: "hover:text-red-500" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/bhavani-nayak", color: "hover:text-blue-500" },
                { icon: Github, href: "https://github.com/Bhavani-Nayak", color: "hover:text-gray-800" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${social.color}`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg font-medium">©2025 Bhavani Nayak</p>
            <p className="text-gray-500 text-sm mt-2">
              Ready to build amazing mobile experiences together
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center group z-50"
      >
        <ChevronDown className="rotate-180 group-hover:scale-110 transition-transform duration-300" size={20} />
      </button>
    </div>
  );
};

export default MainPage;