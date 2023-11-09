import { getDoctorBySymptom, getDoctorsByMultipleSymptoms, getallDoctor } from '@/services/doctor/doctor.service'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest): Promise<any> {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {searchParams} = new URL(req.url);
  const symptomIds = searchParams.getAll("ids");
  const textSearch = searchParams.get("search");

  if(!symptomIds || symptomIds.length === 0){
    const response = await getallDoctor(supabase, textSearch);
    return NextResponse.json(response)
  }

  const response = await getDoctorsByMultipleSymptoms(supabase, symptomIds, textSearch);
  return NextResponse.json(response);
}