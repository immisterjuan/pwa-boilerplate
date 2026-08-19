import { Card as MuiCard, CardContent, CardHeader, type CardProps as MuiCardProps } from '@mui/material';
import type { ReactNode } from 'react';

export interface CardProps extends Omit<MuiCardProps, 'title'> {
  title?: ReactNode;
  subheader?: ReactNode;
  children?: ReactNode;
}

/** Thin wrapper around MUI Card with an optional header/subheader. */
function Card({ title, subheader, children, ...props }: CardProps) {
  return (
    <MuiCard {...props}>
      {(title || subheader) && <CardHeader title={title} subheader={subheader} />}
      <CardContent>{children}</CardContent>
    </MuiCard>
  );
}

export default Card;
