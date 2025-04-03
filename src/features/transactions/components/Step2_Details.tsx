import { useCategories } from "@hooks/categories/useCategories.ts"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useFormContext } from "react-hook-form"
import { useTransactionForm } from "../store/transactionForm.store"
import { useEffect } from "react"

export function Step2_Details() {
    const { register, setValue } = useFormContext()
    const { data } = useTransactionForm()
    const type = data.type // income | expense

    console.log('type', type);
    const { categories } = useCategories(1)
    const filteredCategories = categories.filter((c) => c.type === type)
    console.log(filteredCategories);

    useEffect(() => {
        if (data.categoryId) {
            setValue("categoryId", data.categoryId)
        }
        if (data.description) {
            setValue("description", data.description)
        }
        if (data.date) {
            setValue("date", data.date)
        }
        if (data.notes) {
            setValue("notes", data.notes)
        }
    }, [data, setValue])

    return (
        <div className="space-y-4">
            <div>
                <Label>Categoria</Label>
                <Select onValueChange={(value) => setValue("categoryId", Number(value))}>
                    <SelectTrigger>
                        <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                        {filteredCategories.map((cat) => (
                            <SelectItem key={cat.id} value={String(cat.id)}>
                                {cat.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Label htmlFor="description">Descrição</Label>
                <Input id="description" {...register("description")} />
            </div>

            <div>
                <Label htmlFor="date">Data</Label>
                <Input id="date" type="date" {...register("date")} />
            </div>

            <div>
                <Label htmlFor="notes">Notas (opcional)</Label>
                <Textarea id="notes" {...register("notes")} />
            </div>
        </div>
    )
}