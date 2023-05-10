import React from "react";

export default function DBAddItem(props) {

    const [name, setName] = React.useState(null);
    const [file, setFile] = React.useState(null);
    const [category, setCategory] = React.useState("Animals");
    const [addNewCategory, setAddNewCategory] = React.useState(false);

    const availableCategories = ["Animals", "Sketches", "Celebrities"];
    const [imgPreview, setImgPreview] = React.useState(null);

    const handleAddNewCategory = (bool) => {
        setAddNewCategory(bool);
    }

    const handleFileUpload = (event) => {
        setFile(event.target.files[0]);
        setImgPreview(URL.createObjectURL(event.target.files[0]));
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleFormSubmission = async (event) => {
        event.preventDefault();
        props.addStoreItem({name: name, category: category, file: file});
    }


    return(
        <React.Fragment>
            <form action="" method="POST" encType="multipart/form-data" id="imageForm" className="container-md border border-dark" onSubmit={(event) => handleFormSubmission(event)}>
                <div className="row g-3 mb-3">
                    <div className="col">
                        <label htmlFor="fileItem" className="form-label">Upload Image:
                            <input type="file" id="fileItem" name="fileItem" className="form-control" onChange={(event) => handleFileUpload(event)}/>
                        </label>
                    </div>
                    <div className="">                    
                        <img id="uploadedImage" src={imgPreview} alt="uploaded-preview" style={{width: 200 + "px", display: imgPreview ? "block" : "none"}} />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="from-label">Name:
                        <input type="text" name="name" id="name" className="form-control" onChange={(event) => handleNameChange(event)}/>
                    </label>
                </div>
                <div className="mb-3">
                    {!addNewCategory ? (
                        <React.Fragment>
                            <label htmlFor="category" className="from-label">Category:
                                <select name="category" id="category" className="form-control" onChange={(event) => handleCategoryChange(event)}>
                                    {availableCategories.map((cat) => {
                                        return (
                                            <option key={cat} value={cat}>{cat}</option>
                                        )
                                    })}
                                </select>
                            </label>
                            <button className="btn btn-dark mx-3" type="button" onClick={() => handleAddNewCategory(true)}>
                                Enter New Category
                            </button>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <label htmlFor="category" className="form-label">Category:
                                <input type="text" name="category" id="category" className="form-control" onChange={(event) => handleCategoryChange(event)}/>
                            </label>
                            <button className="btn btn-dark mx-3" type="button" onClick={() => handleAddNewCategory(false)}>
                                Choose From Dropdown
                            </button>
                        </React.Fragment>
                    ) }
                </div>
                <div className="mb-3">
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </React.Fragment>
    )
}