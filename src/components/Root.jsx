import React from "react";
import { Link, Outlet } from "react-router-dom";

import ContactForm from "./ContactForm";

export default function Root() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg pt-5 pb-3">
                <div className="container p-0">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav container justify-content-between px-5">
                            <Link className="nav-link p-0 align-self-end" to="/">
                                Home
                            </Link>
                            <Link className="nav-link p-0 align-self-end" to="/#works">
                                My Works
                            </Link>
                            <Link className="nav-link p-0 align-self-end" to="/#about">
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