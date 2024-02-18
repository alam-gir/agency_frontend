import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(5, "Password must be at least 5 characters")
    .max(20, "Password must be at most 20 characters"),
});

export const RegisterSchema = z
  .object({
    name: z
      .string()
      .min(3, "Name must be at least 3 characters")
      .max(20, "Name must be at most 20 characters"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(5, "Password must be at least 5 characters")
      .max(20, "Password must be at most 20 characters"),
    confirm_password: z
      .string()
      .min(5, "Password must be at least 5 characters")
      .max(20, "Password must be at most 20 characters"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Password and Confirm Password must be same",
    path: ["confirm_password"],
  });
