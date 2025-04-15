import {
    AlertDialog, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@components/ui/alert-dialog.tsx";
import {Button} from "@components/ui/button.tsx";
import {BadgeDollarSign} from "lucide-react";
import MultiStepForm from "@/features/transactions/MultiStepForm.tsx";
import {useForm} from "react-hook-form";
import {useTransactionForm} from "@/features/transactions/store/transactionForm.store.ts";

export default function NewTransactionDialog() {
    const {data} = useTransactionForm()
    const methods = useForm();
    const {reset} = methods;
    const handleClose = () => {
        reset();
        console.log(data)
    }


    return (
                <div className="text-3xl font-semibold tracking-tight pb-5 flex ">
                    <h1 className="flex-auto">Transações</h1>
                    <AlertDialog >
                        <AlertDialogTrigger asChild>
                            <Button  variant={"outline"}>
                                Registrar nova transação
                                <BadgeDollarSign />
                                <span className="sr-only">Excluir</span>
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <AlertDialogTitle>{"Nova transação"}</AlertDialogTitle>
                                        <AlertDialogDescription>{"Cadastre uma nova transação de receita ou gasto"}</AlertDialogDescription>
                                    </div>
                                    <AlertDialogCancel onClick={handleClose}>X</AlertDialogCancel>
                                </div>
                            </AlertDialogHeader>
                            <MultiStepForm />
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            )
}