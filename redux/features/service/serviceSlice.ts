import { ApiResponseArray, ApiResponseSingle, ServicePopulated } from "@/@types/types";
import { apiSlice } from "@/redux/apiSlice";


export const serviceSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getServices: build.query<
        ApiResponseArray<ServicePopulated>,
        { filter?: { category?: string | null, search?: string | null } }
      >({
        query: ({ filter }) => ({
          url:
            "/services" + (filter?.category ? `?category=${filter?.category}` : "") + (filter?.search ? `&search=${filter?.search}` : ""),
        }),
        providesTags: (result, err) => {
  
          return result
            ? (result.data as any)?.services?.map(({ _id }: { _id: string }) => ({
                type: "Service",
                id: _id,
              }))
            : ["Service"];
        },
      }),
      getService: build.query<ApiResponseSingle<ServicePopulated>, { project_id: string }>(
        {
          query: ({ project_id }) => ({
            url: `/services/${project_id}`,
          }),
          providesTags: (result, err) => {
            return result
              ? [{ type: "Service", id: result.data._id }]
              : ["Service"];
          },
        }
      )
    }),
    overrideExisting: false,
})



export const {useGetServiceQuery, useGetServicesQuery} = serviceSlice;