function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-slate-500 sm:flex-row">
        <span>© {new Date().getFullYear()} Discvr Dash. All rights reserved.</span>
        <span className="flex gap-3">
          <span className="hidden sm:inline">Built with React + Tailwind CSS</span>
          <span className="inline sm:hidden">React · Tailwind</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;

