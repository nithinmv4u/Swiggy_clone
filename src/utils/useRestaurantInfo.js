import { useState,useEffect } from "react";
import { RESTAURANT_INFO } from "../constants";

const useRestaurantInfo = (resId) => {

    const [restaurant, setRestauraunt] = useState(null);

    useEffect(() => {
      getRestaurantInfo();
    }, []);
  
    async function getRestaurantInfo() {
      const data = await fetch(RESTAURANT_INFO + resId);
      const json = await data.json();
      console.log(json.data);
      setRestauraunt(json.data);
    }

    return restaurant;
}

export default useRestaurantInfo;