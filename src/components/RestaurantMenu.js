import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CLDNRY } from "../constants";
import Shimmer from "./ShimmerUI";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { resId } = useParams();
  console.log("restaurant id: "+resId);
  // Use proper names

  const restaurant = useRestaurantInfo( resId )

  return restaurant ? (
    <div className="menu">
      <div>
        <h1>Restraunt id: {resId}</h1>
        <h2>{restaurant?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[2]}</h2>
        <img src={IMG_CLDNRY + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items)?.map((item) => (
            <li key={item?.id}>{item?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <h2 className="font-bold text-3xl text-center text-red-600 py-10">API Call didn't return a result, please check your API...!!!</h2>
  );
};

export default RestaurantMenu;


// import { useParams } from "react-router-dom"
// import { useEffect, useState } from "react"

// const RestaurantMenu = () => {

//     const params = useParams();
//     const [restaurant, setRestaurant] = useState({})
//     console.log(params)
//     useEffect(()=>{
//         getRestaurants()
//     },[])

//     async function getRestaurants(){
//         const data = await fetch(
//             "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" + params?.id
//         );
//         const json = await data.json();
//         console.log(json);
//         // setRestaurant(json)  
//     }

//     return (
//         <h2>Restaurant id: {params.id}</h2>
//         // <h3></h3>
//     )
// }

// export default RestaurantMenu;