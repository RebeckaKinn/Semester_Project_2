const API_BASE_URL = "https://v2.api.noroff.dev";

export async function getListings() {
  try {
    const response = await fetch(`${API_BASE_URL}/auction/listings`);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const result = await response.json();

    console.log(result.data);
  } catch (error) {
    console.error("Failed to fetch listings:", error);
  }
}
