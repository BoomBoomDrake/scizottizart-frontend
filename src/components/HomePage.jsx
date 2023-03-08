import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import logo from "../images/logo-nobg.png"



export default function HomePage({categories}) {

    React.useEffect(() => {
        console.log(categories.map((category) => {
            return category[1]
        }));
    })

    return(
        <React.Fragment>
            <div className="container p-0">
                <div className="container border border-2 border-dark pb-5 mb-5">
                    <img className="w-100" src={logo} alt="logo"/>
                    <div className="container d-flex justify-content-center">
                        <div className="text-center mx-3">
                            <a href="https://www.facebook.com/scott.bianchi.18" alt="Facebook" className="link-dark text-decoration-none">
                                <FontAwesomeIcon icon={faFacebook} size="3x" />
                                <h3>Facebook</h3>
                            </a>
                        </div>
                        <div className="text-center mx-3">
                            <a href="https://www.instagram.com/scizottizart/" alt="Instagram" className="link-dark text-decoration-none">
                                <FontAwesomeIcon icon={faInstagram} size="3x" />
                                <h3>@scizottizart</h3>
                            </a>
                        </div>
                        <div className="text-center mx-3">
                            {/* TODO: Make email icon open contact form modal on click */}
                            <a className="nav-link">
                                <FontAwesomeIcon icon={faEnvelope} size="3x" />
                                <h3>Email Me</h3>
                            </a>
                        </div>
                    </div>
                </div>
                <h1 className="pt-5">my works</h1>
                <div className="container border">
                    {categories.map((category) => {
                        return(
                            <div className="container d-flex justify-content-around my-5">
                                <div className="col-4 border">
                                    <h3>{category[1]}</h3>
                                    <p>Brief description about category</p>
                                    <a href="/animals">View All</a>
                                </div>
                                <div id="carouselExampleControls" className="carousel slide col-6 border" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                        <img src="..." className="d-block w-100" alt="image" />
                                        </div>
                                        <div className="carousel-item">
                                        <img src="..." className="d-block w-100" alt="image" />
                                        </div>
                                        <div className="carousel-item">
                                        <img src="..." className="d-block w-100" alt="image" />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <h1>about me</h1>
                <div className="container border">
                    <p>About</p>
                </div>
            </div>
        </React.Fragment>
    )
}