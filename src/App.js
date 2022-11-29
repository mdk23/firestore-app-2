
import { useState } from "react";
import {Routes,Route,} from "react-router-dom";
import { CreatePost, Home, Login, Navbar } from "./components";

function App() {
  
  const[isAuth,setIsAuth]=useState(localStorage.getItem('isAuth'));
  
  return (
    <div className="App">
        
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
        
        <Routes>
           <Route path="/" element={<Home isAuth={isAuth}/>} />
           <Route path="/login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
           <Route path='/createpost' element={<CreatePost isAuth={isAuth}/>}/>
        </Routes>
     
    </div>
  );
}

export default App;
