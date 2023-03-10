import http from "../http-common";

class ItemDataService {
    getItemsByCategory(category) {
        return http.get(`/category/${category}`);
    }
}

export default new ItemDataService();