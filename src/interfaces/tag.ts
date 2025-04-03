export interface Tag {
    id: string
    userId: number
    name: string
    color: string
    createdAt: string
}

export interface TransactionTag {
    id: string
    transactionId: number
    tagId: number
    createdAt: string
}