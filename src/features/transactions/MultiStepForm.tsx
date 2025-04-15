import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Step1_BasicInfo } from "./components/Step1_BasicInfo";
import { Step2_Details } from "@/features/transactions/components/Step2_Details";
import { Button } from "@/components/ui/button";
import { Step1Data } from "@/features/transactions/schemas/step1.schema";
import { Step2Data } from "@/features/transactions/schemas/step2.schema";

type MultiStepFormData = Step1Data & Step2Data;

export default function MultiStepForm() {
    const methods = useForm<MultiStepFormData>();
    const [step, setStep] = useState(1);

    const handleNext = () => setStep((prevStep) => prevStep + 1);
    const handleBack = () => setStep((prevStep) => prevStep - 1);

    return (
        <FormProvider {...methods}>
            <div className="max-w-md mx-auto mt-10 space-y-4">
                {step === 1 && <Step1_BasicInfo onNext={handleNext} />}
                {step === 2 && <Step2_Details onNext={handleNext} />}

                {step > 1 && (
                    <Button variant="outline" type="button" onClick={handleBack}>
                        Voltar
                    </Button>
                )}
            </div>
        </FormProvider>
    );
}