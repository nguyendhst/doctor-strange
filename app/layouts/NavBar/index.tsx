"use client"

import { Image, Menu, MenuProps } from 'antd';
import React, { Fragment } from 'react'

type TNavBar = {
  children?: React.ReactNode;
}

const items: MenuProps['items'] = [
  {
    label: 'Navigation One',
    key: 'mail',
  },
  {
    label: 'Navigation Two',
    key: 'app',
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
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

      <div>{children}</div>
    </Fragment>
  )
}

export default NavBar