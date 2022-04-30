import { Box } from "@mui/system";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../../pages/Home";
import About from "../../pages/About";
import Cast from "../../pages/Cast";
import Watch from "../../pages/Watch";
import SeasonOne from "../../pages/SeasonOne";
import SeasonTwo from "../../pages/SeasonTwo";

import Header from "../header/Header";


const App = (props) => {
  return (
    <>
      <Header/>
      <Box>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/cast" element={<Cast/>}/>
          <Route path="/season1" element={<SeasonOne/>}/>
          <Route path="/season2" element={<SeasonTwo/>}/>
          <Route path="season1/watch/:season/:episod" element={<Watch/>}/>
          <Route path="season2/watch/:season/:episod" element={<Watch/>}/>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Box>
    </>
    
  );
}

export default App;