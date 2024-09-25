import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "./CartSlice";
import Store from "./Store";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const params = useParams();
    const ID = params.id;
    const [menuData, setMenuData] = useState([]);
    const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

    const dispatch = useDispatch();
    const cartItems = useSelector((Store) => Store.cart.items);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=" + ID + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setMenuData(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards);
    }

    function handleAddItem(data) {
        dispatch(addItem(data));  // Now it will allow multiple same items to be added
    }

    const MenuCard = ({ data }) => {
        return (
            <div className="w-[300px] flex flex-col border-4 shadow-2xl rounded-xl justify-between p-4 transition-transform duration-300 hover:scale-95">
                <img className="h-[200px] object-cover" src={IMG_CDN_URL + data.imageId} alt={data.name} />
                <div className="flex flex-col flex-grow justify-between">
                    <h4 className="font-semibold text-lg mb-2">{data.name}</h4>
                    <span className="text-green-500 font-medium">₹{data.price / 100}</span>
                </div>
                <button
                    className="h-10 bg-green-500 hover:bg-green-600 text-white rounded-md w-full mt-4"
                    onClick={() => handleAddItem(data)}
                >
                    Add To Cart
                </button>
            </div>
        );
    };

    return (
        <div className="flex flex-wrap gap-5 justify-center mt-5">
            {menuData.length > 0 ? (
                menuData.map((item) => {
                    return <MenuCard key={item.card.info.id} data={item.card.info} />;
                })
            ) : (
                <Shimmer />
            )}
        </div>
    );
};

export default RestaurantMenu;
