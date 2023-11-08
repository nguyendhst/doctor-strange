"use client"
import { FORM_KEY } from '@/app/const/form';
import AntdDatePicker from '@/components/Input/DatePicker';
import ValidateError from '@/components/Input/ValidateError';
import { Row, Col, Form, Select, Spin, Empty } from 'antd';
import React, { Fragment } from 'react';
import { Controller } from 'react-hook-form';
import dayjs from 'dayjs';
import AntdRadio from '@/components/Input/Radio';
import DoctorDetails from '@/components/DoctorDetails';

const { Item } = Form;

const BookingDate: React.FC<TFormControl> = ({ control, error }) => {

  const isLoading = true;
  const handleSearch = () => {
    return null
  }

  const options = {
    statusCode: null,
    result: {
      data: [
        {
          id: 0,
          [FORM_KEY['SYMP']]: 'Neurologist',
        },
      ]
    }
  }

  const shift = [
    {
      code: 0,
      name: 'Morning',
    },
    {
      code: 1,
      name: 'Noon',
    },
    {
      code: 2,
      name: 'Afternoon',
    },

  ]

  return (
    <Fragment>
      <Row gutter={24}>

        <Col span={24} lg={12}>
          <Col span={24}>
            <Item label="Hospital Department Selection" required>
              <Controller
                name={FORM_KEY['SYMP']}
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    mode="multiple"
                    size='large'
                    placeholder="Select the relevant department(s) based on your symptoms."
                    fieldNames={{ label: FORM_KEY['SYMP'], value: 'id' }}
                    onSearch={handleSearch}
                    loading={isLoading}
                    options={options?.result.data}
                    filterOption={false}
                    notFoundContent={isLoading ? <Spin className="h-full w-full m-auto" /> : <Empty />}
                  />
                )}
              />
              <ValidateError error={error} />
            </Item>
          </Col>

          <Col span={24}>
            <Item label="Choose your Appointment Date" required >
              <AntdDatePicker
                placement="top"
                control={control}
                error={error}
                name={FORM_KEY['BOOKING_DATE']}
                className='w-full'
                format='DD/MM/YYYY'
                size="large"
                disabledDate={(current) => current && current < dayjs().endOf('day')}
              />
            </Item>
          </Col>

          <Col span={24}>
            <Item label="Doctor Selection" required >
              <Controller
                name={FORM_KEY['DOCTOR']}
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    mode="multiple"
                    size='large'
                    placeholder="Doctor's info displayed upon selection.."
                    fieldNames={{ label: FORM_KEY['DOCTOR'], value: 'id' }}
                    onSearch={handleSearch}
                    loading={isLoading}
                    options={options?.result.data}
                    filterOption={false}
                    notFoundContent={isLoading ? <Spin className="h-full w-full m-auto" /> : <Empty />}
                  />
                )}
              />
            </Item>
          </Col>

          <Col span={24}>
            <Item label="Select Preferred Appointment Time of Day" required >
              <AntdRadio
                className="flex flex-row gap-2 "
                control={control}
                name={FORM_KEY['SHIFT']}
                values={shift}
              />
            </Item>
          </Col>

        </Col>

        <Col span={0} lg={12}>
          <DoctorDetails />
        </Col>
      </Row >
    </Fragment >
  )
}

export default BookingDate