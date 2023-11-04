import { Input } from 'antd';
import classNames from 'classnames';
import React, { Fragment } from 'react';
import { Controller } from 'react-hook-form';

import ValidateError from '@/components/ValidateError';

const { TextArea } = Input;

const AntdTextArea: React.FC<TPropsFormInput> = ({
  control,
  name,
  autoSize,
  size,
  className,
  rows,
  placeholder,
  ...settings
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Fragment>
          <TextArea
            rows={rows}
            placeholder={placeholder}
            {...field}
            {...settings}
            autoSize={autoSize}
            size={size}
            className={classNames(error ? `error` : `focus hover`, className)}
          />
          <ValidateError error={error} />
        </Fragment>
      )}
    />
  );
};

export default AntdTextArea;
