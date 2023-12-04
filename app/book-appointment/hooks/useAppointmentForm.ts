"use client"

import { FORM_KEY } from "@/app/const/form";
import { queryUser } from "@/app/services/user/hooks";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export type TAppointmentFormFields = {
  [FORM_KEY.BIRTH]: string | Date;
  [FORM_KEY.EMAIL]?: string;
  [FORM_KEY.GENDER]: string;
  [FORM_KEY.NAME]: string;
  [FORM_KEY.NOTE]?: string;
  [FORM_KEY.PHONE]: string;
  [FORM_KEY.SYMP]?: string[];
  [FORM_KEY.DOCTOR]: string;
  [FORM_KEY.BOOKING_DATE]: string | Date;
  [FORM_KEY.SHIFT]: string;
};

export const useAppointmentForm = (resolver: any) => {
  const { data, isError } = queryUser();

  const {
    control,
    formState: { errors, dirtyFields, isValid, isDirty },
    getValues,
    setValue,
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
    trigger,
  };
};
