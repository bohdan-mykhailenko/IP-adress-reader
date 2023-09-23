import axios from "axios";
import { API_KEY, API_URL } from "../consts";

export const getDetailedIpAddressData = async (ipAddress) => {
  try {
    const response = await axios.get(`${API_URL}?address=${ipAddress}`, {
      headers: {
        "X-Api-Key": API_KEY
      }
    });

    return response.data;
  } catch (error) {
    const statusCode = error.response.status;

    if (statusCode === 400) {
      throw new Error("Invalid IP Address. Please provide correct address!");
    }

    throw new Error("Error occured when fetching data!");
  }
};
