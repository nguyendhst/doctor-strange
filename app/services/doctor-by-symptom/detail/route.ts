import { getDoctorBySymptom, getAllDoctor } from '@/services/doctor/doctor.service'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest): Promise<any> {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {searchParams} = new URL(req.url);
  const symptomId = searchParams.get("id");

  if(!symptomId){
    const response = await getAllDoctor(supabase);
    return NextResponse.json(response)
  }

  const response = await getDoctorBySymptom(supabase, parseInt(symptomId));
  return NextResponse.json(response);
}