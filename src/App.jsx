import React, { useState, useEffect } from 'react';
import { Calendar, TrendingUp, Award, BookOpen, Users, Target, CheckCircle2, Circle, Briefcase, Database, Globe } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [completedItems, setCompletedItems] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleComplete = (category, index) => {
    setCompletedItems(prev => ({
      ...prev,
      [`${category}-${index}`]: !prev[`${category}-${index}`]
    }));
  };

  const researchAreas = [
    { title: 'Finance & Financial Economics', icon: TrendingUp },
    { title: 'Macroeconomics & Policy', icon: Globe },
    { title: 'Corporate Governance', icon: Briefcase },
    { title: 'Banking Stability & Risk', icon: Database },
    { title: 'Sustainable Finance & ESG', icon: Target },
    { title: 'FinTech & Blockchain', icon: Award }
  ];

  const implementationPlans = {
    research: [
      { action: 'Establish Research Group', timeline: 'First 6 months', output: 'Functional research cluster' },
      { action: 'Joint research with UBA', timeline: 'Ongoing', output: 'Industry-relevant outputs' },
      { action: 'Focus on blockchain & FinTech', timeline: 'Year 1 onward', output: 'Policy papers' },
      { action: 'Scopus/ABS publications', timeline: 'Annually', output: '3+ high-impact papers' },
      { action: 'Working Paper Series', timeline: 'Year 1', output: '4 papers yearly' },
      { action: 'Grant applications', timeline: 'Ongoing', output: 'Funded projects' }
    ],
    academic: [
      { action: 'Monthly research seminars', timeline: 'Monthly', output: 'Strong research culture' },
      { action: 'Faculty research colloquia', timeline: 'Quarterly', output: 'Interdisciplinary engagement' },
      { action: 'PhD/MSc mentorship', timeline: 'Ongoing', output: 'Stronger dissertations' },
      { action: 'Methods workshops', timeline: 'Twice yearly', output: 'Skills development' },
      { action: 'Interdisciplinary research', timeline: 'Ongoing', output: 'Broader impact' }
    ],
    industry: [
      { action: 'UBA-University framework', timeline: 'Year 1', output: 'Formal platform' },
      { action: 'Annual Finance Roundtable', timeline: 'Annually', output: 'Donor visibility' },
      { action: 'Quarterly policy briefs', timeline: 'Quarterly', output: 'Policy relevance' },
      { action: 'Industry guest lectures', timeline: 'Each semester', output: 'Practice linkage' },
      { action: 'Consultancy & advisory', timeline: 'Ongoing', output: 'Practical impact' }
    ],
    teaching: [
      { action: 'FinTech & Blockchain modules', timeline: 'Year 1', output: 'Modern curriculum' },
      { action: 'Nigerian banking case studies', timeline: 'Ongoing', output: 'Contextual learning' },
      { action: 'Industry-based projects', timeline: 'Ongoing', output: 'Applied learning' }
    ]
  };

  const innovativeProducts = [
    { name: 'Blockchain Trade Finance', problem: 'Fraud & documentation delays', benefit: 'Faster, secure processing' },
    { name: 'AI-Driven SME Credit Scoring', problem: 'Lack of SME collateral', benefit: 'Safe SME lending expansion' },
    { name: 'ESG/Green Linked Loans', problem: 'No structured green finance', benefit: 'ESG reputation boost' },
    { name: 'Diaspora Blockchain Remittance', problem: 'High remittance costs', benefit: 'Capture diaspora market' },
    { name: 'Income-Contingent Student Loans', problem: 'Fear of default', benefit: 'New low-risk segment' },
    { name: 'Agric Value-Chain Financing', problem: 'High agric lending risk', benefit: 'Safer portfolio' },
    { name: 'Open Banking / API Platform', problem: 'Weak FinTech integration', benefit: 'Infrastructure positioning' }
  ];

  const innovativeProcesses = [
    { name: 'AI Fraud Detection', challenge: 'Fraud & cyber risk', benefit: 'Reduced losses' },
    { name: 'Blockchain KYC System', challenge: 'Weak, repetitive KYC', benefit: 'Strong identity security' },
    { name: 'Credit Risk Early Warning', challenge: 'Late default detection', benefit: 'Better loan performance' },
    { name: 'ESG Risk Assessment', challenge: 'No ESG screening', benefit: 'Responsible lending' },
    { name: 'Digital Financial Inclusion', challenge: 'Rural exclusion', benefit: 'Expanded safe banking' },
    { name: 'Branch Performance Analytics', challenge: 'Poor tracking', benefit: 'Operational efficiency' },
    { name: 'RegTech Reporting Dashboard', challenge: 'Manual reporting burden', benefit: 'Faster compliance' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'DM Sans', sans-serif;
        }
        
        h1, h2, h3, h4 {
          font-family: 'Playfair Display', serif;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .slide-in-right {
          animation: slideInRight 0.5s ease-out forwards;
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .gold-accent {
          background: linear-gradient(135deg, #d4af37 0%, #f4e5a1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .shimmer-bg {
          background: linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.05) 100%);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        
        .grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .tab-active {
          border-bottom: 3px solid #d4af37;
          color: #d4af37;
        }
      `}</style>

      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-slate-900/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-10 h-10 text-yellow-500" />
              <div>
                <h1 className="text-3xl font-bold tracking-tight">UBA Professorial Chair in Finance</h1>
                <p className="text-sm text-blue-300 font-medium">Department of Finance, University of Lagos</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="border-b border-white/10 bg-slate-900/30 backdrop-blur-sm sticky top-[88px] z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: Target },
              { id: 'research', label: 'Research Areas', icon: BookOpen },
              { id: 'implementation', label: 'Implementation', icon: CheckCircle2 },
              { id: 'innovations', label: 'Innovations', icon: TrendingUp },
              { id: 'impact', label: 'Impact & Legacy', icon: Globe }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-2 text-sm font-semibold transition-all whitespace-nowrap ${activeTab === tab.id ? 'tab-active' : 'text-gray-400 hover:text-white'
                  }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Vision Statement */}
            <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'} bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10 card-hover`}>
              <div className="flex items-start gap-4 mb-4">
                <Target className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold mb-4 gold-accent">Vision Statement</h2>
                  <p className="text-lg leading-relaxed text-gray-200">
                    To position the UBA Professorial Chair in Finance as a <span className="text-yellow-400 font-semibold">national and continental centre of excellence</span> in finance, financial economics, macro-financial policy research, innovation, academic capacity development, and policy engagement, advancing cutting-edge scholarship and practical financial solutions that strengthen financial systems, corporate governance, sustainability, financial technology, and macro-financial stability in Nigeria and Africa.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Goals */}
            <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users className="w-7 h-7 text-blue-400" />
                Core Goals
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Advance high-impact research in finance, financial economics, and macro-financial stability',
                  'Collaborate with UBA on innovative financial products aligned with emerging technologies',
                  'Initiate programmes strengthening academic development across the University',
                  'Build strong research capacity among staff and postgraduate students',
                  'Bridge academia, industry, policy, and the Donor through structured engagements',
                  'Modernise postgraduate training in line with global finance developments',
                  'Enhance institutional visibility through global collaborations and publications'
                ].map((goal, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800/50 rounded-xl p-5 border border-white/10 card-hover flex items-start gap-3"
                    style={{ animationDelay: `${0.15 + idx * 0.05}s` }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300">{goal}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Research Areas Tab */}
        {activeTab === 'research' && (
          <div className="space-y-8">
            <div className="fade-in-up">
              <h2 className="text-3xl font-bold mb-6 gold-accent">Areas of Academic and Research Competence</h2>
              <p className="text-lg text-gray-300 mb-8">
                The Chair leverages established expertise to drive research, teaching, industry collaboration, and policy engagement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-6 border border-white/10 card-hover slide-in-right"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <area.icon className="w-10 h-10 text-yellow-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{area.title}</h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-600/10 border border-blue-500/30 rounded-xl p-6">
              <p className="text-blue-200 leading-relaxed">
                <span className="font-semibold text-blue-300">Note:</span> These competence areas provide the theoretical, empirical, and policy foundations for innovative products, processes, and academic programmes developed under the Chair.
              </p>
            </div>
          </div>
        )}

        {/* Implementation Tab */}
        {activeTab === 'implementation' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-6 gold-accent fade-in-up">Strategic Implementation Plans</h2>

            {Object.entries(implementationPlans).map(([category, items], categoryIdx) => (
              <div key={category} className="fade-in-up" style={{ animationDelay: `${categoryIdx * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  {category === 'research' && <BookOpen className="w-6 h-6 text-purple-400" />}
                  {category === 'academic' && <Users className="w-6 h-6 text-blue-400" />}
                  {category === 'industry' && <Briefcase className="w-6 h-6 text-green-400" />}
                  {category === 'teaching' && <Award className="w-6 h-6 text-yellow-400" />}
                  <h3 className="text-xl font-bold capitalize">{category} & {category === 'research' ? 'Innovation' : category === 'academic' ? 'Capacity Building' : category === 'industry' ? 'Policy Engagement' : 'Curriculum Innovation'}</h3>
                </div>

                <div className="space-y-3">
                  {items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-800/40 rounded-xl p-5 border border-white/10 hover:bg-slate-800/60 transition-all cursor-pointer"
                      onClick={() => toggleComplete(category, idx)}
                    >
                      <div className="flex items-start gap-4">
                        <button className="mt-1 flex-shrink-0">
                          {completedItems[`${category}-${idx}`] ? (
                            <CheckCircle2 className="w-6 h-6 text-green-400" />
                          ) : (
                            <Circle className="w-6 h-6 text-gray-500" />
                          )}
                        </button>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                            <h4 className={`font-semibold ${completedItems[`${category}-${idx}`] ? 'line-through text-gray-500' : 'text-white'}`}>
                              {item.action}
                            </h4>
                            <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full font-medium">
                              {item.timeline}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400">
                            <span className="font-medium text-gray-300">Output:</span> {item.output}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Innovations Tab */}
        {activeTab === 'innovations' && (
          <div className="space-y-10">
            {/* Innovative Products */}
            <div className="fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold gold-accent">Innovative Financial Products</h2>
              </div>
              <p className="text-gray-300 mb-6">Customer-facing solutions addressing critical market gaps</p>

              <div className="grid md:grid-cols-2 gap-5">
                {innovativeProducts.map((product, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl p-6 border border-purple-500/20 card-hover"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-yellow-400/10 rounded-lg p-2">
                        <Database className="w-5 h-5 text-yellow-400" />
                      </div>
                      <h3 className="font-bold text-lg flex-1">{product.name}</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex gap-2">
                        <span className="text-red-300 font-medium min-w-[80px]">Problem:</span>
                        <span className="text-gray-400">{product.problem}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-green-300 font-medium min-w-[80px]">Benefit:</span>
                        <span className="text-gray-300">{product.benefit}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Innovative Processes */}
            <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold gold-accent">Innovative Financial Processes</h2>
              </div>
              <p className="text-gray-300 mb-6">Operational improvements enhancing efficiency and security</p>

              <div className="grid md:grid-cols-2 gap-5">
                {innovativeProcesses.map((process, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-blue-900/30 to-teal-900/30 rounded-xl p-6 border border-blue-500/20 card-hover"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-blue-400/10 rounded-lg p-2">
                        <Database className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="font-bold text-lg flex-1">{process.name}</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex gap-2">
                        <span className="text-orange-300 font-medium min-w-[90px]">Challenge:</span>
                        <span className="text-gray-400">{process.challenge}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-green-300 font-medium min-w-[90px]">Benefit:</span>
                        <span className="text-gray-300">{process.benefit}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-600/10 to-yellow-800/10 border border-yellow-500/30 rounded-xl p-6 mt-8">
              <p className="text-yellow-200 leading-relaxed">
                <span className="font-bold text-yellow-300">Chair's Role:</span> The Chair leads research-driven design, testing, and pilot implementation of all innovative products and processes in collaboration with UBA.
              </p>
            </div>
          </div>
        )}

        {/* Impact & Legacy Tab */}
        {activeTab === 'impact' && (
          <div className="space-y-8">
            <div className="fade-in-up">
              <h2 className="text-3xl font-bold mb-6 gold-accent">Expected Impact of the Chair</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: TrendingUp, title: 'Research-Innovation Alignment', desc: 'Strong alignment between academic research and UBA\'s innovation objectives' },
                  { icon: Globe, title: 'Policy Contribution', desc: 'Evidence-based recommendations for financial sector stability and macro-financial policy' },
                  { icon: Award, title: 'Enhanced Reputation', desc: 'Elevated research standing of Department, Faculty, and University' },
                  { icon: Database, title: 'FinTech Expertise', desc: 'Development of expertise in emerging financial technologies' },
                  { icon: Users, title: 'Skilled Researchers', desc: 'Production of highly skilled postgraduate researchers' },
                  { icon: BookOpen, title: 'Global Recognition', desc: 'Attraction of funding, partnerships, and international visibility' }
                ].map((impact, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-xl p-6 border border-green-500/20 card-hover"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <impact.icon className="w-10 h-10 text-green-400 mb-4" />
                    <h3 className="font-bold text-lg mb-2">{impact.title}</h3>
                    <p className="text-sm text-gray-300">{impact.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Calendar className="w-7 h-7 text-purple-400" />
                Visibility & Collaboration Initiatives
              </h2>

              <div className="space-y-4">
                {[
                  { action: 'Annual International Conference on Finance, Governance, Macroeconomics & FinTech', timeline: 'Year 2', output: 'Global recognition' },
                  { action: 'MoUs with foreign institutions', timeline: 'Ongoing', output: 'Joint research opportunities' },
                  { action: 'Chair website & research repository', timeline: 'Year 1', output: 'Enhanced visibility' },
                  { action: 'Annual "State of Nigerian Finance, Macroeconomy & Innovation" Report with UBA', timeline: 'Annually', output: 'Donor & institutional visibility' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800/50 rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">{item.action}</h4>
                        <p className="text-sm text-gray-400">{item.output}</p>
                      </div>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full font-medium">
                        {item.timeline}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-2xl p-8 border border-yellow-500/30 mt-12 fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold mb-4 gold-accent flex items-center gap-3">
                <Award className="w-7 h-7 text-yellow-400" />
                Sustainable Legacy
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                The UBA Professorial Chair in Finance will function as a platform for <span className="text-yellow-300 font-semibold">transformative research</span>, financial innovation, macro-financial policy engagement, academic leadership, and structured industry collaboration — significantly advancing finance scholarship and practice while enhancing the strategic visibility and impact of the Donor, the Department, and the University for years to come.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16 py-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-400">
            UBA Professorial Chair in Finance · Department of Finance, University of Lagos
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Excellence in Finance Research, Innovation & Policy Engagement
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
