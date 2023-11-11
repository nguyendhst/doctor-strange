import { PatientDto } from "@/services/patients/patients.dto";
import { ServiceResponseDto } from "@/services/shared/dtos/service-response.dto";
import { SupabaseClient } from "@supabase/supabase-js";

export const createPatients = async (client: SupabaseClient<any, "public", any>, patients: PatientDto) => {

  const {data, error} = await client.from('users').insert([patients]).select();

  if (error) {
    console.error(error)
    throw new Error('Supabase INSERT error')
  }

  return new ServiceResponseDto(200, data)
}