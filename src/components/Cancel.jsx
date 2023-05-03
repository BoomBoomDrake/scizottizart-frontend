import React from "react";

import loader from "../images/spinning-circles.svg";

export default function Cancel() {

    React.useEffect(() => {
        setTimeout(() => {
            window.location.replace("http://scizottizart.com/");
        }, 5000)
    })

    return (
        <React.Fragment>
            <span className="spacer d-block"></span>
            <div className="container border border-2 border-dark pb-5 mb-5 text-center">
                <h2>Transaction Cancelled!</h2>
                <p>Rerouting back to homepage.</p>
                <img src={loader} alt="spinning circles loader" />
            </div>
        </React.Fragment> 
    )
}