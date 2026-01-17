import React from 'react';
import { HeartHandshake } from 'lucide-react';
import { Language, t } from '../translations';

type OldSchoolLoveProps = {
  lang: Language;
};

const gestures = {
  en: [
    { title: 'Handwritten note', detail: 'Leave it in a pocket or book.' },
    { title: 'Shared playlist', detail: 'One new song each day.' },
    { title: 'Polaroid moment', detail: 'Print a tiny memory.' },
    { title: 'Surprise tea', detail: 'A warm cup waiting after work.' },
  ],
  hi: [
    { title: 'हाथ से लिखा नोट', detail: 'जेब या किताब में रख दें।' },
    { title: 'शेयर प्लेलिस्ट', detail: 'हर दिन एक नया गाना।' },
    { title: 'पोलरॉइड पल', detail: 'एक छोटा-सा प्रिंट।' },
    { title: 'सरप्राइज़ चाय', detail: 'काम के बाद गरम कप।' },
  ],
};

export const OldSchoolLove: React.FC<OldSchoolLoveProps> = ({ lang }) => {
  const txt = t[lang];

  return (
    <section className="rounded-3xl border border-rose-100 bg-white/80 p-6 shadow-md">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h3 className={`text-2xl font-bold text-rose-700 ${lang === 'hi' ? 'font-hindi' : 'font-ideas'}`}>
            {txt.oldSchoolTitle}
          </h3>
          <p className={`text-sm text-gray-500 ${lang === 'hi' ? 'font-hindi' : ''}`}>{txt.oldSchoolSub}</p>
        </div>
        <span className="p-3 rounded-2xl bg-rose-100 text-rose-500 shadow-sm">
          <HeartHandshake size={22} />
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {gestures[lang].map((item) => (
          <div key={item.title} className="rounded-2xl bg-rose-50/70 p-4 border border-rose-100">
            <h4 className={`text-lg font-semibold text-rose-800 ${lang === 'hi' ? 'font-hindi' : ''}`}>
              {item.title}
            </h4>
            <p className={`text-sm text-rose-500 mt-1 ${lang === 'hi' ? 'font-hindi' : ''}`}>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
