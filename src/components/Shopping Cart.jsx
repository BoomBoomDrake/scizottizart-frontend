import React from "react";

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
          total += item.price * item.quantity;
        });
    
        return (Math.round(total * 100) / 100).toFixed(2);
    };

    const calcTax = () => {
        return (Math.round(calcSubTotal(props.cart) * 0.0775 * 100) / 100).toFixed(2);
    };
    
    const calcTotal = () => {
        return (
          Number(calcSubTotal(props.cart)) +
          Number(calcTax(props.cart)) +
          shippingCost
        ).toFixed(2);
    };

    return (
        <React.Fragment>
            <a href="" className="nav-link p-0 align-self-end" data-bs-toggle="modal" data-bs-target="#shoppingCart">
                Shopping Cart
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
                                        <tr>
                                            <th scope="row">
                                                <img src={props.cart[0].img} alt="" style={{ width: 6 + "em", height: 8 + "em" }}/>
                                            </th>
                                            <td className="align-middle">{props.cart[0].name}</td>
                                            <td className="align-middle">
                                                <ul>
                                                    <li>medium</li>
                                                    <li>size</li>
                                                    <li>finish</li>
                                                </ul>
                                            </td>
                                            <td className="align-middle">2</td>
                                            <td className="align-middle">$50.00</td>
                                            <td className="align-middle">$100.00</td>
                                        </tr>
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
                                        <p>Shipping: ${shippingCost}</p>
                                    </li>
                                    <li>
                                        <p>Tax: ${calcTax()}</p>
                                    </li>
                                    <li>
                                        <h3>Total: ${calcTotal()}</h3>
                                    </li>
                                </ul>
                                <button className="btn btn-dark" onClick={ () => props.createCheckoutSession(props.cart)}>
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