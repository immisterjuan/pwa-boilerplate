import { TextField, type TextFieldProps } from '@mui/material';

export type InputProps = TextFieldProps;

/** Thin wrapper around MUI TextField so app code depends on our `common` component API. */
function Input({ variant = 'outlined', fullWidth = true, ...props }: InputProps) {
  return <TextField variant={variant} fullWidth={fullWidth} {...props} />;
}

export default Input;
