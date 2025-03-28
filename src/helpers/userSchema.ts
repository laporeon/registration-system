import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(3, { message: 'Name must have at least 3 characters' }),
  email: z.string().email(),
  dob: z.string(),
  address: z.object({
    street: z.string().min(10, { message: 'Street name can not be empty.' }),
    number: z.number().min(1, { message: 'Street number can not be empty.' }),
    city: z.string().min(4, { message: 'City name can not be empty.' }),
    zipCode: z
      .number()
      .min(5, { message: 'Zip Code number can not be empty.' }),
  }),
  description: z.string().optional(),
});
