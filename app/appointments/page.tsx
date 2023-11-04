import AppointmentDetail from "@/components/AppointmentDetail";

export async function getAppointmentDetail() {
  try {
    const response = await fetch(process.env.DOMAIN + "/api/appointments", {
      method: "GET",
      cache: "no-cache"
    });
    return await response.json();
  } catch (error) {
    console.log("Error in app/appointments/page.tsx", error);
  }
}
export default async function Page() {
  const res = await getAppointmentDetail();
  console.log(res.data[0].users);
  return (
    <div className="md:w-1/2 w-full flex flex-col items-center gap-y-5 p-5 text-slate-700">
      <h1 className="text-4xl font-bold mb-2">Appointments</h1>
      {res === undefined ? (
        <p>Something went wrong!</p>
      ) : (
        res.data.map((item: any) => (
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
