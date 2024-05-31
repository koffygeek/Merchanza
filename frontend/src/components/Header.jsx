import React, { useState } from "react";
import { Link } from "react-router-dom";
// import images / svgs
import logo from "../assets/logo.png";
import user from "../assets/user.svg";
import Navbar from "./Navbar";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <header className="max-padd-container w-full z-50">
      <div className="flexBetween py-3">
        {/* {logo} */}
        <Link to={"/"} className="flex items-center gap-x-2">
          <img src={logo} alt="logoImg" height={31} width={31} />
          <span className="bold-24 hidden xs:flex">Merchanza</span>
        </Link>
        {/* {Navbar and buttons} */}
        <div className="flexCenter gap-x-4">
          {/* {Desktop Navbar } */}
          <div>
            <Navbar
              containerStyles={
                "hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 rounded-full px-2 py-1"
              }
            />
            {/* {Mobile Navbar} */}
            <div>
              <Navbar
                containerStyles={`${
                  menuOpened
                    ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50"
                    : "flex items-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50 -right-[100%]"
                }`}
              />
            </div>
          </div>
          {/* {buttons} */}
          <div>buttons</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
