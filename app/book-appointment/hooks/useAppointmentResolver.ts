"use client"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FORM_KEY } from '@/app/const/form';
import { useCallback, useEffect, useState } from 'react';
import { Form } from 'antd';

const useAppointmentFormResolver = (current: number) => {
  const [form] = Form.useForm();
  const AppointmentFormValidationSchemaStep1 = 
    yup.object().shape({
      [FORM_KEY.NAME]: yup.string().required('Your name is required!'),
      [FORM_KEY.GENDER]: yup.string().required('Please choose your gender!'),
      [FORM_KEY.BIRTH]: yup.date().required('Please fill in your date of birth!').transform((value, originalValue) => {
        if (originalValue && typeof originalValue === 'number') {
          return new Date(originalValue);
        }
        return value;
      }),
      [FORM_KEY.PHONE]: yup.string().required('Please provide us with your contact number!').matches(/^\d+$/, 'Phone number must contain digits only'),
      [FORM_KEY.EMAIL]: yup.string().nullable().email('Wrong email format! Either change or remove it!'),
    })
  ;

  const AppointmentFormValidationSchemaStep2 = 
    yup.object().shape({
      [FORM_KEY.NOTE]: yup.string().required('Please provide some information'),
    })
  ;

  const AppointmentFormValidationSchemaStep3 = 
  yup.object().shape({
    [FORM_KEY.SYMP]: yup.string().required('Please choose a department!'),
    [FORM_KEY.DOCTOR]: yup.string().required('Please choose a Doctor to help you!'),
    [FORM_KEY.BOOKING_DATE]: yup.string().required('Please choose a appropriate day!'),
    [FORM_KEY.SHIFT]: yup.string().required('Please choose a time in day that you prefer!'),
  })
;

  const pick = useCallback(
    () => {
      switch (current) {
        case 0:
          return AppointmentFormValidationSchemaStep1;
        
        case 1:
          return AppointmentFormValidationSchemaStep2;

        case 2:
          return AppointmentFormValidationSchemaStep3;
          
        default:
          return AppointmentFormValidationSchemaStep1;
      }
    }
    , [current]
  )
  const [currentFormSchema, setCurrentFormSchema] = useState(pick());
  useEffect(() => {
    setCurrentFormSchema(pick())
  }, [current])

  return {
    form,
    currentFormSchema,
  }
};

export default useAppointmentFormResolver;