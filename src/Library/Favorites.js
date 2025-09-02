

export const getFavorites = () => {
return JSON.parse(localStorage.getItem("favorites") || "[]");
};


export const toggleFavorite = (meal) => {
let favs = getFavorites();
const exists = favs.find((m) => m.idMeal === meal.idMeal);
if (exists) {
favs = favs.filter((m) => m.idMeal !== meal.idMeal);
} else {
favs.push(meal);
}
localStorage.setItem("favorites", JSON.stringify(favs));
return favs;
};