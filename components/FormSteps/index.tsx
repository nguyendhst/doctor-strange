"use client"
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import BasicInfo from '@/components/FormSteps/BasicInfo'
import SymptomAnalyze from '@/components/FormSteps/BookingDate'
import { Form, FormInstance } from 'antd'

type TFormSteps = Partial<TPropsFormInput> & {
  current: number;
  form: FormInstance<any>;
}

const FormSteps: React.FC<TFormSteps> = ({control, errors, current, form}) => {
  const formSections: React.ReactNode[] = [
    <BasicInfo control={control} error={errors} />,
    <SymptomAnalyze control={control} error={errors} />,
  ]
  return (
    <Form layout='vertical' rootClassName="" form={form}>
      {
        formSections[current]
      }
    </Form>
  )
}


export default FormSteps