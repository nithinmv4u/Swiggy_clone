export function filterRestaurant(restaurants, searchTxt){
    console.log("restaurants: ",restaurants);
    console.log("search text: ", searchTxt);
    const data = restaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase().includes(searchTxt.toLowerCase())
    );
    if(data.length === 0){
        console.log("no res ");
        return [{info:'NO_RESTAURANT'}];
    }
    console.log(data,data.length);    
    return data
}