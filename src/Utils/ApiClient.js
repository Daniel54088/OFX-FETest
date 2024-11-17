export const apiClient = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorBody = await response.json();
      const errorMessage =
        errorBody?.detail || `Error: ${response.status} ${response.statusText}`;
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};
