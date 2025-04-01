import { z } from "zod"

export const transactionSchema = z.object({
    type: z.enum(["income", "expense"]),
    title: z.string().min(1, "Título obrigatório"),
    amount: z.number().positive("Valor deve ser positivo"),
    categoryId: z.string().min(1, "Selecione uma categoria"),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Data inválida"
    }),
    isRecurring: z.boolean(),
    recurrence: z.enum(["weekly", "monthly", "yearly"]).optional(),
    notes: z.string().optional(),
    attachmentUrl: z.string().url().optional()
})

export type TransactionFormData = z.infer<typeof transactionSchema>
