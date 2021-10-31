import axios from "axios";

const axiosInstnce = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    token: localStorage.getItem("token"),
    refreshToken: localStorage.getItem("refreshToken"),
  },
});

export function updateTokenHeadersInAxiosInstance(token, refreshToken) {
  axiosInstnce.defaults.headers.token = token;
  axiosInstnce.defaults.headers.refreshToken = refreshToken;
}

axiosInstnce.interceptors.response.use((response) => {
  return { ...response, data: response.data.data };
});

export default axiosInstnce;
