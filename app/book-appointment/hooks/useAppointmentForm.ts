import { FORM_KEY } from "@/app/const/form";
import { queryUser } from "@/app/services/user/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ObjectSchema } from "yup";

export type TAppointmentFormFields = {
  [FORM_KEY.BIRTH]?: string;
  [FORM_KEY.EMAIL]?: string;
  [FORM_KEY.GENDER]?: string;
  [FORM_KEY.NAME]?: string;
  [FORM_KEY.NOTE]?: string;
  [FORM_KEY.PHONE]?: string;
  [FORM_KEY.SYMP]?: string;
  [FORM_KEY.DOCTOR]: string;
  [FORM_KEY.BOOKING_DATE]: string;
  [FORM_KEY.SHIFT]: string;
};

export const useAppointmentForm = (resolver: any) => {
  const { data, isError } = queryUser();

  const {
    control,
    formState: { errors, dirtyFields, isValid, isDirty },
    getValues,
    setValue,
    handleSubmit,
    trigger,
  } = useForm<TAppointmentFormFields>({
    defaultValues: {},
    resolver: resolver,
    mode: "all",
  });
  useEffect(() => {
    if (!isError) setValue(FORM_KEY.EMAIL, data?.data?.email);
  }, [data]);

  return {
    control,
    errors,
    dirtyFields,
    isValid,
    isDirty,
    getValues,
    handleSubmit,
    trigger,
  };
};
