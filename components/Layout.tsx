import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Heart, Sparkles, Droplets, Activity, Beaker, Dna, Search } from 'lucide-react';

export const Layout = ({ children, activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'intro', icon: Heart, label: 'Home' },
    { id: 'curate', icon: Sparkles, label: 'Discover' },
    { id: 'skin', icon: Droplets, label: 'Skin' },
    { id: 'hair', icon: Activity, label: 'Hair' },
    { id: 'potions', icon: Beaker, label: 'Lab' },
    { id: 'layers', icon: Dna, label: 'Depth' },
    { id: 'consult', icon: Search, label: 'Guide' },
  ];

  return (_jsxs("div", { className: "app-window flex flex-col", children: [_jsx("main", { className: "flex-grow relative h-full", children: children }), _jsx("nav", { className: "window-nav", children: navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (_jsxs("button", { onClick: () => setActiveTab(item.id), className: `flex flex-col items-center justify-center gap-1 transition-all duration-300 min-w-[48px] h-full relative group shrink-0 ${isActive ? 'text-slate-900' : 'text-slate-300 hover:text-slate-400'}`, children: [_jsx(item.icon, { className: `w-6 h-6 transition-transform duration-300 ${isActive ? 'scale-110' : ''}` }), _jsx("span", { className: `text-[8px] font-black uppercase tracking-tight transition-opacity ${isActive ? 'opacity-100' : 'opacity-60'}`, children: item.label }), isActive && (_jsx("div", { className: "absolute -bottom-1 w-6 h-1 bg-slate-900 rounded-full" }))] }, item.id));
          }) }), _jsxs("div", { className: "app-footnote px-4 flex flex-col gap-0.5", children: [_jsx("span", { className: "opacity-70", children: "This app promotes health; please consult your dermatologist for professional guidance and real root cause solutions." }), _jsx("span", { className: "font-black text-slate-400", children: "made with love by dr. somya awasthi" })] })] }));
};
