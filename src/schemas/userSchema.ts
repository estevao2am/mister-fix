import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    name: z.string().min(5, "Nome muito curto"),
    email: z.email("email invalido"),
    password: z.string().min(6, "muito curta"),
  }),
});
