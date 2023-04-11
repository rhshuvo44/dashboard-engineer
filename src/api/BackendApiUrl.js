import axios from "axios";

const BackendApiUrl = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "content-type": "application/json",
    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export default BackendApiUrl;
