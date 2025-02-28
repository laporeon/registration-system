import { z } from 'zod';

export const answerSchema = [
  z.string().min(3, {
    message: 'Nome não pode estar vazio e deve contar no mínimo 3 caracteres.',
  }),
  z.string().email({ message: 'Email inválido.' }),
  z.string().refine(val => !isNaN(Number(val)) && Number(val) > 18, {
    message: 'Idade deve ser um número e maior do que 18 anos.',
  }),
  z
    .string()
    .transform(val => parseFloat(val.replace(',', '.')))
    .refine(val => val >= 0.5 && val <= 2.5, {
      message: 'Altura deve ser digitada no formato 1,85',
    }),
];
