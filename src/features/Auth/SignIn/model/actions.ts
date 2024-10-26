"use server";

import { revalidatePath } from "next/cache";

import { IUser } from "@entities/User/model/types";

import { createClient } from "@shared/config/superbase/server";
import { TNullable } from "@shared/types/common";

import { ISignIn } from "./types";

export const loginServer = async (data: ISignIn): Promise<TNullable<IUser>> => {
  const supabase = createClient();

  const {
    error,
    data: { user },
  } = await supabase.auth.signInWithPassword(data);

  if (error) {
    throw new Error("login error");
  }

  revalidatePath("/", "layout");

  return user;
};
