import { SupabaseClient } from "@supabase/supabase-js";
import { ServiceResponseDto } from "../shared/dtos/service-response.dto";
import { CreateDoctorDto } from "./doctor-create.dto";
import { UpdateDoctorDto } from "./doctor-update.dto";
import dayjs from "dayjs";

export async function createDoctor(
  client: any,
  doctor: CreateDoctorDto
): Promise<ServiceResponseDto> {
  const { data, error } = await client
    .from("doctors")
    .insert([doctor])
    .select();
  return new ServiceResponseDto(201, data);
}

export async function getallDoctor(
  client: SupabaseClient<any, "public", any>,
  textSearch?: string | null
): Promise<ServiceResponseDto> {
  const { data: doctors, error } = await client
    .from("doctors")
    .select("*")
    .like("name", `%${textSearch ?? ''}%`);

  if (error) {
    throw new Error(`Supabase query error: ${error.message}`);
  }

  if (!doctors || doctors.length == 0) {
    return new ServiceResponseDto(404, null);
  }

  return new ServiceResponseDto(200, doctors);
}

export const getAllDepartments = async (
  client: SupabaseClient<any, "public", any>,
  textSearch: string | null
): Promise<ServiceResponseDto> => {
  const { data: departments, error } = await client
    .from("distinct_departments")
    .select("*")
    .like("specialization", `%${textSearch ?? ""}%`);

  if (error) {
    throw new Error(`Supabase query error: ${error.message}`);
  }

  if (!departments) {
    return new ServiceResponseDto(404, null);
  }

  return new ServiceResponseDto(200, departments);
};

export async function getDoctorById(
  client: any,
  id: number
): Promise<ServiceResponseDto> {
  const { data: doctor, error } = await client
    .from("doctors")
    .select("*")
    .eq("id", id);

  if (error) {
    throw new Error(`Supabase query error: ${error.message}`);
  }
  if (!doctor || doctor.length == 0) {
    return new ServiceResponseDto(404, null);
  }

  return new ServiceResponseDto(200, doctor[0]);
}

export async function getDoctorBySymptom(
  client: any,
  id: number
): Promise<ServiceResponseDto> {
  const { data: doctors, error } = await client
    .from("doctors")
    .select(
      `
      *,
      symptom_specialization!inner (
        symptom_id
      )
    `
    )
    .eq("symptom_specialization.symptom_id", id);

  const returnData = doctors.map((doctor: any) => {
    const { symptom_specialization, ...newDoctorData } = doctor;
    return newDoctorData;
  });

  if (error) {
    throw new Error(`Supabase query error: ${error.message}`);
  }

  if (!returnData || returnData.length == 0) {
    return new ServiceResponseDto(404, null);
  }

  return new ServiceResponseDto(200, returnData);
}

export async function getDoctorsByMultipleSymptoms(
  client: any,
  symptomsIds: string[],
  textSearch?: string | null,
): Promise<ServiceResponseDto> {
  const { data: doctors, error } = await client
    .from("doctors")
    .select(
      `
      *,
      symptom_specialization!inner (
        symptom_id
      )
    `
    )
    .in("symptom_specialization.symptom_id", symptomsIds)
    .like("name", `%${textSearch ?? ''}%`);

  const returnData = doctors.map((doctor: any) => {
    const { symptom_specialization, ...newDoctorData } = doctor;
    return newDoctorData;
  });

  if (error) {
    throw new Error(`Supabase query error: ${error.message}`);
  }

  if (!returnData || returnData.length == 0) {
    return new ServiceResponseDto(404, null);
  }

  return new ServiceResponseDto(200, returnData);
}

export async function updateDoctorInfo(
  client: any,
  doctor: UpdateDoctorDto
): Promise<ServiceResponseDto> {
  const { data, error } = await client
    .from("doctors")
    .update(doctor)
    .eq("id", doctor.id)
    .select();

  if (error) {
    throw new Error(`Supabase query error: ${error.message}`);
  }

  return new ServiceResponseDto(200, data);
}

export async function deleteDoctor(
  client: any,
  id: number
): Promise<ServiceResponseDto> {
  const { error } = await client.from("doctors").delete().eq("id", id);

  if (error) {
    throw new Error(`Supabase query error: ${error.message}`);
  }

  return new ServiceResponseDto(200, null);
}

export async function getFreeSchedule(
  client: SupabaseClient<any, "public", any>,
  doctorId: string,
  date: string,
): Promise<ServiceResponseDto> {

  const { data: morningShifts } = await client
    .from('recommendations')
    .select('shift')
    .eq('doctor_id', doctorId)
    .lt('recommendation_time', dayjs(date).endOf('day').toISOString())
    .gt('recommendation_time', dayjs(date).startOf('day').toISOString())
    .eq('shift', 'MORNING')

  const { data: afternoonShifts } = await client
    .from('recommendations')
    .select('shift')
    .eq('doctor_id', doctorId)
    .lt('recommendation_time', dayjs(date).endOf('day').toISOString())
    .gt('recommendation_time', dayjs(date).startOf('day').toISOString())
    .eq('shift', 'AFTERNOON')

  const availableShifts ={
    morning: !morningShifts || morningShifts?.length < 10,
    afternoon: !afternoonShifts || afternoonShifts?.length <10
  }

  return new ServiceResponseDto(200, availableShifts);
}