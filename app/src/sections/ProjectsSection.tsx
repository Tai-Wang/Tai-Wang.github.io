import { ExternalLink, BookOpen } from 'lucide-react';
import { projects } from '../data/siteData';

const iconMap: Record<string, React.ReactNode> = {
  Code: <ExternalLink className="w-3.5 h-3.5" />,
  Documentation: <BookOpen className="w-3.5 h-3.5" />,
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-12">
      <div className="mb-6">
        <h2 className="text-[24px] font-bold text-[#1a1a1a] dark:text-[#e2e8f0] tracking-tight">
          Projects
        </h2>
        <div className="w-8 h-[3px] bg-[#C8917A] mt-2 rounded-full" />
      </div>

      <div className="space-y-4">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#f7f7f5] dark:bg-[#161922] rounded-xl p-6 border border-gray-100 dark:border-white/[0.06]"
          >
            <h3 className="text-[18px] font-semibold text-[#1a1a1a] dark:text-[#e2e8f0]">
              {project.title}
            </h3>
            <p className="text-[14px] text-[#6b6b6b] dark:text-[#8892a4] mt-2 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] font-mono text-[#C8917A] border border-[#C8917A]/25 rounded px-2 py-[3px] hover:bg-[#C8917A]/10 hover:border-[#C8917A]/50 transition-all duration-200"
                >
                  {iconMap[link.label] ?? <ExternalLink className="w-3.5 h-3.5" />}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
