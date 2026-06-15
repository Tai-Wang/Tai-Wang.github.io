import { useState, useEffect } from 'react';
import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import NewsSection from './sections/NewsSection';
import PublicationsSection from './sections/PublicationsSection';
import ProjectsSection from './sections/ProjectsSection';
import AwardsSection from './sections/AwardsSection';
import TeachingSection from './sections/TeachingSection';
import Footer from './sections/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f1117] transition-colors duration-300">
      <Navbar isDark={isDark} onToggleDark={() => setIsDark(!isDark)} />
      <HeroSection />
      <main className="max-w-[900px] mx-auto">
        <div className="border-t border-gray-100 dark:border-white/[0.08]" />
        <NewsSection />
        <div className="border-t border-gray-100 dark:border-white/[0.08]" />
        <PublicationsSection />
        <div className="border-t border-gray-100 dark:border-white/[0.08]" />
        <ProjectsSection />
        <div className="border-t border-gray-100 dark:border-white/[0.08]" />
        <AwardsSection />
        <div className="border-t border-gray-100 dark:border-white/[0.08]" />
        <TeachingSection />
      </main>
      <div className="border-t border-gray-100 dark:border-white/[0.08]" />
      <Footer />
    </div>
  );
}

export default App;
