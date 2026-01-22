import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Moon, Wind, RefreshCw, Loader2, Zap } from 'lucide-react';
import { RELAXATION_METHODS } from '../constants';
import { consultAI } from '../services/geminiService';

export const RelaxSection = () => {
  const [customIdea, setCustomIdea] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateIdea = async () => {
    setLoading(true);
    try {
      const response = await consultAI("One biological recovery hack for skin. Short, scientific but plain English.");
      setCustomIdea(response.answer);
    }
    catch (error) {
      setCustomIdea("Synchronize circadian rhythms via blue light reduction.");
    }
    finally {
      setLoading(false);
    }
  };

  return (_jsxs("div", { className: "w-full flex flex-col space-y-10 animate-in pb-10 px-1", children: [_jsxs("header", { className: "text-center space-y-3 pt-2 shrink-0", children: [_jsx("div", { className: "w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-3xl flex items-center justify-center mx-auto mb-2 text-emerald-400 shadow-[0_12px_40px_rgba(16,185,129,0.2)] hover:scale-110 transition-transform duration-700 group", children: _jsx(Moon, { className: "w-10 h-10 group-hover:rotate-12 transition-transform" }) }), _jsx("h1", { className: "text-3xl font-black tracking-tighter text-white uppercase drop-shadow-2xl leading-none", children: "Recovery" }), _jsx("p", { className: "text-[11px] tracking-[0.4em] font-black text-emerald-500/70 uppercase", children: "Circadian Reset Protocol" })] }), _jsxs("div", { className: "space-y-8", children: [RELAXATION_METHODS.map((method, idx) => (_jsxs("div", { className: "card-3d p-8 glow-emerald bg-white/5 space-y-8 group hover:translate-x-1 transition-all", children: [_jsxs("div", { className: "flex justify-between items-center border-b border-white/5 pb-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center", children: _jsxs("span", { className: "text-[12px] font-black text-emerald-400", children: ["0", idx + 1] }) }), _jsx("h3", { className: "font-black text-xl text-white tracking-tighter uppercase leading-none", children: method.name })] }), _jsx(Wind, { className: "w-5 h-5 text-emerald-500/30 group-hover:translate-x-1 transition-transform" })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("p", { className: "text-lg font-bold text-white/60 italic leading-snug tracking-tight", children: ["\"", method.description, "\""] }), _jsxs("div", { className: "p-6 bg-emerald-500/5 rounded-2xl border border-emerald-500/15 space-y-3 shadow-inner group-hover:bg-emerald-500/10 transition-colors", children: [_jsxs("div", { className: "flex items-center gap-3 opacity-40", children: [_jsx(Zap, { className: "w-4 h-4 text-emerald-400" }), _jsx("span", { className: "text-[10px] font-black text-emerald-500/80 uppercase tracking-[0.3em] block", children: "Bio-Directive" })] }), _jsx("p", { className: "text-[15px] font-black text-white/90 leading-snug tracking-tight uppercase", children: method.howTo })] })] })] }, idx))), _jsxs("section", { className: "card-3d p-10 text-center space-y-8 bg-black/40 border-dashed border-emerald-500/20 shadow-inner group", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("h2", { className: "text-xl font-black text-white uppercase tracking-tighter leading-none group-hover:scale-105 transition-transform", children: "Cellular Insights" }), _jsx("p", { className: "text-[10px] font-black text-emerald-500/40 uppercase tracking-[0.4em]", children: "Proprietary Research Feed" })] }), customIdea ? (_jsx("div", { className: "p-6 bg-emerald-500/5 rounded-[28px] border border-emerald-500/10 animate-in shadow-2xl", children: _jsx("div", { className: "space-y-4 text-sm font-semibold leading-relaxed text-left text-white/80", children: customIdea.split('\n').map((line, i) => line.trim() ? (_jsxs("div", { className: "flex gap-4 items-start", children: [_jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.8)]" }), _jsx("span", { children: line.replace(/^[*#-]\s*/, '') })] }, i)) : null) }) })) : (_jsxs("div", { className: "py-10 opacity-20 group-hover:opacity-40 transition-opacity", children: [_jsx(RefreshCw, { className: "w-10 h-10 mx-auto mb-4 animate-spin-slow" }), _jsx("p", { className: "text-[11px] font-black text-white uppercase tracking-[0.3em]", children: "Querying biological repository" })] })), _jsxs("button", { onClick: generateIdea, disabled: loading, className: "w-full h-14 bg-emerald-600 text-white font-black uppercase text-[12px] tracking-[0.3em] rounded-2xl shadow-[0_15px_40px_rgba(16,185,129,0.3)] hover:bg-emerald-500 hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-4 disabled:opacity-50", children: [loading ? _jsx(Loader2, { className: "w-5 h-5 animate-spin" }) : _jsx(RefreshCw, { className: "w-5 h-5" }), customIdea ? "Retrieve Next Mod" : "Initiate Feed"] })] })] })] }));
};
