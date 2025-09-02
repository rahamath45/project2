
import { useNavigate } from "react-router-dom";

import { useAppContext } from "../Context/AppContext";



 const Nav = () =>{
 
      const {query,setQuery} = useAppContext();
      const {filter,setFilter} = useAppContext();
  const navigate = useNavigate();

  
  
    return(
        <>
         <div className=" w-[1350px] lg:h-[250px]  bg-[#000] flex flex-col " >
            <div className="flex relative right-10  flex-row">  
                 <img className=" relative bottom-[40px] " src="https://www.themealdb.com/images/meal-icon.png"/>
                 <span className="font-bold text-[47px] text-[#F4722B]  pr-[10px] pt-4 relative right-8" > THE MEALDB APP</span>
              
              </div>
              
             
             
             <div className=" w-[750px]  bg-[#fff] flex  flew-row justify-between rounded-md relative bottom-20 left-60 p-1 ">
                <input className="w-[800px]  pl-2 bg-[#fff] border-0 focus:outline-none"  type="text"
                   placeholder="search your favourite...." value={query}  onChange={(e) =>{ setQuery(e.target.value) } }/>
                <span className="  bg-orange-500 rounded-lg relative left-35  "><button className="w-[95px] h-[35px]" 
                onClick={()=>navigate("/")} >Search</button></span>
                 <select  value={filter} onChange={(e)  => { setFilter({...filter,category:e.target.value})}} className="border px-2 py-1 rounded relative left-40 bg-[#fff]" >
                           <option value=" ">All category</option>
                           <option   value="Seafood">Seafood</option> 
                           <option   value="beef">Beef</option> 
                           <option   value="Chicken">Chicken</option> 
                           <option   value="Lamb">Lamb</option> 
                           <option   value="Pasta">Pasta</option> 
                           <option   value="Miscellaneous">Miscellaneous</option> 
                           <option  value="Pork">Pork</option> 
                           <option   value="Desert">Desert</option> 
                           <option   value="Side">Side</option> 
                           <option  value="Starter">Starter</option> 
                           <option   value="Vegan">Vegan</option> 
                           <option  value="Vegetarian">Vegetarian</option> 
                </select>
             </div>
             
         </div>
        

      

        </>
    )
  }
 

  export default Nav;