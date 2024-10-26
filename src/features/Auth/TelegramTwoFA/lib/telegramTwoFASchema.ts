import { z, object, string } from "zod";

import { EMPTY_ERROR_TEXT } from "@shared/constants/validation";

export const telegramTwoFASchema = object({
  code: string().trim().min(1, { message: EMPTY_ERROR_TEXT }),
});

export type TTelegramTwoFASchema = z.infer<typeof telegramTwoFASchema>;
