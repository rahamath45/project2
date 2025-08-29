import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_DETAILS } from "../backend";
import StarBorderIcon from '@mui/icons-material/StarBorder';






const Details = () =>{
    const [details,setDetails] = useState(null);
    const {id:idMeal } = useParams ();
    const navigate = useNavigate();
    useEffect(()=>{
           fetch(`${API_DETAILS}i=${idMeal}`,{method:"GET"})
           .then((response)=> response.json())
                 .then((data)=>{
                    setDetails(data.meals[0] )
                    
                 })
              .catch((err)=> console.log(err));
      },[idMeal])

    
   
   if(!details) return <p className="text-xl">Loading....</p>
    return(
        <>
         <div className="  inset-0 bg-gray-400 flex justify-center items-center bg-opacity-50 p-4 sm:h-[1700px] lg:h-[1400px]" >
            {details && (
                  <div className=" mt-4 lg:h-[1300px] w-[1100px]  bg-linear-to-t from-orange-700 to-orange-400 rounded-lg flex flex-col inset-shadow-sm inset-shadow-orange-900" key={details.idMeal} >
             <div  className="  flex flex-row justify-between p-6" >
                 <button onClick={()=>navigate("/new")}className="text-[20px] cursor-pointer" >Close</button>
                 <h1 className="font-[righteous] text-4xl ">{details.strMeal}</h1>
                 <span className="cursor-pointer">< StarBorderIcon></StarBorderIcon> Fav</span>
             </div>
             <div className="flex flex-row gap-[8rem] pl-10">
                <div className="flex flex-col gap-2">
                    <img className="w-[400px] h-[500px] object-cover  pt-8 rounded-md"src={details.strMealThumb  ? details.strMealThumb : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} alt={details.strMeal} />
                    <p className="text-center font-[saira] text-[30px]">{details.strCategory}</p>
                    <p className="text-center ">({details.strArea})</p>
                </div>
                <div className=" mt-20 flew flew-col gap-2 rounded-2xl w-[350px] h-[500px] bg-[#000]  ">
                    <h3 className="pt-6 pl-20 text-[25px] relative  text-[#F4722B]">Ingredients Board</h3>
                     <ul className="list-disc pl-12 pt-4 text-[#fff]">
                          {Array.from({ length: 20 }, (_, i) => i + 1) .map((i) => ({ ingredient: details[`strIngredient${i}`],
                                 measure: details[`strMeasure${i}`] }))
                           .filter((item) => item.ingredient) .map((item, idx) => (
                             <li key={idx}>  {item.ingredient} - {item.measure} </li>))}
                   </ul>
                </div>
             </div>
             <div className="flex flex-col gap-4 mt-18">
                <div className="text-center text-[45px] text-[saira]">Instruction</div>
                <p className="text-[#000] text-[20px] p-8 pl-25 pr-18">{details.strInstructions}</p>
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