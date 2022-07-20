import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./HeaderComponent.style.scss";
import { useUserContext } from "../ContextComponent/UserContext";

const HeaderComponent = ({ user }) => {

  const {logOutUser} = useUserContext();

  return (
    <nav>
      <div className="nav-container row">
        <div className="logo">
          <h1>
            <Link to="/">
              <span>Z</span>uma <span>E</span>xpress
            </Link>
          </h1>
        </div>
        <div className="nav">
          <ul className="main-nav">
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
