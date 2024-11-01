import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem ,removeItem} from "./cartSlice";
import store from "./Store";

const RestaurantMenu = () => {
    const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    const [menuData, setMenuData] = useState(null);
    const params = useParams();
    
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    async function fetchData() {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${params.id}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        setMenuData(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards);
    }

    const dispatch = useDispatch();
    const cartItems=useSelector(store=>store.cart.items);
    const handleButton = (data) => {
        if(!cartItems.includes(data)){
            dispatch(addItem(data));
        }
    };

    const RestaurantMenuCard = ({ data }) => {
        return (
            <div className="flex h-[300px] w-[400px] border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white m-4 transition-transform duration-300 hover:scale-95">
                <div className="flex p-4 flex-col justify-between">
                    <h2 className="text-lg font-bold mb-2">{data.name}</h2>
                    <span className="text-green-600 font-bold text-lg">₹{data.price / 100}</span>
                    <p className="text-sm text-gray-600 line-clamp-1">{data.description}</p>
                    
                    {/* Add Button Here */}
                    <button 
                        className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-200"
                        onClick={() => handleButton(data)} // Corrected onClick
                    >
                        Add to Cart
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
        <div className="flex flex-wrap justify-center p-4">
            {menuData ? (
                menuData.map((item) => (
                    <RestaurantMenuCard key={item.card.info.id} data={item.card.info} />
                ))
            ) : (
                <h1 className="text-gray-500 text-center mt-8">Please Wait, Data is Loading!!</h1>
            )}
        </div>
    );
};

export default RestaurantMenu;
