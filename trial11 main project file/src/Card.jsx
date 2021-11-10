import React from "react";
import web from "../src/images/myimage.svg";
import {NavLink} from "react-router-dom";


const Card =(props)  => {
    return (
         <>
         
        
    <div className="col-md-4 col-10 mxauto">
    <div className="card">
    <img className="card-img-top" src={props.imgsrc} alt="Card image cap" alt={props.imgsrc} />
    <div className="card-body">
        <h5 className="card-title font-weight-bold">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <p className="card-text2">{props.cardtext2}</p>
        <h6 className="trial2"> {props.adopen}</h6>
        <NavLink to="/contact" className="btn btn-primary">Enquire</NavLink>
    </div>
    </div>
    </div>
                
           
         </>

     
    );
};

export default Card;
