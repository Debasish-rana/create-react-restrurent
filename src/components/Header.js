import "./Header.css"
import { LOGO_URL } from "./util/url";

const Header = () => {
  return (
    <div className="Header-container">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="list-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li><button>Login</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
