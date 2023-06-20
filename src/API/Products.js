import { getItens } from "../utils/token";

const API_URL = 'https://heaven-burger-api-mock.vercel.app';

export const getProducts = () => {
    return fetch(`${API_URL}/products`, {
        
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getItens()}`,
        },

    })
    
}
export const deleteProducts = (productId) => {
    return fetch(`${API_URL}/products/${productId}`, {
        
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getItens()}`,
        },
    })
    
}
export const updateProduct = (productId, newInfos) => {
    return fetch(`${API_URL}/products/${productId}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getItens()}`,
      },
      body: JSON.stringify(newInfos),
      
    })
  };

  export const postRegisterProduct = (nameProduct, priceProduct, typeProduct) => {
    return fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getItens()}`,
      },
      body: JSON.stringify({
        name: nameProduct,
        price: priceProduct,
        type: typeProduct,
      }),
    })
  };
