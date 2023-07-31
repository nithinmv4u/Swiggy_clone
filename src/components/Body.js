import RestaurantList from "./RestaurantList";
import { restaurantList } from "../constants"

const Body = () => {
    return (
        <div className='restaurant-list'>
            {
                restaurantList.map((restaurant) => {
                    return (<RestaurantList {...restaurant.data} key={restaurant.data.id}/>)
                })
            }
        </div>

    )
}

export default Body;