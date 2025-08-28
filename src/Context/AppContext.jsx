import { createContext, useContext, useState } from "react";

 const appCTX = createContext()

 export default function AppContext ({children}){
    const[query,setQuery] = useState("");
      const [filter,setFilter] = useState({category:""})
      const[recipes,setRecipes] = useState([]);

    return(
       <appCTX.Provider value ={{
          query,setQuery,filter,setFilter,recipes,setRecipes
       }}>
        {children}
       </appCTX.Provider>
    )
 }

 export  function useAppContext(){
     return useContext(appCTX)
 }