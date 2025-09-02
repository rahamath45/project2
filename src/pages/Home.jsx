import { useEffect, useState } from "react";
import { getCategories, searchMeals } from "../Library/Api";
import RecipeCard from "../Components/RecipeCard";


function Home () {
        const [meals, setMeals] = useState([]);
          const [q, setQ] = useState("");
         const [categories, setCategories] = useState([]);
          const [filter, setFilter] = useState("");
useEffect(() => {
               searchMeals(q).then((res) => {
          if (filter) {
              res = res.filter((m) => m.strCategory === filter);
                  }
                 setMeals(res);
                 });
              }, [q, filter]);

       useEffect(() => {
             getCategories().then(setCategories);
}, []);       
    return(
        <div>
         <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
         className="border rounded-lg p-2 flex-1"
         placeholder="Search recipes..."
          value={q}
         onChange={(e) => setQ(e.target.value)}/>
     <select
          className="border rounded-lg p-2"
     value={filter}
         onChange={(e) => setFilter(e.target.value)}>
             <option value="">All Categories</option>
              {categories.map((c) => (
               <option key={c} value={c}>{c}</option>
                  ))}</select>
           </div>


           {meals.length === 0 ? (
                    <p className="text-gray-500">No recipes found.</p>
                  ) : (
                 <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {meals.map((m) => (
             <RecipeCard key={m.idMeal} meal={m} />
                      ))}
                    </div>
                 )}
          </div>
    )
}
export default Home;