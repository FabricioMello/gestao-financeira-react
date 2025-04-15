import TransactionsLayout from "@components/layout/TransactionsLayout.tsx";
import NewTransactionDialog from "@components/layout/NewTransactionDialog.tsx";

export default function Categories() {
    return (
        <div className="container mx-auto py-10 space-y-4">
            <div className="rounded-xl border bg-white shadow-md p-6">
                <NewTransactionDialog />
                <TransactionsLayout />
            </div>
        </div>
    )
}
