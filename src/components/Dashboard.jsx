import React from "react";
import { Outlet, Link } from "react-router-dom";

import "../dashboard.css";

export default function Dashboard(props) {

    const searchRef = React.useRef();
    
    const [by, setBy] = React.useState("name");
    const [query, setQuery] = React.useState(searchRef);

    const find = props.find
    const setSearchResults = props.setSearchResults

    React.useEffect(() => {
        props.setDisplayCartButton(false);
    })

    const handleByChange = (event) => {
        setBy(event.target.value);
    }

    const handleSearchChange = (inputObject) => {
        let value = inputObject.value;
        setQuery(value);
    }

    const handleSearchSubmission = (event) => {
        event.preventDefault();
        // let results = find(query, by);
        // console.log(results);
        setSearchResults(find(query, by));
    }

    return(
        <div className="dashboard">
            <nav className="navbar navbar-expand-lg bg-light"> 
                <div className="container-fluid"> 
                    <Link
                        className="navbar-brand p-0"
                        to={{ pathname: "/dashboard"}}
                    >
                        Dashboard
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span> 
                    </button> 
                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <div className="">
                            <Link
                                className="text-decoration-none text-dark btn border"
                                to={{ pathname: "/dashboard/add-item"}}
                            >
                                Add Item
                            </Link>
                        </div>
                        <form className="mx-0" role="search" onSubmit={(event) => handleSearchSubmission(event)}>
                            <div className="d-flex justify-content-end">
                                <div className="mx-3">
                                    <p className="m-0">Search By: </p>
                                </div>
                                <div className="mx-3">
                                    <label htmlFor="by-name">
                                        <input
                                            type="radio"
                                            name="by"
                                            id="by-name"
                                            value="name"
                                            onChange={(event) => handleByChange(event)}
                                            required
                                        />
                                        Name
                                    </label>
                                </div>
                                <div className="mx-3">
                                    <label htmlFor="by-category">
                                        <input
                                            type="radio"
                                            name="by"
                                            id="by-category"
                                            value="category"
                                            onChange={(event) => handleByChange(event)}
                                            required
                                        />
                                        Category
                                    </label>
                                </div>
                                <div className="mx-3">
                                    <label htmlFor="by-all">
                                        <input
                                            type="radio"
                                            name="by"
                                            id="by-all"
                                            value="all"
                                            onChange={(event) => handleByChange(event)}
                                            required
                                        />
                                        All
                                    </label>
                                </div>
                            </div>

                            <div className="d-flex justify-content-end">
                                <input ref={searchRef} className="me-2" type="search" placeholder="Search" onChange={() => handleSearchChange(searchRef.current)} required={by === "all" ? false : true}/>
                                <button className="btn btn-outline-success" type="submit">
                                    <Link
                                        className="nav-link"
                                        to={{ pathname: "/dashboard"}}
                                    >
                                        Search
                                    </Link>
                                </button>
                            </div>
                        </form> 
                    </div> 
                </div> 
            </nav>
            <Outlet />
        </div>
    )
}