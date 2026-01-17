import React, { useMemo, useState } from 'react';
import { PenLine } from 'lucide-react';
import { Language, t } from '../translations';

type LoveLetterProps = {
  lang: Language;
};

const toneOptions = {
  en: ['Gentle', 'Playful', 'Poetic', 'Bold'],
  hi: ['नरम', 'मज़ेदार', 'काव्यात्मक', 'बोल्ड'],
};

export const LoveLetter: React.FC<LoveLetterProps> = ({ lang }) => {
  const txt = t[lang];
  const [to, setTo] = useState('');
  const [tone, setTone] = useState(toneOptions[lang][0]);
  const [memory, setMemory] = useState('');

  const letter = useMemo(() => {
    const name = to.trim() || (lang === 'hi' ? 'तुम' : 'you');
    const sharedMemory = memory.trim() || txt.loveLetterPlaceholder;
    const signOff = lang === 'hi' ? 'हमेशा तुम्हारा/तुम्हारी' : 'Always yours';

    return lang === 'hi'
      ? `${name},\n\nआज मैं फिर से सोच रहा/रही था कि ${sharedMemory}.\nतुम्हारी मौजूदगी मेरी दुनिया को नरम और सुरक्षित बनाती है।\nचलो आज थोड़ा और करीब रहें — बिना वजह, बस साथ रहने के लिए।\n\n${signOff}`
      : `${name},\n\nI keep replaying ${sharedMemory}.\nYou make my world feel softer and safer.\nLet’s stay a little closer today — no reason, just us.\n\n${signOff}`;
  }, [lang, memory, to, txt.loveLetterPlaceholder]);

  return (
    <section className="rounded-3xl bg-white/80 border border-rose-100 p-6 shadow-lg">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h3 className={`text-2xl font-bold text-rose-700 ${lang === 'hi' ? 'font-hindi' : 'font-activity'}`}>
            {txt.loveLetterTitle}
          </h3>
          <p className={`text-sm text-gray-500 ${lang === 'hi' ? 'font-hindi' : ''}`}>{txt.loveLetterSub}</p>
        </div>
        <span className="p-3 rounded-2xl bg-rose-100 text-rose-600 shadow-sm">
          <PenLine size={22} />
        </span>
      </div>

      <div className="grid gap-4">
        <label className="text-xs uppercase tracking-wide text-rose-400 font-bold">
          {txt.loveLetterToLabel}
          <input
            className={`mt-2 w-full rounded-xl border border-rose-100 bg-white/70 px-4 py-2 text-sm text-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-300 ${lang === 'hi' ? 'font-hindi' : ''}`}
            value={to}
            onChange={(event) => setTo(event.target.value)}
            placeholder={lang === 'hi' ? 'नाम लिखें' : 'Type a name'}
          />
        </label>

        <label className="text-xs uppercase tracking-wide text-rose-400 font-bold">
          {txt.loveLetterToneLabel}
          <select
            className={`mt-2 w-full rounded-xl border border-rose-100 bg-white/70 px-4 py-2 text-sm text-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-300 ${lang === 'hi' ? 'font-hindi' : ''}`}
            value={tone}
            onChange={(event) => setTone(event.target.value)}
          >
            {toneOptions[lang].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="text-xs uppercase tracking-wide text-rose-400 font-bold">
          {txt.loveLetterPromptLabel}
          <input
            className={`mt-2 w-full rounded-xl border border-rose-100 bg-white/70 px-4 py-2 text-sm text-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-300 ${lang === 'hi' ? 'font-hindi' : ''}`}
            value={memory}
            onChange={(event) => setMemory(event.target.value)}
            placeholder={txt.loveLetterPlaceholder}
          />
        </label>

        <button
          type="button"
          className="rounded-full bg-rose-500 py-3 text-sm font-bold text-white shadow-lg hover:bg-rose-600 transition-colors"
        >
          {txt.loveLetterBtn} · {tone}
        </button>

        <div className="rounded-2xl bg-rose-50/80 border border-rose-100 p-4">
          <p className={`text-xs uppercase tracking-wide text-rose-400 font-bold mb-2 ${lang === 'hi' ? 'font-hindi' : ''}`}>
            {txt.loveLetterOutputLabel}
          </p>
          <pre className={`whitespace-pre-wrap text-sm text-rose-800 ${lang === 'hi' ? 'font-hindi' : ''}`}>
            {letter}
          </pre>
        </div>
      </div>
    </section>
  );
};
