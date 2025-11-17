import React from "react";

const BottomBar = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white">
      <div className="flex flex-col">
        <h2 className="text-lg font-bold">@author</h2>
        <p>Post title</p>
      </div>
    </footer>
  );
};

export default BottomBar;
