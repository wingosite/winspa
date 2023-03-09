import Cookie from "js-cookie";

export const TOKEN = "token";

/**
 * 拿到Token
 * @param token
 * @returns
 */
export const setToken = (token: string) => {
  return Cookie.set(TOKEN, token);
};

/**
 * 获取Token
 * @returns
 */
export const getToken = () => {
  return Cookie.get(TOKEN);
};
