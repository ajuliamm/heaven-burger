const API_URL = 'http://localhost:8080';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbUBlbWFpbC5jb20iLCJpYXQiOjE2ODQ1MzM1MDAsImV4cCI6MTY4NDUzNzEwMCwic3ViIjoiNiJ9.S4L4puovkodDsdf1oyEoOeshktWdgdomzKid0tQvQ0s';

export const getProducts = () => {
    return fetch(`${API_URL}/products`, {
        
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${AUTH_TOKEN}`,
        },

    })
    
}