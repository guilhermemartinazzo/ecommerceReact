import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: "78165289-9285-49c9-b00b-2e2128e9954f",
  },
});


export default api;
