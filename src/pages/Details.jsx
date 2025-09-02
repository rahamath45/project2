import { useEffect, useState } from "react";
import { Link,  useNavigate, useParams } from "react-router-dom";
import { API_DETAILS } from "../backend";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarRateIcon from '@mui/icons-material/StarRate';





const Details = () =>{
    const [details,setDetails] = useState(null);
    const {id:idMeal } = useParams ();
    const navigate = useNavigate();
   
    const [fav,setFav] = useState(()=>{
         const stored = localStorage.getItem("fav");
    return stored ? JSON.parse(stored) : [];
    });
    useEffect(()=>{
           fetch(`${API_DETAILS}i=${idMeal}`,{method:"GET"})
           .then((response)=> response.json())
                 .then((data)=>{
                    setDetails(data.meals[0] )
                    
                 })
              .catch((err)=> console.log(err));
      },[idMeal])

    useEffect(()=>{
       localStorage.setItem("fav",JSON.stringify(fav));
    },[fav])

     const addtofav = (id) => {
    if (fav.includes(id)) {
      setFav(fav.filter((favId) => favId !== id));
    } else {
      setFav([...fav, id]);
    }
  };
   
     const isFav = details ? fav.includes(details.idMeal) : false;



   if(!details) return <p className="text-xl">Loading....</p>
    return(
        <>
     
         <div className=" w-[900px] bg-gray-400 flex justify-center items-center bg-opacity-50   sm:p-1 lg:h-[1400px] lg:w-auto p-4 " >
            {details && (
                  <div className="   bg-linear-to-t from-orange-700 to-orange-400 rounded-lg 
                  flex flex-col inset-shadow-sm inset-shadow-orange-900  " key={details.idMeal} >
             <div  className="  lg:flex flex-row lg:justify-between lg:p-4 sm:flex flex-row  sm:text-center md:flex flex-row justify-between" >
                 <button onClick={()=>navigate("/")}className="text-[20px] cursor-pointer" >Close</button>
                 <h1 className="font-[righteous] lg:text-4xl sm:text-[20px] text-center">{details.strMeal}</h1>
                 <button onClick={()=>addtofav(details.idMeal)} className={`mt-2 px-4  py-2 ${isFav ? "bg-blue-500" : "bg-gray-300"}` } >
                  {isFav ? <StarRateIcon></StarRateIcon> :  < StarBorderIcon></StarBorderIcon> }
                 </button>
             </div>
             <div className="lg:flex flex-row lg:gap-[8rem] lg:pl-10 sm:p-4">
                <div className="flex flex-col gap-2 ">
                    <img className="lg: w-full h-[500px] object-cover  pt-8 rounded-md "src={details.strMealThumb  ? details.strMealThumb : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} alt={details.strMeal} />
                    <p className="text-center font-[saira] text-[30px]">{details.strCategory}</p>
                    <p className="text-center ">({details.strArea})</p>
                </div>
                <div className=" mt-20 flew flew-col gap-2 rounded-2xl lg:w-[350px] lg:h-[500px] bg-[#000] sm:w-[200px] sm:h-[700px] m-2 md:w-[400px]">
                    <h3 className="pt-6 pl-20 text-[25px] relative  text-[#F4722B]">Ingredients Board</h3>
                     <ul className="list-disc pl-12 pt-4 text-[#fff]">
                          {Array.from({ length: 20 }, (_, i) => i + 1) .map((i) => ({ ingredient: details[`strIngredient${i}`],
                                 measure: details[`strMeasure${i}`] }))
                           .filter((item) => item.ingredient) .map((item, idx) => (
                             <li key={idx}>  {item.ingredient} - {item.measure} </li>))}
                   </ul>
                </div>
             </div>
             <div className="flex flex-col gap-4 lg:mt-11">
                <div className="text-center text-[45px] text-[saira]">Instruction</div>
                <p className="text-[#000] lg:text-[20px] lg:p-8 lg:pl-25 lg:pr-18 sm:text-[13px] p-6">{details.strInstructions}</p>
                {details.strYoutube && (
                    <div className="text-center "> Watch on Youtube:<Link> {details.strYoutube}</Link>
                    </div>
                )}
             </div>
            </div>
            )}
         </div>
         
        </>
    )
  }


  export default Details;