import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  type SelectChangeEvent,
} from '@mui/material';

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  fullWidth?: boolean;
  disabled?: boolean;
}

/** Single-value select built on MUI's Select/FormControl/MenuItem trio. */
function Select({ label, value, options, onChange, fullWidth = true, disabled }: SelectProps) {
  const handleChange = (event: SelectChangeEvent) => onChange(event.target.value);

  return (
    <FormControl fullWidth={fullWidth} disabled={disabled}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} value={value} onChange={handleChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}

export default Select;
