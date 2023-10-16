import { useState } from "react";
import Usersvg from "./components/Usersvg";
import Hamburgersvg from "./components/Hamburgersvg";
import "./Header.css";
const Header = () => {
  const [show, setShow] = useState(false);
  function hamburger() {
    console.log("hello");
    setShow((prev) => !prev);
  }
  return (
    <div className="header">
      <div className="logo">
        <img src="./public/assets/images/logo.png" alt="" />
      </div>
      <div className="nav" style={{ top: show ? "100px" : "-500px" }}>
        <ul>
          <li>
            <a href="#0">Marketplace</a>
          </li>
          <li>
            <a href="#0">Rankings</a>
          </li>
          <li>
            <a href="#0">Connect a wallet</a>
          </li>
        </ul>
        <button>
          <Usersvg /> Sign Up
        </button>
      </div>
      <div onClick={hamburger} className="hamburger">
        <Hamburgersvg />
      </div>
    </div>
  );
};

export default Header;
