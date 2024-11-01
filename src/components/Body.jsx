import { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
    const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    const [restaurantList, setRestaurantList] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [searchText, setSearchText] = useState("");
    const apiUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";



    useEffect(() => {
        fetchData();
    }, []);

    

    async function fetchData() {
        const data = await fetch(apiUrl);
        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setRestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredData(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    const RestaurantCard = ({ data }) => {
        return (
            <div className="bg-gray-50 border-2  border-gray-200 rounded-lg shadow-2xl w-[250px] h-[400px] m-4 transition-transform duration-300 hover:scale-95">
                <img
                    src={IMG_CDN_URL + data.info.cloudinaryImageId}
                    alt={data.info.name}
                    className="h-40 w-full object-cover rounded-t-lg"
                />
                <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-700 truncate">
                        {data.info.name}
                    </h3>
                    <h4 className="text-sm text-gray-500 truncate">
                        {data.info.cuisines.join(", ")}
                    </h4>
                    <p className="mt-2 text-sm font-medium text-gray-600">
                        Rating: <span className="text-green-500">{data.info.avgRating} ★</span>
                    </p>
                </div>
            </div>
        );
    };

    function filterData() {
        const res = restaurantList.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredData(res);
    }

    return (
        <>
            <div className="flex justify-center items-center mt-4">
                <input
                    type="text"
                    className="border-gray-300 border rounded-lg px-4 py-2 w-64 mr-2 focus:outline-none focus:ring focus:ring-indigo-100"
                    placeholder="Search restaurants"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button
                    className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-400 transition"
                    onClick={() => {
                        filterData();
                    }}
                >
                    Search
                </button>
            </div>
            {!restaurantList ? (
                <Shimmer />
            ) : filteredData && filteredData.length > 0 ? (
                <div className="flex flex-wrap justify-center">
                    {filteredData.map((item) => (
                        <Link key={item.info.id} to={"/restaurant/" + item.info.id}>
                            <RestaurantCard data={item} />
                        </Link>
                    ))}
                </div>
            ) : (
                <h1 className="text-gray-500 text-center mt-8">Restaurant Not Found</h1>
            )}
        </>
    );
};

export default Body;
