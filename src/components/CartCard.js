import { useDispatch } from "react-redux";
import { IMG_CLDNRY } from "../constants";
import { removeItem } from "../utils/cartSlice";

const CartCard = ({name, imageId, description, price,id}) => {
    // console.log({restaurantList});
    const dispatch = useDispatch((store) => store.cart.items);
    const handleRemoveItem = (id) => {
        dispatch(removeItem(id))
    }
    return (
        <div className='flex justify-between p-4 m-2 w-8/12 bg-orange-200 shadow-lg rounded-md'>
            <div className="m-2 p-2 w-3/4">
                <h2 className="font-medium text-sm py-4">{name}</h2>
                <h5 className="text-xs">{description}</h5>
                <h6 className="text-xs py-2 font-medium mt-auto">Cost : ₹ {price/100}</h6>
                <button className="bg-amber-600 hover:bg-rose-600 p-1 rounded-md font-medium text-sm text-white" onClick={() => {
                    handleRemoveItem(id);
                }}>Remove Item</button>
            </div>
            <div className="w-1/4 flex items-center">
                <img src={ IMG_CLDNRY + imageId} alt="image" />
            </div>            
        </div>
    )
}

export default CartCard;