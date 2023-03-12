import React from "react";
import { Outlet } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function Root() {

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg fixed-top pt-4">
                <div className="container p-0">
                    {/*span pushes navbar-toggler to right on collapse*/}
                    <span className="nav-brand"></span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-nav container navbar-collapse collapse justify-content-between px-5 pt-3" id="navbarCollapse">
                        <div className="nav-item">
                            <Link
                                className="nav-link p-0 align-self-end"
                                to={{ pathname: "/"}}
                                state={{ref: "home"}}
                            >
                                Home
                            </Link>
                        </div>
                        <div className="nav-item">
                            <Link
                                className="nav-link p-0 align-self-end"
                                to={{ pathname: "/", hash: "#works",}}
                                state={{ref: "works"}}
                            >
                                My Works
                            </Link>
                        </div>
                        <div className="nav-item">
                            <Link
                                className="nav-link p-0 align-self-end"
                                to={{ pathname: "/", hash: "#about",}}
                                state={{ref: "about"}}
                            >
                                About Me
                            </Link>
                        </div>
                        <div className="nav-item">
                            <button href="" className="nav-link p-0 align-self-end btn" data-bs-toggle="modal" data-bs-target="#contactForm">
                                Contact Me
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </React.Fragment>
    )
}