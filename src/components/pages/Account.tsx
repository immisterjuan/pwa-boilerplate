import { Stack, Typography } from '@mui/material';
import { Button, Card } from '../common';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

/** Account page: shows the current stored user and allows logging out. */
function Account() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <Stack gap={2}>
      <Typography variant="h5" component="h2">
        Account
      </Typography>
      <Card title="Profile">
        <Stack gap={1}>
          <Typography variant="body2">Name: {user?.name ?? '—'}</Typography>
          <Typography variant="body2">Email: {user?.email ?? '—'}</Typography>
        </Stack>
      </Card>
      <Button color="error" variant="outlined" onClick={handleLogout}>
        Log out
      </Button>
    </Stack>
  );
}

export default Account;
