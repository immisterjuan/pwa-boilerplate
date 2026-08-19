import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select as MuiSelect,
  type SelectChangeEvent,
} from '@mui/material';
import type { SelectOption } from './Select';

export interface MultiSelectProps {
  label: string;
  values: string[];
  options: SelectOption[];
  onChange: (values: string[]) => void;
  fullWidth?: boolean;
  disabled?: boolean;
}

/** Multi-value select built on MUI's Select with checkbox items. */
function MultiSelect({
  label,
  values,
  options,
  onChange,
  fullWidth = true,
  disabled,
}: MultiSelectProps) {
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const next = event.target.value;
    onChange(typeof next === 'string' ? next.split(',') : next);
  };

  return (
    <FormControl fullWidth={fullWidth} disabled={disabled}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        multiple
        label={label}
        value={values}
        onChange={handleChange}
        renderValue={(selected) =>
          options
            .filter((option) => selected.includes(option.value))
            .map((option) => option.label)
            .join(', ')
        }
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <Checkbox checked={values.includes(option.value)} />
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}

export default MultiSelect;
