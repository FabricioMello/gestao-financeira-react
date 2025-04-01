import { useEffect, useState } from "react"
import { api } from "@/services/api"
import {Category} from "@/types";

export function useCategories(userId: number) {
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        setLoading(true)
        api.get(`/categories?userId=${userId}`)
            .then((res) => setCategories(res.data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, [userId])

    return { categories, loading, error }
}