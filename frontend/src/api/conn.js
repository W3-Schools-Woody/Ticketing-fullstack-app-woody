import axios from "axios";

const BASE_URL = "https://w3-ticketing-n4bb.onrender.com";
const apiConn = axios.create({baseURL: BASE_URL});

export default apiConn;
