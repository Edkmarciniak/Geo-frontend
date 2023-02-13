import ky from "ky";

const BASE_URL = "http://localhost:3000/api";

export default {
  loginOrRegister(credentials, isRegistering) {
    return ky
      .post(`${BASE_URL}/users/${isRegistering ? "create" : "login"}`, {
        json: credentials,
      })
      .json();
  },
  getUsers() {
    return ky.get(`${BASE_URL}/shipwrecks`).json();
  },
  createUser(data) {
    return ky.post(`${BASE_URL}/users`, { json: data }).json();
  },
};
