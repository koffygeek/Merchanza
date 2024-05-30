import React from "react";
import { Link } from "react-router-dom";
// import images / svgs
import logo from "../assets/logo.png";
import user from "../assets/user.svg";

const Header = () => {
  return (
    <header>
      <div>
        {/* {logo} */}
        <Link to={"/"}>
          <img src={logo} alt="logoImg" height={31} width={31} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
