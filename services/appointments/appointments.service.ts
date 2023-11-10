import { SupabaseClient } from "@supabase/supabase-js";
import { ServiceResponseDto } from "../shared/dtos/service-response.dto";
import { CreateAppointmentDto } from "./appointment-create.dto";

export async function getAppointmentById(
  client: SupabaseClient<any, "public", any>,
  id: number
): Promise<ServiceResponseDto> {
  const { data: doctor, error } = await client
    .from("recommendations")
    .select(
      `
      *,
      doctors!inner (
        *
      ),
      users!inner(
        *
      )
      `
    )
    .eq("id", id);

  if (error) {
    throw new Error(`Supabase query error: ${error.message}`);
  }
  if (!doctor || doctor.length == 0) {
    return new ServiceResponseDto(404, null);
  }

  return new ServiceResponseDto(200, doctor[0]);
}

export async function getUserAppointments(
  client: SupabaseClient<any, "public", any>,
  id: number
): Promise<ServiceResponseDto> {
  const { data: doctor, error } = await client
    .from("recommendations")
    .select(
      `
      *,
      doctors!inner (
        *
      ),
      users!inner(
        *
      )
      `
    )
   .eq("user_id", id);

  if (error) {
    throw new Error(`Supabase query error: ${error.message}`);
  }
  if (!doctor || doctor.length == 0) {
    return new ServiceResponseDto(404, null);
  }

  return new ServiceResponseDto(200, doctor);
}

export async function createAppointment(
  client: SupabaseClient<any, "public", any>,
  appointment: CreateAppointmentDto
): Promise<ServiceResponseDto> {
  //Check data
  //Check user valid
  const {data:user} = await client
    .from('users')
    .select('id')
    .eq('id', appointment.userId)
  //Check doctor valid
  const {data:doctor} = await client
    .from('doctors')
    .select('id')
    .eq('id', appointment.doctorId)
  //Check symptom valid
  const {data:symptom} = await client
    .from('symptoms')
    .select('id')
    .eq('id', appointment.symptomId)

  //TODO: check if date is valid

  if(!user || !doctor || !symptom ) {
    return new ServiceResponseDto(400, null);
  }

  //Create appointment
  const { data, error } = await client
    .from("recommendations")
    .insert({
      user_id: appointment.userId,
      doctor_id: appointment.doctorId,
      symptom_id: appointment.symptomId,
      recommendation_time: appointment.recommendationTime,
      notes : appointment.note
    })
    .select();
  
  return new ServiceResponseDto(201, data);
}
