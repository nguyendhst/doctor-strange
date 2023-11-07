"use client"

import { ConfigProvider } from 'antd';
import AuthButton from '@/components/AuthButton';
import { Image, Menu, MenuProps } from 'antd';
import Link from 'next/link';
import React, { Fragment } from 'react'

type TNavBar = {
  children?: React.ReactNode;
}

const items: MenuProps['items'] = [
  {
    label: <Link href='/'>Dashboard</Link>,
    key: '',
  },
  {
    label: <Link href={'/book-appointment'}>Book Appointment</Link>,
    key: 'book-appointment',
  },
  {
    label: <Link href={'/appointments'}>My Appointments</Link>,
    key: 'appointments'
  },
];

const NavBar: React.FC<TNavBar> = ({ children }) => {
  return (
    <ConfigProvider>
      <div className="flex flex-row justify-between h-20 bg-white border-b-1 sticky top-0 left-0 z-50">
        <div className="flex flex-row justify-center items-center font-pacifico">
          <img src='logo.png' className="h-full"></img>
          <div className="flex flex-col"><div className='text-xl text-blue-500'>DOCTOR</div><div className='text-xl text-blue-500'>STRANGE</div></div>
        </div>
        <Menu items={items} mode="horizontal" className='ant-menu-custom'></Menu>
        <AuthButton />
      </div>

      <div className="w-full flex justify-center items-center p-6">{children}</div>
    </ConfigProvider>
  )
}

export default NavBar