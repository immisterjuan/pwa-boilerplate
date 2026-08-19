import { Alert as MuiAlert, AlertTitle, type AlertProps as MuiAlertProps } from '@mui/material';
import type { ReactNode } from 'react';

export interface AlertProps extends Omit<MuiAlertProps, 'title'> {
  title?: ReactNode;
}

/** Thin wrapper around MUI Alert with an optional title. */
function Alert({ title, children, severity = 'info', ...props }: AlertProps) {
  return (
    <MuiAlert severity={severity} {...props}>
      {title && <AlertTitle>{title}</AlertTitle>}
      {children}
    </MuiAlert>
  );
}

export default Alert;
