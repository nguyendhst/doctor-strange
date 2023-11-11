import { TAppointmentFormFields } from "@/app/book-appointment/hooks/useAppointmentForm";
import { CreateAppointmentDto } from "@/services/appointments/appointment-create.dto";
import { createAppointment } from "@/services/appointments/appointments.service";
import { FormFields } from "@/services/form/form.dto";
import { PatientDto } from "@/services/patients/patients.dto";
import { createPatients } from "@/services/patients/patients.services";
import { ServiceResponseDto } from "@/services/shared/dtos/service-response.dto";
import { SupabaseClient } from "@supabase/supabase-js";

export const formSubmission = async (
  client: SupabaseClient<any, "public", any>,
  form: TAppointmentFormFields
) => {
  const formConfig = new FormFields(form);

  // Checking if a user with all matching fields existed
  const { data, error } = await client
    .from("users")
    .select("id")
    .match({
      ...JSON.parse(JSON.stringify(formConfig.user)),
    });

  const userId =
    data?.[0]?.id ??
    (await createPatients(client, formConfig.user).then(
      (data) => data.data?.[0].id
    ));

  formConfig.setAppointment(userId);

  if (formConfig.appointment) {
    return await createAppointment(client, formConfig.appointment);
  }

  if (error) {
    console.error(error);
    throw new Error("Supabase INSERT error");
  }

  return new ServiceResponseDto(200, data);
};
