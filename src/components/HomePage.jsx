import React from "react";
import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import logo from "../images/logo-nobg.png"
import physicalExamples from "../images/works-jumbo.jpg";
import profile from "../images/profile.jpg"

import baboon from "../images/preview-images/baboon.jpg";
import jelly from "../images/preview-images/jelly.png";
import nickeyDog from "../images/preview-images/nickeyDog.jpg";
import owl from "../images/preview-images/Owl.png";
import seahorse from "../images/preview-images/SeahorseKing.png";
import crab from "../images/preview-images/TasmanianKIngCrab.png";

import adam from "../images/preview-images/adamSCollage.jpg";
import amelia from "../images/preview-images/Amelia.png";
import batman from "../images/preview-images/batman.jpg";
import brainSoup from "../images/preview-images/brainSoup.jpg";
import eze from "../images/preview-images/eZE.jpg";
import fightClub from "../images/preview-images/fightClub.jpg";

import bobby from "../images/preview-images/bobbyBucheit.jpg";
import bryan from "../images/preview-images/Bryan Danielson.png";
import cardinals from "../images/preview-images/cardinalsBaseball.jpg";
import bettyDavis from "../images/preview-images/Betty Davis.png";
import bettyWhite from "../images/preview-images/bettyWhiteXmas.png";
import biggums from "../images/preview-images/biggums.jpg";

