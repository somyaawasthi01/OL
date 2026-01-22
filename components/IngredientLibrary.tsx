import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Beaker, Search, ChevronDown, Sparkles, AlertTriangle, Bookmark, BookmarkCheck, CheckCircle2 } from 'lucide-react';
import { INGREDIENTS_LIBRARY } from '../constants';

export const IngredientLibrary = ({ onSave, savedItems = [] }) => {
  const [expanded, setExpanded] = useState(null);
  const [search, setSearch] = useState('');
  const filtered = INGREDIENTS_LIBRARY.filter(i => i.name.toLowerCase().includes(search.toLowerCase()) ||
    i.benefit.toLowerCase().includes(search.toLowerCase()));

  const getInteractionWarning = () => {
    const s = search.toLowerCase();
    const warns = [];
    if (s.includes('retinol')) {
      if (s.includes('glycolic') || s.includes('acid') || s.includes('lactic')) {
        warns.push("DANGER: Retinol and AHAs (Glycolic/Lactic) layered together can lead to severe barrier burn. Alternate these ingredients on different nights.");
      }
      if (s.includes('vitamin c')) {
        warns.push("CAUTION: Retinol and Vitamin C can neutralize each other and cause irritation. Use Vitamin C in the morning and Retinol at night.");
      }
    }
    if (s.includes('niacinamide') && s.includes('vitamin c')) {
      warns.push("NOTE: Modern formulations allow these together, but for sensitive skin, they may cause temporary flushing. Patch test first.");
    }
    return warns.length > 0 ? warns : null;
  };

  const warnings = getInteractionWarning();

  return (_jsxs("div", { className: "w-full space-y-8", children: [_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "relative group", children: [_jsx("div", { className: "absolute inset-0 bg-[#C084FC]/5 rounded-3xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" }), _jsx("input", { type: "text", placeholder: "Search ingredients...", value: search, onChange: (e) => setSearch(e.target.value), className: "w-full h-16 pl-14 pr-6 rounded-3xl bg-slate-50 border-none text-slate-800 font-semibold focus:ring-4 focus:ring-[#C084FC]/5 outline-none relative z-10 shadow-inner" }), _jsx(Search, { className: "absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-300 z-20" })] }), warnings && (_jsx("div", { className: "space-y-2 animate-fade-up", children: warnings.map((w, idx) => (_jsxs("div", { className: "p-5 rounded-3xl bg-[#FFB84D]/5 border-2 border-[#FFB84D]/10 flex gap-4", children: [_jsx(AlertTriangle, { className: "w-6 h-6 text-[#FFB84D] shrink-0" }), _jsx("p", { className: "text-[11px] font-black text-[#FFB84D] uppercase leading-relaxed tracking-tight", children: w })] }, idx))) })), search.length > 0 && !warnings && (_jsxs("div", { className: "flex items-center gap-2 px-2 animate-fade-up", children: [_jsx(CheckCircle2, { className: "w-4 h-4 text-[#17B8A0]" }), _jsx("span", { className: "text-[10px] font-black uppercase text-[#17B8A0] tracking-widest", children: "No known hazardous interactions found." })] }))] }), _jsx("div", { className: "grid grid-cols-1 gap-4", children: filtered.map((ing, idx) => {
      const isExpanded = expanded === idx;
      const isSaved = savedItems.some(s => s.type === 'ingredient' && s.title === ing.name);
      return (_jsxs("div", { className: `rounded-[36px] transition-all duration-500 overflow-hidden ${isExpanded ? 'bg-slate-900 text-white shadow-2xl p-8' : 'bg-white border-2 border-slate-50 p-6 shadow-sm hover:border-slate-100'}`, children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("button", { onClick: () => setExpanded(isExpanded ? null : idx), className: "flex-grow flex items-center gap-5 text-left", children: [_jsx("div", { className: `w-14 h-14 rounded-[22px] flex items-center justify-center transition-colors ${isExpanded ? 'bg-white/10 text-white' : 'bg-[#C084FC]/10 text-[#C084FC]'}`, children: _jsx(Beaker, { className: "w-7 h-7" }) }), _jsxs("div", { children: [_jsx("h3", { className: `text-xl font-black uppercase leading-none tracking-tight whitespace-normal break-words ${isExpanded ? 'text-white' : 'text-slate-800'}`, children: ing.name }), _jsx("p", { className: `text-[10px] font-black uppercase tracking-widest mt-1 ${isExpanded ? 'text-[#C084FC]' : 'text-slate-400'}`, children: ing.benefit })] })] }), _jsxs("div", { className: "flex items-center gap-3", children: [onSave && (_jsx("button", { onClick: () => onSave({ id: ing.name, type: 'ingredient', title: ing.name, data: ing }), className: `p-3 rounded-2xl transition-all ${isSaved ? 'text-[#C084FC] bg-white/5' : 'text-slate-200'}`, children: isSaved ? _jsx(BookmarkCheck, { className: "w-6 h-6" }) : _jsx(Bookmark, { className: "w-6 h-6" }) })), !isExpanded && (_jsx("button", { onClick: () => setExpanded(idx), className: "p-3 bg-slate-50 rounded-2xl", children: _jsx(ChevronDown, { className: "w-5 h-5 text-slate-300" }) }))] })] }), isExpanded && (_jsxs("div", { className: "pt-8 space-y-8 animate-fade-up", children: [_jsxs("div", { className: "space-y-4", children: [_jsx("p", { className: "text-base font-bold text-white/90 leading-relaxed whitespace-normal break-words", children: ing.what }), _jsx("div", { className: "p-5 bg-white/5 rounded-2xl border border-white/5 italic", children: _jsxs("p", { className: "text-sm text-slate-400 font-medium", children: ["\"", ing.why, "\""] }) })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "p-5 bg-white/5 rounded-3xl border border-white/5", children: [_jsx("span", { className: "text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-2", children: "Protocol" }), _jsx("p", { className: "text-[12px] font-bold text-white leading-snug", children: ing.how })] }), _jsxs("div", { className: "p-5 bg-white/5 rounded-3xl border border-white/5", children: [_jsx("span", { className: "text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-2", children: "Cellular Result" }), _jsx("p", { className: "text-[12px] font-bold text-white leading-snug", children: ing.results })] })] }), _jsxs("div", { className: "space-y-4 pt-6 border-t border-white/10", children: [_jsxs("div", { className: "flex items-center gap-2 text-[#17B8A0]", children: [_jsx(Sparkles, { className: "w-4 h-4" }), _jsx("span", { className: "text-[10px] font-black uppercase tracking-[0.2em]", children: "Expert Bio-Mod" })] }), _jsx("p", { className: "text-sm text-slate-400 font-medium leading-relaxed", children: ing.tips[0] }), ing.warning !== "None." && (_jsxs("div", { className: "flex items-start gap-3 text-[#FF6B9D] bg-[#FF6B9D]/10 p-5 rounded-3xl", children: [_jsx(AlertTriangle, { className: "w-5 h-5 shrink-0" }), _jsx("p", { className: "text-[11px] font-black uppercase leading-tight tracking-tight", children: ing.warning })] }))] }), _jsx("button", { onClick: () => setExpanded(null), className: "w-full h-14 bg-white text-slate-900 rounded-2xl font-black uppercase text-xs tracking-widest active:scale-95 transition-all", children: "Close Details" })] }))] }, idx));
    }) })] }));
};
