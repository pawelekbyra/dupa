import React from "react";

const LoginPanel = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className={`login-panel ${isActive ? "active" : ""}`}>
      <form className="login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPanel;
