import { Input } from 'antd';
import classNames from 'classnames';
import React, { Fragment } from 'react';
import { Control, Controller, MultipleFieldErrors } from 'react-hook-form';
import { TooltipPlacement } from 'antd/es/tooltip';
import { SizeType } from 'antd/es/config-provider/SizeContext';

export type TPropsFormInput = {
  control?: Control;
  name: string;
  type?: string;
  size?: SizeType;
  error?: MultipleFieldErrors;
  placeholder?: string;
  prefix?: JSX.Element;
  className?: string;
  format?: string;
  values?: [];
  autoSize?: boolean | { minRows: number; maxRows: number };
  label?: string;
  children?: JSX.Element;
  required?: boolean;
  placement?: TooltipPlacement;
  disabled?: boolean;
  rows?: number;
};


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
