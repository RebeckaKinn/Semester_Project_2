import { apiRequest } from "../src/api/client.js";

export async function getListings() {
  const result = await apiRequest("/auction/listings");
  console.log(result.data);
  return result.data;
}
