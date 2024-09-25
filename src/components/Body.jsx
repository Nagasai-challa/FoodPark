import { useEffect, useState } from "react";
import { Link, useFetcher } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantNotFound from "./RestaurantNotFound";
const Body=()=>{
    const API_KEY="https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    let [restaurantData,setRestaurantData]=useState(null)
    const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    const [searchText,setSearchText]=useState("")
    const [allRestaurantList,setAllRestaurantList]=useState([])
    useEffect(()=>{
        fetchData();
    },[])

    useEffect(()=>{
        window.scrollTo(0,0)
    })

    async function fetchData()
    {
        const data=await fetch(API_KEY);
        const json=await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setRestaurantData(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setAllRestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }

    function filterData(){
        restaurantData=allRestaurantList;
        const res=restaurantData.filter((item)=>item.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setRestaurantData(res)
        setSearchText("")
    }

    const RestaurantCard=({data})=>{
        const {name,cloudinaryImageId,cuisines,avgRating}=data
        return(
           <div className="rounded-xl shadow-xl rounded-md border-4 w-[280px] h-[400px] transition-transform duration-200 hover:scale-95">
                <img className="rounded-lg h-[200px] w-full object-cover"
                    src={IMG_CDN_URL+cloudinaryImageId}
                />
                <h4 className="font-bold p-2">{name}</h4>
                <span className="text-green-500 p-2">Rating : {avgRating}</span>
                <p className=" p-2 text-sm text-gray-600">{cuisines.join(", ")}</p>
           </div>
        )
    }

    return(
        <div>
            <div className=" flex justify-center items-center mt-4">
                <input
                    type="text"
                    className="border-gray-300 border rounded-lg px-4 py-2 w-64 mr-2 focus:outline-none focus:ring focus:ring-indigo-100"
                    placeholder="Search restaurants"
                    value={searchText}
                    onChange={(e)=>{
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
            {
                (!restaurantData)?(<Shimmer/>):(
                    (restaurantData.length===0)?(<RestaurantNotFound/>):(
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            {
                                
                            restaurantData.map((item)=>{
                                    return <Link to={"/restaurant/"+item.info.id}><RestaurantCard data={item.info} /></Link>
                            })
                            }
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Body;