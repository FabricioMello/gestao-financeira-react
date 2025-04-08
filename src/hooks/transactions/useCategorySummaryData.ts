import { useEffect, useState } from "react"
import { api } from "@/services/api"
import { Transaction, Category } from "@/interfaces"

type CategorySummary = {
    name: string
    type: string
    value: number
    color: string
}

export function useCategorySummaryData(userId: number) {
    const [data, setData] = useState<CategorySummary[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const [transactionsRes, categoriesRes] = await Promise.all([
                    api.get<Transaction[]>(`/transactions?userId=${userId}`),
                    api.get<Category[]>(`/categories?userId=${userId}`)
                ])

                const map: Record<number, number> = {}

                transactionsRes.data
                    .forEach(tx => {
                        map[tx.categoryId] = (map[tx.categoryId] || 0) + tx.amount
                    })

                const result = categoriesRes.data
                    .filter(cat => map[cat.id])
                    .map(cat => ({
                        name: cat.name,
                        type: cat.type,
                        value: map[cat.id],
                        color: cat.color
                    }))

                setData(result)
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [userId])

    return { data, loading }
}
