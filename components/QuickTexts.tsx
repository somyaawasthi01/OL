import React, { useMemo, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Language, t } from '../translations';

type QuickTextsProps = {
  lang: Language;
};

const quickTextPool = {
  en: [
    'You’re my favorite notification.',
    'Low effort, high love.',
    'Meet me in the kitchen for a hug.',
    'You + me + snacks = perfect.',
    'Thinking about your laugh again.',
    'Permission to steal one kiss later?',
  ],
  hi: [
    'तुम मेरी सबसे प्यारी नोटिफिकेशन हो।',
    'कम एफर्ट, ज़्यादा प्यार।',
    'किचन में मिलो, एक हग चाहिए।',
    'तुम + मैं + स्नैक्स = परफेक्ट।',
    'तुम्हारी हंसी फिर याद आ गई।',
    'एक किस उधार मिल सकती है?',
  ],
};

export const QuickTexts: React.FC<QuickTextsProps> = ({ lang }) => {
  const [index, setIndex] = useState(0);
  const copy = useMemo(() => quickTextPool[lang], [lang]);
  const txt = t[lang];

  const handleShuffle = () => {
    const nextIndex = Math.floor(Math.random() * copy.length);
    setIndex(nextIndex);
  };

  return (
    <section className="glass-card rounded-3xl p-6 shadow-md border border-white/70">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div>
          <h3 className={`text-2xl font-bold text-rose-700 ${lang === 'hi' ? 'font-hindi' : 'font-ideas'}`}>
            {txt.quickTextsTitle}
          </h3>
          <p className={`text-sm text-rose-500 ${lang === 'hi' ? 'font-hindi' : ''}`}>{txt.quickTextsSub}</p>
        </div>
        <span className="p-3 rounded-2xl bg-rose-100 text-rose-600 shadow-sm">
          <Sparkles size={22} />
        </span>
      </div>
      <div className="bg-white/70 rounded-2xl p-5 text-center text-lg font-semibold text-rose-800 shadow-inner">
        “{copy[index]}”
      </div>
      <button
        onClick={handleShuffle}
        className="mt-4 w-full rounded-full bg-rose-500 text-white py-3 text-sm font-bold shadow-lg hover:bg-rose-600 transition-colors"
      >
        {txt.quickTextsBtn}
      </button>
    </section>
  );
};
