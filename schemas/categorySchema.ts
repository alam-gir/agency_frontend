
import * as z from "zod"

export const fileSchema = z.object({
    originalname: z.string(),
    mimetype: z.string(),
    size: z.number(),
    path: z.string(),
})
export const CategorySchema = z.object({
    title: z.string().min(3, "Category title must be at least 3 characters").max(50, "Category title must be at most 50 characters"),
    icon: z.union([z.string().url(), fileSchema, z.any()])
})