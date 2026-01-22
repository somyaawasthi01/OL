import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FUN_FACTS } from '../constants';
import { Shield, Activity, Fingerprint, Info, Plus } from 'lucide-react';

export const FunFactSection = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layers': return _jsx(Fingerprint, { className: "w-5 h-5" });
      case 'Shield': return _jsx(Shield, { className: "w-5 h-5" });
      case 'Activity': return _jsx(Activity, { className: "w-5 h-5" });
      default: return _jsx(Info, { className: "w-5 h-5" });
    }
  };

  const getWhyItMatters = (factTitle) => {
    if (factTitle.includes("Dust")) return "Cleanse daily to protect your barrier.";
    if (factTitle.includes("Hair is strong")) return "Still, keep strands hydrated to prevent splits.";
    return "Knowledge helps you choose better care.";
  };

  const colors = {
    skin: 'text-rose-400 border-rose-500/30 bg-rose-500/5 glow-rose',
    hair: 'text-amber-400 border-amber-500/30 bg-amber-500/5 glow-amber',
    body: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/5 glow-indigo'
  };

  return (_jsxs("div", { className: "h-full flex flex-col space-y-6 animate-in pb-10", children: [_jsxs("header", { className: "text-center", children: [_jsx("h1", { className: "text-2xl font-black tracking-tight text-white uppercase", children: "Discovery" }), _jsx("p", { className: "text-[10px] tracking-widest text-white/30 uppercase font-black", children: "Strange Biology" })] }), _jsx("div", { className: "flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-5 pb-6", children: FUN_FACTS.map((fact, idx) => (_jsxs("div", { className: `flex-none w-[80%] snap-center card-3d p-8 bg-black/40 flex flex-col items-center text-center space-y-6 ${colors[fact.category] || colors.body}`, children: [_jsx("div", { className: "w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 shadow-inner", children: getIcon(fact.icon) }), _jsxs("div", { className: "space-y-3", children: [_jsx("h3", { className: "text-lg font-bold text-white tracking-tight", children: fact.title }), _jsxs("p", { className: "text-sm font-medium text-white/50 leading-relaxed", children: ["\"", fact.fact, "\""] }), _jsxs("div", { className: "p-3 rounded-xl bg-white/5 border border-white/10 mt-2", children: [_jsx("p", { className: "text-[9px] font-black text-white/30 uppercase tracking-widest mb-1", children: "Impact" }), _jsx("p", { className: "text-[11px] font-semibold text-white/60", children: getWhyItMatters(fact.title) })] })] }), _jsxs("div", { className: "flex items-center gap-2 opacity-20 pt-2 border-t border-white/5 w-full justify-center", children: [_jsx(Plus, { className: "w-2.5 h-2.5" }), _jsxs("span", { className: "text-[8px] font-black uppercase tracking-widest", children: [fact.category, " registry"] })] })] }, idx))) })] }));
};
