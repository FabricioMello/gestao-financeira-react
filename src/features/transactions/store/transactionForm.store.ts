import { create } from "zustand"
import { Step1Data } from "../schemas/step1.schema"

interface TransactionFormState {
    data: Partial<Step1Data>
    setData: (values: Partial<Step1Data>) => void
    reset: () => void
}

export const useTransactionForm = create<TransactionFormState>((set) => ({
    data: {},
    setData: (values) => set((state) => ({
        data: { ...state.data, ...values }
    })),
    reset: () => set({ data: {} })
}))
