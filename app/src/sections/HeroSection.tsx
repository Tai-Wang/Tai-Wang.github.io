import { useState, useEffect } from 'react';
import { Mail, GraduationCap, Github, Twitter, MapPin } from 'lucide-react';

const socialLinks = [
  { icon: Mail, label: 'Email', href: 'mailto:taiwang.me@gmail.com' },
  { icon: GraduationCap, label: 'Scholar', href: 'https://scholar.google.com/citations?user=JmbbZWIAAAAJ' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/Tai-Wang' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/wangtai97' },
];

export default function HeroSection() {
  const [showBio, setShowBio] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowBio(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="about" className="relative w-full bg-[#fafafa] dark:bg-[#0f1117] overflow-hidden">
      <div className="relative max-w-[900px] mx-auto px-6 pt-28 pb-16">
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-14">
          {/* Left: Avatar + Contact Card */}
          <div className="flex flex-col items-center shrink-0 self-center md:self-start">
            <div className="relative">
              <div className="w-[180px] h-[180px] rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5 dark:ring-white/10">
                <img
                  src="/images/avatar-compressed.jpg"
                  alt="Tai Wang"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-[24px] font-bold text-[#1a1a1a] dark:text-[#e2e8f0] tracking-tight">
                Tai Wang
              </p>
              <p className="text-[16px] text-[#6b6b6b] dark:text-[#8892a4] mt-0.5">
                王泰
              </p>
            </div>

            <div className="mt-3 text-center space-y-0.5">
              <p className="text-[15px] text-[#6b6b6b] dark:text-[#8892a4]">
                Research Scientist
              </p>
              <div className="flex items-center justify-center gap-1 text-[14px] text-[#6b6b6b] dark:text-[#8892a4]">
                <MapPin className="w-3.5 h-3.5" />
                Shanghai AI Laboratory
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="flex-1 min-w-0">
            <h2 className="text-[24px] font-bold text-[#1a1a1a] dark:text-[#e2e8f0] mb-5 tracking-tight">
              About me
            </h2>

            <div
              className={`space-y-4 text-[15px] text-[#333] dark:text-[#c9d1d9] leading-[1.85] transition-all duration-700 ${showBio ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <p>
                I am a research scientist at the{' '}
                <a href="https://www.shlab.org.cn/" target="_blank" rel="noopener noreferrer" className="text-[#C8917A] hover:underline">
                  Embodied AI Center, Shanghai AI Laboratory
                </a>
                , and lead a team working on Spatial Intelligence. My research focuses on building foundation models that can understand our 3D world with multi-modal interaction capabilities, especially from ego-centric observations, and ultimately enables general physical intelligence.
              </p>
              <p>
                In recent years, we have contributed several fundamental endeavors from general 3D perception (
                <a href="https://arxiv.org/abs/2011.10033" target="_blank" rel="noopener noreferrer" className="text-[#C8917A] hover:underline">Cylinder3D</a>,{' '}
                <a href="https://arxiv.org/abs/2104.10956" target="_blank" rel="noopener noreferrer" className="text-[#C8917A] hover:underline">FCOS3D</a>,{' '}
                <a href="https://arxiv.org/abs/2207.12988" target="_blank" rel="noopener noreferrer" className="text-[#C8917A] hover:underline">DfM</a>
                ), embodied multi-modal 3D perception (
                <a href="https://arxiv.org/abs/2312.16170" target="_blank" rel="noopener noreferrer" className="text-[#C8917A] hover:underline">EmbodiedScan</a>,{' '}
                <a href="https://arxiv.org/abs/2308.16911" target="_blank" rel="noopener noreferrer" className="text-[#C8917A] hover:underline">PointLLM</a>,{' '}
                <a href="https://arxiv.org/abs/2409.18125" target="_blank" rel="noopener noreferrer" className="text-[#C8917A] hover:underline">LLaVA-3D</a>
                ), to downstream embodied tasks (
                <a href="https://internrobotics.shlab.org.cn/largemodel.html" target="_blank" rel="noopener noreferrer" className="text-[#C8917A] hover:underline">InternVLA</a>,{' '}
                <a href="https://thu-air-dream.github.io/X-VLA/" target="_blank" rel="noopener noreferrer" className="text-[#C8917A] hover:underline">X-VLA</a>
                ), with continuing open-source efforts (
                <a href="https://github.com/open-mmlab/mmdetection3d" target="_blank" rel="noopener noreferrer" className="text-[#C8917A] hover:underline">MMDetection3D</a>,{' '}
                <a href="https://github.com/InternRobotics" target="_blank" rel="noopener noreferrer" className="text-[#C8917A] hover:underline">InternRobotics</a>
                ).
              </p>
              <p>
                Working with{' '}
                <a href="https://oceanpang.github.io/" target="_blank" rel="noopener noreferrer" className="text-[#C8917A] hover:underline">
                  Dr. Jiangmiao Pang
                </a>
                , we are dedicated to building Embodied AGI systems and empowering academia and industry through open-source initiatives. If you are interested, please reach out to us for potential positions or collaborations.
              </p>
              <p>
                I earned my Ph.D. degree from{' '}
                <a href="http://mmlab.ie.cuhk.edu.hk/" target="_blank" rel="noopener noreferrer" className="text-[#C8917A] hover:underline">MMLab</a>,{' '}
                <a href="https://www.cuhk.edu.hk/english/index.html" target="_blank" rel="noopener noreferrer" className="text-[#C8917A] hover:underline">The Chinese University of Hong Kong</a>, supervised by{' '}
                <a href="http://dahua.site/" target="_blank" rel="noopener noreferrer" className="text-[#C8917A] hover:underline">Prof. Dahua Lin</a>. Before that, I received my B.Eng degree from{' '}
                <a href="https://www.zju.edu.cn/english/" target="_blank" rel="noopener noreferrer" className="text-[#C8917A] hover:underline">Zhejiang University</a> with the highest honors.
              </p>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-2 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-[6px] border border-gray-200 dark:border-white/[0.08] rounded-lg text-[12px] text-[#1a1a1a] dark:text-[#c9d1d9] hover:border-[#C8917A]/40 hover:text-[#C8917A] transition-colors duration-200"
                >
                  <link.icon className="w-3.5 h-3.5" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
