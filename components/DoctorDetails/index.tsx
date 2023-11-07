import React from 'react'
import PropTypes from 'prop-types'
import { Card, Col, Divider, Rate, Row } from 'antd';
import { AimOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

export type TDoctorDetailsProps = {
  doctorId?: number | string;
}

const DoctorDetails = ({ }) => {
  return (
    <Card className='bg-gradient-to-br from-white from-60% to-sky-400 to-90% h-full'>
      <Row>
        <div className='flex flex-row gap-3'>
          <p className='font-righteous text-6xl text-sky-400'>
            Dr.
          </p>
          <p className='font-righteous text-6xl font-thin'>
            Anne Mary
          </p>
        </div>
      </Row>
      <Row>
        <p className='text-3xl'>
          Specialization
        </p>
      </Row>
      <Divider dashed rootClassName='w-1/2'></Divider>
      <Row>
        <div className='flex flex-row gap-3 text-xl pt-2'>

          <MailOutlined />
          <p>abc@gmail.com</p>
        </div>
      </Row>
      <Row>
        <div className='flex flex-row gap-3 text-xl pt-2'>

          <PhoneOutlined />
          <p>09xx xxx xxx</p>
        </div>
      </Row>
      <Row>
        <div className='flex flex-row gap-3 text-xl pt-2'>

          <AimOutlined />
          <p>09xx xxx xxx</p>
        </div>
      </Row>

      <Row>
        <div className='w-full flex flex-row gap-3 text-xl pt-2 items-end justify-end'>

          <Rate disabled allowHalf defaultValue={4.5}  style={{ color: '#fff' }} />
        </div>
      </Row>
    </Card>
  )
}


export default DoctorDetails