import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"

const Contact = () => {

  const [data, setData] = useState({
    name:"",
    phone: {},
    email: "",
    message:""
  })

const InputEvent = (event)=>{
  const {name, value} = event.target;

  setData((oldVal)=>{
    return {...oldVal, [name]:value}
  })
}

const formSubmit=(event)=>{
  event.preventDefault();
alert(`My name is ${data.name}. My mobile number is ${data.phone}. My eMail ID is ${data.email}. I want to say "${data.message}"`)

}

return (
  <>
    <div className="my-5">
      <h1 className="text-center"> Contat Us </h1>
    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
            <div class="mb-3">

              <label for="exampleFormControlInput1" 
              class="form-label">Full Name
              </label>
                
                <input 
                name="name"
                value={data.name}
                onChange={InputEvent}
                type="text" 
                class="form-control" 
                id="exampleFormControlInput1" 
                placeholder="Enter Your Name"/>
            </div>

            <div class="mb-3">
            
              <label for="exampleFormControlInput1" 
              class="form-label">Email address
              </label>
                
                <input 
                name="email"
                value={data.email}
                onChange={InputEvent}
                type="email" 
                class="form-control" 
                id="exampleFormControlInput1" 
                placeholder="name@example.com"/>
            </div>

            <div class="mb-3">
            
              <label for="exampleFormControlInput1" 
              class="form-label">Contact Number
              </label>
                
                <input 
                name="phone"
                value={data.phone}
                onChange={InputEvent}
                type="text" 
                class="form-control" 
                id="exampleFormControlInput1" 
                placeholder="Phone Number"/>
            </div>

            <div class="mb-3">

                  <label for="exampleFormControlTextarea1" 
                  class="form-label">Message
                  </label>

                  <textarea 
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                  class="form-control" 
                  id="exampleFormControlTextarea1" 
                  rows="3">
                  </textarea>
              </div>

              <div class="col-12">
                <button class="btn btn-primary" 
                type="submit">Submit</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  </>
  )
}

export default Contact;