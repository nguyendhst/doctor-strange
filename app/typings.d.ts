declare type TPropsFormInput = {
  control?: Control  ;
  name: string;
  type?: string;
  size?: SizeType;
  error?: MultipleFieldErrors;
  errors?: MultipleFieldErrors;
  placeholder?: string;
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


declare type TRadio = {
  size?: SizeType;
  control: Control<FieldValues>;
  name: string;
  values: { key: string | number; value: string | number }[];
  className?: string;
  disabled?: boolean;
  error?: FieldError;
  placeholder?: string;
};

declare type TFormControl = {
  control?: Control,
  error?: MultipleFieldErrors | FieldError;
}

declare type TAppointmentFormFields = {
  [FORM_KEY.BIRTH]? : string;
  [FORM_KEY.EMAIL]? : string;
  [FORM_KEY.GENDER]?: string;
  [FORM_KEY.NAME]?: string;
  [FORM_KEY.NOTE]?: string;
  [FORM_KEY.PHONE]?: string;
  [FORM_KEY.SYMP]?: string;
}

declare type TResponseMeta<T> = {
  statusCode: number;
  data: T;
}