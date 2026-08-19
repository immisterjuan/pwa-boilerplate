import { Stack, Typography } from '@mui/material';
import { Card } from '../common';

/** About: placeholder page for app/version/legal information. */
function About() {
  return (
    <Stack gap={2}>
      <Typography variant="h5" component="h2">
        About
      </Typography>
      <Card title={import.meta.env.VITE_APP_NAME}>
        <Typography variant="body2" color="text.secondary">
          {import.meta.env.VITE_APP_DESCRIPTION}
        </Typography>
      </Card>
    </Stack>
  );
}

export default About;
