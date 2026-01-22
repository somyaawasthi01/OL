import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { Sparkles, Loader2, CheckCircle, ChevronLeft, ArrowRight, Heart, Zap, ShieldCheck, BookOpen } from 'lucide-react';
import { consultAI } from '../services/geminiService';
import { COMPREHENSIVE_QUESTIONS, PLANS_DB } from '../constants';

export const CuratorSection = ({ onProfileUpdate, onComplete, mode }) => {
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState({ mode });
  const [loading, setLoading] = useState(false);
  const [curation, setCuration] = useState(null);
  const [aiEnhanced, setAiEnhanced] = useState(null);

  const currentQ = COMPREHENSIVE_QUESTIONS[step];
  const progress = ((step) / COMPREHENSIVE_QUESTIONS.length) * 100;

  const handleSelect = (option) => {
    let newVal = option;
    if (currentQ.multi) {
      const existing = profile[currentQ.id] || [];
      if (existing.includes(option)) {
        newVal = existing.filter(o => o !== option);
      }
      else {
        newVal = [...existing, option];
      }
    }
    const updatedProfile = { ...profile, mode, [currentQ.id]: newVal };
    setProfile(updatedProfile);
    if (!currentQ.multi) {
      if (step < COMPREHENSIVE_QUESTIONS.length - 1) {
        setStep(step + 1);
      }
      else {
        generateInstantPlan(updatedProfile);
      }
    }
  };

  const generateInstantPlan = (finalProfile) => {
    onProfileUpdate(finalProfile);
    const planKey = finalProfile.mainSkinConcern || "Keep it Glowing";
    const localPlan = PLANS_DB[planKey] || PLANS_DB["Keep it Glowing"];
    setCuration(localPlan);
  };

  const enhanceWithAI = async () => {
    if (!profile) return;
    setLoading(true);
    try {
      const res = await consultAI(`Refine this plan with personal nuances for: ${JSON.stringify(profile)}. Add specific scientific citations for ingredients.`, profile);
      setAiEnhanced(res.answer);
    }
    catch (e) {
      setAiEnhanced("I couldn't reach the biological server, but your core protocol is scientifically sound.");
    }
    setLoading(false);
  };

  return (_jsx("div", { className: "w-full flex flex-col min-h-[520px] bg-white animate-fade-up p-2", children: !curation && !loading ? (_jsxs("div", { className: "space-y-10 flex-grow flex flex-col", children: [_jsxs("header", { className: "space-y-6 pt-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("span", { className: "text-[10px] font-black uppercase text-[#17B8A0] tracking-[0.2em]", children: [currentQ.section, " Calibration"] }), step > 0 && (_jsx("button", { onClick: () => setStep(step - 1), className: "p-2 bg-slate-50 rounded-xl", "aria-label": "Back", children: _jsx(ChevronLeft, { className: "w-5 h-5 text-slate-400" }) }))] }), _jsx("div", { className: "h-2 w-full bg-slate-100 rounded-full overflow-hidden", children: _jsx("div", { className: "h-full bg-[#17B8A0] transition-all duration-500 ease-out", style: { width: `${progress}%` } }) })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h2", { className: "text-4xl font-black tracking-tighter text-slate-900 leading-none", children: currentQ.question }), _jsx("p", { className: "text-base text-slate-400 font-medium", children: "Matching your biology to peer-reviewed protocols." })] }), _jsx("div", { className: "grid gap-4 flex-grow", children: currentQ.options.map((opt, i) => {
        const isSelected = currentQ.multi
          ? (profile[currentQ.id] || []).includes(opt)
          : profile[currentQ.id] === opt;
        return (_jsxs("button", { onClick: () => handleSelect(opt), className: `w-full py-6 px-6 rounded-3xl border-2 text-lg font-bold transition-all text-left flex justify-between items-center ${isSelected
              ? 'border-[#17B8A0] bg-[#17B8A0]/5 text-slate-900'
              : 'border-slate-50 bg-slate-50 text-slate-400 hover:border-slate-200'}`, children: [_jsx("span", { children: opt }), isSelected && _jsx(CheckCircle, { className: "w-6 h-6 text-[#17B8A0]" })] }, i));
      }) }), currentQ.multi && (_jsx("button", { onClick: () => generateInstantPlan(profile), className: "w-full h-20 rounded-[32px] bg-slate-900 text-white font-black uppercase tracking-widest mt-6 active:scale-95 transition-all shadow-xl", children: "Get Verified Plan" }))] })) : loading ? (_jsxs("div", { className: "flex-grow flex flex-col items-center justify-center space-y-8 animate-fade-up py-20", children: [_jsx("div", { className: "logo-rings", children: _jsx(Loader2, { className: "w-16 h-16 text-white animate-spin" }) }), _jsxs("div", { className: "text-center space-y-2", children: [_jsx("h3", { className: "text-2xl font-black text-slate-900 uppercase", children: "Consulting Labs" }), _jsx("p", { className: "text-sm font-bold text-slate-400 uppercase tracking-widest", children: "Cross-referencing scientific papers..." })] })] })) : (_jsxs("div", { className: "space-y-8 animate-fade-up py-4", children: [_jsxs("header", { className: "flex items-center gap-5", children: [_jsx("div", { className: "w-16 h-16 bg-[#17B8A0]/10 rounded-3xl flex items-center justify-center text-[#17B8A0] shadow-sm", children: _jsx(ShieldCheck, { className: "w-8 h-8" }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-black text-slate-900 uppercase leading-none", children: curation.title }), _jsxs("div", { className: "flex items-center gap-2 mt-2", children: [_jsx(BookOpen, { className: "w-3 h-3 text-[#17B8A0]" }), _jsxs("p", { className: "text-[10px] font-black text-[#17B8A0] uppercase tracking-widest", children: ["Medical Logic: ", curation.source] })] })] })] }), _jsxs("div", { className: "grid gap-4", children: [_jsxs("div", { className: "p-6 card-vibrant bg-white border-slate-50 border-2 space-y-3", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Zap, { className: "w-4 h-4 text-[#FFB84D]" }), _jsx("span", { className: "text-[9px] font-black uppercase text-slate-400 tracking-widest", children: "Clinical Strategy" })] }), _jsx("p", { className: "text-sm font-semibold text-slate-700 leading-relaxed", children: curation.skin })] }), _jsxs("div", { className: "p-6 card-vibrant bg-white border-slate-50 border-2 space-y-3", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Heart, { className: "w-4 h-4 text-[#FF6B9D]" }), _jsx("span", { className: "text-[9px] font-black uppercase text-slate-400 tracking-widest", children: "Nutrition" })] }), _jsx("p", { className: "text-sm font-semibold text-slate-700 leading-relaxed", children: curation.food })] })] }), aiEnhanced ? (_jsxs("div", { className: "p-8 rounded-[40px] bg-slate-900 text-white space-y-6 animate-fade-up shadow-2xl relative overflow-hidden", children: [_jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-[#C084FC]/10 rounded-full -mr-16 -mt-16 blur-xl" }), _jsxs("div", { className: "flex items-center gap-2 text-[#C084FC]", children: [_jsx(Sparkles, { className: "w-5 h-5" }), _jsx("span", { className: "text-[10px] font-black uppercase tracking-[0.2em]", children: "Research Augmentation" })] }), _jsx("div", { className: "text-sm font-medium leading-relaxed space-y-4", children: aiEnhanced.split('\n').map((line, i) => line.trim() && (_jsx("p", { children: line.replace(/^[*#-]\s*/, '') }, i))) })] })) : (_jsxs("button", { onClick: enhanceWithAI, className: "w-full h-16 rounded-[28px] border-2 border-[#17B8A0]/30 text-[#17B8A0] font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-3 active:scale-95 transition-all bg-[#17B8A0]/5", children: [_jsx(Sparkles, { className: "w-5 h-5" }), " Augment with Research Lab"] })), _jsxs("button", { onClick: onComplete, className: "w-full h-20 rounded-[32px] bg-slate-900 text-white font-black uppercase tracking-[0.2em] shadow-xl flex items-center justify-center gap-4 active:scale-95 transition-all", children: ["Initialize Protocol ", _jsx(ArrowRight, { className: "w-6 h-6" })] })] })) }));
};
