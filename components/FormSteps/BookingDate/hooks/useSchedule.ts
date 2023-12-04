import { FORM_KEY } from "@/app/const/form";
import { queryDoctorSchedule } from "@/app/services/doctor/hooks";
import { useEffect, useState } from "react";
import { Control, useWatch } from "react-hook-form";

export const useSchedule = (control: Control) => {
  const selectedBookingDate = useWatch({
    control,
    name: FORM_KEY["BOOKING_DATE"],
  });
  const selectedDoctor = useWatch({ control, name: FORM_KEY["DOCTOR"] });

  const { mutateAsync, isLoading } = queryDoctorSchedule();

  const [schedule, setSchedule] = useState<{
    code: string,
    name: string,
    disabled: boolean
  }[]>([]);

  useEffect(() => {
    mutateAsync({
      id: selectedDoctor,
      date: selectedBookingDate,
    }).then((data) => setSchedule(data.data));
  }, [selectedBookingDate, selectedDoctor]);

  return { schedule, isLoading };
};
