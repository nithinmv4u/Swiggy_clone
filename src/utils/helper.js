export function filterRestaurant(restaurants, searchTxt){
    console.log(restaurants);
    console.log("search text: ", searchTxt);
    const data = restaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase().includes(searchTxt.toLowerCase())
    );
    console.log(data);
    return data
}