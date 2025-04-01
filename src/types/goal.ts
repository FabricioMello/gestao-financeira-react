export interface Goal {
    id: string
    userId: number
    name: string
    targetAmount: number
    currentAmount: number
    accountId: number
    startDate: string
    targetDate: string
    color: string
    icon: string
    notes: string
    isCompleted: boolean
    createdAt: string
    updatedAt: string
}