import { ApiResponseArray, ApiResponseSingle, Project } from "@/@types/types";
import { apiSlice } from "@/redux/apiSlice";

export const projectSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createProject: build.mutation<
      ApiResponseSingle<Project>,
      { title: string; category_id: string }
    >({
      query: (data) => ({
        url: "/project",
        method: "POST",
        body: data,
        credentials: "include",
        mode: "cors",
      }),
      invalidatesTags: ["Project"],
    }),

    getProjects: build.query<ApiResponseArray<Project>, void>({
      query: () => ({
        url: "/project",
      }),
      providesTags: (result, err) => {
        return result
          ? result.data.map(({ _id }) => ({ type: "Project", id: _id }))
          : ["Project"];
      },
    }),

    getProject: build.query<ApiResponseSingle<Project>, { project_id: string }>(
      {
        query: ({ project_id }) => ({
          url: `/project/${project_id}`,
        }),
        providesTags: (result, err) => {
          return result
            ? [{ type: "Project", id: result.data._id }]
            : ["Project"];
        },
      }
    ),

    updateProjectTitle: build.mutation<
      ApiResponseSingle<Project>,
      { id: string; title: string }
    >({
      query: ({ id, title }) => ({
        url: `/project/${id}?update=title`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      }),
      invalidatesTags: (result, err) => [
        { type: "Project", id: result?.data._id },
      ],
    }),

    updateProjectShortDescription: build.mutation<
      ApiResponseSingle<Project>,
      { id: string; short_description: string }
    >({
      query: ({ id, short_description }) => ({
        url: `/project/${id}?update=short_description`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ short_description }),
      }),
      invalidatesTags: (result, err) => [
        { type: "Project", id: result?.data._id },
      ],
    }),

    updateProjectDescription: build.mutation<
      ApiResponseSingle<Project>,
      { id: string; description: string }
    >({
      query: ({ id, description }) => ({
        url: `/project/${id}?update=description`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description }),
      }),
      invalidatesTags: (result, err) => [
        { type: "Project", id: result?.data._id },
      ],
    }),

    updateProjectStatus: build.mutation<
      ApiResponseSingle<Project>,
      { id: string; status: "published" | "archived" }
    >({
      query: ({ id, status }) => ({
        url: `/project/${id}?update=status`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      }),
      invalidatesTags: (result, err) => [
        { type: "Project", id: result?.data._id },
      ],
    }),

    uploadProjectImages: build.mutation<
      ApiResponseSingle<Project>,
      { id: string; images: FormData }
    >({
      query: ({ id, images }) => ({
        url: `/project/${id}?update=images`,
        method: "PATCH",
        body: images,
      }),
      invalidatesTags: (result, err) => [
        { type: "Project", id: result?.data._id },
      ],
    }),

    deleteProjectImage: build.mutation<
      ApiResponseSingle<Project>,
      { id: string; file_id: string }
    >({
      query: ({ id, file_id }) => ({
        url: `/project/${id}?delete=image`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ file_id }),
      }),
      invalidatesTags: (result, err) => [
        { type: "Project", id: result?.data._id },
      ],
    }),

    deleteProjectFiles: build.mutation<
      ApiResponseSingle<Project>,
      { id: string; file_id: string }
    >({
      query: ({ id, file_id }) => ({
        url: `/project/${id}?delete=file`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ file_id }),
      }),
      invalidatesTags: (result, err) => [
        { type: "Project", id: result?.data._id },
      ],
    }),

    uploadProjectFiles: build.mutation<
      ApiResponseSingle<Project>,
      { id: string; files: FormData }
    >({
      query: ({ id, files }) => ({
        url: `/project/${id}?update=files`,
        method: "PATCH",
        body: files,
      }),
      invalidatesTags: (result, err) => [
        { type: "Project", id: result?.data._id },
      ],
    }),

    deleteProject: build.mutation({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Project"],
    }),
  }),
});

export const {
  useCreateProjectMutation,

  useGetProjectQuery,
  useGetProjectsQuery,

  useUpdateProjectTitleMutation,
  useUpdateProjectDescriptionMutation,
  useUpdateProjectShortDescriptionMutation,
  useUpdateProjectStatusMutation,

  useUploadProjectImagesMutation,
  useUploadProjectFilesMutation,

  useDeleteProjectImageMutation,
  useDeleteProjectFilesMutation,
} = projectSlice;
