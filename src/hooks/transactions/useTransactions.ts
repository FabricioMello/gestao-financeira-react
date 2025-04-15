import { useEffect, useState } from "react"
import { api } from "@/services/api.ts"
import {Transaction} from "@/interfaces";

export function useTransactions(userId: number) {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        setLoading(true)
        api.get(`/transactions?userId=${userId}`)
            .then((res) => {
                const sorted = res.data.sort(
                    (a: Transaction, b: Transaction) => new Date(b.date).getTime() - new Date(a.date).getTime()
                )
                setTransactions(sorted)
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, [userId])

    return { transactions, loading, error }
}