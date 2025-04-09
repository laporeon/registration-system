import { ObjectId } from 'mongodb';
import { z } from 'zod';

const userSchema = z.object({
  name: z
    .string({ message: 'Name must not be empty.' })
    .min(3, { message: 'Name must have at least 3 characters' }),
  email: z.string({ message: 'Email must not be empty.' }).email(),
  password: z
    .string({ message: 'Password must not be empty.' })
    .min(8, 'Password must be at least 8 characters long')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
      'Password must contain at least: 1 uppercase, 1 lowercase, 1 number and 1 special character'
    ),
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

const paramsSchema = z.object({
  id: z
    .string()
    .refine(val => ObjectId.isValid(val), {
      message: 'Invalid MongoDB ID format',
    })
    .optional(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export { userSchema, paramsSchema, loginSchema };
