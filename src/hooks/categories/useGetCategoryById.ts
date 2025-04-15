import { useState } from "react"
import { api } from "@/services/api.ts"
import {Category} from "@/interfaces";

export function useGetCategoryById() {
    const [category, setCategory] = useState<Category>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    const getCategoryById = async (id: number) => {
            setLoading(true)
            api.get(`/categories?id=${id}`)
                .then((res) => setCategory(res.data))
                .catch((err) => setError(err))
                .finally(() => setLoading(false))
    };

    return { category, getCategoryById, loading, error }
}