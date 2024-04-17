import React from "react";

const Header = () => {
  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 mx-auto flex items-center justify-between">
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
    </div>
  );
};

export default Header;
