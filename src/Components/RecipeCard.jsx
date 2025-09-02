import { Link } from "react-router-dom";



export default function RecipeCard({meal}){
    return(
       <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-3 flex flex-col">
        <img
         src={meal.strMealThumb}
         alt={meal.strMeal}
            className="rounded-xl object-cover w-full h-48"/>
         <h3 className="mt-2 font-semibold text-lg">{meal.strMeal}</h3>
         <p className="text-sm text-gray-500">{meal.strCategory}</p>
           <Link to={`/meal/${meal.idMeal}`}
              className="mt-auto text-indigo-600 hover:underline text-sm">
                  View Details</Link>
</div>
    )
}