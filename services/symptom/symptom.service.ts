import { ServiceResponseDto } from "../shared/dto/service-response.dto";
import { SymptomDto } from "./symptom.dto";

export async function getAllSymptoms(client: any): Promise<ServiceResponseDto> {
  const { data: symptoms, error } =  await client
    .from('symptoms')
    .select('*');

  if(error){
    throw new Error(`Supabase query error: {error.message}`);
  }

  if(!symptoms || symptoms.length == 0){
    return new ServiceResponseDto(404, null);
  }
  
  return new ServiceResponseDto(200, symptoms);
}

export async function getSymptomById(client: any, id: number): Promise<ServiceResponseDto> {
  const { data: symptoms, error } =  await client
    .from('symptoms')
    .select('*')
    .eq('id', id);

  if(error){
    throw new Error(`Supabase query error: {error.message}`);
  }

  if(!symptoms || symptoms.length == 0){
    return new ServiceResponseDto(404, null);
  }
  
  return new ServiceResponseDto(200, symptoms);
}

export async function addSymptom(client: any, symptom: string): Promise<ServiceResponseDto>{
  const { data, error } = await client
    .from('symptoms')
    .insert([
      {symptom: symptom}
    ])
    .select() 

  if(error){
    throw new Error(`Supabase query error: ${error.message}`); 
  }

  return new ServiceResponseDto(200, data)
}

export async function updateSymptom(client: any, symptom: SymptomDto): Promise<ServiceResponseDto>{
  const { data, error } = await client
    .from('symptoms')
    .update(symptom)
    .eq('id', symptom.id)
    .select()

  if(error){
    throw new Error(`Supabase query error: ${error.message}`); 
  }

  return new ServiceResponseDto(200, data)
}

export async function deleteSymptom(client: any, id: number): Promise<ServiceResponseDto> {
  const { error } =  await client
    .from('symptoms')
    .delete()
    .eq('id', id);

  if(error){
    throw new Error(`Supabase query error: {error.message}`);
  }
  
  return new ServiceResponseDto(200, null);
}