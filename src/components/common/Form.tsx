import { Stack } from '@mui/material';
import type { FormEvent, ReactNode } from 'react';

export interface FormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children?: ReactNode;
  gap?: number;
}

/** Thin form wrapper that lays out fields in a vertical stack and prevents default submit reload. */
function Form({ onSubmit, children, gap = 2 }: FormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Stack gap={gap}>{children}</Stack>
    </form>
  );
}

export default Form;
