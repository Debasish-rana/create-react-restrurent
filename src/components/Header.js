import { LOGO_URL } from "./util/url";
import { Link } from "react-router-dom";
import UserContext from "./util/UserContext";
import { useState,useContext } from "react";
import {useSelector} from "react-redux"


const Header = () => {
  const [logBtn, setLogBtn] = useState("Login")
  const data = useContext(UserContext)
  const cartItems = useSelector((store)=>store.cart.items)
  console.log(cartItems);
  
  //console.log(data.loggedInUser);
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
          <li><Link to={"/create-react-restrurent/cart"}>cart - <span className="font-bold">({cartItems.length} items)</span></Link></li>
          <li>
            <button onClick={()=>{logBtn === "Login"?setLogBtn("Logout"):setLogBtn("Login")}}>{logBtn}</button>
          </li>
          <li>{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
