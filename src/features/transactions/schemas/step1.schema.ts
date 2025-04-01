import { z } from "zod"

export const step1Schema = z.object({
    type: z.enum(["income", "expense"], {
        required_error: "Informe se é receita ou despesa"
    }),
    title: z.string().min(1, "Título é obrigatório"),
    amount: z.coerce.number().positive("Informe um valor válido")
})

export type Step1Data = z.infer<typeof step1Schema>
