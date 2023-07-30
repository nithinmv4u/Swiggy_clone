import React from 'react'
import ReactDOM from 'react-dom/client';
import restaurantList from './assets/Restaurants';

const Title = () => {
    return ( 
        <h1>
            Intro React
        </h1>
    )
}
console.log(restaurantList);

const Logo = () => {
    return (
        <img className='image' src={require("./assets/droplet_4007761.png")} alt="Logo" />
    )
}

const SearchBar = () => {
    return (
        <div className='search'>
            <input className='search_img' type="text" placeholder='Search' />
            <span className="material-symbols-outlined">search</span>
        </div>

    )
}

const UserIcon = () => {
    return (
        <img className='user_icon' src={require("./assets/user_1177568.png")} alt="" />
    )
}

const HeaderComponent = () => {     
    return (
        <div className='header'>
            <Logo/>
            <SearchBar/>
            <UserIcon/>
        </div>
    )
}

const RestaurantList = (props) => {
    console.log(props);
    return (
        <div className='card'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQGoc6pXgUFxLuuitGRXLZnZhDvd2JP5DIw&usqp=CAU" alt="image" />
            <h2>{restaurantList[1]?.name}</h2>
            <h5>{restaurantList[1].cuisines.join(" , ")}</h5>
            <h6>{"Rating: "+restaurantList[1]?.rating}</h6>
        </div>
    )
}

const Body = () => {
    return (
        <div className='restaurant-list'>
            <RestaurantList/>
            <RestaurantList/>
            <RestaurantList/>
            <RestaurantList/>
            <RestaurantList/>
            <RestaurantList/>
            <RestaurantList/>
            <RestaurantList/>
        </div>

    )
}

const App = () => {
    return (
        <React.Fragment>
            <HeaderComponent/>
            <Body/>
        </React.Fragment>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);