"use client";

const BottomBar = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 z-20 p-4 text-black bg-gradient-to-t from-white/50 to-transparent">
      <div className="w-full h-1 bg-black/30 rounded-full mb-2">
        <div className="h-full bg-black w-1/2 rounded-full"></div>
      </div>
      <div>
        <strong className="font-bold">@autor</strong>
        <p className="text-sm">Tytuł slajdu i jego opis...</p>
      </div>
    </footer>
  );
};

export default BottomBar;
