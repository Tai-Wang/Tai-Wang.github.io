import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { newsItems } from '../data/siteData';

export default function NewsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleNews = showAll ? newsItems : newsItems.slice(0, 5);

  return (
    <section className="px-6 py-12">
      <div className="mb-6">
        <h2 className="text-[24px] font-bold text-[#1a1a1a] dark:text-[#e2e8f0] tracking-tight">
          News
        </h2>
        <div className="w-8 h-[3px] bg-[#C8917A] mt-2 rounded-full" />
      </div>

      <div className="space-y-0">
        {visibleNews.map((item, idx) => (
          <div
            key={idx}
            className="flex gap-3 py-2 border-b border-gray-100 dark:border-white/[0.06] last:border-b-0"
          >
            <span className="font-mono text-[12px] text-[#C8917A] shrink-0 w-[64px] pt-0.5">
              {item.date}
            </span>
            <p className="text-[14px] text-[#333] dark:text-[#c9d1d9] leading-[1.55]">
              {item.links ? (
                <>
                  {item.content.split(new RegExp(item.links.map(l => l.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'))).map((part, i, arr) => {
                    if (i < arr.length - 1) {
                      const link = item.links![i];
                      return (
                        <span key={i}>
                          {part}
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#C8917A] hover:underline"
                          >
                            {link.text}
                          </a>
                        </span>
                      );
                    }
                    return <span key={i}>{part}</span>;
                  })}
                </>
              ) : (
                item.content
              )}
            </p>
          </div>
        ))}
      </div>

      {newsItems.length > 5 && (
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
