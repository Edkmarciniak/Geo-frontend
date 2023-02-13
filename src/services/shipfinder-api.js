import ky from "ky";

const BASE_URL = "http://localhost:3000/shipfinder";

export default {
  getShips() {
    return ky.get(`${BASE_URL}`).json();
  },
};
