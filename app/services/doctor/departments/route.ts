import { getAllDepartments, getDoctorById } from '@/services/doctor/doctor.service'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest): Promise<any> {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {searchParams} = new URL(req.url);
  const textSearch = searchParams.get("search") ?? '';

  const response = await getAllDepartments(supabase, textSearch);
  return NextResponse.json(response);
}