
"use client";

interface TopBarProps {
  onLoginClick: () => void;
}

const TopBar = ({ onLoginClick }: TopBarProps) => {
  const user = null; // Tymczasowo, do testów

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 bg-white text-black border-b h-14">
      <button className="p-2">
        <svg viewBox="0 0 24 24" width="24" height="24" className="stroke-current"><path d="M3 12h18M3 6h18M3 18h18" strokeWidth="2" strokeLinecap="round"></path></svg>
      </button>
      <button onClick={onLoginClick} className="absolute left-1/2 -translate-x-1/2">
        {!user ? "Zaloguj się" : "Konto"}
      </button>
      <button className="p-2 relative">
        <svg viewBox="0 0 24 24" width="22" height="22" className="stroke-current"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.73 21a2 2 0 0 1-3.46 0" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        <div className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full"></div>
      </button>
    </header>
  );
};

export default TopBar;
