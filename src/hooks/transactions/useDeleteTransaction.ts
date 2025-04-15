import { useState } from "react";
import { api } from "@/services/api.ts"

export function useDeleteTransaction() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const deleteTransactionById = async (id: number | null) => {
        setLoading(true);
        setError(null);
        try {
            api.delete(`/transactions/${id}`).then((res) => {
                if (res.status === 200) {
                    console.log("Transaction deleted successfully");
                } else {
                    console.error("Failed to delete transaction");
                }
            });
        } catch (err) {
            setError(err as Error);
        } finally {
            setLoading(false);
        }
    };

    return { deleteTransactionById, loading, error };
}