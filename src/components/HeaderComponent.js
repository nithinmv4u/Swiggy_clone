import Title from "./Title";
import SearchBar from "./SearchBar";
import UserIcon from "./UserIcon";

const HeaderComponent = () => {     
    return (
        <div className='header'>
            <Title/>
            <SearchBar/>
            <UserIcon/>
        </div>
    )
}

export default HeaderComponent;