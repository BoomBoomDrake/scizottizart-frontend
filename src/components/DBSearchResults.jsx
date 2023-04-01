import React from "react";

import DBItemCard from "./DBItemCard";
import loader from "../images/triangle-loader.gif";

export default function DBSearchResults(props) {

    const testMedium1 = {
        name: "Medium 1 Name",
        finishes: [
            {
                name: "Coat 1 Name",
                sizes: {
                    "5x7": 4000,
                    "Size": "Price",
                }
            },
            {
                name: "Coat 2 Name",
                sizes: {
                    "5x7": 4000,
                    "Size": "Price",
                }
            }
        ]
    }

    const testMedium2 = {
        name: "Medium 2 Name",
        finishes: [
            {
                name: "Coat 1 Name",
                sizes: {
                    "5x7": 4000,
                    "Size": "Price",
                }
            },
            {
                name: "Coat 2 Name",
                sizes: {
                    "5x7": 4000,
                    "Size": "Price",
                }
            }
        ]
    }

    const mediums = [testMedium1, testMedium2];

    const item = {
        _id: 1, 
        name: "Baboon", 
        category: "Animal", 
        img: loader, 
        mediums: mediums 
    }

    const [displayResults, setDisplayResults] = React.useState(props.searchResults);
    
    React.useEffect(() => {
        setDisplayResults(props.searchResults)
    })


    return (
        <div className="container mt-3">
            <h3>Search Results: </h3>
            <div className="container border border-2 border-dark pb-5 mb-5 d-flex flex-wrap justify-content-center">
                {displayResults === null || displayResults === undefined || displayResults.length === 0 ? (
                    <p className="mt-5">No Search Results</p>
                ) : (
                    displayResults.map((dItem, ind) => {
                        return (
                            <DBItemCard index={ind} item={dItem} deleteStoreItem={props.deleteStoreItem} updateStoreItem={props.updateStoreItem}/>
                        )
                    })
                )}
            </div>
        </div>
    )
}