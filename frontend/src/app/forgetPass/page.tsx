"use client";
import React, { useState } from "react";
import ForgetPass from "@/components/ForgetPass/ForgetPass";

export default function Forget() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep(step + 1);
  };
  return (
    <div className="w-full h-screen flex justify-center ">
      {step === 0 && <ForgetPass />}
      {/* {step === 1 && <SignUpSecond stage={step} nextHandle={handleNext} />}
      {step === 2 && <SignUpThird stage={step} nextHandle={handleNext} />}
      {step === 3 && <SignUpFinal stage={step} />} */}
    </div>
  );
}
