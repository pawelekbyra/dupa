"use client";
import React, { createContext, useContext } from 'react';

// Typ dla wartości kontekstu, aby był bardziej przewidywalny
type UserContextValue = {
  user: any | null; // Używam `any` jako szybkiej poprawki
};

const UserContext = createContext<UserContextValue>({ user: null });

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const value = { user: null }; // Zwracamy obiekt, a nie null
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
