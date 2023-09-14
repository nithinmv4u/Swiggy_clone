import React, { useEffect, useState } from "react"
import { filterRestaurant } from "./helper";

const useRestaurants = (searchTxt) => {

    const [allRestaurants, setRestaurants] = useState(null);
    console.log("userestaurants");

    useEffect(() => {
        console.log("userestaurants use effect");
        getRestaurants();
    },[]);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    console.log("userestaurants return");
    const setFilterRestaurants = (searchTxt) => {
        searchTxt ? setRestaurants(filterRestaurant(allRestaurants, searchTxt)):getRestaurants();
    }
    // if (searchTxt !== null){
    //     setRestaurants(filterRestaurant(allRestaurants, searchTxt));
    // }
    return [allRestaurants, setFilterRestaurants]
}

export default useRestaurants