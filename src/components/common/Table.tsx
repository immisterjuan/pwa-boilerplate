import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import type { ReactNode } from 'react';

export interface TableColumn<T> {
  key: keyof T & string;
  header: ReactNode;
  render?: (row: T) => ReactNode;
}

export interface TableProps<T extends { id: string | number }> {
  columns: TableColumn<T>[];
  rows: T[];
  emptyMessage?: ReactNode;
}

/** Generic data table built on MUI Table primitives. */
function Table<T extends { id: string | number }>({
  columns,
  rows,
  emptyMessage = 'No data available.',
}: TableProps<T>) {
  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.key}>{column.header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} align="center">
                {emptyMessage}
              </TableCell>
            </TableRow>
          ) : (
            rows.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell key={column.key}>
                    {column.render ? column.render(row) : String(row[column.key] ?? '')}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}

export default Table;
