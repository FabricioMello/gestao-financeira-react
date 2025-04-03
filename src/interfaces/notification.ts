export interface Notification {
    id: string
    userId: number
    type: "transaction" | "budget" | "recurring" | "goal"
    title: string
    message: string
    isRead: boolean
    relatedId: number
    createdAt: string
}