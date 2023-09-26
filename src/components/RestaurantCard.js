import { IMG_CLDNRY } from "../constants";

const RestaurantCard = ({name, cloudinaryImageId, cuisines, avgRating}) => {
    // console.log({restaurantList});
    return (
        <div className='flex flex-col justify-around p-4 m-2 w-64 bg-orange-200 shadow-lg rounded-md h-[90%]'>
            <img src={ IMG_CLDNRY + cloudinaryImageId} alt="image" />
            <h2 className="font-medium text-sm py-4">{name}</h2>
            <h5 className="text-xs">{cuisines?.join(" , ")}</h5>
            <h6 className="text-xs py-2 font-medium mt-auto">{"Rating: "+ avgRating}</h6>
        </div>
    )
}

export default RestaurantCard;