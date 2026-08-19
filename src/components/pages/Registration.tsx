import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Box, Link, Typography } from '@mui/material';
import { Button, Card, Form, Input } from '../common';
import { useAuth } from '../../hooks/useAuth';

/** Registration page: creates a stored user, then continues straight to Dashboard. */
function Registration() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!name || !email) {
      setError('Name and email are required.');
      return;
    }

    setError(null);
    login({ id: crypto.randomUUID(), name, email });
    navigate('/dashboard', { replace: true });
  };

  return (
    <Box className="flex min-h-screen items-center justify-center p-4">
      <Card title="Create an account" className="w-full max-w-sm">
        <Form onSubmit={handleSubmit}>
          <Input
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            error={Boolean(error)}
            required
          />
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={Boolean(error)}
            helperText={error}
            required
          />
          <Button type="submit">Register</Button>
          <Typography variant="body2">
            Already have an account? <Link component={RouterLink} to="/login">Log in</Link>
          </Typography>
        </Form>
      </Card>
    </Box>
  );
}

export default Registration;
