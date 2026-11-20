import { apiRequest } from "./client.js";
import { getCurrentLogInCredentials } from "./auth.js";

export async function getLoggedInProfile() {
  const credentials = getCurrentLogInCredentials();
  return await getProfileByName(credentials.userName);
}

export async function getProfileByName(name) {
  return await apiRequest(`/auction/profiles/${encodeURIComponent(name)}`);
}

export async function updateProfile(name, profileData) {
  return await apiRequest(`/auction/profiles/${encodeURIComponent(name)}`, {
    method: "PUT",
    body: JSON.stringify(profileData),
  });
}

export async function getAllListingsByProfile(name, page = 1, limit = 10) {
  return await apiRequest(
    `/auction/profiles/${encodeURIComponent(name)}/listings?limit=${limit}&page=${page}`,
  );
}

export async function getAllBidsByProfile(name, page = 1, limit = 10) {
  return await apiRequest(
    `/auction/profiles/${encodeURIComponent(name)}/bids?limit=${limit}&page=${page}`,
  );
}

export async function getAllWinsByProfile(name) {
  return await apiRequest(`/auction/profiles/${encodeURIComponent(name)}/wins`);
}
