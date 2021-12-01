import React from "react";

function Contactus() {
    return(
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Contact</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / Contact Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
            <div className="container">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <h6>Contact Form</h6>
                                <hr />
                                <div className="form-group">
                                    <label className="mb-1">Full Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Full Name" />
                                </div>
                                <div className="form-group">
                                    <label className="mb-1">Phone Number</label>
                                    <input type="numbers" className="form-control" placeholder="Enter Phone no." />
                                </div>
                                <div className="form-group">
                                    <label className="mb-1">Email Address</label>
                                    <input type="email" className="form-control" placeholder="Enter Email Address" />
                                </div>
                                <div className="form-group">
                                    <label className="mb-1">Message</label>
                                    <textarea className="form-control" placeholder="Type your Message..." rows="3"></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-success shadow mt-1">Send Message</button>
                                </div>
                            </div>
                            <div className="col-md-6 border-start">
                                <h5 className="main-heading">Address Information</h5>
                                <p>#210 SAS Nagar, Mohali - 160XXX, INDIA</p>
                                <p>Phone: +91 94636XXXX4</p>
                                <p>Email: kauXXXXXutt@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Contactus;