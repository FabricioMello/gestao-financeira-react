import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@components/ui/table";
import { Transaction } from "@/interfaces";
import { useUserStore } from "@/features/transactions/store/userStore.ts";
import { ConfirmDeleteDialog } from "@/components/layout/ConfirmDeleteDialog";
import { Loader2, ArrowDown, ArrowUp } from "lucide-react";
import { useTransactions } from "@hooks/transactions/useTransactions.ts";
import { useDeleteTransaction } from "@hooks/transactions/useDeleteTransaction.ts";
import { useCategories } from "@hooks/categories/useCategories.ts";

export default function CategoriesLayout() {
    const user = useUserStore((state) => state.user);
    const { transactions, loading, error } = useTransactions(user?.id ?? 0);
    const { deleteTransactionById, loading: deleteLoading, error: deleteError } = useDeleteTransaction();
    const { categories } = useCategories(user?.id ?? 0);

    if (loading || !user) return <Loader2 className="h-5 w-5 animate-spin text-primary" />;
    if (error) return <p>Error loading transactions: {error.message}</p>;
    if (deleteError) return <p>Error deleting transaction: {deleteError.message}</p>;

    const findCategory = (categoryId: number) => {
        const category = categories.find((c) => Number(c.id) === categoryId);
        return category ? category.name : "Unknown";
    };

    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-muted">
                    <TableHead>Categoria</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Recorrente?</TableHead>
                    <TableHead>Notas</TableHead>
                    <TableHead>Ações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {transactions.map((transaction: Transaction) => (
                    <TableRow key={transaction.id} className="even:bg-muted/50">
                        <TableCell>{findCategory(transaction.categoryId)}</TableCell>
                        <TableCell>{transaction.amount.toFixed(2)}</TableCell>
                        <TableCell>
                            <span className={`flex items-center gap-1 font-medium ${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}>
                                {transaction.type === "income" ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                                {transaction.type === "income" ? "Receita" : "Despesa"}
                          </span>
                        </TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                        <TableCell>{transaction.status}</TableCell>
                        <TableCell>
                            {transaction.isRecurring ? "Sim" : "Não"}
                        </TableCell>
                        <TableCell>{transaction.notes || "N/A"}</TableCell>
                        <TableCell>
                            <ConfirmDeleteDialog
                                onConfirm={() => deleteTransactionById(Number(transaction.id))}
                                loading={deleteLoading}
                                title="Excluir Transação"
                                description="Tem certeza que deseja excluir esta transação?"
                            />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}