import * as z from "zod";

export const ProjectCreateSchema = z.object({
  title: z
    .string()
    .min(3, "Project title must be at least 3 characters")
    .max(180, "Project title must be at most 180 characters"),
  category: z.string().min(3, "Category is Required"),
});
export const ProjectUpdateSchema = z.object({
  title: z
    .string()
    .min(3, "Project title must be at least 3 characters")
    .max(180, "Project title must be at most 180 characters"),
  category: z.string().min(1, "Category is Required"),
  short_description: z
    .string()
    .min(10, "Project title must be at least 10 characters")
    .max(180, "Project title must be at most 180 characters"),
  description: z
    .string()
    .min(20, "Project title must be at least 20 characters")
    .max(1000, "Project title must be at most 1000 characters"),
  status: z.string().min(1, "Status is Required"),
});
