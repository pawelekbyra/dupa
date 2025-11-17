"use client";

import { Modal } from "@/components/ui/Modal";
import { useState } from "react";

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      title="Login"
      description="Login to your account"
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded"
        />
        <button className="p-2 bg-black text-white rounded">Login</button>
      </div>
    </Modal>
  );
};

export default LoginModal;
