import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Search, Loader2, ExternalLink, Database, History, ChevronRight, Bookmark, BookmarkCheck, Sparkles, ArrowRight, Dna, BookOpen, Quote } from 'lucide-react';
import { consultAI } from '../services/geminiService';
import { KNOWLEDGE_BASE } from '../constants';

export const AIConsultant = ({ profile, onSave, savedItems = [] }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [localMatch, setLocalMatch] = useState(null);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [historySearch, setHistorySearch] = useState('');

  useEffect(() => {
    const savedHistory = localStorage.getItem('layers_chat_history');
    if (savedHistory) setHistory(JSON.parse(savedHistory));
  }, []);

  const handleQueryChange = (val) => {
    setQuery(val);
    setResult(null);
    if (val.trim().length > 3) {
      const match = KNOWLEDGE_BASE.find(kb => kb.question.toLowerCase().includes(val.toLowerCase()) ||
        val.toLowerCase().includes(kb.question.toLowerCase().replace('what is ', '')));
      setLocalMatch(match || null);
    }
    else {
      setLocalMatch(null);
    }
  };

  const handleConsult = async (e, customQuery) => {
    e?.preventDefault();
    const finalQuery = customQuery || query;
    if (!finalQuery.trim()) return;
    setLoading(true);
    setError(null);
    setShowHistory(false);
    setLocalMatch(null);
    if (customQuery) setQuery(customQuery);
    try {
      const data = await consultAI(finalQuery, profile);
      setResult(data);
      const newMessage = {
        id: Date.now().toString(),
        query: finalQuery,
        answer: data.answer,
        timestamp: Date.now()
      };
      const newHistory = [newMessage, ...history].slice(0, 50);
      setHistory(newHistory);
      localStorage.setItem('layers_chat_history', JSON.stringify(newHistory));
    }
    catch (err) {
      setError("I'm sorry, I'm having trouble connecting to my biological library. Please try again! 💖");
    }
    finally {
      setLoading(false);
    }
  };

  const getSuggestedQuestions = () => {
    const questions = ['Is Vitamin C safe?', 'Best hair ritual?', 'What is TEWL?', 'pH balance tips'];
    if (profile.mainSkinConcern?.toLowerCase().includes('acne')) questions.unshift('Natural acne treatment?');
    if (profile.mainSkinConcern?.toLowerCase().includes('dry')) questions.unshift('Hydration rituals?');
    return Array.from(new Set(questions)).slice(0, 4);
  };

  const filteredHistory = history.filter(h => h.query.toLowerCase().includes(historySearch.toLowerCase()) ||
    h.answer.toLowerCase().includes(historySearch.toLowerCase()));

  const isSaved = result && savedItems.some(s => s.title === query);

  return (_jsxs("div", { className: "w-full space-y-6 animate-fade-up py-4 px-1 sm:px-2", children: [_jsxs("header", { className: "text-center space-y-4 relative", children: [_jsx("button", { onClick: () => setShowHistory(!showHistory), className: `absolute right-0 top-0 p-3 rounded-2xl transition-all z-20 ${showHistory ? 'bg-[#C084FC] text-white shadow-lg' : 'bg-slate-50 text-slate-400 hover:text-slate-900'}`, "aria-label": "Toggle History", children: _jsx(History, { className: "w-6 h-6" }) }), _jsxs("div", { className: "w-20 h-20 sm:w-24 sm:h-24 rounded-[30px] sm:rounded-[36px] bg-gradient-to-br from-[#17B8A0] to-[#C084FC] flex items-center justify-center mx-auto text-white shadow-2xl relative", children: [_jsx(BookOpen, { className: "w-10 h-10 sm:w-12 sm:h-12" }), _jsx("div", { className: "absolute -bottom-1 -right-1 w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center text-[#17B8A0] shadow-sm", children: _jsx(Sparkles, { className: "w-4 h-4" }) })] }), _jsxs("div", { className: "space-y-1", children: [_jsx("h1", { className: "text-2xl sm:text-3xl font-black tracking-tighter text-slate-900 uppercase leading-none", children: "The Research Lab" }), _jsx("p", { className: "text-[9px] sm:text-[10px] tracking-[0.3em] text-[#17B8A0] font-black uppercase", children: "Verified Biological Studies" })] })] }), !showHistory && (_jsxs("div", { className: "space-y-6", children: [_jsxs("form", { onSubmit: handleConsult, className: "relative group", children: [_jsx("div", { className: "absolute inset-0 bg-[#17B8A0]/5 rounded-[28px] blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity" }), _jsx("input", { type: "text", value: query, onChange: (e) => handleQueryChange(e.target.value), placeholder: "Search medical database...", className: "w-full h-16 sm:h-20 px-6 sm:px-8 pr-16 sm:pr-20 rounded-[28px] sm:rounded-[32px] border-none bg-slate-50 text-base font-semibold text-slate-800 placeholder:text-slate-300 focus:ring-4 focus:ring-[#17B8A0]/5 outline-none shadow-inner relative z-10" }), _jsx("button", { type: "submit", disabled: loading || !query.trim(), className: "absolute right-2 top-2 bottom-2 w-12 sm:w-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center disabled:opacity-30 active:scale-90 transition-all shadow-xl z-20", "aria-label": "Send Query", children: loading ? _jsx(Loader2, { className: "w-5 h-5 sm:w-6 sm:h-6 animate-spin" }) : _jsx(Search, { className: "w-5 h-5 sm:w-6 sm:h-6" }) })] }), localMatch && !result && !loading && (_jsxs("div", { className: "p-7 rounded-[32px] bg-emerald-50 border-2 border-emerald-100 space-y-5 animate-fade-up shadow-sm", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2 text-[#17B8A0]", children: [_jsx(Quote, { className: "w-4 h-4 fill-[#17B8A0]/20" }), _jsx("span", { className: "text-[10px] font-black uppercase tracking-widest", children: "Verified Vault Protocol" })] }), localMatch.citation && (_jsxs("a", { href: localMatch.citation.url, target: "_blank", rel: "noopener noreferrer", className: "text-[8px] font-black uppercase tracking-widest px-2 py-1 bg-[#17B8A0] text-white rounded-lg shadow-sm flex items-center gap-1", children: ["Source: ", localMatch.citation.source, " ", _jsx(ExternalLink, { className: "w-2.5 h-2.5" })] }))] }), _jsx("p", { className: "text-sm font-semibold text-slate-700 leading-relaxed", children: localMatch.answer }), _jsx("button", { onClick: handleConsult, className: "w-full h-12 bg-white rounded-2xl border border-emerald-100 text-[10px] font-black uppercase tracking-widest text-[#17B8A0] active:scale-95 transition-all shadow-sm", children: "Consult Research Lab for depth \u2192" })] })), !result && !loading && !localMatch && !error && (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx("span", { className: "text-[9px] font-black uppercase text-slate-400 tracking-[0.3em] text-center", children: "Protocol Library" }), _jsx("div", { className: "flex flex-wrap justify-center gap-2 px-2", children: getSuggestedQuestions().map((suggestion, i) => (_jsxs("button", { onClick: () => handleConsult(undefined, suggestion), className: "px-4 py-3 rounded-xl border-2 border-slate-50 bg-white text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-[#17B8A0] hover:border-[#17B8A0]/20 transition-all shadow-sm flex items-center gap-2 active:scale-95", children: [suggestion, " ", _jsx(ChevronRight, { className: "w-3 h-3" })] }, i))) })] }))] })), loading && (_jsxs("div", { className: "py-16 text-center flex flex-col items-center space-y-6", children: [_jsxs("div", { className: "relative", children: [_jsx(Loader2, { className: "w-12 h-12 animate-spin text-[#17B8A0]" }), _jsx(Dna, { className: "absolute inset-0 m-auto w-5 h-5 text-[#C084FC] animate-pulse" })] }), _jsx("p", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400", children: "Querying Peer-Reviewed Studies..." })] })), result && !loading && !showHistory && (_jsxs("div", { className: "p-7 sm:p-10 rounded-[48px] bg-white shadow-2xl animate-fade-up space-y-8 border-none relative overflow-hidden", children: [_jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-[#17B8A0]/5 rounded-full -mr-16 -mt-16" }), _jsxs("div", { className: "flex items-center justify-between border-b border-slate-50 pb-5 relative z-10", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "p-3 bg-[#17B8A0]/10 rounded-2xl", children: _jsx(Database, { className: "w-6 h-6 text-[#17B8A0]" }) }), _jsxs("div", { children: [_jsx("span", { className: "text-[9px] font-black text-slate-300 uppercase block tracking-widest", children: "Research Data" }), _jsx("span", { className: "text-[11px] font-black text-slate-800 uppercase tracking-widest", children: "Grounding Active" })] })] }), onSave && (_jsx("button", { onClick: () => onSave({ id: Date.now().toString(), type: 'consultation', title: query, data: result }), className: `p-3 rounded-2xl transition-all ${isSaved ? 'text-[#17B8A0] bg-[#17B8A0]/5' : 'text-slate-200 hover:text-[#17B8A0]'}`, children: isSaved ? _jsx(BookmarkCheck, { className: "w-6 h-6" }) : _jsx(Bookmark, { className: "w-6 h-6" }) }))] }), _jsx("div", { className: "space-y-5 text-[16px] leading-relaxed text-slate-700 font-semibold relative z-10", children: result.answer.split('\n').map((para, i) => para.trim() ? (_jsxs("div", { className: "flex gap-4 items-start", children: [_jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-[#17B8A0] mt-2.5 shrink-0" }), _jsx("p", { className: "whitespace-normal break-words", children: para.replace(/^[*#-]\s*/, '') })] }, i)) : null) }), result.sources.length > 0 && (_jsxs("div", { className: "pt-6 border-t border-slate-100 space-y-4 relative z-10", children: [_jsx("span", { className: "text-[10px] font-black uppercase tracking-[0.2em] text-slate-300", children: "Scientific Sources" }), _jsx("div", { className: "flex flex-col gap-2", children: result.sources.map((s, i) => s.web && (_jsxs("a", { href: s.web.uri, target: "_blank", rel: "noopener noreferrer", className: "p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between hover:bg-white hover:border-[#17B8A0]/20 transition-all shadow-sm", children: [_jsx("span", { className: "text-[10px] font-black text-slate-800 uppercase truncate pr-4", children: s.web.title }), _jsx(ExternalLink, { className: "w-4 h-4 text-[#17B8A0] shrink-0" })] }, i))) })] })), _jsxs("button", { onClick: () => { setResult(null); setQuery(''); setLocalMatch(null); }, className: "w-full h-16 rounded-3xl bg-slate-900 text-white text-xs font-black uppercase tracking-[0.2em] shadow-xl flex items-center justify-center gap-4 active:scale-95 transition-all", children: ["Initiate Next Search ", _jsx(ArrowRight, { className: "w-5 h-5" })] })] }))] }));
};
