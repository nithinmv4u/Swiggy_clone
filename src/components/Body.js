import RestaurantList from "./RestaurantList";
import { restaurantList } from "../constants";
import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom"
import { filterRestaurant } from "../utils/helper";
import useRestaurants from "../utils/useRestaurants";

const Body = () => {
    const [allRestaurants, setFilterRestaurants] = useRestaurants();
    console.log("body",allRestaurants);
    const [searchTxt, setSearchTxt] = useState('');
    console.log("render");

    return allRestaurants?.length ? (
        <>
            <div className='search' key={0}>
                <input 
                className='search_img' 
                type="text" 
                placeholder='Search' 
                value={searchTxt}
                onChange={(e) => {
                    console.log("onchange "+searchTxt)
                    setSearchTxt(e.target.value);
                }}
                />
                <a href="#" onClick={(e) =>{
                    e.preventDefault();
                    setFilterRestaurants(searchTxt);
                }} ><span className="material-symbols-outlined">search</span></a> 
                <button style={{marginLeft:'5%'}} onClick={() => {
                    setSearchTxt('');
                    setFilterRestaurants(null);
                }}>Clear Search</button>
            </div>
            <div className='restaurant-list' key={1}>
                {
                    allRestaurants[0].info === 'NO_RESTAURANT' ? (
                        <h2>No Restaurants for your search</h2>
                    ):(
                    allRestaurants.map((restaurant) => {
                        return (<Link to={"/restaurant/"+restaurant?.info?.id}><RestaurantList {...restaurant?.info} key={restaurant?.info?.id}/></Link>)
                    }))
                }
            </div>
        </>


    ) : <Shimmer/>
}

export default Body;