const axios = require("axios");
export const axiosInstance = () => {
  const token =
    window && typeof window != "undefined" ? localStorage.getItem("token") : "";
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return axiosInstance;
};

export const axiosInstanceNoAuth = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const axiosInstance = axios.create({
    baseURL: apiUrl,
  });
  return axiosInstance;
};
