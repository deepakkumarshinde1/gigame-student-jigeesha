import axios from "axios";

export let apiService = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
