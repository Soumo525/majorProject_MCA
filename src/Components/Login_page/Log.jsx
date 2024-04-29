import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../Auth/AuthProvider";
import { Link } from "react-router-dom";

function Log() {
  const { user, userLog } = useAuth();
  const navigate = useNavigate();
  const userInfo = useRef(null);
  useEffect(() => {
    if (user) {
      navigate("/");
    } else if (!user) {
      navigate("/loginFrom");
    }
  }, [user]);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("user Log");
    const email = userInfo.current.email.value;
    const password = userInfo.current.password.value;
    const userInfoDetails = {
      email,
      password,
    };
    userLog(userInfoDetails);
  };

  return (
    <>
      <div class="bg-gray-100 flex h-screen items-center justify-center p-4">
        <div class="w-full max-w-md">
          <div class="bg-white shadow-md rounded-md p-8">
            <img
              class="mx-auto h-12 w-auto"
              src="https://www.svgrepo.com/show/499664/user-happy.svg"
              alt=""
            />

            <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>

            <form class="space-y-6 mt-4" ref={userInfo} onSubmit={handleLogin}>
              <div>
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div class="mt-1">
                  <input
                    name="email"
                    type="email-address"
                    autocomplete="email-address"
                    required
                    class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div class="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="password"
                    required
                    class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                >
                  Sign In
                </button>
                <Link to={"/login"}>
                  <label
                    for="new acc"
                    class="block text-sm font-medium text-blue-700"
                  >
                    Create Account
                  </label>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Log;
