import { Select } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import React, { Fragment } from 'react';
import type { Control, FieldValues, MultipleFieldErrors } from 'react-hook-form';
import { Controller } from 'react-hook-form';

const { Option } = Select;

type TRadio = {
  size?: SizeType;
  control: Control<FieldValues>;
  name: string;
  values: { code: string | number; name: string | number }[];
  className?: string;
  disabled?: boolean;
  error?: MultipleFieldErrors;
  placeholder?: string;
};

const CustomSelect: React.FC<TRadio> = ({
  control,
  name,
  values,
  size,
  className,
  disabled,
  error,
  placeholder,
}) => {
  return (
    <Fragment>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select
            {...field}
            size={size}
            className={className}
            disabled={disabled}
            placeholder={placeholder}
          >
            {values.map((item: { code: string | number; name: string | number }) => (
              <Option key={item.code} values={item.name}>
                {item.name}
              </Option>
            ))}
          </Select>
        )}
      />
    </Fragment>
  );
};

export default CustomSelect;
