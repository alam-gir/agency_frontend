import {
  createApi,
  BaseQueryFn,
  FetchArgs,
} from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL ,
  credentials: 'include',
})

// baseQuery with refresh token rotation
const baseQueryRefresh: BaseQueryFn<
  FetchArgs,
  unknown,
  unknown,
  {}
> = async (args, api, extraOptions) => {
  // run the base query
  const initialQuery = await baseQuery(args, api, extraOptions);
  
  if(initialQuery.data) return initialQuery;
  if(initialQuery.error?.status === 401){
    // that means access_token invalidated, get the new refresh token
    const refreshTheToken = await baseQuery("/auth/refresh-token", api,extraOptions);

    if(refreshTheToken.data){
      //retry the initial request
      return await baseQuery(args, api, extraOptions);
    }
    return refreshTheToken;
  }
  return initialQuery;

};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryRefresh,
  tagTypes: [
    "Category",
    "User",
    "Project",
  ],
  endpoints: (builder) => ({}),
});
