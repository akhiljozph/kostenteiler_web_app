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

export const baseGetValueByBody = (url: string, body: any | undefined) => {
  axios
    .get(baseURL + url, body)
    .then(() => { })
    .catch(() => { })
    .finally(() => { });
};

export const basePostValueByParam = (url: string, param: string) => {
  console.log("BaseGetValueByParam", baseURL + url + param);
  axios
    .post(baseURL + url + param)
    .then(() => {})
    .catch(() => {})
    .finally(() => {});
};

export const basePostValueByBody = (url: string, body: any | undefined) => {
  axios
    .post(baseURL + url, body)
    .then(() => { })
    .catch(() => { })
    .finally(() => { });
};

export const basePutValueByBody = (url: string, body: any | undefined) => {
  axios
    .post(baseURL + url, body)
    .then(() => { })
    .catch(() => { })
    .finally(() => { });
};
