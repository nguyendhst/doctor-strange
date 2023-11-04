"use client"
import InputLink from '@/app/components/Input/InputLink'
import { Col, Form, Row } from 'antd';
import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'

const AppointmentForm = () => {
  const {
    control,
    handleSubmit,
    watch,
    trigger,
    clearErrors,
    formState: { errors, dirtyFields, isDirty },
  } = useForm({});

  const [form] = Form.useForm();
  return (
    <div className="max-w-7xl  mx-auto">
      <div>

      </div>
      <div className='p-5'>
        <Row gutter={32}>
          <Col span={6}>
            <InputLink placeholder="Họ và tên"
              placement="top"
              control={control}
              name="name"
              size="large">

            </InputLink>
          </Col>
          <Col span={6}>
            <InputLink placeholder="Giới tính"
              placement="top"
              control={control}
              name="gender"
              size="large">

            </InputLink>
          </Col>
          <Col span={6}>
            <InputLink placeholder="Số điện thoại"
              placement="top"
              control={control}
              name="phone"
              size="large">

            </InputLink>
          </Col>
        </Row>
        <InputLink placeholder="Ngày tháng năm sinh"
          placement="top"
          control={control}
          name="birthday"
          size="large">
        </InputLink>
      </div>
    </div>
  )
}

export default AppointmentForm