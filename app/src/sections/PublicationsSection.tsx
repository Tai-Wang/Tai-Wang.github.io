import { paperCategories } from '../data/siteData';

function PaperItem({ paper }: { paper: typeof paperCategories[0]['papers'][0] }) {
  const hasImage = paper.image && paper.image.length > 0;

  return (
    <li className="group flex gap-4 py-4 border-b border-gray-100 dark:border-white/[0.06] last:border-b-0">
      {/* Thumbnail */}
      <div className="shrink-0 w-[140px] h-[90px] rounded-lg overflow-hidden bg-white dark:bg-[#161922] border border-gray-100 dark:border-white/[0.06]">
        {hasImage ? (
          <img
            src={paper.image}
            alt={paper.title}
            className="w-[140px] h-[90px] object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              const parent = (e.target as HTMLImageElement).parentElement;
              if (parent) {
                parent.innerHTML = `<span style="display:flex;align-items:center;justify-content:center;height:100%;font-size:11px;color:#8892a4;font-family:monospace">${paper.venueTag}</span>`;
              }
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[11px] font-mono text-[#8892a4]">{paper.venueTag}</span>
          </div>
        )}
      </div>

      {/* Paper Content */}
      <div className="flex-1 min-w-0">
        <h4 className="text-[15px] font-medium text-[#1a1a1a] dark:text-[#e2e8f0] leading-snug group-hover:text-[#C8917A] transition-colors">
          {paper.title}
        </h4>
        <p className="text-[13px] text-[#6b6b6b] dark:text-[#8892a4] mt-1 leading-relaxed">
          {paper.authors.split('Tai Wang').map((part, i, arr) => {
            if (i < arr.length - 1) {
              return (
                <span key={i}>
                  {part}
                  <span className="font-bold text-[#C8917A]">Tai Wang</span>
                </span>
              );
            }
            return <span key={i}>{part}</span>;
          })}
        </p>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 mt-2">
          <span className="text-[11px] font-mono font-bold text-[#C8917A] bg-[#C8917A]/[0.08] dark:bg-[#C8917A]/[0.12] border border-[#C8917A]/20 rounded px-1.5 py-[2px]">
            {paper.venueTag}
          </span>
          {paper.links.map((link, linkIdx) => (
            <a
              key={linkIdx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono text-[#C8917A] border border-[#C8917A]/25 rounded px-2 py-[2px] hover:bg-[#C8917A]/10 hover:border-[#C8917A]/50 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </li>
  );
}

export default function PublicationsSection() {
  return (
    <section id="publications" className="px-6 py-12">
      <div className="mb-8">
        <h2 className="text-[24px] font-bold text-[#1a1a1a] dark:text-[#e2e8f0] tracking-tight">
          Publications
        </h2>
        <div className="w-8 h-[3px] bg-[#C8917A] mt-2 rounded-full" />
      </div>

      <div className="space-y-8">
        {paperCategories.map((category) => (
          <div key={category.name}>
            <h3 className="text-[13px] font-mono font-bold tracking-[0.08em] text-[#6b6b6b] dark:text-[#8892a4] mb-3">
              {category.name}
            </h3>
            <ul>
              {category.papers.map((paper, idx) => (
                <PaperItem key={`${category.name}-${idx}`} paper={paper} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
