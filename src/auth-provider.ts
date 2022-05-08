import { User } from "screens/project-list/search-panel";
import * as qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;
const localStroageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStroageKey);

export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStroageKey, user.token || "");
  return user;
};

export const login = (params: { username: string; password: string }) => {
  return fetch(`${apiUrl}/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(await response.json());
    }
  });
};

export const register = (params: { username: string; password: string }) => {
  return fetch(`${apiUrl}/register?${qs.stringify(params)}`).then(
    async (response) => {
      if (response.ok) {
        return handleUserResponse(await response.json());
      } else {
        return Promise.reject(await response.json());
      }
    }
  );
};

export const logout = async () =>
  window.localStorage.removeItem(localStroageKey);
