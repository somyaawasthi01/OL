import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Droplets, ShieldCheck } from 'lucide-react';
import { BARRIER_SCIENCE } from '../constants';

export const BarrierSection = () => {
  const metrics = [
    { key: 'ph', data: BARRIER_SCIENCE.metrics.ph, color: 'text-[#FF6B9D]', bg: 'bg-[#FF6B9D]/10' },
    { key: 'tewl', data: BARRIER_SCIENCE.metrics.tewl, color: 'text-[#C084FC]', bg: 'bg-[#C084FC]/10' },
    { key: 'lipids', data: BARRIER_SCIENCE.metrics.lipids, color: 'text-[#FFB84D]', bg: 'bg-[#FFB84D]/10' }
  ];

  return (_jsxs("div", { className: "w-full space-y-6", children: [_jsxs("header", { className: "flex items-center gap-4", children: [_jsx("div", { className: "w-14 h-14 bg-[#17B8A0]/10 rounded-2xl flex items-center justify-center text-[#17B8A0]", children: _jsx(ShieldCheck, { className: "w-8 h-8" }) }), _jsxs("div", { children: [_jsx("h2", { className: "text-2xl font-black text-slate-900 uppercase leading-none", children: "Your Skin Shield" }), _jsx("p", { className: "text-xs font-bold text-slate-400 uppercase tracking-widest mt-1", children: "Barrier Health Check" })] })] }), _jsx("div", { className: "grid grid-cols-1 gap-3", children: metrics.map((m) => (_jsxs("div", { className: "p-5 card-vibrant flex items-center justify-between border-none", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: `w-10 h-10 ${m.bg} rounded-xl flex items-center justify-center ${m.color}`, children: _jsx(Droplets, { className: "w-5 h-5" }) }), _jsxs("div", { children: [_jsx("h4", { className: "text-sm font-black text-slate-800 uppercase leading-none", children: m.data.label }), _jsx("p", { className: "text-[10px] font-medium text-slate-400 mt-1", children: m.data.desc })] })] }), _jsx("div", { className: "text-right", children: _jsx("span", { className: `text-lg font-black ${m.color}`, children: m.data.value }) })] }, m.key))) })] }));
};
