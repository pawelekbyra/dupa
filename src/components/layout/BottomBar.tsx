'use client';

import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

const BottomBar = () => {
  const [isMuted, setIsMuted] = React.useState(false);

  return (
    <footer className="absolute bottom-0 left-0 right-0 p-4 z-40 text-white">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="font-bold">@nazwa_autora</h3>
          <p className="text-sm">Tytuł filmiku i opis...</p>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsMuted(!isMuted)}>
          {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
        </Button>
      </div>
      <Slider defaultValue={[33]} max={100} step={1} />
    </footer>
  );
};

export default BottomBar;
