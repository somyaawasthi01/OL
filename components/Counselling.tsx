import React, { useState } from 'react';
import { HeartPulse } from 'lucide-react';
import { Language, t } from '../translations';

type CounsellingProps = {
  lang: Language;
};

const rituals = {
  en: [
    'Two-minute check-in before bed.',
    'One appreciative text during the day.',
    'Take a silent walk together.',
    'Share one win and one worry.',
  ],
  hi: [
    'सोने से पहले दो मिनट की बात।',
    'दिन में एक सराहना वाला मैसेज।',
    'एक शांत वॉक साथ में।',
    'एक जीत और एक चिंता शेयर करें।',
  ],
};

export const Counselling: React.FC<CounsellingProps> = ({ lang }) => {
  const txt = t[lang];
  const [mood, setMood] = useState(lang === 'hi' ? 'ठीक' : 'Okay');

  return (
    <section className="rounded-3xl bg-white/80 border border-rose-100 p-6 shadow-lg">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h3 className={`text-2xl font-bold text-rose-700 ${lang === 'hi' ? 'font-hindi' : 'font-deep'}`}>
            {txt.wellnessTitle}
          </h3>
          <p className={`text-sm text-gray-500 ${lang === 'hi' ? 'font-hindi' : ''}`}>{txt.wellnessSub}</p>
        </div>
        <span className="p-3 rounded-2xl bg-rose-100 text-rose-600 shadow-sm">
          <HeartPulse size={22} />
        </span>
      </div>

      <div className="rounded-2xl bg-rose-50/70 border border-rose-100 p-4 mb-6">
        <p className={`text-xs uppercase tracking-widest text-rose-400 font-bold ${lang === 'hi' ? 'font-hindi' : ''}`}>
          {txt.wellnessCheckIn}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {(lang === 'hi' ? ['खुश', 'ठीक', 'थका हुआ', 'ओवरथिंक'] : ['Happy', 'Okay', 'Tired', 'Overthinking']).map(
            (option) => (
              <button
                key={option}
                onClick={() => setMood(option)}
                className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                  mood === option
                    ? 'bg-rose-500 text-white border-rose-500 shadow-md'
                    : 'bg-white text-rose-500 border-rose-200 hover:bg-rose-100'
                }`}
              >
                {option}
              </button>
            )
          )}
        </div>
        <p className={`mt-3 text-sm text-rose-600 ${lang === 'hi' ? 'font-hindi' : ''}`}>
          {lang === 'hi' ? 'आज का मूड:' : 'Mood today:'} <span className="font-semibold">{mood}</span>
        </p>
      </div>

      <div>
        <p className={`text-xs uppercase tracking-widest text-rose-400 font-bold ${lang === 'hi' ? 'font-hindi' : ''}`}>
          {txt.wellnessTipLabel}
        </p>
        <ul className="mt-3 grid gap-3 md:grid-cols-2">
          {rituals[lang].map((ritual) => (
            <li
              key={ritual}
              className="rounded-2xl border border-rose-100 bg-white/70 p-4 text-sm text-rose-700"
            >
              {ritual}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
