"use client";

import { signUp } from "@/app/actions/user";
import Feed from "@/app/components/Feed";
import { useFormState } from "react-dom";

const initialState = {
  error: "",
  success: false,
};

export default function Home() {
  const [state, formAction] = useFormState(signUp, initialState);

  return (
    <main>
      <div className="absolute top-4 left-4 z-10 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-2">Sign Up</h2>
        <form action={formAction}>
          <div className="mb-2">
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              className="border p-1"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block" htmlFor="username">
              Username
            </label>
            <input
              className="border p-1"
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              className="border p-1"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            type="submit"
          >
            Sign Up
          </button>
          {state.error && <p className="text-red-500 mt-2">{state.error}</p>}
          {state.success && (
            <p className="text-green-500 mt-2">
              Sign up successful! Please log in.
            </p>
          )}
        </form>
      </div>
      <Feed />
    </main>
  );
}
