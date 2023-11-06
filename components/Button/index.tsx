"use client"

import React from 'react'
import { Button as AntdBtn } from 'antd'
import { ButtonProps } from 'antd/es/button/button'

const Button: React.FC<ButtonProps> = ({ children, ...settings }) => {
  return (
    <AntdBtn {...settings}>{children}</AntdBtn>
  )
}

export default Button