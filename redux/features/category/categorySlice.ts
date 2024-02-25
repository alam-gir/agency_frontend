import {
  ApiResponse,
  ApiResponseArray,
  ApiResponseSingle,
  Category,
} from "@/@types/types";
import { apiSlice } from "@/redux/apiSlice";

const categorySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation<ApiResponseSingle<Category>, FormData>({
      query: (data) => ({
        url: "/category",
        credentials: "include",
        method: "POST",
        mode: "cors",
        body: data,
      }),
      invalidatesTags: [{ type: "Category", id: "LIST" }],
    }),

    getCategories: builder.query<ApiResponseArray<Category>, void>({
      query: () => ({ url: "/category" }),
      providesTags: (result, err, id) => {
        return result
          ? [
              ...result.data?.map(({ _id }) => ({
                type: "Category" as const,
                id: _id,
              })),
              { type: "Category", id: "LIST" },
            ]
          : [{ type: "Category", id: "LIST" }];
      },
    }),

    getCategory: builder.query<ApiResponseSingle<Category>, string>({
      query: (id) => ({ url: "/category/" + id }),
      providesTags: (result) => [{ type: "Category", id: result?.data._id }],
    }),

    updateCategory: builder.mutation<
      ApiResponseSingle<Category>,
      { id: string; data: FormData }
    >({
      query: ({ id, data }) => ({
        url: `/category/${id}`,
        credentials: "include",
        method: "PATCH",
        mode: "cors",
        body: data,
      }),
      invalidatesTags: [{ type: "Category", id: "LIST" }],
    }),

    deleteCategory: builder.mutation<ApiResponse, { id: string }>({
      query: ({ id }) => ({
        url: `/category/${id}`,
        credentials: "include",
        method: "DELETE",
        mode: "cors",
      }),
      invalidatesTags: [{ type: "Category", id: "LIST" }],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categorySlice;

export default categorySlice;
