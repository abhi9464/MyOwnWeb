import React from "react";
import VMC from "./Inc/Vmc";


function Aboutus() {
    return(
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / About Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section bg-light border-bottom">
                <div className="container">
                    <h5 className="main-heading">Our Company</h5>
                    <div className="underline"></div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit distinctio corporis, quo temporibus explicabo dolor aliquam nobis harum asperiores, quisquam similique enim esse perspiciatis optio! Earum, dolorum molestiae sit dignissimos rem error quod provident vel!</p>
                </div>
            </section>
             {/* our vision,missions and Corevalues */}

             <VMC />
        </div>
    )
}

export default Aboutus;