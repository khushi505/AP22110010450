import axios from "axios";
import { BASE_URL, USERS_API } from "../config/apiConfig.js";
import dotenv from "dotenv";

dotenv.config();

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${USERS_API}`, {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    });
    return response.data.users;
  } catch (error) {
    throw new Error(
      `Failed to fetch users: ${
        error.response ? error.response.statusText : error.message
      }`
    );
  }
};
