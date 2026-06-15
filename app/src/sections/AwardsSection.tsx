import { useState } from 'react';
import { Award as AwardIcon, ChevronDown, ChevronUp } from 'lucide-react';
import { awards } from '../data/siteData';

export default function AwardsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleAwards = showAll ? awards : awards.slice(0, 5);

  return (
    <section id="awards" className="px-6 py-12">
      <div className="mb-6">
        <h2 className="text-[24px] font-bold text-[#1a1a1a] dark:text-[#e2e8f0] tracking-tight">
          Selected Awards
        </h2>
        <div className="w-8 h-[3px] bg-[#C8917A] mt-2 rounded-full" />
      </div>

      <div className="space-y-0">
        {visibleAwards.map((award, idx) => (
          <div
            key={idx}
            className="flex gap-3 py-2 border-b border-gray-100 dark:border-white/[0.06] last:border-b-0"
          >
            <AwardIcon className="w-3.5 h-3.5 text-[#C8917A] shrink-0 mt-[5px]" />
            <p className="text-[14px] text-[#333] dark:text-[#c9d1d9] leading-[1.55]">
              {award.title}
            </p>
          </div>
        ))}
      </div>

      {awards.length > 5 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 text-[12px] font-mono text-[#C8917A] hover:underline inline-flex items-center gap-1 transition-colors"
        >
          {showAll ? (
            <>Show less <ChevronUp className="w-3.5 h-3.5" /></>
          ) : (
            <>Show all <ChevronDown className="w-3.5 h-3.5" /></>
          )}
        </button>
      )}
    </section>
  );
}
