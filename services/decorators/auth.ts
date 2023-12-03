import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ServiceResponseDto } from "@/services/shared/dtos/service-response.dto";

export const Auth = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Not Authorized
  if (!user?.email)
    return NextResponse.json(new ServiceResponseDto(403, null), {
      status: 403,
    });

  return user
};
