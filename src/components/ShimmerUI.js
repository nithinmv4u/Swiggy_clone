const Shimmer = () => {
    return (
        <>
            <div className='search'>
                <input 
                className='search_img' 
                type="text" 
                placeholder='Search' 
                value=''
                />
                <a href="#"><span className="material-symbols-outlined">search</span> </a> 
            </div>
            <div className='restaurant-list'>
                {
                        <div className='card' style={{backgroundColor:"grey"}}>
                            <img src="" alt="image" style={{backgroundColor:"grey", height:'40%', width: '100%'}}/>
                            <h2 style={{backgroundColor:"grey"}}>{}</h2>
                            <h5 style={{backgroundColor:"grey"}}>{}</h5>
                            <h6 style={{backgroundColor:"grey"}}>{}</h6>
                        </div>
                }
            </div>
        </>
    )
}

export default Shimmer