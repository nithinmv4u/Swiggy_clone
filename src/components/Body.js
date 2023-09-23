import RestaurantList from "./RestaurantList";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom"
import useRestaurants from "../utils/useRestaurants";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [allRestaurants, setFilterRestaurants] = useRestaurants();
    console.log("body",allRestaurants);
    const [searchTxt, setSearchTxt] = useState('');
    console.log("render");

    const [isOnline, color] = useOnline() ? [true, 'green'] : [false, 'red']; // for any other use
    console.log(isOnline);

    // if(!isOnline)return <h2 style={{color:color}}>You are offline, please check internet connection..!!!</h2>

    const {user, setUser} = useContext(UserContext);

    return allRestaurants?.length ? (
        <>
            <div className='bg-orange-700 p-4 border-b-2 flex justify-center items-center' key={0}>
                <input 
                className='p-2 mx-4 text-orange-600 rounded-lg' 
                type="text" 
                placeholder='Search' 
                value={searchTxt}
                onChange={(e) => {
                    console.log("onchange "+searchTxt)
                    setSearchTxt(e.target.value);
                }}
                />
                <a href="#" className="mx-4 hover:text-yellow-300" onClick={(e) =>{
                    e.preventDefault();
                    setFilterRestaurants(searchTxt);
                }} ><span className="material-symbols-outlined">search</span></a> 
                <button className="mx-4 hover:bg-yellow-700 rounded-md bg-yellow-600 p-2 shadow-lg" onClick={() => {
                    setSearchTxt('');
                    setFilterRestaurants(null);
                }}>Clear Search</button>
                <input type="text" value={user.name} onChange={(e)=>setUser({
                    name: e.target.value,
                    email: "customer@gmail.com",
                })} />
            </div>
            <div className='container mx-auto p-4 flex flex-wrap justify-around m-2' key={1}>
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