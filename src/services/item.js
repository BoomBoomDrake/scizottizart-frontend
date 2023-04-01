import {http, createCheckout, dashboard} from "../http-common";

class ItemDataService {

    getItemsByCategory(category) {
        return http.get(`/category/${category}`);
    }

    find(query, by = "name") {
        return http.get(`?${by}=${query}`)
    }

    addStoreItem(data) {
        return dashboard.post("/add-store-item", data);
    }

    updateStoreItem(data) {
        return dashboard.post(`/update/${data._id}`, data);
    }

    deleteStoreItem(id) {
        return dashboard.post(`/delete/${id}`);
    }

    createCheckoutSessions(cart) {
        return createCheckout.post(`/create-checkout-session`, cart);
    }

}

const DataService = new ItemDataService();

export default DataService;