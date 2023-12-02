import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
// request: Request
export async function GET() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  
  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Filter with foreign table -> <table>!inner
  try {
    if (!user) {
      return NextResponse.json({
        error: "Not authentication!"
      }, {
        status: 400
      })
    }
    const { data, error } = await supabase
      .from("recommendations")
      .select(
        `
        id,
        users!inner (id, name, social_id, contact),
        doctors (id, name, department),
        symptoms (symptom),
        recommendation_time,
        shift
      `
      )
      // .like("users.contact", `%${reqbody.email.toString()}%`);
      .match({
        "users.contact": user!.email!.toString()
      })
    if (data) {
      return NextResponse.json({
        message: "Successful",
        data: data,
        statusCode: 200,
      });
    }

    return NextResponse.json({
      message: "Successful",
      data: [],
      statusCode: 200,
    });
  } catch (error) {
    console.log("Error in app/api/appointments/route.tsx", error);
  }
}
// export async function GET() {
//     return NextResponse.json({
//         message: "OK",
//         data: [],
//         statusCode: 200
//     })
// }
// data: data ? data.map(item => ({
//     appointmentId: item.id,
//     createdAt: null,
//     patientName: item.users.name,
//     socialId: item.users.social_id.toString(),
//     symptoms: [item.symptoms.symptom],
//     doctorName: item.doctors.name,
//     departmentName: item.doctors.department,
//     schedule: item.recommendation_time
// })) : [],
