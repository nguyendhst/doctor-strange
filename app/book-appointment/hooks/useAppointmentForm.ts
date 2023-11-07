import { FORM_KEY } from "@/app/const/form";
import { queryUser } from "@/app/services/user/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ObjectSchema } from "yup";

declare type TAppointmentFormFields = {
  [FORM_KEY.BIRTH]? : string;
  [FORM_KEY.EMAIL]? : string;
  [FORM_KEY.GENDER]?: string;
  [FORM_KEY.NAME]?: string;
  [FORM_KEY.NOTE]?: string;
  [FORM_KEY.PHONE]?: string;
  [FORM_KEY.SYMP]?: string;
}

export const useAppointmentForm = (currentFormSchema: ObjectSchema<Partial<TAppointmentFormFields>>) => {
  const {data} = queryUser();

  const {
    control,
    formState: { errors, dirtyFields, isValid, isDirty },
    getValues,
    setValue,
    handleSubmit,
  } = useForm<TAppointmentFormFields>({
    defaultValues: {},
    resolver: yupResolver<Partial<TAppointmentFormFields>>(currentFormSchema),
    mode: 'all',
  });
  if (data?.data?.email) {
    setValue(FORM_KEY.EMAIL, data.data.email);
  }

  return {
    control, errors, dirtyFields, isValid, isDirty, getValues, handleSubmit,
  }
}