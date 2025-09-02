import axios from "axios";



const API = axios.create({ baseURL: "https://www.themealdb.com/api/json/v1/1" });

export const searchMeals = async (q = "") => {
const { data } = await API.get(`/search.php?s=${q}`);
return data.meals || [];
};


export const getMealById = async (id) => {
const { data } = await API.get(`/lookup.php?i=${id}`);
return data.meals ? data.meals[0] : null;
};


export const getCategories = async () => {
const { data } = await API.get("/list.php?c=list");
return data.meals.map((m) => m.strCategory);
};