export default function HomePage(props) {

    let {state} = useLocation();
    const homeTargetRef = React.useRef();
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
            } else if (state.ref === "home") {
                homeTargetRef.current.scrollIntoView({
                    behavior: "smooth"
                })
            } 
            
        }, 100);
    }

    return(
        <React.Fragment>
            <div className="container p-0">
                <span ref={homeTargetRef} className="spacer d-block"></span>
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
                            <button className="link-dark border-0" id="emailIcon" data-bs-toggle="modal" data-bs-target="#contactForm">
                                <FontAwesomeIcon icon={faEnvelope} size="3x" />
                                <h3>Email Me</h3>
                            </button>
                        </div>
                    </div>
                </div>
                <span ref={worksTargetRef} className="spacer d-block"></span>
                <h1 id="works">my works</h1>
                <div className="container border border-2 border-dark pb-5 mb-5">
                    <div className="row d-flex justify-content-between py-5">
                        <div className="ms-5 col-lg-5 align-middle">
                            <img src={physicalExamples} alt="physical-examples" className="w-100"/>
                            
                            <h2 className="mt-5"><em>Free shipping for orders over $100!</em></h2>
                        </div>
                        <div className="col-lg-5">
                            <h2>All of my work is available for purchase in the following formats:</h2>
                            <ul>
                                <li><h3>William Turner Paper</h3></li>
                                <p>A traditional mold made watercolor paper that feautures a distinct, highlytexture surface. The natural white cotton fiber paper has a uniquely toothy feel and surface texture.</p>
                                
                                <div className="mb-3">
                                    <p>Available Sizes:</p>
                                    <ul>
                                        <li>5" x 7" (w/ Matted Finish: 8" x 10")</li>
                                        <li>8" x 10" (w/ Matted Finish: 11" x 14")</li>
                                        <li>11" x 17" (w/ Matted Finish: 16" x 20")</li>
                                    </ul>
                                </div>

                                <li><h3>Canvas Board Print</h3></li>
                                <p>An acid-free, lignin-free heavyweight cotton- poly blend, the elegantly tectured canvas features a bright white point, exceptionally high Dmax and wide color gamut.</p>

                                <div className="mb-3">
                                    <p>Available Sizes:</p>
                                    <ul>
                                        <li>5" x 7"</li>
                                        <li>8" x 10"</li>
                                        <li>11" x 17"</li>
                                        <li>18" x 24"</li>
                                    </ul>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div className="row my-3">
                        <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
                            <h1>Animals</h1>
                            <Link to={"/animals"}>View All</Link>
                        </div>
                        <div id={"animalCarouselControl"} className="carousel slide col-lg-8 px-5" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                            <img src={baboon} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                            <h4 className="text-center my-2">Baboon</h4>
                                        </div>
                                        <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                            <img src={jelly} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                            <h4 className="text-center my-2">Jelly</h4>
                                        </div>
                                        <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                            <img src={nickeyDog} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                            <h4 className="text-center my-2">Nickey</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                            <img src={owl} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                            <h4 className="text-center my-2">Owl</h4>
                                        </div>
                                        <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                            <img src={seahorse} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                            <h4 className="text-center my-2">Seahorse King</h4>
                                        </div>
                                        <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                            <img src={crab} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                            <h4 className="text-center my-2">Tasmanian King Crab</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target={"#animalCarouselControl"} data-bs-slide="prev">
                                <span className="carousel-control-prev-icon me-5" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target={"#animalCarouselControl"} data-bs-slide="next">
                                <span className="carousel-control-next-icon ms-5" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
                            <h1>Sketches</h1>
                            <Link to={"/sketches"}>View All</Link>
                        </div>
                        <div id={"sketchesCarouselControl"} className="carousel slide col-lg-8 px-5" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                            <img src={adam} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                            <h4 className="text-center my-2">Adam S. Collage</h4>
                                        </div>
                                        <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                            <img src={amelia} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                            <h4 className="text-center my-2">Amelia</h4>
                                        </div>
                                        <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                            <img src={batman} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                            <h4 className="text-center my-2">Batman</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                            <img src={brainSoup} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                            <h4 className="text-center my-2">Brain Soup</h4>
                                        </div>
                                        <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                            <img src={eze} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                            <h4 className="text-center my-2">E-Z-E</h4>
                                        </div>
                                        <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                            <img src={fightClub} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                            <h4 className="text-center my-2">Fight Club</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target={"#sketchesCarouselControl"} data-bs-slide="prev">
                                <span className="carousel-control-prev-icon me-5" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target={"#sketchesCarouselControl"} data-bs-slide="next">
                                <span className="carousel-control-next-icon ms-5" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
                            <h1>Celebrities</h1>
                            <Link to={"/celebrities"}>View All</Link>
                        </div>
                        <div id={"celebritiesCarouselControl"} className="carousel slide col-lg-8 px-5" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                            <img src={bobby} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                            <h4 className="text-center my-2">Bobby Bucheit</h4>
                                        </div>
                                        <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                            <img src={bryan} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                            <h4 className="text-center my-2">Bryan Danielson</h4>
                                        </div>
                                        <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                            <img src={cardinals} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                            <h4 className="text-center my-2">Cardinals Baseball</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                            <img src={bettyDavis} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                            <h4 className="text-center my-2">Betty Davis</h4>
                                        </div>
                                        <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                            <img src={bettyWhite} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                            <h4 className="text-center my-2">Betty White X-Mas</h4>
                                        </div>
                                        <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                            <img src={biggums} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                            <h4 className="text-center my-2">Tyrone Biggums</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target={"#celebritiesCarouselControl"} data-bs-slide="prev">
                                <span className="carousel-control-prev-icon me-5" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target={"#celebritiesCarouselControl"} data-bs-slide="next">
                                <span className="carousel-control-next-icon ms-5" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <span ref={aboutTargetRef} className="spacer d-block"></span>
                <h1>about me</h1>
                <div className="container border border-2 border-dark pb-5 mb-5">
                    <div className="row">
                        <div className="col-lg-6 text-center pt-5 mb-5" style={{height: 500 + "px", overflow: "hidden"}}>
                            <img src={profile} alt="profile" style={{objectFit: "cover", overflow: "hidden"}} />
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center" >
                            <h1>Meet Scott Bianchi</h1>
                            <h5 className="lh-lg">My name is Scott Bianchi, I am an independent artist with a background in drawing, printmaking, and painting. There is a fascination that comes from pop culture references, celebrities, and heroes that spring memories of a certain year or age that inspire my work. Making my art pop with color and my own sketching style, I like to bring these memories to life and to share with others that remember them in their own way.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}