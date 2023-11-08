import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { User } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export async function POST(): Promise<any> {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user   
  ? 
  NextResponse.json({
    statusCode: 201,
    data: user,
  })
  :NextResponse.json( 
  {
    statusCode: 403,
    data: user,
  });

}