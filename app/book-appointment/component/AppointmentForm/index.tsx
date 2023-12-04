"use client";

import BookingSteps from "@/components/BookingSteps";
import useAppointmentFormResolver from "@/app/book-appointment/hooks/useAppointmentResolver";
import useSteps from "@/app/book-appointment/hooks/useSteps";
import { useCounter } from "@/app/book-appointment/hooks/useCounter";
import { useAppointmentForm } from "@/app/book-appointment/hooks/useAppointmentForm";
import FormSteps from "@/components/FormSteps";
import Button from "@/components/Button";
import { queryUser } from "@/app/services/user/hooks";

const AppointmentForm = () => {
  const { data } = queryUser();
  const { current, setCurrent } = useCounter();
  const { form, FormSchema } = useAppointmentFormResolver();
  const { control, dirtyFields, errors, isDirty, isValid, getValues, trigger } =
    useAppointmentForm(FormSchema);

  const {
    steps,
    nextStepDisabled,
    previousStepDisabled,
    handleNext,
    handlePrevious,
    handleSubmit,
    isLastStep,
    submitLoading,
    submitError,
  } = useSteps(isValid, current, setCurrent, trigger);

  return (
    <section className="max-w-7xl bg-white min-h-fit max-h-[720px]  p-6 w-full rounded-xl">
      {data?.data?.email && (
        <div className="max-w-7xl bg-white min-h-fit max-h-[720px]  p-6 w-full rounded-xl">
          <BookingSteps
            steps={steps}
            current={current}
            leftContent={
              <Button onClick={handlePrevious} disabled={previousStepDisabled}>
                Previous
              </Button>
            }
            rightContent={
              isLastStep ? (
                <Button
                  type="default"
                  onClick={() => handleSubmit(getValues())}
                  loading={submitLoading}
                >
                  Done
                </Button>
              ) : (
                <Button type="default" onClick={handleNext}>
                  Next
                </Button>
              )
            }
          >
            <FormSteps
              control={control}
              errors={errors}
              current={current}
              form={form}
            />
          </BookingSteps>
        </div>
      )}
    </section>
  );
};

export default AppointmentForm;
