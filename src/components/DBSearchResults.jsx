import React from "react";

import DBItemCard from "./DBItemCard";

export default function DBSearchResults(props) {

    const [displayResults, setDisplayResults] = React.useState(props.searchResults);
    
    React.useEffect(() => {
        setDisplayResults(props.searchResults)
    }, [props.searchResults])


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