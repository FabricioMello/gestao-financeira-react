import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Step1_BasicInfo } from "./components/Step1_BasicInfo";
import { Step2_Details } from "@/features/transactions/components/Step2_Details.tsx";
import { Button } from "@/components/ui/button";

export default function MultiStepForm() {
    const methods = useForm();
    const [step, setStep] = useState(1);

    const handleNext = () => setStep((prevStep) => prevStep + 1);
    const handleBack = () => setStep((prevStep) => prevStep - 1);


    return (
        <FormProvider {...methods}>
            <div className="max-w-md mx-auto mt-10">
                {step === 1 && <Step1_BasicInfo onNext={handleNext} />}
                {step === 2 && <Step2_Details />}
                {step > 1 && (
                    <Button variant={"outline"} onClick={handleBack}>Voltar</Button>
                )}
            </div>
        </FormProvider>
    );
}