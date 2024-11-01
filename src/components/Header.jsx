import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "./Store";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="z-10 flex justify-between items-center border-4 shadow-xl sticky top-0 bg-white">
      <h1 className="p-5 text-2xl font-bold">FoodPark</h1>

      {/* Hamburger Icon */}
      <button
        className="block md:hidden p-5"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Menu Links */}
      <ul
        className={`flex-col md:flex md:flex-row absolute md:static bg-white top-16 left-0 w-full md:w-auto transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        <li className="p-5">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="p-5">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="p-5">
          <Link to="/cart">
            🛒[{cartItems.length}]
          </Link>
        </li>
        <li className="p-5">
          <Link to={"/other"}>Other</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
