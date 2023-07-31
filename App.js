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

const RestaurantList = ({restaurantList}) => {
    console.log({restaurantList});
    return (
        <div className='card'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQGoc6pXgUFxLuuitGRXLZnZhDvd2JP5DIw&usqp=CAU" alt="image" />
            <h2>{restaurantList?.name}</h2>
            <h5>{restaurantList?.cuisines.join(" , ")}</h5>
            <h6>{"Rating: "+ restaurantList?.rating}</h6>
        </div>
    )
}

const Body = () => {
    return (
        <div className='restaurant-list'>
            <RestaurantList restaurantList={restaurantList[0]}/>
            <RestaurantList restaurantList={restaurantList[1]}/>
            <RestaurantList restaurantList={restaurantList[2]}/>
            <RestaurantList restaurantList={restaurantList[3]}/>
            <RestaurantList restaurantList={restaurantList[4]}/>
            <RestaurantList restaurantList={restaurantList[5]}/>
            <RestaurantList restaurantList={restaurantList[6]}/>
            <RestaurantList restaurantList={restaurantList[7]}/>
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