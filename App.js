import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AllLinks from "./components/AllLinks";
import Combine from "./components/Combine";
import Desc from "./components/Desc";
import One from "./components/One";
import About from "./components/Sections/About";
import Contact from "./components/Sections/Contact";
import Home from "./components/Sections/Home";
import Test from "./components/Test";
import Test1 from "./components/Test1";
import Wasserstoff from "./components/Wasserstoff";


function App() {
  // const[params , updateparams] = useState({
  //   firstName:"",
  //   lastName:""
  // })
  return (

    // {/* <LiftingOne params={params} update={updateparams}/>
    // <LiftingTwo params={params}/> */}
    <>
      <AllLinks />
       <Routes>
        
         <Route path="/about" element={<About />}></Route>
         <Route path="/about/Desc" element={<Desc />}></Route> 
    {/* //     {/* <Route path="/Test" element={<Test />}></Route> */}
         {/* <Route path="/Test/Test1" element={<Test1 />}></Route>  */}
        <Route path="/Test"element={<Combine/>}>
           <Route index element={<Test/>}></Route>
           <Route path="Test1" element={<Test1/>}></Route>
        </Route>
         <Route path="*" element = {<h1>Page not found</h1>}></Route>
         <Route path="/" element={<Home />}></Route>
         <Route path="/contact" element={<Contact />}></Route>
    
       </Routes>
     </>
    // <div>
    //   <One/>
    // </div>

  );
}

export default App;
