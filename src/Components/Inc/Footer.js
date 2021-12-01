import React from "react";
import {Link} from "react-router-dom";


function Footer() {
    return (
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Company Information</h5>
                        <hr />
                        <p>dsndsncjo cdsocns ccnfsc ji wecsncodc cdisvb dscewcrov aoc f cscsdcnvbcac sdc sdocew fs csdbsdcsnc skcnsc scsadcw vlrskcna ecalcknsvnaed clcknsd sdlkc sdcskv jns</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <hr />
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/contact">Contact</Link></div>
                        <div><Link to="/">Blog</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Information</h5>
                        <hr />
                        <div><p className="text-white mb-1">#210 Sas Nagar,Mohali. India</p></div>
                        <div><p className="text-white mb-1">+91 94636XXXX4</p></div>
                        <div><p className="text-white mb-1">+91 7973XXXX63</p></div>
                        <div><p className="text-white mb-1">kauXXXXXutt@gmail.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Footer;