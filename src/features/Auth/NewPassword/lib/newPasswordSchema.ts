import { z, object, string } from "zod";

export const newPasswordSchema = object({
  password: string().trim().min(6, { message: "Пароль должен содержать минимум 6 символов" }),
  confirmPassword: string().trim().min(6, { message: "Пароли не совпадают" }),
}).refine(({ confirmPassword, password }) => password === confirmPassword, {
  message: "Пароли не совпадают",
  path: ["confirmPassword"],
});

export type TNewPasswordSchema = z.infer<typeof newPasswordSchema>;
