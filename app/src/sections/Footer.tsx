export default function Footer() {
  return (
    <footer className="max-w-[900px] mx-auto px-6 py-8 border-t border-gray-100 dark:border-white/[0.06]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-[12px] text-[#6b6b6b] dark:text-[#8892a4]">
          &copy; 2025 Tai Wang
        </span>
        <span className="text-[12px] text-[#6b6b6b] dark:text-[#8892a4]">
          Built with React &amp; Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
