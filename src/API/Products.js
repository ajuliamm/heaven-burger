import { getItens } from "../utils/token";

const API_URL = 'https://heaven-burger-api-mock.vercel.app';
const AUTH_TOKEN = getItens();

export const getProducts = () => {
    return fetch(`${API_URL}/products`, {
        
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${AUTH_TOKEN}`,
        },

    })
    
}
export const deleteProducts = (productId) => {
    return fetch(`${API_URL}/products/${productId}`, {
        
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
    })
    
}
export const updateProduct = (productId, newInfos) => {
    return fetch(`${API_URL}/products/${productId}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${AUTH_TOKEN}`,
      },
      body: JSON.stringify(newInfos),
      
    })
  };

  export const postRegisterProduct = (nameProduct, priceProduct, typeProduct) => {
    return fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${AUTH_TOKEN}`,
      },
      body: JSON.stringify({
        name: nameProduct,
        price: priceProduct,
        type: typeProduct,
      }),
    })
  };
