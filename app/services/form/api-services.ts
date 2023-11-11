import { TAppointmentFormFields } from "@/app/book-appointment/hooks/useAppointmentForm";
import { API_FORM_SUBMISSION } from "@/app/services/form/api-paths";
import request from "umi-request";

export default async function postSubmitForm(
  form: TAppointmentFormFields
): Promise<TResponseMeta<any | null>> {
  return request<TResponseMeta<any | null>>(API_FORM_SUBMISSION, {
    method: "POST",
    data: {
      ...form,
    },
  });
}
