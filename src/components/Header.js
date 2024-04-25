
import { LOGO_URL } from "./util/url";

const Header = () => {
  return ( 
    <div className="Header-container flex justify-between bg-blue-200 shadow-xl mb-4 list-none">
      <div className="logo w-20">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="list-item">
        <ul className="flex m-6 gap-8 ">
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
