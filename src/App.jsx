
import { Link, Route, Routes } from "react-router-dom";
import "./App.css"

import Details from "./pages/Details";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
 

  return (
           <>
          <div className="min-h-screen bg-gray-50">
                <header className="bg-white shadow p-4 flex justify-between items-center">
                 <Link to="/" className="text-xl font-bold text-indigo-600">
                     RecipeApp
                            </Link>
         <nav className="flex gap-4">
         <Link to="/" className="hover:text-indigo-500">Home</Link>
         <Link to="/favorites" className="hover:text-indigo-500">Favorites</Link>
         </nav>
            </header>


            <main className="p-4 container mx-auto">
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/meal/:id" element={<Details />} />
             <Route path="/favorites" element={<Favorites />} />
         </Routes>
        </main>
       </div>
        
    </>
  )
}

export default App;
