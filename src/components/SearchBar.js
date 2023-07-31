import { useState } from "react";

const SearchBar = () => {
    // let searchTxt = "KFC"
    const [searchTxt, setSearchTxt] = useState("Indian Cuisines")
    return (
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
            <span className="material-symbols-outlined">search</span>
        </div>

    )
}

export default SearchBar;