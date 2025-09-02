import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFavorites, toggleFavorite } from "../Library/Favorites";
import { getMealById } from "../Library/Api";

function Details () {

        const { id } = useParams();
        const [meal, setMeal] = useState(null);
        const [favorites, setFavorites] = useState(getFavorites());
         useEffect(() => {
                getMealById(id).then(setMeal);
                     }, [id]);


             if (!meal) return <p>Loading...</p>;


         const isFav = favorites.some((f) => f.idMeal === meal.idMeal);


       const handleFav = () => {
            const updated = toggleFavorite(meal);
          setFavorites(updated);
     };
    return(
        <div className="max-w-3xl mx-auto">
         <img
                 src={meal.strMealThumb}
               alt={meal.strMeal}
                className="rounded-2xl w-full object-cover mb-4"/>
           <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold">{meal.strMeal}</h1>
          <button
            onClick={handleFav}
           className={`px-3 py-1 rounded-full text-sm ${
          isFav ? "bg-red-500 text-white" : "bg-gray-200"
            }`}>
            {isFav ? "★ Favorite" : "☆ Add Favorite"}
              </button>
            </div>
        <p className="text-gray-600 mb-4">Category: {meal.strCategory}</p>
        <h2 className="font-semibold mb-2">Instructions:</h2>
         <p className="mb-4 whitespace-pre-line">{meal.strInstructions}</p>


          {meal.strYoutube && (
             <a href={meal.strYoutube}
           target="_blank"
             className="text-indigo-600 hover:underline">
                     ▶ Watch Video</a>
                )}
              </div>
    )
}
export default Details;