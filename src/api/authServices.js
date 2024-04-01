import axios from "../shared/axios";

const login = async (credentials) => {
  try {
    const response = await axios.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const register = async (credentials) => {
  try {
    const response = await axios.post("/auth/register", credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { login, register };
