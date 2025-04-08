import { useEffect, useState } from "react"
import { api } from "@/services/api"
import { Transaction } from "@/interfaces"

type MonthlyData = {
    name: string // mês
    income: number
    expense: number
}

export function useCashFlowData(userId: number) {
    const [data, setData] = useState<MonthlyData[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await api.get<Transaction[]>(`/transactions?userId=${userId}`)
                const grouped: Record<string, MonthlyData> = {}

                res.data.forEach(tx => {
                    const date = new Date(tx.date)
                    const key = `${date.getMonth() + 1}/${date.getFullYear()}`

                    if (!grouped[key]) {
                        grouped[key] = { name: key, income: 0, expense: 0 }
                    }

                    if (tx.type === "income") {
                        grouped[key].income += tx.amount
                    } else {
                        grouped[key].expense += tx.amount
                    }
                })

                setData(Object.values(grouped))
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
