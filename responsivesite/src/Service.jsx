import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import web from "../src/images/img2.png"
import Card from "./Card";
import ServData from "./ServData";
import { NavLink } from "react-router-dom";

const Services = () => {
return (
  <>
    <div className="my-5">
        <h1 className="tab-center">Our Services</h1>
    </div>
    <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                  <div className= "row gy-4">
                    {
                      ServData.map((curVal, Idx)=>{
                          return(
                            <Card
                              key={Idx}
                              id={Idx}
                              image={curVal.image}
                              title={curVal.title}
                              link={curVal.link}
                              goTo={curVal.goTo}
                            />
                          )
                      })
                    }
                  </div>
                  <div className= " my-5 text-center">
                      <NavLink to="/contact" className= "btn btn-primary">
                       Contact Us 
                      </NavLink>
                    </div>
                </div>
            </div>
    </div>
  </>
  )
}

export default Services;