import {http, createCheckout} from "../http-common";

class ItemDataService {
    getItemsByCategory(category) {
        return http.get(`/category/${category}`);
    }

    createCheckoutSessions(cart) {
        return createCheckout.post(`/create-checkout-session`, cart);
    }
}

const DataService = new ItemDataService();

export default DataService;