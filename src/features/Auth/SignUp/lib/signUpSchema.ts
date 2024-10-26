import { z, object, string } from "zod";

import { EMAIL_ERROR_TEXT, EMPTY_ERROR_TEXT } from "@shared/constants/validation";

export const signUpSchema = object({
  email: string().trim().email({ message: EMAIL_ERROR_TEXT }).min(1, { message: EMPTY_ERROR_TEXT }),
  password: string().trim().min(6, { message: "Пароль должен содержать минимум 6 символов" }),
  confirmPassword: string().trim().min(6, { message: "Пароли не совпадают" }),
  agreement: z.boolean({ required_error: EMPTY_ERROR_TEXT }),
})
  .refine(({ confirmPassword, password }) => password === confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  })
  .refine(({ agreement }) => agreement, {
    message: "Согласие не предоставлено",
    path: ["agreement"],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;
