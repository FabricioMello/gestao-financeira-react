import { z } from "zod"

export const step2Schema = z.object({
    categoryId: z.number(),
    description: z.string().min(2),
    date: z.string().min(1),
    notes: z.string().optional()
})

export type Step2Data = z.infer<typeof step2Schema>