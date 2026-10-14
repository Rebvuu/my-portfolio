import { useEffect, useState } from "react";

const menuItems = ["Home", "Projects", "Settings", "Contact"];

export default function PullTabSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={() => setIsOpen(false)}
        className={[
          "fixed inset-0 z-30 bg-slate-950/35 backdrop-blur-[2px]",
          "transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      {/* Sidebar and tab move together */}
      <aside
        id="side-menu"
        className={[
          "fixed inset-y-0 left-0 z-40 w-72",
          "bg-white shadow-2xl",
          "transition-transform duration-500",
          "ease-[cubic-bezier(0.22,1,0.36,1)]",
          isOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex h-full flex-col p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500">
              Navigation
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Side menu
            </h2>
          </div>

          <nav className="mt-8 space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={[
                  "flex items-center gap-3 rounded-xl px-4 py-3",
                  "font-medium text-white",
                  "transition hover:bg-indigo-50 hover:text-indigo-700",
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-3 opacity-0",
                ].join(" ")}
                style={{
                  transitionDelay: isOpen ? `${160 + index * 55}ms` : "0ms",
                  transitionDuration: "300ms",
                }}
              >
                <span className="flex size-7 items-center justify-center rounded-lg bg-slate-100 text-sm">
                  {index + 1}
                </span>

                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Pull tab */}
        <button
          type="button"
          aria-controls="side-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close side menu" : "Open side menu"}
          onClick={() => setIsOpen((current) => !current)}
          className={[
            "absolute left-full top-1/2",
            "flex h-28 w-11 -translate-y-1/2 items-center justify-center",
            "rounded-r-2xl border border-l-0 border-indigo-700/20",
            "bg-indigo-600 text-white shadow-lg",
            "transition-all duration-500",
            "ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            "hover:bg-indigo-500",
            "focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300",
            isOpen ? "translate-x-0" : "translate-x-3 hover:translate-x-5",
          ].join(" ")}
        >
          <span className="flex flex-col items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={[
                "size-5 transition-transform duration-500",
                isOpen ? "rotate-180" : "rotate-0",
              ].join(" ")}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9 18 6-6-6-6"
              />
            </svg>

            <span className="text-[10px] font-bold uppercase tracking-widest [writing-mode:vertical-rl]">
              {isOpen ? "Close" : "Pull"}
            </span>
          </span>
        </button>
      </aside>

      <main className="mx-auto max-w-5xl px-8 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">
          Dashboard
        </p>

        <h1 className="mt-3 text-5xl font-bold tracking-tight text-slate-900">
          Pull-out sidebar
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
          Click the tab on the left edge. It moves outward slightly before the
          menu slides into view.
        </p>
      </main>
    </div>
  );
}