import { useEffect, useState } from "react";
import { getFavorites } from "../Library/Favorites";
import RecipeCard from "../Components/RecipeCard";


function Favorites () {
        const [favs, setFavs] = useState([]);


        useEffect(() => {
        setFavs(getFavorites());
         }, []);

    return(
       <div>
             <h1 className="text-2xl font-bold mb-4">My Favorites</h1>
        {favs.length === 0 ? (
                <p className="text-gray-500">No favorites saved.</p>
             ) : (
               <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
           {favs.map((m) => (
            <RecipeCard key={m.idMeal} meal={m} />
         ))}
            </div>
         )}
          </div>
        )
}
export default Favorites;