import React from "react";
import web from "./images/myimage.svg";
import {NavLink} from "react-router-dom";


const Common =(props)  => {
    return (
         <>

         
          <section id = "header" className = "d-flex align-items-between  ">
          <div className = "container-fluid">
            <div className = 'row'>
                <div className = "col-12" mx-auto>
               
                  <div className ="row">  
                  

                  
                  <div className = "col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>{props.name} <strong className = "brand-name"> Pinnacle Tutorials</strong>
                    </h1>
                    <h2 className = "my-2"> 
                    {props.maintext1}
                     </h2>

                     <h2 className = "my-2"> 
                    {props.maintext2}
                     </h2>

                     <div ClassName = "mt-3">
                         <NavLink to={props.visit} className = "btn btn-success">{props.btname}</NavLink>
                     </div>
                     
                     <div className="row" style={{marginBottom: "210px"}}> </div> 
                    
                     
                     <div className="row"><h2>{props.text1}</h2></div>
                     <div className="row"><h2>{props.text2} </h2>
                     <div ClassName = "mt-3">
                         <NavLink to='/about' className = {props.tryhideaboutbutton}>{props.aboutustryhide}</NavLink>
                     </div>
                     
                     </div>
                       
                      

                  </div>
                  <div className = "col-lg-6   order-6 order-lg-5  header-img  d-flex justify-content-end ">
                    <img src ={props.imgsrc} className = "img animated" width={props.wid} height={props.hi} alt = "home img "/>

                  </div>
                  
                    
                  </div>
                </div>
               </div>
              </div>  
          </section>
         </>

     
    );
};

export default Common;
