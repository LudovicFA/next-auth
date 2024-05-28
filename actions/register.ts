"use server";

import { RegisterSchema } from "@/schemas";
import { error } from "console";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFileds = RegisterSchema.safeParse(values);

  if (!validatedFileds.success) {
    return {
      error: "Invalid fields !",
    };
  }

  return {
    success: "Email sent",
  };
};
