import { getDoctorById } from "@/services/doctor/doctor.service";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<any> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { searchParams } = new URL(req.url);
  const doctorId = searchParams.get("id");

  if (!doctorId) {
    return NextResponse.json({
      statusCode: 404,
      data: null,
    });
  }

  const response = await getDoctorById(supabase, parseInt(doctorId));
  return NextResponse.json(response, {status: response.statusCode});
}
