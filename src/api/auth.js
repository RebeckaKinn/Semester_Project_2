import { apiRequest } from "./client.js";

export async function login(email, password) {
  const result = await apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  saveTokenInLocalStorage(
    result.data.accessToken,
    result.data.name,
    result.data.credits,
  );
  return result.data;
}
export async function register(name, email, password) {
  const userData = {
    name,
    email,
    password,
  };

  const result = await apiRequest("/auth/register", {
    method: "POST",
    body: JSON.stringify(userData),
  });
  saveTokenInLocalStorage(
    result.data.accessToken,
    result.data.name,
    result.data.credits,
  );
  return result.data;
}

export function logout() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userName");
  localStorage.removeItem("credits");
}

export function isAuthenticated() {
  return Boolean(localStorage.getItem("accessToken"));
}
function saveTokenInLocalStorage(accessToken, userName, credits) {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("userName", userName);
  localStorage.setItem("credits", credits);
}

export function getCurrentLogInCredentials() {
  return {
    accessToken: localStorage.getItem("accessToken"),
    userName: localStorage.getItem("userName"),
    credits: localStorage.getItem("credits"),
  };
}
