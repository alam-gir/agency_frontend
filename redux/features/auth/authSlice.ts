import {
  ApiResponse,
  ApiResponseSingle,
  User,
  UserLoginData,
  UserRegistrationData,
} from "@/@types/types";
import { apiSlice } from "@/redux/apiSlice";

import { setSession } from "../session-slice";

const authSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<ApiResponse, UserRegistrationData>({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: JSON.stringify({ ...data }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
      invalidatesTags: ["User"],
    }),
    login: builder.mutation<
      { access_token: string; refresh_token: string },
      UserLoginData
    >({
      query: (data) => ({
        url: "/auth/login/credential",
        method: "POST",
        body: JSON.stringify({ ...data }),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        // initiate the load user query
        const res = await queryFulfilled;
        if (res.data) {
          dispatch(
            authSlice.endpoints.loadUser.initiate(undefined, { track: false })
          );
        }
      },
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const res = (await queryFulfilled) as any;
        if (res.data) {
          dispatch(
            setSession({
              user: {
                _id: "",
                name: "",
                email: "",
                role: "",
                avatar: "",
                emailVarified: "",
              },
              status: "loggedOut",
            })
          );
        }
      },
    }),
    loadUser: builder.mutation<User, void>({
      query: () => ({
        url: "/user/me",
        method: "GET",
        credentials: "include",
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const res = await queryFulfilled;
        if (res.data) {
          dispatch(setSession({ user: (res.data as any).user }));
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
  authSlice;

export default authSlice;
