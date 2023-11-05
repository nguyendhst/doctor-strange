"use client"
import ValidateError from '@/components/Input/ValidateError';
import { Select } from 'antd';
import React, { Fragment } from 'react';
import type { Control, FieldValues, FieldError } from 'react-hook-form';
import { Controller } from 'react-hook-form';

const { Option } = Select;

const CustomSelect: React.FC<TRadio> = ({
  control,
  name,
  values,
  size,
  className,
  disabled,
  placeholder,
}) => {
  return (
    <Fragment>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Fragment>
            <Select
              {...field}
              size={size}
              className={className}
              disabled={disabled}
              placeholder={placeholder}
              status={error ? 'error' : ''}
            >
              {values.map((item) => (
                <Option key={item.key} values={item.value}>
                  {item.value}
                </Option>
              ))}
            </Select>
            <ValidateError error={error} />
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default CustomSelect;
