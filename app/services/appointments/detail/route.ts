import { createAppointment, getAppointmentById, getUserAppointments } from '@/services/appointments/appointments.service'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest): Promise<any> {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {searchParams} = new URL(req.url);
  const id = searchParams.get("id");
  const userId = searchParams.get("userId");
  
  if(!id){
    if(!userId){
      return NextResponse.json({
        statusCode: 404,
        data: null,
      })
    }
    const response = await getUserAppointments(supabase, parseInt(userId));
    return NextResponse.json(response);
  }

  const response = await getAppointmentById(supabase, parseInt(id));
  return NextResponse.json(response);
}

export async function POST(req: NextRequest): Promise<any> {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const requestBody = await req.json()
  const response = await createAppointment(supabase, requestBody)  

  return NextResponse.json(response);
}