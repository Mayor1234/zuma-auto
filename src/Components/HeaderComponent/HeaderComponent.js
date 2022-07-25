import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./HeaderComponent.style.scss";
import { useUserContext } from "../ContextComponent/UserContext";
import HamburgerComponent from "./HamburgerComponent";
import { useState } from "react";
import LogoComponent from "./LogoComponent";

const HeaderComponent = ({ user }) => {
  const [open, setOpen] = useState(false);
  const { logOutUser } = useUserContext();

  const handleClick = () => {
    setOpen((toggleBurger) => !toggleBurger);
  };

  return (
    <nav>
      <div className="nav-container row">
        <LogoComponent />
        <div className="nav">
          <ul className={`main-nav ${!open ? "close" : ""}`}>
            <li>
              <Link to="/" className="active-home a-bottom">
                Home
              </Link>
            </li>
            <li className="drop-nav">
              <Link to="#" className="a-bottom">
                categories
              </Link>
              <FaAngleDown className="icon" />
              <div className="drop-down">
                <ul className="drop-content">
                  <li className="drop-li">
                    <Link to="/products">new cars</Link>
                  </li>
                  <li className="drop-li">
                    <Link to="/products">tokunbo cars</Link>
                  </li>
                  <li className="drop-li">
                    <Link to="/products">used cars</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/about" className="a-bottom">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="a-bottom">
                Contact us
              </Link>
            </li>
            <li>
              {user ? (
                <div
                  className="signInsignOut a-bottom"
                  onClick={() => logOutUser()}
                >
                  Sign Out
                </div>
              ) : (
                <Link to="/signin">
                  <div className="signInsignOut a-bottom">Sign In</div>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="hamburger" onClick={handleClick}>
        <HamburgerComponent open={open} />
      </div>
    </nav>
  );
};

export default HeaderComponent;
