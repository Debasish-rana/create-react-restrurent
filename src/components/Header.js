import { LOGO_URL } from "./util/url";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header-container flex justify-between bg-blue-200 shadow-xl mb-4 list-none sticky top-0">
      <div className="logo w-20">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="list-item">
        <ul className="flex m-6 gap-8 ">
          <li><Link to="/create-react-restrurent/home">Home</Link></li>
          <li><Link to="/create-react-restrurent/about">About Us</Link></li>
          <li><Link to="/create-react-restrurent/cotact">Contact Us</Link></li>
          <li>Cart</li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
