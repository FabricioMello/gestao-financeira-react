export interface Account {
    id: string
    userId: number
    name: string
    type: "checking" | "savings" | "investment"
    balance: number
    institution: string
    color: string
    isActive: boolean
    createdAt: string
}