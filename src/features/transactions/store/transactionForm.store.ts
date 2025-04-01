import { create } from "zustand"
import { Step1Data } from "../schemas/step1.schema"
import { Step2Data } from "../schemas/step2.schema"

interface TransactionFormState {
    data: Partial<Step1Data & Step2Data>
    setData: (values: Partial<Step1Data & Step2Data>) => void
    reset: () => void
}

export const useTransactionForm = create<TransactionFormState>((set) => ({
    data: {},
    setData: (values) => set((state) => ({
        data: { ...state.data, ...values }
    })),
    reset: () => set({ data: {} })
}))
