import { token } from "../components/FormLogin/FormLogin";

console.log(token)
const API_URL = 'https://burger-queen-api-mock-nine.vercel.app';
//const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlQGVtYWlsLmNvbSIsImlhdCI6MTY4NDc3NDc4MywiZXhwIjoxNjg0Nzc4MzgzLCJzdWIiOiI0In0.Xq9vWiKkjNJ7HHLO2qISDUWYjlRtqz-utAIA9C3uczg';

export const getProducts = () => {
    return fetch(`${API_URL}/products`, {
        
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },

    })
    
}