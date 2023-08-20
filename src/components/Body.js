import RestaurantList from "./RestaurantList";
import { restaurantList } from "../constants";
import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom"

function filterRestaurant(restaurants, searchTxt){
    console.log(restaurants);
    console.log("search text: ", searchTxt);
    const data = restaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
    );
    console.log(data);
    return data
}

const Body = () => { 

    const [searchTxt, setSearchTxt] = useState("");
    const [allRestaurants, setAllRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    useEffect(()=> {
        console.log("useeffect");
        getRestaurants();
    },[])

    async function getRestaurants() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log("get restaurants", json)
        setAllRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }

    console.log("render");

    return allRestaurants?.length ? (
        <>
            <div className='search'>
                <input 
                className='search_img' 
                type="text" 
                placeholder='Search' 
                value={searchTxt}
                onChange={(e) => {
                    console.log("onchange")
                    setSearchTxt(e.target.value)
                }}
                />
                <a href="#" onClick={(e) =>{
                    const data = filterRestaurant(allRestaurants, searchTxt);
                    // console.log(e.pageX);
                    setFilteredRestaurants(data);
                }} ><span className="material-symbols-outlined">search</span></a> 
                <button style={{marginLeft:'5%'}} onClick={() => {
                    setSearchTxt("")
                    setFilteredRestaurants(allRestaurants)
                }}>Clear Search</button>
            </div>
            <div className='restaurant-list'>
                {
                    filteredRestaurants.length === 0 ? (
                        <h2>No Restaurants for your search</h2>
                    ):(
                    filteredRestaurants.map((restaurant) => {
                        return (<Link to={"/restaurant/"+restaurant?.info?.id}><RestaurantList {...restaurant?.info} key={restaurant?.info?.id}/></Link>)
                    }))
                }
            </div>
        </>


    ) : <Shimmer/>
}

export default Body;