import { useTransactions } from "@/hooks/transactions/useTransactions"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useUserStore } from "@/features/transactions/store/userStore"
import {CashFlowChart} from "@components/layout/CashFlowChart.tsx";
import {CategorySummaryChart} from "@components/layout/CategorySummaryChart.tsx";

export default function DashboardLayout() {
    const user = useUserStore((state) => state.user)
    const { transactions } = useTransactions(user?.id ?? 0)

    const totalIncome = transactions
        .filter(t => t.type === "income")
        .reduce((acc, t) => acc + t.amount, 0)

    const totalExpense = transactions
        .filter((t) => t.type === "expense")
        .reduce((acc, t) => acc + t.amount, 0)

    const netCashflow = totalIncome - totalExpense

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
                <CardHeader>
                    <CardTitle>Receitas</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl text-green-600 font-semibold">
                        R$ {totalIncome.toFixed(2)}
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Despesas</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl text-red-500 font-semibold">
                        R$ {totalExpense.toFixed(2)}
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Saldo</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-semibold">
                        R$ {netCashflow.toFixed(2)}
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Balanço por mês</CardTitle>
                </CardHeader>
                <CardContent>
                    <CashFlowChart />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Gasto por categoria</CardTitle>
                </CardHeader>
                <CategorySummaryChart type="expense" />
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Ganho por categoria</CardTitle>
                </CardHeader>
                <CategorySummaryChart type="income" />
            </Card>
        </div>
    )
}
