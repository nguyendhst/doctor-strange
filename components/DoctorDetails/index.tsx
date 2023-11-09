import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Card, Col, Divider, Rate, Row, Skeleton, Spin } from 'antd';
import { AimOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { useDoctorDetails } from '@/components/DoctorDetails/hooks/useDoctorDetails';

export type TDoctorDetailsProps = {
  doctorId?: number | string;
}

const DoctorDetails: React.FC<TDoctorDetailsProps> = ({ doctorId }) => {
  const {data, isLoading} = useDoctorDetails(doctorId);
  const doctorDetails = data?.data;
  const {name, specialization, contact: email, department: address, rating} = doctorDetails || {}

  return (
    <Fragment>
      <Spin spinning={isLoading} size='large'>
        <Card className='bg-gradient-to-br from-white from-60% to-sky-400 to-90% h-fit'>
          <Row>
            <div className='flex flex-row gap-3'>
              <p className='font-righteous text-6xl text-sky-400'>
                Dr.
              </p>
              <p className='font-righteous text-6xl font-thin'>
                {data ? name : '<Unknown />'}
              </p>
            </div>
          </Row>
          <Row>
            <p className='text-3xl'>
              {data ? specialization : '<Specialization />'}
            </p>
          </Row>
          <Divider dashed rootClassName='w-1/2'></Divider>
          <Row>
            <div className='flex flex-row gap-3 text-xl pt-2'>

              <MailOutlined />
              <p>{data ? email : "Please choose a doctor"}</p>
            </div>
          </Row>
          <Row>
            <div className='flex flex-row gap-3 text-xl pt-2'>

              <AimOutlined />
              <p>{data ? address : "Their details will be displayed here!"}</p>
            </div>
          </Row>

          <Row>
            <div className='w-full flex flex-row gap-3 text-xl pt-2 items-end justify-end'>

              <Rate disabled allowHalf value={ Math.floor(rating * 2) / 2}  style={{ color: '#fff' }} />
            </div>
          </Row>
        </Card>
      </Spin>
    </Fragment>
  )
}


export default DoctorDetails