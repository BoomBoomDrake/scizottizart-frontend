import React from "react";
import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import logo from "../images/logo-nobg.png"
import physicalExamples from "../images/physical-examples.png";
import loader from "../images/spinning-circles.svg";
import profile from "../images/profile.jpg"



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
                            {/* TODO: Make email icon open contact form modal on click */}
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
                    
                    {props.categories.map((category) => { 
                        return(props.categories.indexOf(category) % 2 === 0 ? 
                        (
                            <div key={props.categories.indexOf(category)} className="row my-3">
                                <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
                                    <h1>{category.length === 0 ? "loading" : category[1].category}</h1>
                                    <Link to={category.length === 0 ? "#" : "/"+category[0].category}>View All</Link>
                                </div>
                                <div id={"category" + props.categories.indexOf(category) + "carouselControl"} className="carousel slide col-lg-8 px-5" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                                    <img src={category.length === 0 ? loader : category[0].img} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                                    <h4 className="text-center my-2">{category.length === 0 ? "loading" : category[0].name}</h4>
                                                </div>
                                                <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                                    <img src={category.length === 0 ? loader : category[1].img} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                                    <h4 className="text-center my-2">{category.length === 0 ? "loading" : category[1].name}</h4>
                                                </div>
                                                <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                                    <img src={category.length === 0 ? loader : category[2].img} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                                    <h4 className="text-center my-2">{category.length === 0 ? "loading" : category[2].name}</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                                    <img src={category.length === 0 ? loader : category[3].img} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                                    <h4 className="text-center my-2">{category.length === 0 ? "loading" : category[3].name}</h4>
                                                </div>
                                                <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                                    <img src={category.length === 0 ? loader : category[4].img} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                                    <h4 className="text-center my-2">{category.length === 0 ? "loading" : category[4].name}</h4>
                                                </div>
                                                <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                                    <img src={category.length === 0 ? loader : category[5].img} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                                    <h4 className="text-center my-2">{category.length === 0 ? "loading" : category[5].name}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target={"#category" + props.categories.indexOf(category) + "carouselControl"} data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon me-5" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target={"#category" + props.categories.indexOf(category) + "carouselControl"} data-bs-slide="next">
                                        <span className="carousel-control-next-icon ms-5" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        ) : (
                                <div key={props.categories.indexOf(category)} className="row my-3">
                                    <div id={"category" + props.categories.indexOf(category) + "carouselControl"} className="carousel slide col-lg-8 px-5" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="row">
                                                    <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                                        <img src={category.length === 0 ? loader : category[0].img} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                                        <h4 className="text-center my-2">{category.length === 0 ? "loading" : category[0].name}</h4>
                                                    </div>
                                                    <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                                        <img src={category.length === 0 ? loader : category[1].img} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                                        <h4 className="text-center my-2">{category.length === 0 ? "loading" : category[1].name}</h4>
                                                    </div>
                                                    <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                                        <img src={category.length === 0 ? loader : category[2].img} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                                        <h4 className="text-center my-2">{category.length === 0 ? "loading" : category[2].name}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="row">
                                                    <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                                        <img src={category.length === 0 ? loader : category[3].img} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                                        <h4 className="text-center my-2">{category.length === 0 ? "loading" : category[3].name}</h4>
                                                    </div>
                                                    <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                                        <img src={category.length === 0 ? loader : category[4].img} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                                        <h4 className="text-center my-2">{category.length === 0 ? "loading" : category[4].name}</h4>
                                                    </div>
                                                    <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{height: 400 + "px"}}>
                                                        <img src={category.length === 0 ? loader : category[5].img} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
                                                        <h4 className="text-center my-2">{category.length === 0 ? "loading" : category[5].name}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target={"#category" + props.categories.indexOf(category) + "carouselControl"} data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon me-5" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target={"#category" + props.categories.indexOf(category) + "carouselControl"} data-bs-slide="next">
                                            <span className="carousel-control-next-icon ms-5" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                    <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
                                        <h1>{category.length === 0 ? "loading" : category[1].category}</h1>
                                        <Link to={category.length === 0 ? "#" : "/"+category[0].category}>View All</Link>
                                    </div>
                                </div>
                            )
                        )
                    })}
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