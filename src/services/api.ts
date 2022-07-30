import axios from "axios";

const api = axios.create({
  baseURL: 'https://localhost:7287/v1',
})

export default api