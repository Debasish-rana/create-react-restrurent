import "./header.css"

const Header = () => {
  return (
    <div className="Header-container">
      <div className="logo">
        <img src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-restaurant-logo-design-vector-template-png-image_5441058.jpg" alt="logo" />
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
