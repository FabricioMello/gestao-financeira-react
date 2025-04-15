import { create } from "zustand";
import { Step1Data } from "../schemas/step1.schema";
import { Step2Data } from "../schemas/step2.schema";

type TransactionFormData = Partial<Step1Data & Step2Data>;

interface TransactionFormState {
    data: TransactionFormData;
    setData: (values: TransactionFormData) => void;
    reset: (defaultValues?: TransactionFormData) => void;
}

export const useTransactionForm = create<TransactionFormState>((set) => ({
    data: {},
    setData: (values) =>
        set((state) => ({
            data: {
                ...state.data,
                ...values,
            },
        })),
    reset: (defaultValues = {}) => set({ data: defaultValues }),
}));
