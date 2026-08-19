import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import type { ReactNode } from 'react';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
  fullWidth?: boolean;
}

/** Thin wrapper around MUI Dialog with a title, body, and optional actions row. */
function Modal({ open, onClose, title, children, actions, fullWidth = true }: ModalProps) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth={fullWidth}>
      {title && (
        <DialogTitle className="flex items-center justify-between">
          {title}
          <IconButton aria-label="Close dialog" onClick={onClose} size="small">
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>
      )}
      <DialogContent>{children}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
}

export default Modal;
