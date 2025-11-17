import React from "react";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import Sidebar from "./Sidebar";
import LoginModal from "./LoginModal";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <TopBar />
      <main className="h-full w-full">{children}</main>
      <Sidebar />
      <BottomBar />
      <LoginModal />
    </div>
  );
};

export default AppLayout;
