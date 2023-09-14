import { useState,useEffect } from "react";

const useRestaurant = () => {

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

    return restaurant;
}

export default useRestaurant;