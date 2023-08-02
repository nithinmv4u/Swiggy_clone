import { useState } from "react";

const SearchBar = () => {
    // let searchTxt = "KFC"
    const [searchTxt, setSearchTxt] = useState("Indian Cuisines")

    const [searchClick, setSearchClick] = useState(false)

    return (
        <>
            <div className='search'>
                <input 
                className='search_img' 
                type="text" 
                placeholder='Search' 
                value={searchTxt}
                onChange={(e) => {
                    setSearchTxt(e.target.value)
                }}
                />
                <a href="#" onClick={() =>{
                    console.log("clicked " + searchClick);
                    if (searchClick === false){
                        setSearchClick(true);
                    }  
                    else {
                        setSearchClick(false);
                    }
                }} ><span className="material-symbols-outlined">search</span> </a>

                
                
            </div>
            <div>
                <h5>{searchClick? "clicked":"unclicked"}</h5>
            </div>
        </>


    )
}

export default SearchBar;