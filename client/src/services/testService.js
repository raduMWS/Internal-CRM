import http from "./httpService";
import { apiUrl } from "../config/config.json";

const apiEndpoint = apiUrl + "/test";

/**
 * send request to get test data
 *
 * @returns {object[]} the test data
 */
async function getTest() {
  const { data } = await http.get(`${apiEndpoint}/api/users`);
  return data;
}

const exportedFunctions = {
  getTest,
};

export default exportedFunctions;
