import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Box, Link, Typography } from '@mui/material';
import { Button, Card, Form, Input } from '../common';
import { useAuth } from '../../hooks/useAuth';

/** Login page: authenticates against stored user data (see hooks/useAuth). */
function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!email) {
      setError('Email is required.');
      return;
    }

    setError(null);
    login({ id: crypto.randomUUID(), name: email.split('@')[0], email });
    navigate('/dashboard', { replace: true });
  };

  return (
    <Box className="flex min-h-screen items-center justify-center p-4">
      <Card title="Login" className="w-full max-w-sm">
        <Form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={Boolean(error)}
            helperText={error}
            required
          />
          <Button type="submit">Log in</Button>
          <Typography variant="body2">
            No account? <Link component={RouterLink} to="/register">Register</Link>
          </Typography>
        </Form>
      </Card>
    </Box>
  );
}

export default Login;
