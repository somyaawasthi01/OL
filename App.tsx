import React, { useState, useEffect } from 'react';
import { IdeaList } from './components/Idealist';
import { LoveLetter } from './components/LoveLetter';
import { QuickTexts } from './components/QuickTexts';
import { Counselling } from './components/Counselling';
import { ImageEditor } from './components/ImageEditor';
import { OldSchoolLove } from './components/OldSchoolLove';
import { Heart, Info, X, Zap, Globe, Sparkles, Palette } from 'lucide-react';
import { t, Language } from './translations';

type Tab = 'home' | 'ideas' | 'activity' | 'wellness';

interface Particle {
  id: number;
  x: number;
  y: number;
  emoji: string;
  style: React.CSSProperties;
}

// Creative Colorful Icons
const CreativeHome = ({ size = 28, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M3 10L12 2L21 10V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V10Z" fill="#FFE4E6" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 22V12H15V22" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6V8" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round"/> 
    <circle cx="12" cy="15" r="2" fill="#F43F5E" opacity="0.4" />
  </svg>
);

const CreativeIdeas = ({ size = 28, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18H15" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 22H14" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2C7.58172 2 4 5.58172 4 10C4 12.8956 5.5 15.3906 7.75 16.75C8.35 17.1 9 17.5 9 18H15C15 17.5 15.65 17.1 16.25 16.75C18.5 15.3906 20 12.8956 20 10C20 5.58172 16.4183 2 12 2Z" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 9L13 9" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
    <path d="M11 12L13 12" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="6" r="1.5" fill="#F59E0B" />
  </svg>
);

const CreativeActivity = ({ size = 28, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.5C16.6944 21.5 20.5 17.6944 20.5 13C20.5 8.30558 16.6944 4.5 12 4.5C7.30558 4.5 3.5 8.30558 3.5 13C3.5 17.6944 7.30558 21.5 12 21.5Z" fill="#F3E8FF" stroke="#9333EA" strokeWidth="2"/>
    <circle cx="8" cy="11" r="2" fill="#C084FC" />
    <circle cx="16" cy="11" r="2" fill="#E879F9" />
    <circle cx="12" cy="17" r="2" fill="#818CF8" />
    <circle cx="12" cy="7" r="1" fill="#9333EA" />
    <path d="M18 19L21 22" stroke="#9333EA" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CreativeWellness = ({ size = 28, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#FFE4E6" stroke="#F43F5E" strokeWidth="2"/>
    <path d="M12 6C12 6 12.5 8 15 8" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 11H9.01" stroke="#F43F5E" strokeWidth="3" strokeLinecap="round"/>
    <path d="M15 11H15.01" stroke="#F43F5E" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [showGuide, setShowGuide] = useState(false);
  const [lang, setLang] = useState<Language>('en');
  const [particles, setParticles] = useState<Particle[]>([]);

  const txt = t[lang];

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'hi' : 'en');
  };

  const spawnParticles = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const emojis = ['❤️', '💖', '✨', '⭐', '💘', '💜', '🪄', '🎨'];
    const newParticles: Particle[] = [];

    for (let i = 0; i < 12; i++) {
        const angle = Math.random() * 360;
        const velocity = Math.random() * 100 + 50; // pixels distance
        const tx = Math.cos(angle * Math.PI / 180) * velocity;
        const ty = Math.sin(angle * Math.PI / 180) * velocity - 100; // biased upwards
        const rotation = Math.random() * 360;
        
        newParticles.push({
            id: Date.now() + i,
            x: centerX,
            y: centerY,
            emoji: emojis[Math.floor(Math.random() * emojis.length)],
            style: {
                '--tx': `${tx}px`,
                '--ty': `${ty}px`,
                '--tr': `${rotation}deg`,
            } as React.CSSProperties
        });
    }

    setParticles(prev => [...prev, ...newParticles]);

    // Cleanup after animation
    setTimeout(() => {
        setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 1000);
  };

  const handleTabChange = (tab: Tab, e: React.MouseEvent<HTMLButtonElement>) => {
      setActiveTab(tab);
      spawnParticles(e);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-8 animate-fade-in pb-20">
             {/* Hero Card */}
             <div className="glass-card rounded-3xl p-8 text-center relative overflow-hidden border-0 bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600 shadow-xl shadow-rose-200/50 group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-300 opacity-20 rounded-full blur-3xl transform -translate-x-10 translate-y-10 group-hover:scale-110 transition-transform duration-700"></div>
                
                <div className="relative z-10 text-white">
                  <div className="flex justify-center mb-6">
                    <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm floating-icon">
                        <Heart className="fill-white" size={48} />
                    </div>
                  </div>
                  <h1 className={`text-5xl font-bold mb-3 tracking-tight ${lang === 'hi' ? 'font-hindi' : 'font-serif'}`}>
                    {lang === 'hi' ? 'ओवररेटेड लव' : 'Overrated Love'}
                  </h1>
                  <p className={`italic opacity-90 text-2xl mb-6 ${lang === 'hi' ? 'font-hindi' : ''}`}>
                    {lang === 'hi' ? '"उलझा हुआ, महंगा और पूरी तरह से अतार्किक।"' : '"Messy, expensive, and totally irrational."'}
                  </p>
                  
                  <button 
                    onClick={() => setShowGuide(true)}
                    className="bg-white text-rose-600 px-6 py-2.5 rounded-full font-bold text-sm shadow-lg hover:bg-rose-50 hover:scale-105 transition-all flex items-center gap-2 mx-auto"
                  >
                    <Info size={16} /> {txt.guideBtn}
                  </button>
                </div>
             </div>
             
             {/* Instruction Banner */}
             <div className="flex justify-center mt-6 mb-4">
                <div className={`px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 shadow-lg shadow-rose-200 border-2 border-white flex items-center gap-2 text-white text-sm font-extrabold animate-bounce cursor-default tracking-wide transform hover:scale-105 transition-transform duration-300 ${lang === 'hi' ? 'font-hindi' : 'font-serif'}`}>
                    <Sparkles size={16} className="text-yellow-200 fill-yellow-200" />
                    {txt.clickGenerate}
                </div>
             </div>

             <QuickTexts lang={lang} />
             
             <div className="pt-2">
                <OldSchoolLove lang={lang} />
             </div>
          </div>
        );
      case 'ideas':
        return (
          <div className="animate-fade-in pb-24">
             <IdeaList lang={lang} />
          </div>
        );
      case 'activity':
        return (
          <div className="animate-fade-in space-y-8 pb-24">
             <div className="text-center mb-2 px-4">
                <span className="p-3 bg-purple-100 text-purple-600 rounded-2xl mb-4 inline-block shadow-sm">
                    <Palette size={32} />
                </span>
                <h2 className={`text-3xl font-bold text-gray-800 mb-2 ${lang === 'hi' ? 'font-hindi' : 'font-activity'}`}>
                    {txt.activityZone}
                </h2>
                <p className={`text-gray-500 ${lang === 'hi' ? 'font-hindi' : ''}`}>{txt.activitySub}</p>
             </div>
             <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <LoveLetter lang={lang} />
                <ImageEditor lang={lang} />
             </div>
          </div>
        );
      case 'wellness':
        return (
          <div className="animate-fade-in pb-24">
             <Counselling lang={lang} />
          </div>
        );
    }
  };

  return (
    <div className={`h-screen w-screen flex flex-col bg-rose-50 overflow-hidden relative ${lang === 'hi' ? 'font-hindi' : ''}`}>
      
      {/* Particle Animation Styles */}
      <style>{`
        @keyframes particle-pop {
            0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
            50% { opacity: 1; }
            100% { transform: translate(-50%, -50%) translate3d(var(--tx), var(--ty), 100px) rotate(var(--tr)) scale(0); opacity: 0; }
        }
        .particle-3d {
            position: fixed;
            pointer-events: none;
            z-index: 100;
            animation: particle-pop 1s cubic-bezier(0, .9, .57, 1) forwards;
            font-size: 24px;
            filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
        }
      `}</style>

      {/* Particles Overlay */}
      {particles.map(p => (
        <div 
            key={p.id} 
            className="particle-3d" 
            style={{ left: p.x, top: p.y, ...p.style }}
        >
            {p.emoji}
        </div>
      ))}

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-rose-300/30 rounded-full blur-[100px] mix-blend-multiply opacity-60 animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-300/30 rounded-full blur-[100px] mix-blend-multiply opacity-60 animate-pulse delay-2"></div>
      </div>

      {/* Language Toggle */}
      <div className="absolute top-6 right-6 z-50">
          <button 
            onClick={toggleLang}
            className="bg-white/50 backdrop-blur-md border border-white/50 p-2 rounded-full shadow-md text-rose-600 hover:bg-white transition-all flex items-center gap-2 px-4 font-bold text-xs"
          >
            <Globe size={16} /> {lang === 'en' ? 'हिन्दी' : 'English'}
          </button>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto z-10 custom-scrollbar scroll-smooth">
        <div className="max-w-4xl mx-auto px-4 pt-6 pb-32"> 
           {renderContent()}
        </div>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 w-full z-40 bg-white/90 backdrop-blur-xl border-t border-rose-100 pb-safe pt-2 shadow-[0_-5px_20px_rgba(0,0,0,0.03)] perspective-1000">
        <div className="max-w-md mx-auto flex justify-around items-center px-2 pb-2">
          
          <button 
            onClick={(e) => handleTabChange('home', e)}
            className={`flex flex-col items-center gap-1 p-3 rounded-2xl transition-all duration-300 ${activeTab === 'home' ? 'text-rose-600 scale-105' : 'text-gray-400 hover:text-rose-400'}`}
          >
            <div className={`p-1.5 rounded-xl transition-all ${activeTab === 'home' ? 'bg-rose-100 shadow-sm' : 'bg-transparent'}`}>
              <CreativeHome size={28} className={activeTab === 'home' ? 'fill-rose-100' : ''} />
            </div>
            <span className={`text-[10px] font-bold tracking-wide ${lang === 'hi' ? 'font-hindi' : ''}`}>{txt.home}</span>
          </button>

          <button 
            onClick={(e) => handleTabChange('ideas', e)}
            className={`flex flex-col items-center gap-1 p-3 rounded-2xl transition-all duration-300 ${activeTab === 'ideas' ? 'text-rose-600 scale-105' : 'text-gray-400 hover:text-rose-400'}`}
          >
            <div className={`p-1.5 rounded-xl transition-all ${activeTab === 'ideas' ? 'bg-rose-100 shadow-sm' : 'bg-transparent'}`}>
              <CreativeIdeas size={28} className={activeTab === 'ideas' ? 'fill-rose-100' : ''} />
            </div>
            <span className={`text-[10px] font-bold tracking-wide ${lang === 'hi' ? 'font-hindi' : ''}`}>{txt.ideas}</span>
          </button>

          <button 
            onClick={(e) => handleTabChange('activity', e)}
            className={`flex flex-col items-center gap-1 p-3 rounded-2xl transition-all duration-300 ${activeTab === 'activity' ? 'text-rose-600 scale-105' : 'text-gray-400 hover:text-rose-400'}`}
          >
            <div className={`p-1.5 rounded-xl transition-all ${activeTab === 'activity' ? 'bg-rose-100 shadow-sm' : 'bg-transparent'}`}>
              <CreativeActivity size={28} className={activeTab === 'activity' ? 'fill-rose-100' : ''} />
            </div>
            <span className={`text-[10px] font-bold tracking-wide ${lang === 'hi' ? 'font-hindi' : ''}`}>{txt.activity}</span>
          </button>

          <button 
            onClick={(e) => handleTabChange('wellness', e)}
            className={`flex flex-col items-center gap-1 p-3 rounded-2xl transition-all duration-300 ${activeTab === 'wellness' ? 'text-rose-600 scale-105' : 'text-gray-400 hover:text-rose-400'}`}
          >
            <div className={`p-1.5 rounded-xl transition-all ${activeTab === 'wellness' ? 'bg-rose-100 shadow-sm' : 'bg-transparent'}`}>
              <CreativeWellness size={28} className={activeTab === 'wellness' ? 'fill-rose-100' : ''} />
            </div>
            <span className={`text-[10px] font-bold tracking-wide ${lang === 'hi' ? 'font-hindi' : ''}`}>{txt.wellness}</span>
          </button>

        </div>
      </nav>

      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rose-900/40 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl max-w-sm w-full p-8 shadow-2xl relative overflow-hidden border-4 border-rose-100 transform transition-all scale-100">
                <button onClick={() => setShowGuide(false)} className="absolute top-4 right-4 text-gray-400 hover:text-rose-500 transition-colors p-2 bg-gray-50 rounded-full"><X size={20} /></button>
                <div className="text-center mb-6">
                    <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 floating-icon"><Zap className="text-rose-600 fill-rose-600" size={32} /></div>
                    <h2 className={`text-2xl font-bold text-gray-800 ${lang === 'hi' ? 'font-hindi' : 'font-serif'}`}>
                        {lang === 'hi' ? 'एक बार उपयोग का नियम' : 'The One-Time Rule'}
                    </h2>
                </div>
                <div className={`space-y-6 text-gray-600 text-sm leading-relaxed ${lang === 'hi' ? 'font-hindi' : ''}`}>
                    <div className="flex gap-4 items-start"><span className="bg-rose-500 text-white w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xs mt-0.5">1</span><p><strong className="text-gray-800">Spark:</strong> {lang === 'hi' ? 'आज करने के लिए केवल एक चीज खोजें।' : 'Find exactly one thing to do today.'}</p></div>
                    <div className="flex gap-4 items-start"><span className="bg-rose-500 text-white w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xs mt-0.5">2</span><p><strong className="text-gray-800">Create:</strong> {lang === 'hi' ? 'एक प्रेम पत्र या फोटो संपादित करें।' : 'Generate a love letter or edit a photo.'}</p></div>
                    <div className="flex gap-4 items-start bg-rose-50 p-3 rounded-xl border border-rose-100"><span className="bg-rose-500 text-white w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xs mt-0.5">3</span><p className="font-bold text-rose-900">{lang === 'hi' ? 'Disconnect: ऐप बंद करें। फोन रखें। हकीकत में प्यार करें।' : 'Disconnect to Connect: Close the app. Put phone away. Love real life.'}</p></div>
                </div>
                <button onClick={() => setShowGuide(false)} className="w-full mt-8 bg-gradient-to-r from-rose-500 to-pink-600 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">{lang === 'hi' ? 'मैं वादा करता हूँ' : 'I Promise to Disconnect'}</button>
            </div>
        </div>
      )}
    </div>
  );
};

export default App;
