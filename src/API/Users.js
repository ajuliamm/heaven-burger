import { getItens } from "../utils/token";

const API_URL = "https://heaven-burger-api-mock.vercel.app";

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
};

export const listUsers = () => {
  return fetch(`${API_URL}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${getItens()}`,
    },
  });
};

export const deleteUser = (id) => {
  return fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${getItens()}`,
    },
  });
};

export const alterUser = (id, newAlter) => {

  return fetch(`${API_URL}/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${getItens()}`,
    },
    body: JSON.stringify(newAlter),
  });
};
