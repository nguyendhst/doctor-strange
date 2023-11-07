"use client"
import { FORM_KEY, GENDER_OPTIONS } from '@/app/const/form';
import AntdTextArea from '@/components/Input/TextArea';
import ValidateError from '@/components/Input/ValidateError';
import { Row, Col, Form, Select, Spin, Empty } from 'antd';
import React, { Fragment } from 'react';
import { Controller } from 'react-hook-form';

const { Item } = Form;

const SymptomAnalyze: React.FC<TFormControl> = ({ control, error }) => {

  const isLoading = true;
  const handleSearch = () => {
    return null
  }

  const options = {
    errorCode: null,
    result: {
      data: [
        {
          id: 0,
          symptom: 'Fever',
        },
      ]


    }
  }

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
            <Item label="Symptom">
              <Controller
                name={FORM_KEY['SYMP']}
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    mode="multiple"
                    size='large'
                    placeholder="Choose corresponding symptoms"
                    fieldNames={{ label: 'id', value: FORM_KEY['SYMP'] }}
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
            <Item label="Notes" required >
              <AntdTextArea placeholder="If you can't find your symptom, you can write down what's wrong here!"
                control={control}
                autoSize={{ minRows: 6, maxRows: 10 }}
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

export default SymptomAnalyze