import {
  getAllSymptoms,
  getSymptomById,
} from "@/services/symptom/symptom.service";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest): Promise<any> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { searchParams } = new URL(req.url);

  const searchText = searchParams.get("search");
  const symptomID = searchParams.get("id");

  let response = await getAllSymptoms(supabase, searchText ?? "");
  if (symptomID) {
    response = await getSymptomById(supabase, parseInt(symptomID));
  }
  return NextResponse.json(response);
}
