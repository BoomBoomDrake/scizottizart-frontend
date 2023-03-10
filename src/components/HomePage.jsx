import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import logo from "../images/logo-nobg.png"
import physicalExamples from "../images/physical-examples.png";



export default function HomePage({categories}) {

    let {state} = useLocation();
    const worksTargetRef = React.useRef();
    const aboutTargetRef = React.useRef();

    React.useEffect(() => {
        scrollToTarget();
    })

    function scrollToTarget() {
        setTimeout(() => {
            if(!state) return
            if(state.ref === "works") {
                worksTargetRef.current.scrollIntoView({
                    behavior: "smooth"
                })
            } else if (state.ref === "about") {
                aboutTargetRef.current.scrollIntoView({
                    behavior: "smooth"
                })
            }
            
        }, 100);
    }

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
                <h1 id="works" ref={worksTargetRef} className="pt-5">my works</h1>
                <div className="container border border-2 border-dark pb-5 mb-5">
                    <div className="container d-flex justify-content-between py-5">
                        <div className="col-5 align-self-center">
                            <img src={physicalExamples} alt="physical-examples" className="w-100"/>
                        </div>
                        <div className="col-5">
                            <h2>All of my work is available for purchase in the following formats:</h2>
                            <ul>
                                <li><h3>William Turner Paper</h3></li>
                                <p>A traditional mold made watercolor paper that feautures a distinct, highlytexture surface. The natural white cotton fiber paper has a uniquely toothy feel and surface texture.</p>
                                
                                <div className="mb-3">
                                    <p>Available Sizes:</p>
                                    <ul>
                                        <li>5" x 7"</li>
                                        <li>9" x 12"</li>
                                        <li>11" x 18"</li>
                                    </ul>
                                </div>

                                <li><h3>Canvas Board Print</h3></li>
                                <p>An acid-free, lignin-free heavyweight cotton- poly blend, the elegantly tectured canvas features a bright white point, exceptionally high Dmax and wide color gamut.</p>

                                <div className="mb-3">
                                    <p>Available Sizes:</p>
                                    <ul>
                                        <li>5" x 7"</li>
                                        <li>9" x 12"</li>
                                        <li>11" x 18"</li>
                                    </ul>
                                </div>
                            </ul>
                        </div>
                    </div>

                    {categories.map((category) => {
                        return( categories.indexOf(category) % 2 === 0 ? (
                            <div key={categories.indexOf(category)} className="container d-flex justify-content-around my-5">
                                <div className="col-4 d-flex flex-column justify-content-center">
                                    <h3>{category[1].category}</h3>
                                    <p>Brief description about category</p>
                                    <a href="/animals">View All</a>
                                </div>
                                <div id={"category" + categories.indexOf(category) + "carouselControl"} className="carousel slide col-6 border" data-bs-ride="carousel">
                                    <div className="carousel-inner bg-dark">
                                        <div className="carousel-item row active">
                                            <div className="container col-4 mb-3" style={{height: 250 + "px"}}>
                                                <img src={category[0].img} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                                <h4 className="text-white text-center my-2">{category[0].name}</h4>
                                            </div>
                                        </div>
                                        <div className="carousel-item row">
                                            <div className="container col-4 mb-3" style={{height: 250 + "px"}}>
                                                <img src={category[1].img} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                                <h4 className="text-white text-center my-2">{category[1].name}</h4>
                                            </div>
                                        </div>
                                        <div className="carousel-item row">
                                            <div className="container col-4 mb-3" style={{height: 250 + "px"}}>
                                                <img src={category[2].img} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                                <h4 className="text-white text-center my-2">{category[2].name}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target={"#category" + categories.indexOf(category) + "carouselControl"} data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target={"#category" + categories.indexOf(category) + "carouselControl"} data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            ) : (
                                <div key={categories.indexOf(category)} className="container d-flex justify-content-around my-5">
                                    <div id={"category" + categories.indexOf(category) + "carouselControl"} className="carousel slide col-6 border" data-bs-ride="carousel">
                                    <div className="carousel-inner bg-dark">
                                        <div className="carousel-item row active">
                                            <div className="container col-4 mb-3" style={{height: 250 + "px"}}>
                                                <img src={category[0].img} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                                <h4 className="text-white text-center my-2">{category[0].name}</h4>
                                            </div>
                                        </div>
                                        <div className="carousel-item row">
                                            <div className="container col-4 mb-3" style={{height: 250 + "px"}}>
                                                <img src={category[1].img} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                                <h4 className="text-white text-center my-2">{category[1].name}</h4>
                                            </div>
                                        </div>
                                        <div className="carousel-item row">
                                            <div className="container col-4 mb-3" style={{height: 250 + "px"}}>
                                                <img src={category[2].img} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                                <h4 className="text-white text-center my-2">{category[2].name}</h4>
                                            </div>
                                        </div>
                                    </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target={"#category" + categories.indexOf(category) + "carouselControl"} data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target={"#category" + categories.indexOf(category) + "carouselControl"} data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                    <div className="col-4 d-flex flex-column align-items-end justify-content-center">
                                        <h3>{category[1].category}</h3>
                                        <p>Brief description about category</p>
                                        <a href="/animals">View All</a>
                                    </div>
                                </div>
                            )
                        )
                    })}
                </div>
                <h1 ref={aboutTargetRef}>about me</h1>
                <div className="container border">
                    <p>About</p>
                </div>
            </div>
        </React.Fragment>
    )
}