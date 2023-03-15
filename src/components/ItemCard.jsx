import React from "react";

export default function ItemCard(props) {

    const initialItemState = {
        id: props.item._id,
        name: props.item.name,
        attributes: attributes,
        quantity: 1,
    };

    const initialMediumsArr = props.item.mediums

    const initialDisplayMediumState = initialMediumsArr[0]

    const initialAttributesState = {
        material: "William Turner Paper",
        coat: "None",
        size: "5x9",
        price: 4000,
    }

    const [item, setItem] = React.useState(initialItemState);
    const [attributes, setAttributes] = React.useState(initialAttributesState);
    const [displayMedium, setDisplayMedium] = React.useState(initialDisplayMediumState);
    const [mediums, setMediums] = React.useState(initialMediumsArr);
    const [displayCoat, setDisplayCoat] = React.useState(displayMedium.coats[0]);
    const [sizeOptions, setSizeOptions] = React.useState(Object.keys(displayCoat.sizes));

    const sizeRef = React.useRef();
    const materialRef = React.useRef();
    const coatRef = React.useRef();
    const quantRef = React.useRef();


    const filterMediumsByName = (query) => {
        const filtered = mediums.filter(medium => {
            if (query === medium.name) return medium;
        })

        return filtered.length !== 0 ? filtered[0] : "error";
    }

    const filterCoatsByName = (query) => {
      const filtered = displayMedium.coats.filter(coat => {
        if (query === coat.name) return coat;
      })

      return filtered.length !== 0 ? filtered[0] : "error";
    }

    const resetItem = () => {
        setItem(initialItemState);
    }

    const handleMaterialSelectChange = (selectObject) => {
        let value = selectObject.value

        let newDisplayMedium = filterMediumsByName(value)
        let newDisplayCoat = newDisplayMedium.coats[0]
        let newSizeOptions = Object.keys(newDisplayCoat.sizes)

        setDisplayMedium(newDisplayMedium);
        setDisplayCoat(newDisplayCoat);
        setSizeOptions(newSizeOptions);
        setAttributes({
          material: newDisplayMedium.name,
          coat: newDisplayCoat.name,
          size: newSizeOptions[0],
          price: newDisplayCoat.sizes[newSizeOptions[0]],
        })
    }

    const handleCoatChange = (selectObject) => {
        let value = selectObject.value;

        let newDisplayCoat = filterCoatsByName(value);
        let newSizeOptions = Object.keys(newDisplayCoat.sizes)

        setDisplayCoat(newDisplayCoat);
        setSizeOptions(newSizeOptions);
        setAttributes({
          ...attributes,
          coat: newDisplayCoat.name,
          size: newSizeOptions[0],
          price: newDisplayCoat.sizes[newSizeOptions[0]],
        })
    }

    const handleSizeChange = (selectObject) => {
      let value = selectObject.value

      let newPrice = displayCoat.sizes[value];

      setAttributes({
        ...attributes,
        size: value,
        price: newPrice,
      })
    }

    const handleQuantChange = (selectObject) => {
      let value = selectObject.value
      setItem({...item, quantity: value});
    }

    return(
        <div
              className="card m-3"
              key={props.item._id}
              style={{ width: 18 + "rem" }}
            >
              <img src={props.item.img} className="card-img-top" alt="..." />
              <div className="card-body border-top">
                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-text">
                  Description of image/Size availability/Pricing?
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target={`#${props.item.name}Modal`}
                >
                  More Info
                </button>
              </div>

              {/* Modal for each card */}
              <div
                className="modal fade"
                id={`${props.item.name}Modal`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5">Add To Cart</h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={() => resetItem()}
                      ></button>
                    </div>
                    <div className="modal-body row">
                      <div className="col-6 text-center">
                        <img
                          className="img-fluid rounded mb-3"
                          src={props.item.img}
                          alt="..."
                          style={{ width: 10 + "em", height: 12 + "em" }}
                        />
                      </div>
                      <div className="border-start col-6">
                        <div className="d-flex flex-column pt-4 gap-3">
                          <div className="row">
                            <label htmlFor="materialSelection">Material:
                                <select 
                                    ref={materialRef}
                                    name="material" 
                                    id="materialSelection" 
                                    onChange={() => {
                                        handleMaterialSelectChange(materialRef.current);
                                    }}
                                >
                                    {mediums.map(medium => {
                                        return (
                                            <option value={medium.name}>{medium.name}</option>
                                        )
                                    })}
                                </select>
                            </label>
                            <label htmlFor="coatSelection">Coat:
                              <select 
                                ref={coatRef}
                                name="coat"
                                id="coatSelection"
                                onChange={() => {
                                  handleCoatChange(coatRef.current);
                                }}
                              >
                                {displayMedium.coats.map(coat => {
                                  return (
                                    <option value={coat.name}>{coat.name}</option>
                                  )
                                })}
                              </select>
                            </label>
                            <label htmlFor="sizeSelection">
                                <select 
                                  ref={sizeRef}
                                  name="size" 
                                  id="sizeSelection"
                                  onChange={() => {
                                    handleSizeChange(sizeRef.current);
                                  }}
                                >
                                  {sizeOptions.map(size => {
                                    <option value={size}>{size}: {displayCoat.sizes[size]}</option>
                                  })}
                                </select>
                            </label>
                            <label htmlFor="quantitySelection">Qty:
                              <input
                                ref={quantRef}
                                type="number" 
                                name="quantity" 
                                id="quantitySelection"
                                min="1"
                                max="20"
                                onChange={() => {
                                  handleQuantChange(quantRef.current);
                                }}
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <div className="col">
                        <h2>${(item.quantity * item.price) / 100}.00</h2>
                        <small>*Shipping & tax calculated at checkout</small>
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                        onClick={() => {
                          props.addToCart(item);
                          resetItem();
                        }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}