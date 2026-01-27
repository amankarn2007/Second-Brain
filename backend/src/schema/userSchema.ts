import { z } from "zod";

//frontent side validation
export const userSignup = z.object({
    username: z.string().min(3),
    password: z.string().min(4),
})