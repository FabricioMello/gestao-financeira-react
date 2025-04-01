import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { step1Schema, Step1Data } from "../schemas/step1.schema"
import { useTransactionForm } from "../store/transactionForm.store"
import { Input } from "@components/ui/input"
import { Button } from "@components/ui/button"
import { Label } from "@components/ui/label"
import {
    RadioGroup,
    RadioGroupItem,
} from "@components/ui/radio-group"

export function Step1_BasicInfo({ onNext }: { onNext: () => void }) {
    const { data, setData } = useTransactionForm()

    const {
        setValue,
        watch,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Step1Data>({
        resolver: zodResolver(step1Schema),
        defaultValues: {
            type: data.type || "income",
            title: data.title || "",
            amount: data.amount || 0,
        },
    })

    const selectedType = watch("type")

    const onSubmit = (values: Step1Data) => {
        setData(values)
        onNext()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
                <Label className="mb-2 block">Tipo</Label>
                <RadioGroup
                    value={selectedType}
                    onValueChange={(value: "income" | "expense") => setValue("type", value)}
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="income" id="income" />
                        <Label htmlFor="income">Receita</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="expense" id="expense" />
                        <Label htmlFor="expense">Despesa</Label>
                    </div>
                </RadioGroup>
                {errors.type && <p className="text-red-500 text-sm">{errors.type.message}</p>}
            </div>

            <div>
                <Label htmlFor="title">Título</Label>
                <Input id="title" {...register("title")} />
                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            </div>

            <div>
                <Label htmlFor="amount">Valor</Label>
                <Input id="amount" type="number" {...register("amount")} />
                {errors.amount && <p className="text-red-500 text-sm">{errors.amount.message}</p>}
            </div>

            <Button type="submit">Próximo</Button>
        </form>
    )
}
