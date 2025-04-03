export interface BudgetItem {
    categoryId: number
    plannedAmount: number
    currentAmount: number
}

export interface Budget {
    id: string
    userId: number
    name: string
    startDate: string
    endDate: string
    createdAt: string
    updatedAt: string
    items: BudgetItem[]
}