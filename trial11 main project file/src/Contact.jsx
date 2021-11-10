import React, { useState } from "react";
import emailjs from 'emailjs-com';


const Contact = ()  => {


  const [data, setData]=useState({
    name:"",
    phone:"",
    email:"",
    messsage:"",
 });

  const InputEvent = (event) => {
   const {name, value} = event.target;

    setData((preVal)=>{
       return {
        ...preVal,
        [name]: value,
        };
      });
 };

    const formSubmit = (e) =>{
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_2eqdavu', e.target, 'user_MPrsmYCTpYmxdtv6ZBwjH')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()

        alert (
          `Thank you for Contacting us. Your Query has been submitted!`
        );

    };
    return (
         <>
          <div className = "my-5">
              <h1 className="text-center"> Contact us</h1>
          </div>
          <div className = "container contact_div">
           <div className = "row">
               <div className = "col-md-6 col-10 mx-auto">
               <form onSubmit ={formSubmit}>
  <div className="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" class="form-control"
     id="exampleFormControlInput1" name = "name" value={data.name} onChange={InputEvent} placeholder="Enter your full name"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Phone Number</label>
    <input type="number" class="form-control"
     id="exampleFormControlInput1" name = "phone" value={data.phone} onChange={InputEvent} placeholder="Enter your Phone number"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="text" class="form-control" 
    id="exampleFormControlInput1" name = "email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
  </div>

  <div className="form-group">
    <label for="exampleFormControlInput1">Message</label>
    <input type="text" class="form-control" 
    id="exampleFormControlInput1" name = "message" value={data.message} onChange={InputEvent} placeholder="Enter your Enquiry here"/>
  </div>

    <br></br>
 

  <div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
</form>

               </div>
           </div>

          </div>
         </>

     
    );
};

export default Contact;
