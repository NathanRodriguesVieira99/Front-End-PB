import { z } from 'zod';

const envSchema = z.object({
  MODE: z.enum(['production', 'development', 'test']),
  NEXT_PUBLIC_API_KEY: z.string().url(),
  DATABASE_URL: z.string().url(),
});

export const env = envSchema.parse({
  MODE: process.env.NODE_ENV,
  NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  DATABASE_URL: process.env.DATABASE_URL,
});
