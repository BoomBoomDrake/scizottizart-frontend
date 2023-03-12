import http from "../http-common";

class ItemDataService {
    getItemsByCategory(category) {
        return http.get(`/category/${category}`);
    }
}

const DataService = new ItemDataService();

export default DataService;