import Title from "./Title";
import SearchBar from "./SearchBar";
import UserIcon from "./UserIcon";
import Authentication from "./Authentication";
import { useState, useContext } from "react";
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {

    const [isLogged, setLogged] = useState(true)

    // const [user, setUser] = useState({
    //     name: "MyName",
    //     email: "some@gmail.com",
    // })

    const {user, status} = useContext(UserContext);
    console.log(user);
    const cartNos = useSelector((store) => store.cart.items.length)
    console.log(cartNos);

    return (
        <div className='flex justify-between items-center p-2 bg-orange-600 drop-shadow-xl'>
            <Title/>
            {/* <SearchBar/> */}
            <div className="flex justify-around items-center w-2/6 font-bold text-white ">
                <Link to="/about"><h4 className="hover:text-yellow-200" key={0}>About</h4></Link>
                <Link to="/"><h4 className="hover:text-yellow-200" key={1}>Home</h4></Link>
                <Link to="/contact"><h4 className="hover:text-yellow-200" key={2}>Contact</h4></Link>                
                <Link to='/instamart' ><h4 className="hover:text-yellow-200" key={4}>Instamart</h4></Link>
                <Link to="/cart"><h4 className="hover:text-yellow-200" key={3}>Cart -{cartNos} items</h4></Link>
            </div>
            <div className="flex items-center w-2/12 justify-around font-bold text-white">
                
                <div>
                    <UserIcon/>
                    <h4>user : {user.name}</h4>
                    <h4 className={`bg-[${status[1]}] px-2 border-white border rounded-lg`}>status : {status[0]}</h4>
                </div>
                {
                    isLogged ? <Link to={'/login'}><button className="hover:text-yellow-200" onClick={() => {
                        setLogged(false);
                    }}>Login</button></Link> : <button className="hover:text-yellow-200" onClick={() => {
                        setLogged(true)
                    }}>Logout</button>
                }
            </div>

        </div>
    )
}

export default HeaderComponent;