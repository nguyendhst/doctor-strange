import { Divider } from "antd";
import {
  UserOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

type AppointmentType = {
  appointmentId: string;
  createdAt: string;
  patientName: string;
  socialId: string;
  symptoms: Array<string>;
  doctorName: string;
  departmentName: string;
  schedule: string;
};

export default function AppointmentDetail({
  appointmentId = "<null>",
  createdAt = "<null>",
  patientName = "<null>",
  socialId = "<null>",
  symptoms = [
    "<null>",
    "<null>",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi soluta distinctio cum pariatur hic cupiditate, laborum sapiente accusamus ut assumenda, maxime vel laboriosam ipsum? Maiores ratione quasi officia blanditiis voluptatibus.",
  ],
  doctorName = "<null>",
  departmentName = "<null>",
  schedule = "<null>",
}: AppointmentType) {
  return (
    <div className="flex flex-col justify-center items-top bg-slate-100 w-full p-6 rounded-lg gap-y-0.5 shadow-md">
      {/* Header */}
      <div className="flex flex-row flex-wrap justify-between items-center">
        <h1 className="text-2xl font-semibold">Appointment {appointmentId}</h1>
        <p className="text-sm italic">Created at: {createdAt}</p>
      </div>

      {/* Patient */}
      <Divider orientation="left" orientationMargin="0">
        <div className="flex flex-row justify-start items-center gap-x-2">
          <InfoCircleOutlined />
          <h2 className="text-lg font-semibold">Information</h2>
        </div>
      </Divider>
      <p className="">Fullname: {patientName}</p>
      <p className="">Social Id: {socialId}</p>
      <p className="">Symptoms: {symptoms.join(", ")}</p>

      {/* Appointment */}
      <Divider orientation="left" orientationMargin="0">
        <div className="flex flex-row justify-start items-center gap-x-2">
          <CheckCircleOutlined />
          <h2 className="text-lg font-semibold">Result</h2>
        </div>
      </Divider>
      <p className="">Appointment Id: {appointmentId}</p>
      <p className="">Doctor: {doctorName}</p>
      <p className="">Department: {departmentName}</p>
      <p className="">Schedule: {schedule}</p>
    </div>
  );
}
