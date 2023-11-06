import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ObjectSchema } from "yup";

export const useAppointmentForm = (currentFormSchema: ObjectSchema<Partial<TAppointmentFormFields>>) => {
  const {
    control,
    formState: { errors, dirtyFields, isValid, isDirty },
    getValues, 
    handleSubmit,
  } = useForm({
    defaultValues: {},
    resolver: yupResolver<Partial<TAppointmentFormFields>>(currentFormSchema),
    mode: 'all',
  });

  return {
    control, errors, dirtyFields, isValid, isDirty, getValues, handleSubmit,
  }
}