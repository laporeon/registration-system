import { z } from 'zod';

export const answerSchema = [
  z.string().min(3, {
    message: 'Nome não pode estar vazio e deve contar no mínimo 3 caracteres.',
  }),
  z.string().email({ message: 'Email inválido.' }),
  z
    .string()
    .refine(
      age => !isNaN(Number(age)) && Number(age) >= 1 && Number(age) <= 120,
      {
        message: 'Idade deve ser um número inteiro entre 01 e 120',
      },
    ),
  z
    .string()
    .transform(height => parseFloat(height.replace(',', '.')))
    .refine(height => height >= 0.5 && height <= 2.5, {
      message: 'Altura deve ser digitada no formato 1,85',
    }),
];
