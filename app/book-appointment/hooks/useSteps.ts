"use client";
import { TAppointmentFormFields } from "@/app/book-appointment/hooks/useAppointmentForm";
import { FORM_KEY } from "@/app/const/form";
import { useFormSubmission } from "@/app/services/form/hooks";
import { StepProps, notification } from "antd";
import { Dispatch, SetStateAction, useCallback } from "react";
import { UseFormTrigger } from "react-hook-form";
import { useRouter } from "next/navigation";

const useSteps = (
  isValid: boolean,
  current: number,
  setCurrent: Dispatch<SetStateAction<number>>,
  trigger: UseFormTrigger<TAppointmentFormFields>
) => {
  const steps: StepProps[] = [
    {
      title: "Step 1",
      description: "Personal Information",
    },
    {
      title: "Step 2",
      description: "Your Symptom",
    },
    {
      title: "Step 3",
      description: "Booking",
    },
  ];

  const checkValidate = useCallback(async () => {
    switch (current) {
      case 0: {
        return await trigger([
          FORM_KEY.NAME,
          FORM_KEY.GENDER,
          FORM_KEY.BIRTH,
          FORM_KEY.PHONE,
        ]);
      }
      case 1: {
        return await trigger([FORM_KEY.NOTE]);
      }
      case 2: {
        return await trigger([
          FORM_KEY.SYMP,
          FORM_KEY.DOCTOR,
          FORM_KEY.BOOKING_DATE,
          FORM_KEY.SHIFT,
        ]);
      }
    }
  }, [current]);

  const handleNext = async () => {
    const isGoodToForward = await checkValidate();
    if (isGoodToForward && current < steps.length) {
      setCurrent(current + 1);
    }
  };

  const handlePrevious = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const {
    mutate,
    isLoading: submitLoading,
    isError: submitError,
  } = useFormSubmission();

  const navigator = useRouter();

  const handleSubmit = (formValue: TAppointmentFormFields) => {
    mutate(
      {
        ...formValue,
        [FORM_KEY.BOOKING_DATE]: new Date(formValue[FORM_KEY.BOOKING_DATE]),
        [FORM_KEY.BIRTH]: new Date(formValue[FORM_KEY.BIRTH]),
      },
      {
        onSuccess: () => {
          notification.success({
            message: "Success!",
            description: "Your appointment has been booked!",
          });
          navigator.push("/appointments");
        },
      }
    );
  };

  return {
    steps,
    nextStepDisabled: !isValid,
    previousStepDisabled: current === 0,
    isLastStep: current === steps.length - 1,
    handleNext,
    handlePrevious,
    handleSubmit,
    submitLoading,
    submitError,
  };
};

export default useSteps;
