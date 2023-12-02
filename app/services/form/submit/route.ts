import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { formSubmission } from '@/services/form/form.service'

export async function POST(req: NextRequest): Promise<any> {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const json = await req.json();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Not Authorized
  if (!user?.email)
    return NextResponse.json({
      statusCode: 403,
      data: null,
    }, {
      status: 403,
    });
  
  const {
    data,
  } = await formSubmission(supabase, json);

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
