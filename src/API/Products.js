import { getItens } from "../utils/token";

const API_URL = 'https://heaven-burger-api-mock.vercel.app';
const AUTH_TOKEN = getItens();

export const getProducts = () => {
    console.log(AUTH_TOKEN)
    return fetch(`${API_URL}/products`, {
        
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${AUTH_TOKEN}`,
        },

    })
    
}
export const deleteProducts = (productId) => {
    console.log(AUTH_TOKEN)
    return fetch(`${API_URL}/products/${productId}`, {
        
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
    })
    
}
export const updateProduct = (productId, newInfos) => {
    const newDate = new Date().toLocaleString();
    return fetch(`${API_URL}/products/${productId}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${AUTH_TOKEN}`,
        //é auth token ou getitems?
      },
      body: JSON.stringify(newInfos),
      
    })
    .then(response => response.json()) // Converter a resposta em json
.then(json => console.log(json))
.catch(error => {
    console.log(error)
    throw error
});
  };
