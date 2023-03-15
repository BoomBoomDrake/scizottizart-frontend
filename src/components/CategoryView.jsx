import React from "react";

import ItemCard from "./ItemCard";

export default function CategoryView(props) {
    
    const targetRef = React.useRef();

    React.useEffect(() => {
        scroll();
    })

    // Ensures navbar doesn't overlap page content
    const scroll = () => {
        setTimeout(() => {
            targetRef.current.scrollIntoView({
                behavior: "smooth"
            })
        }, 100)
    }
    
    return (
        <div className="container p-0">
            <span ref={targetRef} className="spacer d-block"></span>
            <h1>{props.category[0].category}</h1>
            <div className="container border border-2 border-dark pb-5 mb-5">
                {props.category.map((obj) => {
                    return(
                        <ItemCard item={obj} addToCart={props.addToCart}/>
                    )
                })}
            </div>
        </div>
    )
}