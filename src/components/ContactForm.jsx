import React from "react";
import emailjs from "@emailjs/browser"

export default function ContactForm() {
    const form = React.useRef();

    const sendEmail = (event) => {
        event.preventDefault();
        emailjs
        .sendForm(
            "scottyb_contact_service",
            "scottyb_contact_form",
            form.current,
            "4L2wJCgk3t0JDW7jr"
        )
        .then(
            (result) => {
            alert("Thank you for your submission!");
            window.location.reload();
            },
            (error) => {
            console.log(error.text);
            }
        );
    };

    return(
        <React.Fragment>
            <div class="modal fade" id="contactForm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Contact Me</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form
                                ref={form}
                                onSubmit={sendEmail}
                                className="col mx-auto"
                            >
                                <div className="m-2 form-group">
                                    <label htmlFor="inputName">Name:</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    id="inputName"
                                    placeholder="Enter Name"
                                    />
                                </div>
                                <div className="m-2 form-group">
                                    <label htmlFor="inputEmail">Email address:</label>
                                    <input
                                    type="email"
                                    className="form-control"
                                    name="user_email"
                                    id="inputEmail"
                                    placeholder="Enter email"
                                    />
                                </div>
                                <div className="m-2 form-group">
                                    <label htmlFor="inputMessage">Message:</label>
                                    <textarea
                                    className="form-control"
                                    name="message"
                                    id="inputMessage"
                                    rows="3"
                                    placeholder="Write your message..."
                                    ></textarea>
                                    <div className="row">
                                        <button type="submit" className="btn btn-dark mt-3">
                                        Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}