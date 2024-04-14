import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";

const Header = () => {
  // State variable to control the visibility of the sidebar
  const [showSidebar, setShowSidebar] = useState(false);

  // Function to toggle the visibility of the sidebar
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 mx-auto flex items-center justify-between">
        <img
          src="https://eschool-saas.wrteam.me/storage/school-settings/655c4a39862746.922441361700547129.svg"
          alt="schoolLogo"
          className="w-28 h-20"
        />
        {/* Toggle button with onClick event */}
        <button
          onClick={toggleSidebar}
          className="ml-12 w-8 h-8 focus:outline-none"
        >
          <FiAlignJustify className="w-full h-full" />
        </button>
        <div className="flex-grow text-center">
          <p className="lg:text-md font-semibold text-gray-500 lg:block hidden">
            WELCOME TO DASHBOARD
          </p>
        </div>

        <div className="flex items-center">
          <p className="text-gray-500 font-bold lg:flex xl:flex sm:flex-row mr-4">
            Fakhrah
          </p>
          <img
            src="https://github.com/TailAdmin/free-react-tailwind-admin-dashboard/blob/main/src/images/user/user-02.png?raw=true"
            alt=""
            className="w-14"
          />
        </div>
      </div>
      {/* Sidebar with conditional rendering */}
      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } bg-white dark:bg-gray-800`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        {/* Sidebar content */}
        {/* Your existing sidebar content here */}
        {/* Close button */}
        <button
          onClick={toggleSidebar}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
