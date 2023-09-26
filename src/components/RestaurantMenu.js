import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CLDNRY } from "../constants";
import Shimmer from "./ShimmerUI";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { id } = useParams();
  console.log("restaurant id: ",id);
  // Use proper names

  const restaurant = useRestaurantInfo( id );
  const itemCards = restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?? restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ?? restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards;
  console.log("itemcards:  ",itemCards);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }

  return restaurant ? (
    <div className="flex flex-col items-center p-4 m-4 bg-slate-100 rounded-md">
      <div className="flex w-10/12 m-4 items-center justify-center bg-gray-300 p-2 rounded-md">
        <div className="w-1/3 p-4">
          <h2 className="font-semibold text-4xl">{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
          <h1 className="text-xs text-gray-500 py-1">Restraunt id : {id}</h1>
          <h3 className="text-sm font-medium">{restaurant?.cards[0]?.card?.card?.info?.areaName}, {restaurant?.cards[0]?.card?.card?.info?.city}</h3>
          <h3 className="text-sm font-medium items-center flex py-1">Rating : {restaurant?.cards[0]?.card?.card?.info?.avgRating} <span style={{fontSize: '100%'}} className="material-symbols-outlined ">star</span></h3>
          <h3 className="text-xs py-1">Cost for two : ₹ {restaurant?.cards[0].card.card.info.costForTwo / 100}</h3>
        </div>
        <img className="w-1/3 rounded-r-lg" src={IMG_CLDNRY + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
      </div>
      <div className="flex flex-col m-4 p-4 w-10/12 items-center justify-center bg-gray-300 rounded-md">
        <h1 className="text-3xl">Menu</h1>
        <ul className="w-10/12">
          {Object.values(itemCards).map((item) => {
            const [type, color] = item?.card?.info?.isVeg ? ["vegetarian", "green-600"] : ["non-vegetarian", "red-600"];
            console.log("item : ",item);
            return item ? ( 
            <li className="flex p-2 m-2 rounded-md bg-slate-50" key={item?.card?.info?.id}>
                <div className="m-2 p-2 w-3/4">
                  <div className="flex justify-between">
                    <h2 className="text-xl">{item?.card?.info?.name}</h2>
                    <button className="bg-lime-600 hover:bg-emerald-600 px-2 rounded-md font-medium text-sm text-white" onClick={()=>{
                      handleAddItem(item);
                    }}>Add to Cart</button>
                  </div>                  
                    <p key={item?.card?.info?.id} className="text-xs py-2"><span className="font-semibold">Add-Ons : </span> 
                    {Object.values(item.card?.info?.addons??{}).map((addons) => (
                      Object.values(addons?.choices?? {}).map((choices) => (
                        <span>{choices.name}, </span>
                      ))             
                    ))}</p>
                    <div className="flex justify-between">
                      <p  className={`text-xs font-medium text-${color}`}>Category : {type}</p>
                      <p  className={`text-xs font-medium text-${color}`}>{item?.card?.info?.price? `Cost : ₹ ${item?.card?.info?.price/100}` : `Default Cost : ₹ ${item?.card?.info?.defaultPrice/100}`}</p>
                    </div>
                    
                </div>
                <div className="w-1/4 flex items-center">
                    <img className="p-1 rounded-lg" src={IMG_CLDNRY + item?.card?.info?.imageId} alt="" />
                </div>             
            </li> ) : (<p>"No Menu Found!"</p>)
            })}
        </ul>
      </div>
    </div>
  ) : (
    <Shimmer/>
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