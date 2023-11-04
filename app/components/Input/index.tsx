import { Input } from 'antd';
import classNames from 'classnames';
import React, { Fragment } from 'react';
import { Controller } from 'react-hook-form';

import ValidateError from '../ValidateError';

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
            <ValidateError error={error} />
          </Fragment>
        );
      }}
    />
  );
};

export default InputText;
