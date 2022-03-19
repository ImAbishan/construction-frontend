import axios from "axios";
export default axios.create({
    baseURL: "localhost:9090/api/usr-mgt",
    headers: {
        "Content-type": "application/json"
    }
});