import RestaurantList from "./RestaurantList";
import { restaurantList } from "../constants";
import { useState } from "react";

function filterRestaurant(restaurants, searchTxt){
    console.log(restaurants);
    console.log(searchTxt);
    const data = restaurants.filter((restaurant) =>
        restaurant.data.name.includes(searchTxt)
    );
    console.log(data);
    return data
}

const Body = () => { 

    const [searchTxt, setSearchTxt] = useState("");
    const [restaurants, setRestaurant] = useState(restaurantList);
    // console.log(restaurants);

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
                    // setRestaurant(restaurantList)
                }}
                />
                <a href="#" onClick={() =>{
                    const data = filterRestaurant(restaurantList, searchTxt);
                    console.log(data);
                    setRestaurant(data);
                }} ><span className="material-symbols-outlined">search</span> </a> 
            </div>
            <div className='restaurant-list'>
                {
                    restaurants.map((restaurant) => {
                        return (<RestaurantList {...restaurant.data} key={restaurant.data.id}/>)
                    })
                }
            </div>
        </>


    )
}

export default Body;