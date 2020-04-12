import Axios, { AxiosResponse } from "axios";

interface RegisterData {
  username: string;
  password: string;
  email: string;
}

interface FilterData {
  filter: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface TransactionData {
  name: string;
  amount: number;
}

const BASE_URL = "http://193.124.114.46:3001/";
const USERS = "/users";
const LOGIN = "/sessions/create";
const USER_PROFILE = "/api/protected/user-info";
const FILTER_USERS = "/api/protected/users/list";
const TRANSACTIONS = "/api/protected/transactions";

const api = Axios.create({
  timeout: 5000,
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export const jwtDecode = (token: string) =>
  JSON.parse(window.atob(token.split(".")[1]));

const token = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};

const storeToken = ({ data }: AxiosResponse) => {
  localStorage.setItem("token", data["id_token"]);
  return data;
};

export const userApi = {
  info: () => api.get(USER_PROFILE, token),
  all: (filter: string = " ") => api.post(FILTER_USERS, { filter }, token),
  login: (data: LoginData) => api.post(LOGIN, data).then(storeToken),
  register: (data: RegisterData) => api.post(USERS, data).then(storeToken),
};

export const transactionsApi = {
  create: (data: TransactionData) => api.post(TRANSACTIONS, data, token),
  all: () => api.get(TRANSACTIONS, token),
};
