"use client";
import React, { createContext, useContext } from 'react';

// Definicja typu dla funkcji tłumaczącej
type TranslateFunction = (key: string, options?: object) => string;

const LanguageContext = createContext<{ t: TranslateFunction }>({ t: (key) => key });

export const useTranslation = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const t: TranslateFunction = (key, options) => {
    // Prosta implementacja, która zwraca klucz
    return key;
  };

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
};
