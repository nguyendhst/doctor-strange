import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { formSubmission } from "@/services/form/form.service";
import { ServiceResponseDto } from "@/services/shared/dto/service-response.dto";

export async function POST(req: NextRequest): Promise<any> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const json = await req.json();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Not Authorized
  if (!user?.email)
    return NextResponse.json(
      new ServiceResponseDto(403, null, "Unauthorized"),
      {
        status: 403,
      }
    );

  return NextResponse.json(await formSubmission(supabase, json));
}