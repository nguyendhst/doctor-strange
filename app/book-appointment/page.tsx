"use client"
import InputLink from '@/app/components/Input/InputLink'
import { Col, Form, Row } from 'antd';
import { useForm } from 'react-hook-form'
import BookingSteps from '@/components/BookingSteps';


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
    <div className="max-w-7xl  mx-auto h-[calc(100vh-80px)] flex flex-col justify-center items-center">
      <div className="bg-white h-fit p-5 w-full">
        <BookingSteps>
          <div className='p-5 flex flex-col gap-8'>
            <Row gutter={32}>
              <Col span={6}>
                <InputLink placeholder="Họ và tên"
                  placement="top"
                  control={control}
                  name="name"
                  size="large"/>
              </Col>
              <Col span={6}>
                <InputLink placeholder="Giới tính"
                  placement="top"
                  control={control}
                  name="gender"
                  size="large"/>
              </Col>
              <Col span={6}>
                <InputLink placeholder="Số điện thoại"
                  placement="top"
                  control={control}
                  name="phone"
                  size="large"/>
              </Col>
            </Row>
            <Row gutter={32}>
              <Col span={6}>
                <InputLink placeholder="Ngày tháng năm sinh"
                  placement="top"
                  control={control}
                  name="birthday"
                  size="large"/>
              </Col>
            </Row>
          </div>
        </BookingSteps>
      </div>
    </div>
  )
}

export default AppointmentForm
