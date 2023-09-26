import { useDispatch, useSelector } from "react-redux";
import { IMG_CLDNRY } from "../constants";
import CartCard from "./CartCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    const dispatch = useDispatch((store) => store.cart.items)
    const handleClearCart = () => {
        dispatch((clearCart()));
    }

    return cartItems.length ? (
        <div className="bg-slate-100 m-4 p-4 flex flex-col items-center">
            <div className="flex w-10/12 m-4 items-center justify-center bg-orange-200 p-4 rounded-md  font-semibold">
                <h1 className="w-5/6 text-center text-4xl">Cart</h1>
                <button className="w-1/6 bg-red-400 p-2 rounded-md hover:bg-red-500" onClick={()=>{
                    handleClearCart();
                }}>Clear Cart</button>
            </div>            
            {
                cartItems.map((items) => {
                    return (<CartCard {...items?.card?.info??{}} />)
                })
            }
            {/* <h1>{cartItems[0]?.card?.info?.name??{}}</h1>
            <h1>{cartItems[0]?.card?.info?.description?? {}}</h1>
            <img src={IMG_CLDNRY +cartItems[0]?.card?.info?.imageId??{}} alt="" /> */}
        </div>
    ) : (
        <div className="bg-slate-100 m-4 p-4 flex flex-col items-center">
            <h1 className="flex w-10/12 m-4 items-center justify-center bg-orange-200 p-4 rounded-md text-4xl font-semibold">No Items Found</h1>
        </div>
        
    )
}

export default Cart;