import { useState } from "react";
import { api } from "@/services/api.ts"

export function useDeleteCategory() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const deleteCategoryById = async (id: number) => {
        setLoading(true);
        setError(null);
        try {
            api.delete(`/categories/${id}`).then((res) => {
                if (res.status === 200) {
                    console.log("Category deleted successfully");
                } else {
                    console.error("Failed to delete category");
                }
            });
        } catch (err) {
            setError(err as Error);
        } finally {
            setLoading(false);
        }
    };

    return { deleteCategoryById, loading, error };
}