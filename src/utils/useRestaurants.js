import React, { useEffect, useState } from "react"
import { filterRestaurant } from "./helper";
import { RESTAURANT_LIST } from "../constants";

const useRestaurants = () => {

    const [allRestaurants, setRestaurants] = useState(null);
    console.log("userestaurants",allRestaurants);

    useEffect(() => {
        console.log("userestaurants use effect");
        getRestaurants();
    },[]);

    async function getRestaurants() {
        const data = await fetch(RESTAURANT_LIST);
        const json = await data.json();
        setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    console.log("userestaurants return");
    const setFilterRestaurants = (searchTxt) => {
        searchTxt ? setRestaurants(filterRestaurant(allRestaurants, searchTxt)):getRestaurants();
    }
    return [allRestaurants, setFilterRestaurants]
}

export default useRestaurants