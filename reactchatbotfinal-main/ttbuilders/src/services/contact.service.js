import httpCommon from "../http-common.js";

class ContactService {
    getAll() {
        return httpCommon.get("/contact");
    }
    // get(id) {
    //     return http.get(`/tutorials/${id}`);
    // }
    create(data) {
        return httpCommon.post("/contact", data);
    }
    // update(id, data) {
    //     return http.put(`/tutorials/${id}`, data);
    // }
    // delete(id) {
    //     return http.delete(`/tutorials/${id}`);
    // }
    // deleteAll() {
    //     return http.delete(`/tutorials`);
    // }
    // findByTitle(title) {
    //     return http.get(`/tutorials?title=${title}`);
    // }
}
export default new ContactService();