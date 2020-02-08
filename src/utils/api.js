// Fetcher function for the Guardian Content API, handles callbacks and add API key
export const fetchFromAPI = async (url, { onFetching, onSuccess, onError }) => {
  // Call on fetching callback
  if (onFetching) onFetching();

  // Try to fetch data from the PI
  try {
    const response = await fetch(
      `${url}&api-key=${process.env.REACT_APP_CONTENT_API_KEY}`,
    );
    const data = await response.json();

    if (onSuccess) onSuccess(data?.response?.results || null);
  } catch (error) {
    // Handle the error
    if (onError) onError(error);
  }
};

// Searches content from the Guardian Content API using a sectionId
export const searchContent = ({ sectionId, ...options }) => {
  // Fetch API data
  fetchFromAPI(
    `${process.env.REACT_APP_CONTENT_API_URL}search?section=${sectionId}&order-by=newest&show-fields=trailText&page-size=5`,
    options,
  );
};
