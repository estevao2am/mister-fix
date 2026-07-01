import { z } from 'zod';

export const createCategorySchema = z.object({
  body: z.object({
    name: z
      .string({ message: 'Categoria precisa ser um text' })
      .min(2, { message: 'O nome da categoria precisa ter 2 caracteres' }),
  }),
});
