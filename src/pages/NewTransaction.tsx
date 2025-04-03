
import MultiStepForm from "@/features/transactions/MultiStepForm"

export default function NewTransaction() {
    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Nova Transação</h2>
            <MultiStepForm />
        </div>
    )
}
