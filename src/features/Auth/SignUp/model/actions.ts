"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@shared/config/superbase/server";

import { ISignUp } from "./types";

export const signUpServer = async (data: ISignUp) => {
  const supabase = createClient();

  const { error } = await supabase.auth.signUp(data);

  console.log("error =>", error);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
};
