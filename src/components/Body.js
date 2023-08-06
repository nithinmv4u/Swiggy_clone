import RestaurantList from "./RestaurantList";
import { restaurantList } from "../constants";
import { useEffect, useState } from "react";

function filterRestaurant(restaurants, searchTxt){
    console.log(restaurants);
    console.log(searchTxt);
    const data = restaurants.filter((restaurant) =>
        restaurant?.info?.name.includes(searchTxt)
    );
    console.log(data);
    return data
}

const Body = () => { 

    const [searchTxt, setSearchTxt] = useState("");
    const [restaurants, setRestaurant] = useState([]);

    useEffect(()=> {
        console.log("hello");
        getRestaurants();
    },[])

    async function getRestaurants() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json)
        setRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }

    console.log("render");

    return (
        <>
            <div className='search'>
                <input 
                className='search_img' 
                type="text" 
                placeholder='Search' 
                value={searchTxt}
                onChange={(e) => {
                    setSearchTxt(e.target.value)
                }}
                />
                <a href="#" onClick={(e) =>{
                    getRestaurants();
                    const data = filterRestaurant(restaurants, searchTxt);
                    // console.log(e.pageX);
                    setRestaurant(data);
                }} ><span className="material-symbols-outlined">search</span> </a> 
            </div>
            <div className='restaurant-list'>
                {
                    restaurants.map((restaurant) => {
                        return (<RestaurantList {...restaurant?.info} key={restaurant?.info?.id}/>)
                        console.log(restaurant?.info?.id);
                    })
                }
            </div>
        </>


    )
}

export default Body;