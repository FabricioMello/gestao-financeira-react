export interface ReportCategory {
    categoryId: number
    name: string
    amount: number
    percentage: number
}

export interface BudgetPerformance {
    onTarget: number
    overBudget: number
    underBudget: number
}

export interface ReportSummary {
    totalIncome: number
    totalExpense: number
    netCashflow: number
    savingsRate: number
    topExpenseCategories: ReportCategory[]
    budgetPerformance: BudgetPerformance
}

export interface Report {
    id: string
    userId: number
    name: string
    type: "monthly" | "custom"
    startDate: string
    endDate: string
    createdAt: string
    summary: ReportSummary
}