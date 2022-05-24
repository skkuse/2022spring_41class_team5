import Cookies from "universal-cookie";

const cookies = new Cookies();

export const setCookie = (name, value) => {
    return cookies.set(name, value);
}

export const getCookie = (name) => {
    return cookies.get(name);
}