"use client"
import { FORM_KEY, GENDER_OPTIONS } from '@/app/const/form';
import AntdTextArea from '@/components/Input/TextArea';
import ValidateError from '@/components/Input/ValidateError';
import { Row, Col, Form, Select, Spin, Empty } from 'antd';
import React, { Fragment } from 'react';
import { Controller } from 'react-hook-form';

const { Item } = Form;

const SymptomNotes: React.FC<TFormControl> = ({ control, error }) => {
  return (
    <Fragment>
      <Row gutter={24}>
        <Col span={0} lg={12}>
          <div className="h-full rounded-xl bg-no-repeat bg-[url('https://www.usnews.com/object/image/00000179-a944-d1f7-a379-bbdd195a0001/210526-symptoms8-stock.jpg?update-time=1622042506342&size=responsive640')]">
            <div className="h-full bg-gradient-to-tr from-transparent from-10% to-white to-70% p-3 text-right">
              <h3 className='text-2xl'>Describe Your Symptoms</h3>
              <h4 className='text-base'>Provide details about your symptoms</h4><h4 className='text-base'>or the reason for your doctor appointment</h4>
            </div>
          </div>
        </Col>

        <Col span={24} lg={12}>
          <Col span={24}>
            <Item label="Notes" required >
              <AntdTextArea placeholder="You can write down what's wrong with your health here!"
                control={control}
                autoSize={{ minRows: 10, maxRows: 12 }}
                error={error}
                name={FORM_KEY['NOTE']}
                size="large" />
            </Item>
          </Col>

        </Col>
      </Row >
    </Fragment >
  )
}

export default SymptomNotes