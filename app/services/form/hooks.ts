import { TAppointmentFormFields } from "@/app/book-appointment/hooks/useAppointmentForm";
import { API_FORM_SUBMISSION } from "@/app/services/form/api-paths";
import postSubmitForm from "@/app/services/form/api-services";
import { useMutation } from "react-query";

export const useFormSubmission = () => {
  return useMutation(
    [API_FORM_SUBMISSION],
    (form: TAppointmentFormFields) => postSubmitForm(form),
  );
};
