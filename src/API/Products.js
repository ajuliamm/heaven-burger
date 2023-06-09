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
