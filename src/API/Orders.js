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
      dataEntry: dateOrder,
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
  //console.log(AUTH_TOKEN)
  return fetch(`${API_URL}/orders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${AUTH_TOKEN}`,
    }
  })
    
};

export const updateStatusOrder = (orderId, newStatus) => {
  const newDate = new Date().toLocaleString();
  return fetch(`${API_URL}/orders/${orderId}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${AUTH_TOKEN}`,
    },
    body: JSON.stringify({
      status: newStatus,
      dataExit: newDate,
      delivered: 'notDelivered'
     
    }),
    
  })
};
export const updateDeliveredOrder = (orderId, deliveredAnswer) => {
  const newDate = new Date().toLocaleString();
  return fetch(`${API_URL}/orders/${orderId}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${AUTH_TOKEN}`,
    },
    body: JSON.stringify({
      delivered: deliveredAnswer,
    }),
    
  })
};


