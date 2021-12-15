import axios from "axios";

export const loadUsersApi = async () =>
  await axios.get("http://localhost:5000/users");

// To Post The Data

export const createUserApi = async (user) =>
  await axios.post("http://localhost:5000/users", user);

// To Delete The Data

export const deleteUserApi = async (userId) =>
  await axios.delete(`http://localhost:5000/users/${userId}`);

// To Update The User

export const updateUserApi = async (userId, userInfo) =>
  await axios.put(`http://localhost:5000/users/${userId}`, userInfo);
