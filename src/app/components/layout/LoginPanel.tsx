// src/app/components/layout/LoginPanel.tsx
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { signIn } from "@/app/actions/user";
import { useEffect } from "react";

const initialState = {
  error: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" id="tt-login-submit" disabled={pending}>
      {pending ? "Logowanie..." : "ENTER"}
    </button>
  );
}

const LoginPanel = ({ animationClass }: { animationClass: string }) => {
  const [state, formAction] = useFormState(signIn, initialState);

  useEffect(() => {
    if (state?.success) {
      // Odśwież stronę, aby załadować nową sesję użytkownika
      window.location.reload();
    }
  }, [state]);

  return (
    <div className={`login-panel ${animationClass}`} aria-hidden={animationClass !== "active"}>
      <form action={formAction} className="login-form">
        <input
          type="text"
          id="tt-username"
          name="username"
          placeholder="Nazwa użytkownika"
          aria-label="Nazwa użytkownika"
          required
        />
        <div className="password-wrapper">
          <input
            type="password"
            id="tt-password"
            name="password"
            placeholder="Hasło"
            aria-label="Hasło"
            required
          />
          <button
            type="button"
            className="password-toggle-btn"
            data-action="toggle-password-visibility"
            aria-label="Pokaż/ukryj hasło"
          >
            {/* Tutaj powinny znaleźć się ikony oka */}
          </button>
        </div>
        <SubmitButton />
        {state?.error && <p className="error-message" style={{color: 'red', marginTop: '10px'}}>{state.error}</p>}
      </form>
    </div>
  );
};

export default LoginPanel;
