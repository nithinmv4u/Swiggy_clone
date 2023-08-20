import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CLDNRY } from "../constants";
import Shimmer from "./ShimmerUI";

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { id } = useParams();
  console.log("restaurant id: "+id);
  // Use proper names
  const [restaurant, setRestauraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" + id
    );
    const json = await data.json();
    console.log(json.data);
    setRestauraunt(json.data);
  }

  return (
    <div className="menu">
      <div>
        <h1>Restraunt id: {id}</h1>
        <h2>{restaurant?.cards[2].card.card.gridElements.infoWithStyle.restaurants[2]}</h2>
        <img src={IMG_CLDNRY + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
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