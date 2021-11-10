import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import { Switch, Route, Redirect } from "react-router";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from  "./Footer";
import emailjs from 'emailjs-com';
import Carousel from "react-bootstrap/Carousel"




const sendEmail = (e) =>{  
  e.preventDefault();

  emailjs.sendForm('gmail', 'template_2eqdavu', e.target, 'user_MPrsmYCTpYmxdtv6ZBwjH')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
} 


const App =()  => {
    return (
         <>
         <Navbar />
         
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/about" component = {About} />
            <Route exact path = "/service" component = {Service} />
            <Route exact path = "/contact" component = {Contact} />
            <Redirect to ="/"/>
           
         </Switch>
        
         <Footer/>
         </>

     
    );
};

export default App;

