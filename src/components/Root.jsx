import React from "react";
import { Outlet } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import ContactForm from "./ContactForm";

export default function Root() {

    // To enable scrolling to href coming from a page other than HomePage
    const fromNavBarState = {fromNavBar: true};

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg fixed-top pt-5 pb-3" style={{backgroundColor: "#f6e7d8"}}>
                <div className="container p-0">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav container justify-content-between px-5">
                            <Link 
                                className="nav-link p-0 align-self-end"
                                to={{ pathname: "/"}}
                                state={{ref: "home"}}
                            >
                                Home
                            </Link>
                            <Link 
                                className="nav-link p-0 align-self-end"
                                to={{ pathname: "/", hash: "#works",}}
                                state={{ref: "works"}}
                            >
                                My Works
                            </Link>
                            <Link 
                                className="nav-link p-0 align-self-end"
                                to={{ pathname: "/", hash: "#about",}}
                                state={{ref: "about"}}
                            >
                                About Me
                            </Link>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </React.Fragment>
    )
}