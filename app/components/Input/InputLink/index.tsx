import { Input, Tooltip } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { TooltipPlacement } from 'antd/es/tooltip';
import classNames from 'classnames';
import React, { Fragment } from 'react';
import { Control, Controller, FieldValue, MultipleFieldErrors, UseFormClearErrors, UseFormRegister, UseFormSetError, UseFormSetValue, UseFormWatch } from 'react-hook-form';

// import ValidateError from '@/components/ValidateError';
export type TPropsFormInput = {
  control?: Control  ;
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

const InputLink: React.FC<TPropsFormInput> = ({
  name,
  control,
  type,
  size,
  placeholder,
  prefix,
  className,
  placement = 'top',
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Fragment>
          <Tooltip title={field?.value} placement={placement}>
            <Input
              {...field}
              type={type}
              size={size}
              placeholder={placeholder}
              prefix={prefix}
              className={classNames(error ? `error` : `focus hover`, className)}
            />
          </Tooltip>
        </Fragment>
      )}
    />
  );
};

export default InputLink;
