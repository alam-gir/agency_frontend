import { ApiResponseArray, ApiResponseSingle, User } from "@/@types/types";
import { apiSlice } from "../../apiSlice";

const userSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<ApiResponseArray<User>, void>({
      query: () => ({ url: "/user/all" }),
      providesTags: (result, err, id) => {
        return result
          ? [
              ...result.data.map((user) => ({
                type: "User" as const,
                id: user.id,
              })),
              { type: "User", id: "LIST" },
            ]
          : [{ type: "User", id: "LIST" }];
      },
    }),
    updateAvatar: builder.mutation<ApiResponseSingle<User>, FormData>({
      query: (file) => ({
        url: "/user/update/avatar",
        method: "PATCH",
        body: file,
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
    updateName: builder.mutation<
      ApiResponseSingle<User>,
      { current_password: string; name: string }
    >({
      query: (data) => ({
        url: "/user/update/name",
        method: "PATCH",
        body: JSON.stringify({ ...data }),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
    udpateEmail: builder.mutation<
      ApiResponseSingle<User>,
      { current_password: string; email: string }
    >({
      query: (data) => ({
        url: "/user/update/email",
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
    updatePhone: builder.mutation<
      ApiResponseSingle<User>,
      { current_password: string; phone: string }
    >({
      query: (phone) => ({
        url: "/user/update/phone",
        method: "PATCH",
        body: phone,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
    updatePassword: builder.mutation<
      ApiResponseSingle<User>,
      { confirm_password: string; current_password: string }
    >({
      query: (password) => ({
        url: "/user/update/password",
        method: "PATCH",
        body: password,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
    updateRole: builder.mutation<
      ApiResponseSingle<User>,
      { current_password: string; role: string }
    >({
      query: (role) => ({
        url: "/user/update/role",
        method: "PATCH",
        body: role,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUpdateAvatarMutation,
  useUpdateNameMutation,
  useUpdatePasswordMutation,
  useUdpateEmailMutation,
  useUpdatePhoneMutation,
  useUpdateRoleMutation,
} = userSlice;
