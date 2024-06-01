import axios from "axios";

const baseURL: string = "http://localhost:8090";

export const baseGetValueByParam = (url: string, param: string) => {
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
    .put(baseURL + url, body)
    .then(() => { })
    .catch(() => { })
    .finally(() => { });
};

export const baseDeleteValueByParam = (url: string, param: string) => {
  axios
    .delete(baseURL + url + param)
    .then(() => {})
    .catch(() => {})
    .finally(() => {});
};
