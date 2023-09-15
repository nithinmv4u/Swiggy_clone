const RestaurantCard = () => {
    return (
        <div className='shimmer' >
            {/* <img src="" alt="image"/> */}
            <h2 style={{backgroundColor:"grey"}}>{}</h2>
            <h5 style={{backgroundColor:"grey"}}>{}</h5>
            <h6 style={{backgroundColor:"grey"}}>{}</h6>
        </div>
    )
}

const Shimmer = () => {
    return (
        <>
            <div className="search">
                <input 
                className='search_img' 
                type="text" 
                placeholder='Search' 
                defaultValue=''
                />
                <a href="#"><span className="material-symbols-outlined">search</span> </a>
                <button style={{marginLeft:'5%'}} onClick={() => {
                }}>Clear Search</button>
            </div>
            <div className="restaurant-list">
                {
                    Array.from({length : 20}).map((_,index) => (
                        <RestaurantCard key={ index }/>
                    ))
                }
                
                {/* <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/> */}
            </div>
        </>
    )
}

export default Shimmer