import AppointmentDetail from "@/components/AppointmentDetail";

export default function Page() {
  return (
    <div className="md:w-1/2 w-full flex flex-col items-center gap-y-5 p-5 text-slate-700">
      <h1 className="text-4xl font-bold mb-2">Appointments</h1>
      <AppointmentDetail
        appointmentId={"null"}
        createdAt={"null"}
        patientName={"null"}
        socialId={"null"}
        symptoms={["null"]}
        doctorName={"null"}
        departmentName={"null"}
        schedule={"null"}
      />
      <AppointmentDetail
        appointmentId={"null"}
        createdAt={"null"}
        patientName={"null"}
        socialId={"null"}
        symptoms={["null"]}
        doctorName={"null"}
        departmentName={"null"}
        schedule={"null"}
      />
    </div>
  );
}
