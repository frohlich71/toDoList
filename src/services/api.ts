import axios from "axios";

const api = axios.create({
  baseURL: 'https://localhost:7287',
})

export default api