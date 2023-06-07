import { getItens } from "../utils/token";

const API_URL = "https://heaven-burger-api-mock.vercel.app";
const AUTH_TOKEN = getItens();

export const postOrders = (userId, client, arrProducts, dateOrder) => {

  return fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
    body: JSON.stringify({
      userId: userId,
      client: client,
      products: arrProducts,
      status: "pending",
      dateEntry: dateOrder,
    }),
  })
    .then(response => response.json()) // Converter a resposta em json
    .then(json => console.log(json))
    .catch(error => {
      console.log(error)
      throw error
    });
};

export const getOrders = () => {

  return fetch(`${API_URL}/orders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AUTH_TOKEN}`,
    }
  })
    
};


