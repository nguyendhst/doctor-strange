"use client"
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import BasicInfo from '@/components/FormSteps/BasicInfo'
import SymptomNotes from '@/components/FormSteps/SymptomNotes'
import { Form, FormInstance } from 'antd'
import BookingDate from '@/components/FormSteps/BookingDate'

type TFormSteps = Partial<TPropsFormInput> & {
  current: number;
  form: FormInstance<any>;
}

const FormSteps: React.FC<TFormSteps> = ({control, errors, current, form}) => {
  const formSections: React.ReactNode[] = [
    <BasicInfo control={control} error={errors} />,
    <SymptomNotes control={control} error={errors} />,
    <BookingDate control={control} error={errors} />,
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