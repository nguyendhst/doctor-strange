"use client";
import AppointmentDetail from "@/components/AppointmentDetail";
import { queryAppointmentsDetails } from "../services/appointments/hooks";
import { Spin, Empty } from "antd";
import { Button, Result } from 'antd';
import { queryUser } from "../services/user/hooks";

export default function Page() {
  const { data } = queryUser();

  const {
    data: res,
    isError,
    isLoading,
  } = queryAppointmentsDetails(data?.data?.email);

  return (
    <div className="md:w-1/2 w-full flex flex-col items-center gap-y-5 p-5 text-slate-700">
      <h1 className="text-4xl font-bold mb-2">Appointments</h1>
      {isError ? (
        <Result
        status="warning"
        title="There are some problems with your operation."
        // extra={
        //   <Button type="primary" key="console">
        //     Go Console
        //   </Button>
        // }
      />
      ) : isLoading ? (
        <Spin />
      ) : (res?.data === null || res?.data.length === 0) ? (
        <Empty />
      ) : (
        res?.data?.map((item: any) => (
          <AppointmentDetail
            key={item?.id}
            appointmentId={item?.id}
            createdAt={"---"}
            patientName={item?.users.name || "---"}
            socialId={item?.users.social_id || "---"}
            symptoms={[item?.symptoms.symptom]}
            doctorName={item?.doctors.name || "---"}
            departmentName={item?.doctors.department || "---"}
            schedule={item?.recommendation_time || "---"}
            shift={item?.shift || "---"}
          />
        ))
      )}
    </div>
  );
}
