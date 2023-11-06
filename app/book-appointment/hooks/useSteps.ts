"use client"
import { StepProps } from "antd";
import { Dispatch, SetStateAction, useState } from "react";
import { UseFormHandleSubmit } from "react-hook-form";

const useSteps = (isValid: boolean, current: number, setCurrent: Dispatch<SetStateAction<number>>) => {
  const steps: StepProps[] = [
    {
        title: 'Step 1',
        description: 'Personal Information',
    },
    {
        title: 'Step 2',
        description: 'Your Symptom',
    },
    {
        title: 'Step 3',
        description: 'Booking',
    },
  ];

  const handleNext = () => {
    if (current < steps.length - 1 && isValid) {
      setCurrent(current + 1);
    }
  };

  const handlePrevious = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return {
    steps,
    nextStepDisabled: !isValid,
    previousStepDisabled: current === 0,
    isLastStep: current === steps.length - 1,
    handleNext,
    handlePrevious,
  };
};

export default useSteps;