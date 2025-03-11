import { z } from 'zod';

const answerSchema = [
  z.string().min(3, {
    message: 'Nome não pode estar vazio e deve conter no mínimo 3 caracteres.',
  }),
  z.string().email({ message: 'Email inválido.' }),
  z
    .string()
    .refine(
      age => !isNaN(Number(age)) && Number(age) >= 1 && Number(age) <= 120,
      {
        message: 'Idade deve ser um número inteiro entre 01 e 120.',
      },
    ),
  z
    .string()
    .transform(height => parseFloat(height.replace(',', '.')))
    .refine(height => height >= 0.5 && height <= 2.5, {
      message: 'Altura deve ser digitada no formato 1,85.',
    }),
];

const dynamicAnswerSchema = z
  .string()
  .min(1, {
    message: 'Resposta não pode estar vazia.',
  })
  .optional();

export { answerSchema, dynamicAnswerSchema };
