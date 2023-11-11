import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { User } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'
import { createPatients } from '@/services/patients/patients.services'

export async function POST(req: NextRequest): Promise<any> {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const json = await req.json();
  const {
    data,
  } = await createPatients(supabase, json);

  return data   
  ? 
  NextResponse.json({
    statusCode: 201,
    data: data,
  })
  :NextResponse.json( 
  {
    statusCode: 403,
    data: data,
  });

}