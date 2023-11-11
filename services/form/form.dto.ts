import { TAppointmentFormFields } from "@/app/book-appointment/hooks/useAppointmentForm";
import { FORM_KEY } from "@/app/const/form";
import { PatientDto } from "@/services/patients/patients.dto";
import { CreateAppointmentDto } from "@/services/appointments/appointment-create.dto";

export class FormFields {
  user: PatientDto;

  appointment: CreateAppointmentDto | undefined;

  form: TAppointmentFormFields;

  constructor(
    formfields: TAppointmentFormFields
  ) {
    this.user = new PatientDto(
      formfields[FORM_KEY.NAME],
      formfields[FORM_KEY.GENDER] ?? 'Other',
      formfields[FORM_KEY.PHONE],
      formfields[FORM_KEY.EMAIL],
      formfields[FORM_KEY.BIRTH],
    );
    this.appointment = undefined;
    this.form = formfields;
  }

  setAppointment (userId: string | number) {
    this.appointment = new CreateAppointmentDto(
      userId,
      this.form[FORM_KEY.DOCTOR],
      this.form[FORM_KEY.BOOKING_DATE],
      this.form[FORM_KEY.SHIFT],
      this.form[FORM_KEY.SYMP],
      this.form[FORM_KEY.NOTE]
    )
  }
}