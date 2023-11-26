
import "./App.css"
import ConfessionCard from './component/ConfessionCard'
import Navbar from "./component/Navbar"
import AddConfession from "./pages/AddConfession";
import Feed from "./pages/Feed"
import {BrowserRouter,Route,Routes} from "react-router-dom"

function App() {
  

  return (

    <>
    <BrowserRouter>
    <Navbar/>
    
      <Routes>
        <Route path="/" Component={Feed}/>
        <Route path="/add" Component={AddConfession}/>
      </Routes>
    
    
      
    </BrowserRouter>
    

    </>
  );
}

export default App
