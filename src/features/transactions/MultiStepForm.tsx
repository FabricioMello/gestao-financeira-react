import { Step1_BasicInfo } from "./components/Step1_BasicInfo"

export default function MultiStepForm() {
    return (
        <div className="max-w-md mx-auto mt-10">
            <Step1_BasicInfo onNext={() => alert("Próximo passo!")} />
        </div>
    )
}
