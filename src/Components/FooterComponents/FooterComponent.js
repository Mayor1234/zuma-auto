import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagramSquare,
  } from "react-icons/fa";
  // import { Link } from "react-router-dom";
  import "./FooterComponent.style.scss";
  
  const FooterComponent = () => {
    return (
      <footer>
        <div className="footer-info row">
          <div className="footer-company">
            <h3>Zuma Xpress Auto</h3>
            {/* <p>We provide smart and easy way to buy or sell your car online</p> */}
            <div className="social-icons-container">
              <FaFacebookSquare className="social-icon" />
  
              <a href="https://www.twitter.com/realer231">
                <FaTwitterSquare className="social-icon" />
              </a>
  
              <a target="_blank" href="https://www.instagram.com/realer231">
                <FaInstagramSquare className="social-icon" />
              </a>
            </div>
          </div>
          <div className="useful-ink">
            <h3>Useful links</h3>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Our services</a>
              </li>
              <li>
                <a href="#">Our team</a>
              </li>
            </ul>
          </div>
          <div className="more">
            <h3>More</h3>
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="address">
            <h3>Address</h3>
            <ul>
              <li>Rd #4d SAO City, Ondo, Ondo State, Nigeria.</li>
              <li>Phone: +234 903-4022-601</li>
              <li>E-mail: info@example.com</li>
            </ul>
          </div>
        </div>
        <div className="last-footer row">
          <p> Copyright &copy; 2022 ZumaXpress. All Right Reserved. </p>
        </div>
      </footer>
    );
  };
  
  export default FooterComponent;
  