import { Stack, Typography } from '@mui/material';
import { Card } from '../common';

/** Settings: placeholder page for app preferences/configuration. */
function Settings() {
  return (
    <Stack gap={2}>
      <Typography variant="h5" component="h2">
        Settings
      </Typography>
      <Card title="Preferences">
        <Typography variant="body2" color="text.secondary">
          Add app settings/preferences here (theme, notifications, etc.).
        </Typography>
      </Card>
    </Stack>
  );
}

export default Settings;
