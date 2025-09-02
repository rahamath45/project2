import { Route, Routes } from "react-router-dom"
import Nav from "./pages/Nav"
import Search from "./pages/Search"
import Details from "./pages/Details"
import "./App.css"

function App() {
 

  return (
           <>
          
         <Nav/>
          <Routes>
   
            <Route  path="/" element={<Search/>} />
            <Route path="/recipes/:id" element={<Details/>} />
          </Routes>
    </>
  )
}

export default App
