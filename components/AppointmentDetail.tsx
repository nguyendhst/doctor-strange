"use client";

import { Divider } from "antd";
import {
  UserOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
  LinkOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import Link from "next/link";

type AppointmentType = {
  appointmentId: string;
  createdAt: string;
  patientName: string;
  socialId: string;
  symptoms: Array<string>;
  doctorName: string;
  departmentName: string;
  schedule: string;
  shift: string;
};

export function formatTimestamp(t: string) {
  if (t === "---") {
    return t;
  }
  const time = new Date(t);
  return time
    .toLocaleString("vi-VN", {
      dateStyle: "full",
      // timeStyle: "full",
    })
    // .toLocaleString("vi-VN")
    // .replace("lúc" || "when", "");
}

export function formatShift(s: string) {
  if (s === "MORNING") {
    return "Ca Sáng (7:30 - 11:30)"
  }
  else {
    return "Ca Chiều (13:30 - 17:30)"
  }
}

export default function AppointmentDetail({
  appointmentId = "---",
  createdAt = "---",
  patientName = "---",
  socialId = "---",
  symptoms = ["---"],
  doctorName = "---",
  departmentName = "---",
  schedule = "---",
  shift = "---"
}: AppointmentType) {
  return (
    <div className="flex flex-col justify-center items-top bg-white w-full p-6 rounded-lg gap-y-0.5 shadow-md">
      {/* Header */}
      <div className="flex flex-col flex-wrap justify-start items-start">
        <Link href={`/appointments#${appointmentId}`}>
          <h1 className="text-2xl font-semibold hover:underline">
            Appointment {appointmentId}
          </h1>
        </Link>
        {/* <p className="text-sm italic">Created at: {formatTimestamp(createdAt)}</p> */}
      </div>

      {/* Patient */}
      <Divider orientation="left" orientationMargin="0">
        <div className="flex flex-row justify-start items-center gap-x-2">
          <InfoCircleOutlined />
          <h2 className="text-lg font-semibold">Information</h2>
        </div>
      </Divider>
      <p className="">Fullname: {patientName}</p>
      {/* <p className="">Social Id: {socialId}</p> */}
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
      <p className="">
        Schedule:{" "}
        <span className=" text-blue-600 font-semibold">
          {formatShift(shift) + ", " + formatTimestamp(schedule)}
        </span>
      </p>
    </div>
  );
}
