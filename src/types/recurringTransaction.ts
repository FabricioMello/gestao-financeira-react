export interface RecurringTransaction {
    id: string
    userId: number
    accountId: number
    categoryId: number
    amount: number
    type: "income" | "expense"
    description: string
    frequency: "weekly" | "monthly" | "yearly"
    startDate: string
    endDate: string | null
    dayOfMonth: number
    isActive: boolean
    lastProcessed: string
    createdAt: string
    updatedAt: string
}