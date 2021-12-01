import React from "react";
import Slider from "../Inc/Slider";
import { Link } from "react-router-dom";
import VMC from "./Inc/Vmc";
import Service1 from "../Images/Service1.png";

function Home() {
    return (
        <div>
            <Slider />

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 class="main-heading">Our Company</h3>
                            <div className="underline mx-auto"></div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit expedita blanditiis molestiae repudiandae nihil cumque molestias? Illum quas sequi tenetur accusantium debitis, illo incidunt magni esse quasi! Nisi quod voluptate aliquam nesciunt dignissimos, eligendi a voluptatem, laudantium ipsam aperiam sed provident ipsum accusamus reiciendis enim rerum. Facere officia impedit nesciunt.</p>
                            <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* our vision,missions and Corevalues */}

            <VMC />

            {/* Our Services */}
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Our Services</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="sample image" />
                                <div className="card-body">
                                    <h5>Service 1</h5>
                                    <div className="underline"></div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloribus nisi quas.</p>
                                    <Link to="/services" className="btn btn-link">read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="sample image" />
                                <div className="card-body">
                                    <h5>Service 1</h5>
                                    <div className="underline"></div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloribus nisi quas.</p>
                                    <Link to="/services" className="btn btn-link">read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="sample image" />
                                <div className="card-body">
                                    <h5>Service 1</h5>
                                    <div className="underline"></div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloribus nisi quas.</p>
                                    <Link to="/services" className="btn btn-link">read more</Link>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home;