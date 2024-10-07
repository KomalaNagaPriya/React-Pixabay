import Pixabay from "./Components/Pixabayhome";
import Login from "./Pages/Login";
import Imageroute from "./Pages/ImageRoute";
import Join from "./Pages/Join";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Pixabay/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/image" element={<Imageroute/>}></Route>
      <Route path="/signup" element={<Join/>}></Route>
    </Routes>
    </BrowserRouter>
  // 
)
}