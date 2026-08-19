import { Stack, Typography } from '@mui/material';
import { Card } from '../common';
import { useAuth } from '../../hooks/useAuth';

/** Dashboard: authenticated landing page. */
function Dashboard() {
  const { user } = useAuth();

  return (
    <Stack gap={2}>
      <Typography variant="h5" component="h2">
        Welcome{user ? `, ${user.name}` : ''}!
      </Typography>
      <Card title="Getting started">
        <Typography variant="body2" color="text.secondary">
          This is the Dashboard page. Replace this placeholder with your app&apos;s main content.
        </Typography>
      </Card>
    </Stack>
  );
}

export default Dashboard;
