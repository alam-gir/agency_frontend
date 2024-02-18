// create a instance for fetch api with refresh token in private route
const fetchWithRefreshToken = async (
  url: string,
  init: RequestInit
) => {
  // set base url
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
  init.credentials = "include";
  try {
    // send original request
    const response = await fetch(`${BASE_URL}${url}`, init);
    if (response.ok) return response;
    

    // if response is getting 401 error then send refresh token to the server
    if (response.status === 401) {
      // send request to get the access token
      const refresTokenResponse = await fetch(
        `${BASE_URL}/auth/reset-token`,
        {
          method: "POST",
          credentials: "include",
        }
      );
      if (refresTokenResponse.ok) {
        // retry the original request
        return await fetch(`${BASE_URL}${url}`, init);
      } else {
        throw await refresTokenResponse.json()
      }
    }

    if(!response.ok) throw await response.json();
  } catch (error) {
    throw error;
  }
};



export default fetchWithRefreshToken;