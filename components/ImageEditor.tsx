import React, { useMemo, useState } from 'react';
import { Image } from 'lucide-react';
import { Language, t } from '../translations';

type ImageEditorProps = {
  lang: Language;
};

const accentOptions = ['Rose', 'Peach', 'Lavender', 'Mint'];

export const ImageEditor: React.FC<ImageEditorProps> = ({ lang }) => {
  const txt = t[lang];
  const [headline, setHeadline] = useState(lang === 'hi' ? 'हमारा दिन' : 'Our Day');
  const [subhead, setSubhead] = useState(lang === 'hi' ? 'छोटे पल, बड़ा प्यार' : 'Small moments, big love');
  const [accent, setAccent] = useState(accentOptions[0]);

  const accentClasses = useMemo(() => {
    switch (accent) {
      case 'Peach':
        return 'from-orange-200 via-rose-200 to-yellow-100 text-orange-700';
      case 'Lavender':
        return 'from-purple-200 via-pink-200 to-rose-100 text-purple-700';
      case 'Mint':
        return 'from-emerald-200 via-rose-100 to-cyan-100 text-emerald-700';
      default:
        return 'from-rose-200 via-pink-200 to-orange-100 text-rose-700';
    }
  }, [accent]);

  return (
    <section className="rounded-3xl bg-white/80 border border-rose-100 p-6 shadow-lg">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h3 className={`text-2xl font-bold text-rose-700 ${lang === 'hi' ? 'font-hindi' : 'font-activity'}`}>
            {txt.imageEditorTitle}
          </h3>
          <p className={`text-sm text-gray-500 ${lang === 'hi' ? 'font-hindi' : ''}`}>{txt.imageEditorSub}</p>
        </div>
        <span className="p-3 rounded-2xl bg-rose-100 text-rose-600 shadow-sm">
          <Image size={22} />
        </span>
      </div>

      <div className="grid gap-4">
        <label className="text-xs uppercase tracking-wide text-rose-400 font-bold">
          {txt.imageEditorHeadline}
          <input
            className={`mt-2 w-full rounded-xl border border-rose-100 bg-white/70 px-4 py-2 text-sm text-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-300 ${lang === 'hi' ? 'font-hindi' : ''}`}
            value={headline}
            onChange={(event) => setHeadline(event.target.value)}
          />
        </label>
        <label className="text-xs uppercase tracking-wide text-rose-400 font-bold">
          {txt.imageEditorSubhead}
          <input
            className={`mt-2 w-full rounded-xl border border-rose-100 bg-white/70 px-4 py-2 text-sm text-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-300 ${lang === 'hi' ? 'font-hindi' : ''}`}
            value={subhead}
            onChange={(event) => setSubhead(event.target.value)}
          />
        </label>
        <label className="text-xs uppercase tracking-wide text-rose-400 font-bold">
          {txt.imageEditorAccent}
          <select
            className={`mt-2 w-full rounded-xl border border-rose-100 bg-white/70 px-4 py-2 text-sm text-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-300 ${lang === 'hi' ? 'font-hindi' : ''}`}
            value={accent}
            onChange={(event) => setAccent(event.target.value)}
          >
            {accentOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <button className="rounded-full bg-rose-500 py-3 text-sm font-bold text-white shadow-lg hover:bg-rose-600 transition-colors">
          {txt.imageEditorBtn}
        </button>
      </div>

      <div className={`mt-6 rounded-3xl p-6 text-center bg-gradient-to-br ${accentClasses} border border-white/80`}>
        <p className={`text-xs uppercase tracking-widest opacity-70 ${lang === 'hi' ? 'font-hindi' : ''}`}>
          {lang === 'hi' ? 'लव पोस्टर' : 'Love Poster'}
        </p>
        <h4 className={`text-3xl font-bold mt-2 ${lang === 'hi' ? 'font-hindi' : 'font-serif'}`}>{headline}</h4>
        <p className={`mt-2 text-sm opacity-80 ${lang === 'hi' ? 'font-hindi' : ''}`}>{subhead}</p>
      </div>
    </section>
  );
};
