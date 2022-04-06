import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:9090/api/usr-mgt/contact",
    headers: {
        "Content-type": "application/json"
    }
});