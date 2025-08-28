import { Route, Routes } from "react-router-dom"
import Nav from "./pages/Nav"
import Search from "./pages/Search"
import Details from "./pages/Details"
import "./App.css"

function App() {
  

  return (
           <>
          <Routes>
            <Route exact path="/" element={<Nav/>}/>
            <Route  path="/new" element={<Search/>} />
            <Route path="/recipes/:id" element={<Details/>} />
          </Routes>
    </>
  )
}

export default App
