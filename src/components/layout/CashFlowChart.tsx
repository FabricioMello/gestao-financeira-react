import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'
import { useUserStore } from "@/features/transactions/store/userStore"
import { useCashFlowData } from "@/hooks//transactions/useCashFlowData"


export function CashFlowChart() {
  const user = useUserStore((state) => state.user)
  const { data, loading } = useCashFlowData(user?.id ?? 0)

  if(loading) return <p>Carregando gráfico...</p>

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="income" fill="#22c55e" name="Receitas" />
        <Bar dataKey="expense" fill="#ef4444" name="Despesas" />
      </BarChart>
    </ResponsiveContainer>
  )
}
