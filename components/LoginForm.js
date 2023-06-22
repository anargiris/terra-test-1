"use client";
import { useRef } from "react";

const LoginForm = ({ setIsLoggedIn }) => {
  const usernameRef = useRef();
  const passRef = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!usernameRef.current.value || !passRef.current.value) {
      alert("Please provide credentials.");
      return;
    }
    //API call

    localStorage.setItem(
      "user",
      JSON.stringify({
        token: "iweu2198u8921e921ue8e8921",
        id: 12,
      })
    );
    setIsLoggedIn(true);
  };

  return (
    <form className="flex flex-col gap-4 px-4 py-10 border border-800">
      <input
        ref={usernameRef}
        className="outline-none border-b border-emerald-400"
        type="text"
        placeholder="Username"
      />
      <input
        ref={passRef}
        className="outline-none border-b border-emerald-400"
        type="password"
        name=""
        id=""
        placeholder="Password"
      />
      <button
        onClick={handleLogin}
        className="px-6 py-2 bg-emerald-400 text-emerald-800 font-bold mt-10"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
