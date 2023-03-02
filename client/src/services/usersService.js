import http from "./httpService";
import { apiUrl } from "../config/config.json";

const apiEndpoint = apiUrl + "/api";

/**
 * send request to get test data
 *
 * @returns {object[]} the test data
 */
async function getUsers() {
  const { data } = await http.get(`${apiEndpoint}/users`);
  return data;
}

async function updateUser(user) {
  let id = user._id;
  console.log(id);
  delete user._id;

  const { data } = await http.put(`${apiEndpoint}/users/` + id, user);
  console.log(JSON.stringify(data));
  return data;
}

const usersService = {
  getUsers,
  updateUser,
};

export default usersService;
