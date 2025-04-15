import { useCategories } from "@hooks/categories/useCategories";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";
import { useTransactionForm } from "../store/transactionForm.store";
import { Step2Data } from "@/features/transactions/schemas/step2.schema";
import { Button } from "@/components/ui/button";

interface Step2Props {
    onNext: () => void;
}

export function Step2_Details({ onNext }: Step2Props) {
    const { register, handleSubmit, setValue, watch } = useFormContext<Step2Data>();
    const { data, setData } = useTransactionForm();
    const { categories } = useCategories(1);
    const type = data.type;
    const categoryId = watch("categoryId");
    const filteredCategories = categories.filter((c) => c.type === type);

    const onSubmit = (values: Step2Data) => {
        setData(values);
        onNext();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <Label>Categoria</Label>
                <Select
                    value={categoryId ? String(categoryId) : ""}
                    onValueChange={(value) => setValue("categoryId", Number(value))}
                >
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

            <div className="pt-4">
                <Button type="submit">Próximo</Button>
            </div>
        </form>
    );
}
