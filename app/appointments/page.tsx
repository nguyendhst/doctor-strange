'use client'
import AppointmentDetail from "@/components/AppointmentDetail";
import { queryAppointmentsDetails } from "../services/appointments/hooks";
import {Spin} from 'antd';
import { queryUser } from "../services/user/hooks";
// export async function getAppointmentDetail() {
//   try {
//     const response = await fetch(process.env.DOMAIN + "/api/appointments", {
//       method: "GET",
//       cache: "no-cache"
//     });
//     return await response.json();
//   } catch (error) {
//     console.log("Error in app/appointments/page.tsx", error);
//   }
// }
export default function Page() {
  // const res = await getAppointmentDetail();
  const {
    data
  } = queryUser();

  const {data: res, isError, isLoading} = queryAppointmentsDetails(
    data?.data?.email
  );

  return (
    <div className="md:w-1/2 w-full flex flex-col items-center gap-y-5 p-5 text-slate-700">
      <h1 className="text-4xl font-bold mb-2">Appointments</h1>
      {isError ? (
        <p>Something went wrong!</p>
      ) : (
        isLoading?<Spin>Loading</Spin> :
        res?.data?.map((item: any) => (
          <AppointmentDetail
            key={item.id}
            appointmentId={item.id}
            createdAt={"---"}
            patientName={item.users.name || "---"}
            socialId={item.users.social_id || "---"}
            symptoms={[item.symptoms.symptom]}
            doctorName={item.doctors.name || "---"}
            departmentName={item.doctors.department || "---"}
            schedule={item.recommendation_time || "---"}
          />
        ))
      )}
    </div>
  );
}