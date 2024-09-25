import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const [isButton, setIsButton] = useState(false);

  function handleButton() {
    setIsButton(!isButton);
  }

  return (
    <div className="font-bold z-50 flex bg-white shadow-lg sticky top-0 justify-between border-4">
      <Link to={"/"}>
        <h1 className="font-bold text-2xl p-4 text-green-500">FoodZone</h1>
      </Link>
      <ul className="hidden md:flex p-2">
        <Link to={"/"}>
          <li className="m-4">Home</li>
        </Link>
        <Link to={"/cart"}>
          <li className="m-4">🛒 [{cartItems.length}]</li>
        </Link>
        <Link to={"/about"}>
          <li className="m-4">About</li>
        </Link>
        <Link to={"/contact"}>
          <li className="m-4">Contact</li>
        </Link>
      </ul>
      <button className="md:hidden w-8" onClick={handleButton}>
        ≡
      </button>
      {isButton && (
        <ul className="fixed top-16 left-0 bg-white w-full flex flex-col items-center transition-all duration-1000 ease-in-out z-50">
          <Link to={"/"} onClick={handleButton}>
            <li className="p-2">Home</li>
          </Link>
          <Link to={"/cart"} onClick={handleButton}>
            <li className="p-2">
              🛒 [{cartItems.length}]
            </li>
          </Link>
          <Link to={"/about"} onClick={handleButton}>
            <li className="p-2">About</li>
          </Link>
          <Link to={"/contact"} onClick={handleButton}>
            <li className="p-2">Contact</li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Header;