import React from "react";
import web from "./images/myimage.svg";
import {NavLink} from "react-router-dom";
import Common from './Common';
import CarouselContainer from "./CarouselContainer";
import Aboutrefer from "./aboutrefer";



const Home =()  => {
    return (  
         <>
         <CarouselContainer/>
        
         <Common name ='Learn with' imgsrc = {web} visit ='/service' btnname='Get started' wid='640' hi='160'
          maintext1 =" We are a team of teachers here for your ward" text1 = "An Institute for VII, IX, X NTSE / OLMPIYAD" 
          text2 = "To know more about us visit our About page" 
            btname="Get Started" btname2='/about' visit2='/about' aboutustryhide='About us' tryhideaboutbutton='btn btn-success'
          />

       </>
         
         
        
         

     
    );
};

export default Home;
