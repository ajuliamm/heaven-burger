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
        // {
        //   qty: 5,
        //   product: {
        //     id: 1214,
        //     name: "Sandwich de jamón y queso",
        //     price: 1000,
        //     image:
        //       "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/sandwich.jpg",
        //     type: "Desayuno",
        //     dateEntry: "2022-03-05 15:14:10",
        //   },
        // },
      status: "pending",
      dateEntry: dateOrder,
    }),
  });
};
