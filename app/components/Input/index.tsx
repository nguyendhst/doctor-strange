import { Input } from 'antd';
import classNames from 'classnames';
import React, { Fragment } from 'react';
import { Controller } from 'react-hook-form';
import { TPropsFormInput } from './InputLink';


const InputText: React.FC<TPropsFormInput> = ({
  name,
  control,
  type,
  size,
  placeholder,
  prefix,
  className,
  disabled,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <Fragment>
            <Input
              {...field}
              disabled={disabled}
              type={type}
              size={size}
              placeholder={placeholder}
              prefix={prefix}
              className={classNames(error ? `error` : `focus hover`, className)}
            />
          </Fragment>
        );
      }}
    />
  );
};

export default InputText;
