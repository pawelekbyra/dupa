'use client';

import React, { useState, useEffect } from 'react';
import { slidesData } from '@/lib/slidesData';

interface AppContextType {
  isPreloaderVisible: boolean;
  slides: any[];
  isLoginPanelVisible: boolean;
  toggleLoginPanel: () => void;
  isLoggedIn: boolean;
  login: () => void;
  isNotificationsModalVisible: boolean;
  toggleNotificationsModal: () => void;
  isCommentsModalVisible: boolean;
  toggleCommentsModal: () => void;
}

export const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);
  const [slides, setSlides] = useState<any[]>([]);
  const [isLoginPanelVisible, setIsLoginPanelVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNotificationsModalVisible, setIsNotificationsModalVisible] = useState(false);
  const [isCommentsModalVisible, setIsCommentsModalVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloaderVisible(false);
      setSlides(slidesData);
    }, 2000); // Hide preloader after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const toggleLoginPanel = () => {
    setIsLoginPanelVisible((prev) => !prev);
  };

  const login = () => {
    setIsLoggedIn(true);
    setIsLoginPanelVisible(false);
    console.log('User logged in');
  };

  const toggleNotificationsModal = () => {
    setIsNotificationsModalVisible((prev) => !prev);
  };

  const toggleCommentsModal = () => {
    setIsCommentsModalVisible((prev) => !prev);
  };

  return (
    <AppContext.Provider value={{
      isPreloaderVisible,
      slides,
      isLoginPanelVisible,
      toggleLoginPanel,
      isLoggedIn,
      login,
      isNotificationsModalVisible,
      toggleNotificationsModal,
      isCommentsModalVisible,
      toggleCommentsModal
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
