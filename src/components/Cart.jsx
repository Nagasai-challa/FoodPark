import { useDispatch, useSelector } from "react-redux";
import Store from "./Store";
import { removeItem } from "./CartSlice";

const Cart = () => {
    const cartItems = useSelector((Store) => Store.cart.items);
    const totalPrice=useSelector((Store)=>Store.cart.totalPrice)
    const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

    const dispath=useDispatch();
    function handleButton(data){
        dispath(removeItem(data))
    }

    const MenuCard = ({ data }) => {
        return (
            <div className="flex h-[300px] w-[400px] border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white m-4 transition-transform duration-300 hover:scale-95">
                <div className="flex p-4 flex-col justify-between">
                    <h2 className="text-lg font-bold mb-2">{data.name}</h2>
                    <span className="text-green-600 font-bold text-lg">₹{data.price / 100}</span>
                    <p className="text-sm text-gray-600 line-clamp-1">{data.description}</p>
                    
                    <button 
                        className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-200"
                        onClick={() => handleButton(data)} // Corrected onClick
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
        );
    };

    return (
        <>
            <div className="flex flex-wrap gap-1 justify-center mt-8">
                {
                    (cartItems.length===0)?(<h1 className="font-bold text-2xl m-10">CART IS EMPTY</h1>):(
                        cartItems.map((item, index) => (
                            <MenuCard key={index} data={item} />
                        ))
                    )
                }
                
            </div>
                <div className="w-full max-w-[400px] mx-auto mt-10 p-6 border-2 border-gray-200 rounded-lg shadow-xl bg-white text-center">
                <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
                <p className="text-lg font-semibold text-gray-700 mb-4">
                    Total Price: ₹{totalPrice.toFixed(2)}
                </p>
                <button
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg transition-colors"
                    
                >
                    Place Order
                </button>
            </div>
        </>
    );
};

export default Cart;
