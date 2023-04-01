import axios from "axios";

const http = axios.create({
    baseURL: "https://scizottizart-backend.herokuapp.com/api/v1/store-items",
    headers: {
        "Content-type": "application/json, charset=utf-8",
    }
});

const createCheckout = axios.create({
    baseURL: "https://scizottizart-backend.herokuapp.com/api/v1/store-items",
    headers: {
        "Content-type": "application/x-www-form-urlencoded",
    },
})

const dashboard = axios.create({
    baseURL: "https://scizottizart-backend.herokuapp.com/api/v1/store-items/dashboard",
    headers: {
        "Content-type": "multipart/form-data"
    }
})

export {http, createCheckout, dashboard};