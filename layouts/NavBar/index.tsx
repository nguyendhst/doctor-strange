"use client";

import { ConfigProvider } from "antd";
import AuthButton from "@/components/AuthButton";
import { Image, Menu, MenuProps } from "antd";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { queryUser } from "@/app/services/user/hooks";

type TNavBar = {
  children?: React.ReactNode;
};

const items: MenuProps["items"] = [
  {
    label: <Link href={"/book-appointment"}>Book Appointment</Link>,
    key: "/book-appointment",
  },
  {
    label: <Link href={"/appointments"}>My Appointments</Link>,
    key: "/appointments",
  },
];

const NavBar: React.FC<TNavBar> = ({ children }) => {
  const route = [usePathname()];
  const navigator = useRouter();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { data, isLoading } = queryUser();
  const user = data?.data;



  // const checkLoggedIn = async () => {}

  useEffect(() => {
    if (!user && !isLoading && route[0] != '/signup') navigator.push("/login");
  }, [data, route]);

  // console.log(route)
  return (
    <ConfigProvider>
      <div className="flex flex-row justify-between h-20 bg-white border-b-1 sticky top-0 left-0 z-50">
        <div className="flex flex-row justify-center items-center">
          <img src="medical-team.png" className="h-full p-2"></img>
          <div className="flex flex-col">
            <div className="text-xl font-bold text-neutral-400">DOCTOR</div>
            <div className="text-xl font-bold text-blue-500">STRANGE</div>
          </div>
        </div>
        <Menu
          items={items}
          mode="horizontal"
          className="ant-menu-custom"
          selectedKeys={route}
        ></Menu>
        <AuthButton />
      </div>

      <div className="w-full flex justify-center items-center p-6">
        {children}
      </div>
    </ConfigProvider>
  );
};

export default NavBar;
