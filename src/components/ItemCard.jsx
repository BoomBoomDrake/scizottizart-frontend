import React from "react";

export default function ItemCard(props) {

    const initialItemState = {
        _id: props.item._id,
        name: props.item.name,
        img: props.item.img,
        attributes: {},
        quantity: 1,
    };

    const mediums = props.item.mediums

    const initialDisplayMediumState = mediums[0]

    const initialAttributesState = {
        material: initialDisplayMediumState.name,
        finish: initialDisplayMediumState.finishes[0].name,
        size: "5x7",
        price: initialDisplayMediumState.finishes[0].sizes["5x7"],
    }

    const addToCart = props.addToCart;

    const [item, setItem] = React.useState(initialItemState);
    const [attributes, setAttributes] = React.useState(initialAttributesState);
    const [displayMedium, setDisplayMedium] = React.useState(initialDisplayMediumState);
    // const [mediums, setMediums] = React.useState(initialMediumsArr);
    const [displayFinish, setDisplayFinish] = React.useState(displayMedium.finishes[0]);
    const [sizeOptions, setSizeOptions] = React.useState(Object.keys(displayFinish.sizes));

    const [added, setAdded] = React.useState(false);

    const sizeRef = React.useRef();
    const materialRef = React.useRef();
    const finishRef = React.useRef();
    const quantRef = React.useRef();

    React.useEffect(() => {
      if(added) {
        addToCart(item);
        setAdded(false);
      } else return
    }, [added, addToCart, item])


    const filterMediumsByName = (query) => {
        const filtered = mediums.filter((medium) => {
            return query === medium.name
        })

        return filtered.length !== 0 ? filtered[0] : "error";
    }

    const filterFinishesByName = (query) => {
      const filtered = displayMedium.finishes.filter(finish => {
        return query === finish.name;
      })

      return filtered.length !== 0 ? filtered[0] : "error";
    }

    const resetItem = () => {
        setItem(initialItemState);
    }

    const handleMaterialSelectChange = (selectObject) => {
        let value = selectObject.value

        let newDisplayMedium = filterMediumsByName(value)
        let newDisplayFinish = newDisplayMedium.finishes[0]
        let newSizeOptions = Object.keys(newDisplayFinish.sizes)

        setDisplayMedium(newDisplayMedium);
        setDisplayFinish(newDisplayFinish);
        setSizeOptions(newSizeOptions);
        setAttributes({
          material: newDisplayMedium.name,
          finish: newDisplayFinish.name,
          size: newSizeOptions[0],
          price: newDisplayFinish.sizes[newSizeOptions[0]],
        })
    }

    const handleFinishChange = (selectObject) => {
        let value = selectObject.value;

        let newDisplayFinish = filterFinishesByName(value);
        let newSizeOptions = Object.keys(newDisplayFinish.sizes)

        setDisplayFinish(newDisplayFinish);
        setSizeOptions(newSizeOptions);
        setAttributes({
          ...attributes,
          finish: newDisplayFinish.name,
          size: newSizeOptions[0],
          price: newDisplayFinish.sizes[newSizeOptions[0]],
        })
    }

    const handleSizeChange = (selectObject) => {
      let value = selectObject.value

      let newPrice = displayFinish.sizes[value];

      setAttributes({
        ...attributes,
        size: value,
        price: newPrice,
      })
    }

    const handleQuantChange = (selectObject) => {
      let value = selectObject.value
      setItem({...item, quantity: Number(value)});
    }

    const handleAddToCartClick = () => {
      setItem({...item, attributes: attributes});
      setAdded(true);
    }

    return(
      <React.Fragment>
        <div className="container d-flex flex-column justify-content-between col-4 mb-3" style={{width: 18 + "rem"}}>
          <img src={props.item.img} className=" d-block mx-auto img-fluid mt-5" alt="preview" />
          <h4 className="text-center my-2">{props.item.name}</h4>
          <button
            type="button"
            className="btn btn-dark"
            data-bs-toggle="modal"
            data-bs-target={`#A${props.index}Modal`}
            onClick={() => console.log(sizeOptions)}
          >
            More Info
          </button>
        </div>
        
        {/* Modal for each card */}
        <div
          key={`${props.item._id}Modal`}
          className="modal fade"
          id={`A${props.index}Modal`}
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
                      <label htmlFor="materialSelection" className="mb-2">Material:
                          <select
                              ref={materialRef}
                              name="material"
                              id="materialSelection"
                              className="mx-2"
                              onChange={() => {
                                  handleMaterialSelectChange(materialRef.current);
                              }}
                          >
                              {mediums.map(medium => {
                                  return (
                                      <option key={medium.name} value={medium.name}>{medium.name}</option>
                                  )
                              })}
                          </select>
                      </label>
                      <label htmlFor="finishSelection" className="mb-2">Finish:
                        <select
                          ref={finishRef}
                          name="finish"
                          id="finishSelection"
                          className="mx-2"
                          onChange={() => {
                            handleFinishChange(finishRef.current);
                          }}
                        >
                          {displayMedium.finishes.map(finish => {
                            return (
                              <option key={finish.name} value={finish.name}>{finish.name}</option>
                            )
                          })}
                        </select>
                      </label>
                      <label htmlFor="sizeSelection" className="mb-2">Size:
                          <select
                            ref={sizeRef}
                            name="size"
                            id="sizeSelection"
                            className="mx-2"
                            onChange={() => {
                              handleSizeChange(sizeRef.current);
                            }}
                          >
                            {sizeOptions.map(size => {
                              return <option key={size} value={size}>{size}: ${displayFinish.sizes[size] / 100}.00</option>
                            })}
                          </select>
                      </label>
                      <label htmlFor="quantitySelection" className="mb-2">Qty:
                        <input
                          ref={quantRef}
                          type="number"
                          name="quantity"
                          id="quantitySelection"
                          className="mx-2"
                          min="1"
                          placeholder="1"
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
                  <h2>${(item.quantity * attributes.price) / 100}.00</h2>
                  <small>*Shipping & tax calculated at checkout</small>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleAddToCartClick}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
}