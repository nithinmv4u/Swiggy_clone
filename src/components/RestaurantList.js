import { IMG_CLDNRY } from "../constants";

const RestaurantList = ({name, cloudinaryImageId, cuisines, avgRating}) => {
    // console.log({restaurantList});
    return (
        <div className='p-4 m-2 w-64 bg-orange-200 shadow-lg rounded-md h-[90%]'>
            <img src={ IMG_CLDNRY + cloudinaryImageId} alt="image" />
            <h2>{name}</h2>
            <h5>{cuisines?.join(" , ")}</h5>
            <h6 className="py-4">{"Rating: "+ avgRating}</h6>
        </div>
    )
}

export default RestaurantList;