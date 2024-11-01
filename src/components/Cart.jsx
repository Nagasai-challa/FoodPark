import { useDispatch, useSelector } from "react-redux";
import store from "./Store";
import { removeItem } from "./cartSlice";
import { clearCart } from "./cartSlice";

const Cart=()=>{

    const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    let cartItems=useSelector(store=>store.cart.items);
    const dispatch=useDispatch();

    const handleRemoveItem=(data)=>{
        dispatch(removeItem(data))
    }

    const handleClearCart=()=>{
        dispatch(clearCart())
    }
    const RestaurantMenuCard = ({ data }) => {
        return (
            <>
                <div className="flex h-[300px] w-[400px] border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white m-4 transition-transform duration-300 hover:scale-95">
                    <div className="flex p-4 flex-col justify-between">
                        <h2 className="text-lg font-bold mb-2">{data.name}</h2>
                        <span className="text-green-600 font-bold text-lg">₹{data.price / 100}</span>
                        <p className="text-sm text-gray-600 line-clamp-1">{data.description}</p>
                        
                        {/* Add Button Here */}
                        <button 
                            className="mt-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-200"
                            onClick={() => handleRemoveItem(data)} // Corrected onClick
                        >
                            Remove From Cart
                        </button>
                    </div>
                    <img
                        src={IMG_CDN_URL + data.imageId}
                        alt={data.name}
                        className="w-1/3 h-full object-cover"
                    />
                </div>
            </>
        );
    };

    return (
        <>
            {cartItems.length > 0 && (
                <button
                    className="mt-2 ml-5 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
            )}
            <div className="flex flex-wrap justify-center p-4">
                {cartItems.map((item) => (
                    <RestaurantMenuCard  data={item} />
                ))}
            </div>
        </>
    );
}

export default Cart;