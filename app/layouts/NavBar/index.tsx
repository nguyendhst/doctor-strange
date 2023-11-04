"use client"

import { Image, Menu, MenuProps } from 'antd';
import Link from 'next/link';
import React, { Fragment } from 'react'

type TNavBar = {
  children?: React.ReactNode;
}

const items: MenuProps['items'] = [
  {
    label: <Link href='/'>Home</Link>,
    key: 'mail',
  },
  {
    label: <Link href={'/book-appointment'}>Book Appointment</Link>,
    key: 'SubMenu',
  },
  {
    label: <Link href={'/login'}>Login</Link>,
    key: 'alipay',
  },
];

const NavBar: React.FC<TNavBar> = ({ children }) => {
  return (
    <Fragment>
      <div className="flex flex-row justify-between h-20 bg-white border-b-1">
        <div className="flex flex-row justify-center items-center font-pacifico">
          <img src='logo.png' className="h-full"></img>
          <div className="flex flex-col"><div>Dr.</div><div>Strange</div></div>
        </div>
        <Menu items={items} mode="horizontal" className='ant-menu-custom'></Menu>

      </div>

      <div className="w-full flex justify-center items-center">{children}</div>
    </Fragment>
  )
}

export default NavBar