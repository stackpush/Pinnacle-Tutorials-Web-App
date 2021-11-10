import React from "react";
import web from "./images/pabout.webp";
import {NavLink} from "react-router-dom";
import Common from './Common';


const About =()  => {
    return (
         <>
        <Common name ='About' imgsrc = {web} visit ='/service' btnname='Contact Now'  maintext1 =" It all started in 1999 with 3 students in a garage. We have never looked back since then. For the past 20+ years we have been training students and producing excellent results."
        maintext2="Pinnacle Tutorials - an established name in Boards and NTSE preparation. With a legacy of over 20 years, Pinnacle Tutorials is well known for its comprehensive, result-oriented preparation programs. "
        btname="View our programs" />
        
      
         </>
         

     
    );
};

export default About;
