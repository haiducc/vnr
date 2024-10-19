import axios from "axios";

const baseUrl = process.env.TOKEN_SECRET;
const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default axiosInstance;