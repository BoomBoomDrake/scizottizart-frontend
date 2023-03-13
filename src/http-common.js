import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:5000/api/v1/store-items",
    headers: {
        "Content-type": "application/json, charset=utf-8",
    }
});

const createCheckout = axios.create({
    baseURL: "http://localhost:5000/api/v1/store-items",
    headers: {
        "Content-type": "application/x-www-form-urlencoded",
    },
})

export {http, createCheckout};