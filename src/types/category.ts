export interface Category {
    id: string
    userId: number
    name: string
    type: "income" | "expense"
    color: string
    icon: string
    budgetLimit: number | null | string
    parentId: string | number | null
    createdAt: string
}