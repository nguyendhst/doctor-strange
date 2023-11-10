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
};

function formatTimestamp(t: string) {
  if (t === "---") {
    return t;
  }
  const time = new Date(t);
  return time
    .toLocaleString("vi-VN", {
      dateStyle: "full",
      timeStyle: "short",
    })
    .replace("lúc" || "when", "");
}

export default function AppointmentDetail({
  appointmentId = "<null>",
  createdAt = "<null>",
  patientName = "<null>",
  socialId = "<null>",
  symptoms = ["<null>"],
  doctorName = "<null>",
  departmentName = "<null>",
  schedule = "<null>",
}: AppointmentType) {
  return (
    <div className="flex flex-col justify-center items-top bg-slate-100 w-full p-6 rounded-lg gap-y-0.5 shadow-md">
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
      <p className="">
        Schedule:{" "}
        <span className=" text-blue-600 font-semibold">
          {formatTimestamp(schedule)}
        </span>
      </p>
    </div>
  );
}
