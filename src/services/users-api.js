import ky from "ky";

const { VITE_BASE_URL } = import.meta.env;

export default {
  index() {
    return ky
      .post(`${VITE_BASE_URL}/users/super`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .json();
  },
  signIn({ username, password }) {
    return ky
      .post(`${VITE_BASE_URL}/users/${"enter, login"}`, {
        json: { username, password },
      })
      .json();
  },
  destroy(id) {
    return ky
      .delete(`${VITE_BASE_URL}/users/super/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .json();
  },
};
