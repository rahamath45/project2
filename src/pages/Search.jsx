import { useEffect, useState } from "react";
import { API_FILTER, API_SEARCH } from "../backend";
import { useAppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Search = () =>{
    const{recipes,setRecipes} = useAppContext();
      const {query} = useAppContext();
         const {filter} = useAppContext();
         const navigate = useNavigate();


    const fetchRecipes = async () =>{
     try{
         let  url = `${API_SEARCH}s=${query}`;


         if(filter.category){
           url = `${API_FILTER}c=${filter.category}`
     }
      
        const res = await fetch(url);
         const data = await res.json();
              setRecipes(data.meals || [])
              
     }catch(error){
          console.log(error)
     }
    };

    useEffect(()=>{
        fetchRecipes();
    },[query,filter]);


    return(
           <div className="bg-gray-500 h-[2000px]">
           
           <div className="font-[righteous] lg:text-[20px] pl-10 relative top-10  " onClick={()=>navigate("/")}> <ArrowBackIcon></ArrowBackIcon> Back</div>
        <div className="lg:grid grid-cols-5 gap-4 m-6 mt-18 h-14 ">
            {recipes.length >0 ? (
                   recipes.map((meal)=>(
                        <div key={meal.idMeal}  
                         className="rounded-sm p-3  text-center bg-linear-to-t from-orange-500 to-orange-800" onClick={()=>navigate(`/recipes/${meal.idMeal}`)}>
                         <img src={meal.strMealThumb  ? meal.strMealThumb : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} alt={meal.strMeal}/>
                        <h3 className=" lg:text-[28px] font-[saira] sm:text-[19px]">{meal.strMeal}</h3>
                         <p>{meal.strCategory}</p>
         </div>
         ))
            ):(<p className="text-[30px] text-center w-[900px] h-[500px]">No meals found.........</p>)}
        </div>
        </div>
    )
  }


  export default Search;