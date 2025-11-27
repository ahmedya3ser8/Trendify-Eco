import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1, 'firstName is required'),
  lastName: z.string().min(1, 'lastName is required'),
  email: z.string().min(1, 'email is required').email(),
  message: z.string().min(1, 'message is required')
}) 

export type TcontactSchema = z.infer<typeof contactSchema>
