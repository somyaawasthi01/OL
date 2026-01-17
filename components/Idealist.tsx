import React, { useMemo, useState } from 'react';
import { Compass, Sparkle } from 'lucide-react';
import { Language, t } from '../translations';

type IdeaListProps = {
  lang: Language;
};

type Idea = {
  title: string;
  description: string;
  tag: 'cozy' | 'outdoors' | 'budget' | 'bold';
};

const ideas: Record<Language, Idea[]> = {
  en: [
    { title: 'Blanket balcony date', description: 'Hot cocoa + slow playlist.', tag: 'cozy' },
    { title: 'Sunset walk', description: 'Leave phones at home.', tag: 'outdoors' },
    { title: 'Budget snack board', description: 'Pick 5 treats under $10.', tag: 'budget' },
    { title: 'Swap hobbies', description: 'Teach each other a skill.', tag: 'bold' },
    { title: 'Story time', description: 'Tell childhood stories on paper.', tag: 'cozy' },
    { title: 'Farmers market', description: 'Choose one ingredient each.', tag: 'outdoors' },
    { title: 'Mini photo shoot', description: '15 minutes, 1 corner, 5 shots.', tag: 'budget' },
    { title: 'Yes-night', description: 'Say yes to the first three ideas.', tag: 'bold' },
  ],
  hi: [
    { title: 'बालकनी डेट', description: 'गरम कोको + धीमा म्यूज़िक।', tag: 'cozy' },
    { title: 'सनसेट वॉक', description: 'फोन घर पर छोड़ें।', tag: 'outdoors' },
    { title: 'बजट स्नैक बोर्ड', description: '₹200 में 5 ट्रीट।', tag: 'budget' },
    { title: 'हॉबी स्वैप', description: 'एक-दूसरे को कुछ सिखाएँ।', tag: 'bold' },
    { title: 'कहानी रात', description: 'बचपन की यादें लिखें।', tag: 'cozy' },
    { title: 'लोकल मार्केट', description: 'एक-एक इंग्रीडिएंट चुनें।', tag: 'outdoors' },
    { title: 'मिनी फोटोशूट', description: '15 मिनट, 5 फोटो।', tag: 'budget' },
    { title: 'यस-नाइट', description: 'पहले तीन आइडिया पर हाँ।', tag: 'bold' },
  ],
};

const tagLabels = (lang: Language) => {
  const txt = t[lang];
  return {
    all: txt.ideasFilterAll,
    cozy: txt.ideasFilterCozy,
    outdoors: txt.ideasFilterOutdoors,
    budget: txt.ideasFilterBudget,
    bold: txt.ideasFilterBold,
  };
};

export const IdeaList: React.FC<IdeaListProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | Idea['tag']>('all');
  const txt = t[lang];
  const labels = useMemo(() => tagLabels(lang), [lang]);

  const filteredIdeas = useMemo(() => {
    if (filter === 'all') {
      return ideas[lang];
    }
    return ideas[lang].filter((idea) => idea.tag === filter);
  }, [filter, lang]);

  return (
    <section className="rounded-3xl bg-white/80 border border-rose-100 p-6 shadow-lg">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h3 className={`text-2xl font-bold text-rose-700 ${lang === 'hi' ? 'font-hindi' : 'font-ideas'}`}>
            {txt.ideasTitle}
          </h3>
          <p className={`text-sm text-gray-500 ${lang === 'hi' ? 'font-hindi' : ''}`}>{txt.ideasSub}</p>
        </div>
        <span className="p-3 rounded-2xl bg-rose-100 text-rose-600 shadow-sm">
          <Compass size={22} />
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {(['all', 'cozy', 'outdoors', 'budget', 'bold'] as const).map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
              filter === tag
                ? 'bg-rose-500 text-white border-rose-500 shadow-md'
                : 'bg-white text-rose-500 border-rose-200 hover:bg-rose-50'
            }`}
          >
            {labels[tag]}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredIdeas.map((idea) => (
          <div key={idea.title} className="rounded-2xl border border-rose-100 p-4 bg-rose-50/60">
            <div className="flex items-center justify-between">
              <h4 className={`text-lg font-semibold text-rose-800 ${lang === 'hi' ? 'font-hindi' : ''}`}>
                {idea.title}
              </h4>
              <Sparkle className="text-rose-400" size={18} />
            </div>
            <p className={`text-sm text-rose-500 mt-2 ${lang === 'hi' ? 'font-hindi' : ''}`}>{idea.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
