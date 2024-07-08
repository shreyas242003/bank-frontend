import axios from "axios";
import { update } from "lodash";
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_KEY;

const API = {
  login: "users/login",
  home: "home",
  signup: "users/signup",
  me: "users/me",
  loan: "users/loan",
};
const getAPIUrl = (url) => {
  if (Array.isArray(url)) {
    let workUrl = url[0];
    url.shift();
    url = API[workUrl] + "/" + url.join("/") + "/";
  } else url = API[url];

  return url;
};

const axioInstance = axios.create({
  baseURL: API_URL,
});

axioInstance.interceptors.request.use(async (request) => {
  if (typeof window !== "undefined") {
    const storeTokenData = localStorage.getItem(
      import.meta.env.VITE_USER_TOKEN
    );

    if (storeTokenData)
      request.headers["Authorization"] = `Bearer ${storeTokenData}`;
  }
  request.url = getAPIUrl(request.url);

  return request;
});

axioInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.log(error);
    const status = error.response.status;
    if (status === 401) {
      toast.error("Session Expired, Please login again");
    } else if (status === 403) {
      toast.error("You are not authorized to perform this action");
    } else if (status === 404) {
      toast.error("Page Not found");
    } else if (status === 400) {
      toast.error(error.response.data?.error?.message);
    } else if (status === 405) {
      toast.error("Method Not allowed");
    } else if (status > 400 && status <= 500) {
      toast.error("Some error occured");
    } else if (status >= 500) {
      toast.error("Internal Server Error");
    }
    throw error;
  }
);

const axiosFireApi = async (url, method = "get", data = {}) => {
  method = method.toLowerCase();

  let allData = {
    url,
    method,
  };

  if (method === "get" || method === "delete") {
    allData["params"] = data;
  } else if (method === "post" || method === "patch" || method === "put") {
    allData["data"] = data;
  }
  try {
    const result = await axioInstance(allData);

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.error || error.response?.data?.error,
    };
  }
};

let controller;
const singalAxios = async (url, params) => {
  if (controller) controller.abort();
  controller = new AbortController();
  const signal = controller.signal;
  try {
    const result = await axioInstance({
      method: "GET",
      url,
      params,
      signal: signal,
    });
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.error,
    };
  }
};

const imageUpload = async (files) => {
  const formData = new FormData();
  if (!Array.isArray(files)) files = [files];
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }
  try {
    const response = await axioInstance.post("upload", formData);
    return {
      success: true,
      data: response,
    };
  } catch (error) {
    return {
      success: false,
      error: error.response.data?.error,
    };
  }
};
export { API_URL, axioInstance, imageUpload, axiosFireApi, singalAxios };
