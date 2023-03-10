import React from "react";

export default function CategoryView({category}) {
    return (
        <img src={category[0].img} alt="test" />
    )
}