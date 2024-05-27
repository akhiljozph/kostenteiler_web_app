import axios from "axios";

const baseURL: string = "http://localhost:8090";

export const baseGetValueByParam = (url: string, param: string) => {
  console.log("BaseGetValueByParam", baseURL + url + param);
  axios
    .get(baseURL + url + param)
    .then(() => {})
    .catch(() => {})
    .finally(() => {});
};

export const baseGetValueByBody = (url: string, body: AxiosRequestConfig<any> | undefined) => {
  axios
    .get(baseURL + url, body)
    .then(() => { })
    .catch(() => { })
    .finally(() => { });
};
