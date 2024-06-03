import React from "react";
import { RiLogoutCircleRFill } from "react-icons/ri";

const Header = ({ onLogout }) => {
  return (
    <div className="text-white body-font bg-customBlue">
      <div className="container px-5 mx-auto flex items-center justify-between">
        <div className="flex-grow text-center">
          <p className="lg:text-md font-semibold lg:block hidden">
            WELCOME TO DASHBOARD
          </p>
        </div>

        <div className="flex items-center">
          <p className="font-bold lg:flex xl:flex sm:flex-row mr-4">Admin</p>
          <img
            src="https://github.com/TailAdmin/free-react-tailwind-admin-dashboard/blob/main/src/images/user/user-02.png?raw=true"
            alt=""
            className="w-9 mr-4"
          />

          <div>
            <RiLogoutCircleRFill onClick={onLogout} className="text-white ml-3 cursor-pointer" />
            <div className="text-sm cursor-pointer">Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
