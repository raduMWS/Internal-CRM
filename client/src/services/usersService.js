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
  let shouldInsert = false;
  let id = 0;
  if (user._id) {
    id = user._id;
    console.log(id);
    delete user._id;
  } else shouldInsert = true;
  if (!shouldInsert) {
    const { data } = await http.put(`${apiEndpoint}/users/` + id, user);
    console.log(JSON.stringify(data));
    return data;
  } else {
    const { data } = await http.post(`${apiEndpoint}/users/`, user);
    return data;
  }
}

async function deleteUser(user) {
  const { data } = await http.delete(`${apiEndpoint}/users/` + user._id);
  return data;
}

const usersService = {
  getUsers,
  updateUser,
  deleteUser,
};

export default usersService;
