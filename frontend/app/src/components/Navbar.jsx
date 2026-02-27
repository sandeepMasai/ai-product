import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">

        <div className="flex flex-col">
          <span className="text-sm font-semibold tracking-tight text-slate-50">
            Discover AI
          </span>
          <span className="text-xs text-slate-400">
            AI‑assisted product discovery
          </span>
        </div>


        <div className="hidden items-center gap-6 text-sm font-medium sm:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors hover:text-emerald-400 ${isActive ? "text-emerald-400" : "text-slate-300"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `transition-colors hover:text-emerald-400 ${isActive ? "text-emerald-400" : "text-slate-300"
              }`
            }
          >
            Dashboard
          </NavLink>
        </div>


        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-full border border-emerald-500/60 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300 shadow-[0_0_20px_-12px_rgba(16,185,129,1)] hover:bg-emerald-500/20"
          >
            Login
          </button>
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/90 text-xs font-semibold uppercase text-slate-300">
            U
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

