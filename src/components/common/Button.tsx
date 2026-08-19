import { Button as MuiButton, type ButtonProps as MuiButtonProps } from '@mui/material';

export type ButtonProps = MuiButtonProps;

/** Thin wrapper around MUI Button so app code depends on our `common` component API. */
function Button({ variant = 'contained', ...props }: ButtonProps) {
  return <MuiButton variant={variant} {...props} />;
}

export default Button;
