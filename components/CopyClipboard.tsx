"use client";

import { LinkOutlined } from "@ant-design/icons";

type AppointmentId = {
  id: string;
};
export default function CopyClipboard({ id }: AppointmentId) {
  const path = `/appointments#${id}`;
  return (
    <LinkOutlined
      onClick={(e) =>
        e.clipboardData.setData("text/plain", process.env.DOMAIN + path + "123")
      }
    />
  );
}
