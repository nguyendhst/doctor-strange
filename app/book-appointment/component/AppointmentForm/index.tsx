"use client"

import BookingSteps from '@/components/BookingSteps';
import useAppointmentFormResolver from '@/app/book-appointment/hooks/useAppointmentResolver';
import useSteps from '@/app/book-appointment/hooks/useSteps';
import { useCounter } from '@/app/book-appointment/hooks/useCounter';
import { useAppointmentForm } from '@/app/book-appointment/hooks/useAppointmentForm';
import FormSteps from '@/components/FormSteps';
import Button from '@/components/Button';

const AppointmentForm = () => {

  const { current, setCurrent } = useCounter();
  const { form, FormSchema } = useAppointmentFormResolver();
  const { control, dirtyFields, errors, isDirty, isValid, getValues, handleSubmit, trigger} = useAppointmentForm(FormSchema)

  const {
    steps,
    nextStepDisabled,
    previousStepDisabled,
    handleNext,
    handlePrevious,
    isLastStep,
  } = useSteps(isValid, current, setCurrent, trigger);

  return (
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
          isLastStep
            ?
            <Button type="default" onClick={handleNext}>
              Done
            </Button>
            :
            <Button type="default" onClick={handleNext}>
              Next
            </Button>
        }
      >
        <FormSteps control={control} errors={errors} current={current} form={form} />
      </BookingSteps>
    </div >
  )
}

export default AppointmentForm
