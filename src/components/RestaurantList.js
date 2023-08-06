import { IMG_CLDNRY } from "../constants";

const RestaurantList = ({name, cloudinaryImageId, cuisines, avgRating}) => {
    // console.log({restaurantList});
    return (
        <div className='card'>
            <img src={ IMG_CLDNRY + cloudinaryImageId} alt="image" />
            <h2>{name}</h2>
            <h5>{cuisines?.join(" , ")}</h5>
            <h6>{"Rating: "+ avgRating}</h6>
        </div>
    )
}

export default RestaurantList;