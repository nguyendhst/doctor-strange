
"use client"
import { FORM_KEY, GENDER_OPTIONS } from '@/app/const/form';
import InputText from '@/components/Input';
import CustomSelect from '@/components/Input/CustomSelect';
import AntdDatePicker from '@/components/Input/DatePicker';
import InputLink from '@/components/Input/InputLink';
import { Row, Col, Form } from 'antd';
import React, { Fragment } from 'react';

const { Item } = Form;

const BasicInfo: React.FC<TFormControl> = ({ control, error }) => {
  return (
    <Fragment>
      <Row gutter={24} className='h-fit'>
        <Col span={0} lg={12}>
          <div className="h-full rounded-xl scale-x-[-1] bg-[url('https://lawrjf.com/wp-content/uploads/2020/06/workers-comp-doctor-appointment.jpeg')]">
            <div className="h-full scale-x-[-1] bg-gradient-to-tr from-transparent from-10% to-white to-70% p-3 text-right">
              <h3 className='text-2xl'>Personal Information</h3>
              <h4 className='text-base'>Fill in your personal details</h4>
            </div>
          </div>
        </Col>

        <Col span={24} lg={12}>
          <Col span={24}>
            <Item label="Your Name" required rules={[{ message: "Please input patient name!" }]}>
              <InputText placeholder="Nguyễn Văn A"
                placement="top"
                control={control}
                error={error}
                name={FORM_KEY['NAME']}
                size="large" />
            </Item>
          </Col>
          <Row gutter={12} className="pl-3 pr-3">
            <Col span={12}>
              <Item label="Gender" required rules={[{ message: "Please select a gender!" }]}>
                <CustomSelect placeholder="Choose your gender"
                  values={GENDER_OPTIONS}
                  control={control}
                  error={error}
                  name={FORM_KEY['GENDER']}
                  size="large" />
              </Item>
            </Col>
            <Col span={12}>
              <Item label="Your Birthday" required>
                <AntdDatePicker placeholder="01/01/1999"
                  placement="top"
                  control={control}
                  error={error}
                  name={FORM_KEY['BIRTH']}
                  className='w-full'
                  format='DD/MM/YYYY'
                  size="large" />

              </Item>
            </Col>
          </Row>
          <Col span={24}>
            <Item label="Your Phone Number" required rules={[{ message: "Please input your phone number!" }]}>
              <InputText placeholder="0xxxxxxxxx"
                placement="top"
                control={control}
                error={error}
                name={FORM_KEY['PHONE']}
                size="large" />

            </Item>
          </Col>
          <Col span={24}>
            <Item label="Your Email">
              <InputText placeholder="abc@gmail.com"
                disabled
                placement="top"
                control={control}
                error={error}
                name={FORM_KEY['EMAIL']}
                size="large" />
            </Item>
          </Col>
        </Col>
      </Row >
    </Fragment >
  )
}

export default BasicInfo