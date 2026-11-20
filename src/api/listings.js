/*
An example query filtering for active listings with the my_tag tag.

GET
/auction/listings?_tag=my_tag&_active=true
*/
import { apiRequest } from "./client.js";

export async function getAllListings(page = 1, limit = 10) {
  const params = new URLSearchParams({
    _tag: "true",
    _active: "true",
  });
  return await apiRequest(
    `/auction/listings?${params}?limit=${limit}&page=${page}`,
  );
}

export async function getListinsgById(id) {
  const params = new URLSearchParams({
    _tag: "true",
    _active: "true",
  });
  return await apiRequest(`/auction/listings/${id}?${params}`);
}

export async function createListings(listingData) {
  return await apiRequest("/auction/listings", {
    method: "POST",
    body: JSON.stringify(listingData),
  });
}

export async function updateListings(id, listingData) {
  return await apiRequest(`/auction/listings/${id}`, {
    method: "PUT",
    body: JSON.stringify(listingData),
  });
}

export async function deleteListings(id) {
  return await apiRequest(`/auction/listings/${id}`, {
    method: "DELETE",
  });
}

export async function bidOnListings(id, amount) {
  return await apiRequest(`/auction/listings/${id}/bids`, {
    method: "POST",
    body: JSON.stringify(amount),
  });
}

export async function searcListings(query, page = 1, limit = 10) {
  const params = new URLSearchParams({
    q: query,
    limit,
    page,
  });

  return await apiRequest(`/auction/listings/search?${params}`);
}
