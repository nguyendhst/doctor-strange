import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const reqbody = await req.json()
  console.info("-----", reqbody, req.method)
  try {
    const { data, error } = await supabase
    .from('recommendations')
    .select(`
        id,
        users (id, name, social_id),
        doctors (id, name, department),
        symptoms (symptom),
        recommendation_time
    `)

    return NextResponse.json({
        message: "Successful",
        data: data,
        statusCode: 200
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
