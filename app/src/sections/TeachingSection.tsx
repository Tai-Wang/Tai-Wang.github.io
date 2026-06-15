import { teachingItems } from '../data/siteData';
import { GraduationCap } from 'lucide-react';

export default function TeachingSection() {
  return (
    <section id="teaching" className="px-6 py-12">
      <div className="mb-6">
        <h2 className="text-[24px] font-bold text-[#1a1a1a] dark:text-[#e2e8f0] tracking-tight">
          Teaching
        </h2>
        <div className="w-8 h-[3px] bg-[#C8917A] mt-2 rounded-full" />
      </div>

      <div className="space-y-3">
        {teachingItems.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <GraduationCap className="w-4 h-4 text-[#C8917A] shrink-0 mt-0.5" />
            <div>
              <p className="text-[15px] text-[#333] dark:text-[#c9d1d9] font-medium">
                {item.course}
              </p>
              <p className="text-[13px] text-[#6b6b6b] dark:text-[#8892a4]">
                {item.period} @ {item.institution}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Miscellaneous */}
      <div className="mt-12">
        <div className="mb-5">
          <h2 className="text-[24px] font-bold text-[#1a1a1a] dark:text-[#e2e8f0] tracking-tight">
            Miscellaneous
          </h2>
          <div className="w-8 h-[3px] bg-[#C8917A] mt-2 rounded-full" />
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-[17px] font-semibold text-[#1a1a1a] dark:text-[#e2e8f0] mb-2">
              Academic Services
            </h3>
            <p className="text-[14px] text-[#333] dark:text-[#c9d1d9] leading-relaxed">
              I served as a reviewer for CVPR, ICCV, ECCV, CoRL, NeurIPS, ICLR, ICML, WACV, TPAMI, IJCV, TVCG.
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-semibold text-[#1a1a1a] dark:text-[#e2e8f0] mb-2">
              Hobbies
            </h3>
            <p className="text-[14px] text-[#333] dark:text-[#c9d1d9] leading-relaxed">
              Love:{' '}
              <span className="font-medium">Basketball</span> (big fan of{' '}
              <a href="https://en.wikipedia.org/wiki/Stephen_Curry" target="_blank" rel="noopener noreferrer" className="text-[#C8917A] hover:underline">
                Stephen Curry
              </a>
              ), <span className="font-medium">music/singing</span> and good at{' '}
              <span className="font-medium">Chinese calligraphy</span> (learned from{' '}
              <a href="https://baike.baidu.com/item/%E9%A9%AC%E8%89%AF%E8%87%A3/5438872" target="_blank" rel="noopener noreferrer" className="text-[#C8917A] hover:underline">
                MA Liangchen
              </a>{' '}
              and{' '}
              <a href="https://baike.baidu.com/item/%E9%A9%AC%E5%96%84%E5%8F%8C/5954206" target="_blank" rel="noopener noreferrer" className="text-[#C8917A] hover:underline">
                MA Shanshuang
              </a>
              ).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
