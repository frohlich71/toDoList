import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:7287/'
})

export default api