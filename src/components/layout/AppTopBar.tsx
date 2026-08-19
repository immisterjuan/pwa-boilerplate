import { AppBar, Toolbar, Typography } from '@mui/material';

export interface AppTopBarProps {
  title?: string;
}

/** Top bar showing the application title/meta. Reads the app name from env by default. */
function AppTopBar({ title = import.meta.env.VITE_APP_NAME }: AppTopBarProps) {
  return (
    <AppBar position="static" color="primary" enableColorOnDark>
      <Toolbar>
        <Typography variant="h6" component="h1" className="flex-1">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AppTopBar;
