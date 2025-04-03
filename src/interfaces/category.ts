export interface Category {
    id: number
    userId: number
    name: string
    type: "income" | "expense"
    color: string
    icon: string
    budgetLimit: number | null | string
    parentId: string | number | null
    createdAt: string
}