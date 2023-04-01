import React from "react";

export default function DBItemCard(props) {

    const deleteStoreItem = props.deleteStoreItem
    const updateStoreItem = props.updateStoreItem

    const fileUploadRef = React.useRef();
    const editNameRef = React.useRef();
    const editCategoryRef = React.useRef();

    const [item, setItem] = React.useState(props.item);
    const mediums = item.mediums

    const [editMode, setEditMode] = React.useState(false);
    const [uploadImg, setUploadImg] = React.useState(item.img);
    const [editedName, setEditedName] = React.useState(item.name);
    const [editCategory, setEditedCategory] = React.useState(item.category);
    const [file, setFile] = React.useState(null);

    const [updated, setUpdated] = React.useState(false);

    React.useEffect(() => {
        if (updated) {
            updateStoreItem(item);
            setUpdated(false);
        } else return
    }, [updated, updateStoreItem, item])

    const handleDeleteItemClick = async (itemId) => {
        let response = window.confirm("Permanently Delete Item? This action cannot be undone.");
        if (response) {
            deleteStoreItem(itemId)
        } else return
    }

    const handleModalClose = () => {
        if (editMode) {
            setEditMode(false);
        } else return
    }

    const handleImageUpload = (event) => {
        setFile(event.target.files[0]);
        setUploadImg(URL.createObjectURL(event.target.files[0]));
    }

    const handleNameChange = (inputObject) => {
        let value = inputObject.value;
        setEditedName(value);
    }
    
    const handleCategoryChange = (inputObject) => {
        let value = inputObject.value;
        setEditedCategory(value);
    }

    const handleEditItemClick = (bool) => {
        setEditMode(bool);
    }

    const handleSaveChangesClick = () => {
        setItem({...item, name: editedName, category: editCategory, img: uploadImg, file: file});
        setEditMode(false);
        setUpdated(true);
    }

    return(
      <React.Fragment>
        <div key={props.index} className="container d-flex flex-column justify-content-between col-4 mb-3" style={{width: 18 + "rem"}}>
          <img src={uploadImg} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
          <h4 className="text-center my-2">{item.name}</h4>
          <button
            type="button"
            className="btn btn-dark"
            data-bs-toggle="modal"
            data-bs-target={`#A${props.index}Modal`}
          >
            View Item
          </button>
        </div>
        
        {/* Modal for each card */}
        <div
          key={`${item._id}Modal`}
          className="modal fade"
          id={`A${props.index}Modal`}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">View Item</h1>
                <div className="col mx-5">
                    {editMode ? (
                        <React.Fragment>
                            <button
                                type="button"
                                className="btn btn-success mx-5"
                                onClick={() => handleSaveChangesClick()}
                            >
                                Save Changes
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning mx-5"
                                onClick={() => handleEditItemClick(false)}
                            >
                                Exit Edit Mode
                            </button>
                        </React.Fragment>
                    ) : (
                        <button
                            type="button"
                            className="btn btn-dark mx-5"
                            onClick={() => handleEditItemClick(true)}
                        >
                            Edit Item
                        </button>
                    )}
                </div>
                <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDeleteItemClick(item._id)}
                    style={{display: editMode ? "block" : "none"}}
                >
                    Delete Item
                </button>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={()=> handleModalClose()}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                    <div className="col-6 text-center">
                        <img
                            className="img-fluid rounded mb-3"
                            src={editMode ? uploadImg : item.img}
                            alt="..."
                            style={{ width: 10 + "em", height: 12 + "em" }}
                        />
                        <label htmlFor="" style={{display: editMode ? "block" : "none"}}>Upload Image:
                            <input
                                ref={fileUploadRef}
                                type="file"
                                name="fileItem"
                                onChange={(event) => handleImageUpload(event)}
                            />
                        </label>
                    </div>
                    <div className="border-start col-6">
                      <div className="d-flex flex-column pt-4 gap-3">
                        <div className="row">
                            <p>Item ID: {item._id}</p>
                            {editMode ? (
                                <label htmlFor="">Name:
                                    <input
                                        ref={editNameRef}
                                        type="text"
                                        name="editName"
                                        value={editedName}
                                        onChange={() => handleNameChange(editNameRef.current)}
                                    />
                                </label>
                            ) : (
                                <h4 className="my-2">Name: {item.name}</h4>
                            )}
                            {editMode ? (
                                <label htmlFor="">Category:
                                    <input
                                        ref={editCategoryRef}
                                        type="text"
                                        name="editCategory"
                                        value={editCategory}
                                        onChange={() => handleCategoryChange(editCategoryRef.current)}
                                    />
                                </label>
                            ) : (
                                <h4 className="my-2">Category: {item.category}</h4>
                            )}
                        </div>
                      </div>
                    </div>
                </div>
                <div className="border-top">
                    <h4>Availble Materials and Options: </h4>
                    <div className="row d-flex flex-row">
                        {mediums.map((medium, ind) => {
                            return (
                                <div className="col">
                                    <h5>Material {ind + 1}: {medium.name}</h5>
                                    <h6>Finishes: </h6>
                                    <ul className="">
                                        {medium.finishes.map((finish, ind) => {
                                            return (
                                                <li key={finish.name + (ind + 1)} >
                                                    <p className="m-0">{finish.name}</p>
                                                    <ul>
                                                        {Object.keys(finish.sizes).map((size, index) => {
                                                            return (
                                                                <li key={finish.name + index}>
                                                                    {`${size}: $${finish.sizes[size] / 100}.00`}
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
}