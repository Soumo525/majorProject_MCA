import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../Auth/AuthProvider";
import { Link } from "react-router-dom";

function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, userLogOut } = useAuth();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickLogin = () => {
    navigate("/loginFrom");
  };

  const handleSignOut = () => {
    userLogOut();
    navigate("/");
  };

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <svg
              width="30"
              height="30"
              viewBox="0 0 50 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG path */}
            </svg>
          </span>
          <span className="font-bold">ABC</span>
        </div>
        <div className="hidden lg:flex grow items-start">
          <ul className="ml-12 inline-flex space-x-8">
            {/* Navigation items */}
            <li>
              <a
                href="/"
                className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Home
              </a>
            </li>
            <li>
              <Link
                to={"/qr"}
                className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Hall Ticket
              </Link>
            </li>
            <li className="relative">
              <button
                id="dropdownNavbarLink"
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Profile
                <svg
                  className={`w-2.5 h-2.5 ms-2.5 ${
                    isDropdownOpen ? "transform rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  ></path>
                </svg>
              </button>

              {isDropdownOpen && (
                <div
                  id="dropdownNavbar"
                  className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 right-0"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <Link to={"/profile"}>
                      <li>
                        <a
                          href="/profile"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          View Profile
                        </a>
                      </li>
                    </Link>

                    <Link to={"/uploadDoc"}>
                      <li>
                        <div className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Upload Document
                        </div>
                      </li>
                    </Link>
                  </ul>
                  {/* <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Sign out
                    </a>
                  </div> */}
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="hidden space-x-2 lg:block">
          {!user && (
            <>
              <button
                type="button"
                onClick={handleClickLogin}
                className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Log In
              </button>
            </>
          )}
          {user && (
            <button
              type="button"
              onClick={handleSignOut}
              className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Sign Out
            </button>
          )}
        </div>
        <div className="lg:hidden">{/* Mobile menu button */}</div>
      </div>
    </div>
  );
}

export default Nav;
