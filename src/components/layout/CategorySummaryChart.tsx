import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"
import { useUserStore } from "@/features/transactions/store/userStore"
import { useCategorySummaryData } from "@/hooks/transactions/useCategorySummaryData"

export function CategorySummaryChart( {type} : { type: string }) {
    const user = useUserStore(state => state.user)
    const { data, loading } = useCategorySummaryData(user?.id ?? 0)

    if (loading) return <p>Carregando categorias...</p>

    return (
        <ResponsiveContainer width="100%" height={"100%"}>
            <PieChart>
                <Pie
                    dataKey="value"
                    data={data.filter(d => d.type === type)}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    label={({ name }) => name}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    )
}
