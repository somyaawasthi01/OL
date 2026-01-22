import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { Check, X, RefreshCw, Trophy, BrainCircuit } from 'lucide-react';

export const InteractiveQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleAnswer = (idx) => {
    if (feedback) return;
    if (idx === QUIZ_QUESTIONS[current].correct) {
      setScore(score + 1);
      setFeedback('correct');
    }
    else {
      setFeedback('wrong');
    }
    setTimeout(() => {
      if (current < QUIZ_QUESTIONS.length - 1) {
        setCurrent(current + 1);
        setFeedback(null);
      }
      else {
        setShowResult(true);
      }
    }, 4000);
  };

  if (showResult) {
    return (_jsxs("div", { className: "max-w-xs w-full mx-auto p-10 card-3d glow-indigo text-center space-y-8 animate-in", children: [_jsx("div", { className: "w-20 h-20 mx-auto bg-indigo-500/10 border border-indigo-500/30 rounded-2xl flex items-center justify-center shadow-lg", children: _jsx(Trophy, { className: "w-10 h-10 text-indigo-400" }) }), _jsxs("div", { className: "space-y-2", children: [_jsx("h2", { className: "text-2xl font-bold text-white tracking-tight", children: "Complete" }), _jsxs("p", { className: "text-4xl font-black text-indigo-400", children: [score, " / ", QUIZ_QUESTIONS.length] })] }), _jsxs("button", { onClick: () => { setCurrent(0); setScore(0); setShowResult(false); }, className: "w-full h-11 rounded-xl bg-white text-black font-bold uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md", children: ["Retry ", _jsx(RefreshCw, { className: "w-4 h-4" })] })] }));
  }

  const q = QUIZ_QUESTIONS[current];

  return (_jsxs("div", { className: "max-w-md w-full mx-auto space-y-6 animate-in", children: [_jsxs("header", { className: "flex items-center justify-center gap-3", children: [_jsx("div", { className: "w-9 h-9 rounded-xl bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center", children: _jsx(BrainCircuit, { className: "w-5 h-5 text-indigo-400" }) }), _jsx("h1", { className: "text-xl font-black uppercase tracking-tight text-white", children: "Intel" })] }), _jsxs("div", { className: "relative card-3d glow-indigo p-8 space-y-8 flex flex-col justify-between overflow-hidden min-h-[460px]", children: [feedback && (_jsxs("div", { className: `absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md animate-in p-6`, children: [_jsx("div", { className: `p-6 rounded-2xl border-2 mb-6 ${feedback === 'correct' ? 'border-emerald-500/30 text-emerald-400' : 'border-rose-500/30 text-rose-500'}`, children: feedback === 'correct' ? _jsx(Check, { className: "w-10 h-10" }) : _jsx(X, { className: "w-10 h-10" }) }), _jsx("p", { className: "text-xl font-black text-white uppercase mb-4 tracking-tighter", children: feedback === 'correct' ? 'Correct!' : 'Incorrect' }), _jsx("div", { className: "p-5 bg-white/5 rounded-xl border border-white/5 text-center", children: _jsx("p", { className: "text-[13px] font-medium leading-relaxed text-white/80", children: feedback === 'correct' ? q.fact : `Actually: ${q.fact}` }) })] })), _jsxs("div", { className: "space-y-4", children: [_jsxs("span", { className: "text-[10px] font-black text-indigo-400/60 uppercase tracking-widest", children: ["Question 0", current + 1] }), _jsx("h2", { className: "text-lg font-bold leading-snug text-white tracking-tight", children: q.question })] }), _jsx("div", { className: "grid grid-cols-1 gap-3", children: q.options.map((opt, idx) => (_jsxs("button", { disabled: feedback !== null, onClick: () => handleAnswer(idx), className: "h-11 px-6 rounded-xl text-left border border-white/10 bg-white/5 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all font-semibold text-sm text-white/70 hover:text-white flex items-center gap-4", children: [_jsx("span", { className: "text-[9px] font-black text-white/20 border border-white/10 w-6 h-6 rounded-full flex items-center justify-center shrink-0", children: String.fromCharCode(65 + idx) }), _jsx("span", { className: "truncate", children: opt })] }, idx))) })] })] }));
};
