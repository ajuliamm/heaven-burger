import { getItens } from "../utils/token";

const API_URL = "https://heaven-burger-api-mock.vercel.app";
const AUTH_TOKEN = getItens();

export const postLogin = (typedEmail, typedPassword) => {
  return fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: typedEmail,
      password: typedPassword,
    }),
  });
};

export const postRegister = (typedEmail, typedPassword, role) => {
  return fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: typedEmail,
      password: typedPassword,
      role: role,
    }),
  })
    .then((response) => response.json()) //converter a resposta em json
    .then((json) => console.log(json))
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const listUsers = () => {
  return fetch(`${API_URL}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${AUTH_TOKEN}`,
    },
  });
};

export const deleteUser = (id) => {
  return fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${AUTH_TOKEN}`,
    },
  });
};

export const alterUser = (id, newAlter) => {

  return fetch(`${API_URL}/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${AUTH_TOKEN}`,
    },
    body: JSON.stringify(newAlter),
  });
};
