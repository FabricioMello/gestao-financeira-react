export interface Transaction {
    id: string
    userId: number
    accountId: number
    categoryId: number
    amount: number
    type: "income" | "expense"
    description: string
    date: string
    status: "completed" | "pending"
    isRecurring: boolean
    recurringId: number | null
    notes: string
    attachments: string[]
    createdAt: string
    updatedAt: string
}