"use client";

import { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import HomeScreenDashboard from "./HomeScreenDashboard";

const HomeHandler = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  if (isLoading) return <>LOADING</>;

  return (
    <>
      {isLoggedIn ? (
        <div className="">
          <HomeScreenDashboard />
          {/* <button
            className="bg-emerald-800 px-6 py-2 text-emerald-100 "
            onClick={handleLogout}
          >
            Log out
          </button> */}
        </div>
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
};

export default HomeHandler;
