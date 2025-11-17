import React from 'react';

export default function BottomBar() {
  return (
    <div className="absolute bottom-0 left-0 w-full p-4 text-white bg-gradient-to-t from-black/50 to-transparent z-10">
      <h3 className="font-bold">@Autor</h3>
      <p className="text-sm">Opis filmu lub slajdu...</p>
    </div>
  );
}
