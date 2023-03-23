import React from "react";
import plus from "../images/plus-solid.svg";
import minus from "../images/minus-solid.svg";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShoppingCart(props) {

    const shippingCost = 9.99;

    const findQuantity = (arr) => {
        let total = 0;
        if (arr.length === 0) return `${total} items`;

        arr.map((item) => {
            total += item.quantity;
        });

        return total === 1 ? `${total} item` : `${total} items`;
    };

    const calcSubTotal = () => {
        let total = 0;
        props.cart.map((item) => {
          total += item.attributes.price * item.quantity;
        });
    
        return (total / 100).toFixed(2);
    };

    const calcTax = () => {
        return (Math.round(calcSubTotal(props.cart) * 0.0775 * 100) / 100).toFixed(2);
    };
    
    const calcTotal = () => {
        return (
          Number(calcSubTotal()) +
          Number(calcTax()) +
          (calcSubTotal() >= 100.00 ? 0 : shippingCost)
        ).toFixed(2);
    };

    const calcItemTotal = (item) => {
        return ((item.attributes.price * item.quantity) / 100).toFixed(2);
    }

    return (
        <React.Fragment>
            <a href="" id="cartIcon" className="nav-link p-0 align-self-end rounded-circle" data-bs-toggle="modal" data-bs-target="#shoppingCart">
                <div className="d-flex flex-column align-items-center">
                    <p className="m-0">View Cart</p>
                    <span className="badge bg-danger mb-1" style={{display: props.cart.length === 0 ? "none" : "block"}}>{findQuantity(props.cart)}</span>
                    <FontAwesomeIcon icon={faCartShopping} size="2x"/>
                </div>
            </a>
            <div className="modal fade" id="shoppingCart" tabIndex="-1" aria-labelledby="" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-fullscreen-lg-down row">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="col">
                                <h2 className="pt-3">Shopping Cart</h2>
                                <p>{findQuantity(props.cart)}</p>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {props.cart.length === 0 ? (
                                <p className="text-grey">Cart Empty!</p>
                            ) : (
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="col-2">Image</th>
                                            <th scope="col" className="col-2">Product</th>
                                            <th scope="col" className="col-3">Attributes</th>
                                            <th scope="col" className="col-1">Qty</th>
                                            <th scope="col" className="2">Price Per</th>
                                            <th scope="col" className="2">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.cart.map((item) => {
                                            return (
                                                <tr>
                                                    <th scope="row" className="col-2">
                                                        <img src={item.img} alt="" style={{ width: 6 + "em", height: 8 + "em" }}/>
                                                    </th>
                                                    <td className="align-middle col-2">{item.name}</td>
                                                    <td className="align-middle col-3">
                                                        <ul>
                                                            <li>Material: {item.attributes.material}</li>
                                                            <li>Size: {item.attributes.size}</li>
                                                            <li>Finish: {item.attributes.finish}</li>
                                                        </ul>
                                                    </td>
                                                    <td className="align-middle col-1">
                                                        <div className="d-flex flex-column-reverse align-items-center">
                                                            <button
                                                                data-add={item.id}
                                                                className="btn border-top"
                                                                onClick={() => {
                                                                props.decItemCount(item);
                                                                }}
                                                            >
                                                                <img src={minus} alt="plus" style={{ width: .5 + "em" }}/>
                                                            </button>
                                                            {item.quantity}
                                                            <button
                                                                data-add={item.id}
                                                                className="btn border-bottom"
                                                                onClick={() => {
                                                                props.incItemCount(item);
                                                                }}
                                                            >
                                                                <img src={plus} alt="plus" style={{ width: .5 + "em" }}/>
                                                            </button>
                                                        </div>
                                                        {/* <input type="number" name="quantity" value={item.quantity} onChange={handleQuantityChange} /> */}
                                                    </td>
                                                    <td className="align-middle col-2">${(item.attributes.price / 100).toFixed(2)}</td>
                                                    <td className="align-middle col-2">${calcItemTotal(item)}</td>
                                                    <td className="align-middle">
                                                        <button
                                                        type="button"
                                                        className="btn-close"
                                                        aria-label="Close"
                                                        onClick={() => props.removeFromCart(item)}
                                                        ></button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            )}
                        </div>
                        <div className="modal-footer px-5">
                            <div className="px-4">
                                <ul className="list-unstyled">
                                    <li>
                                        <p>Subtotal: ${calcSubTotal()}</p>
                                    </li>
                                    <li>
                                        <p className="mb-0">Shipping: {calcSubTotal() >= 100.00 ? "Free" : `$${shippingCost}`}</p>
                                        <small className="text-muted">Free Shipping For Orders Over $100!</small>
                                    </li>
                                    <li>
                                        <p>Tax: ${calcTax()}</p>
                                    </li>
                                    <li>
                                        <h3>Total: ${calcTotal()}</h3>
                                    </li>
                                </ul>
                                <button className="btn btn-dark" onClick={ () => props.cart.length === 0 ? alert("Cart Empty") : props.createCheckoutSession(props.cart)}>
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}