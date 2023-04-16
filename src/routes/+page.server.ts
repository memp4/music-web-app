import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions = {
  default: async (event) => {
    const { request } = event;
    throw redirect(308, "/main")
  },
} satisfies Actions;
