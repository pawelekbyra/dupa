"use client";
import React, { createContext, useContext } from 'react';

const ToastContext = createContext({ addToast: (message: string, type: string) => {} });

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const addToast = (message: string, type: string) => {
    console.log(`Toast: ${message} (${type})`);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
    </ToastContext.Provider>
  );
};
