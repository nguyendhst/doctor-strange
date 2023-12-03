import { getDoctorById, getFreeSchedule } from '@/services/doctor/doctor.service'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest): Promise<any> {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {searchParams} = new URL(req.url);
  const doctorId = searchParams.get("id");
  const date = Number(searchParams.get("date"));

  const response = await getFreeSchedule(supabase, doctorId!, date);
  return NextResponse.json(response);
}