import axios from "axios";

export const url = "https://dummyjson.com";

export async function fetchData() {
  return await axios.get(`${url}/products`);
}
export async function fetchSingleData(id) {
  return await axios.get(`${url}/products/${id}`);
}
