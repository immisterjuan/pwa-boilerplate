import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';

/**
 * Splash Intro: brief loading screen that checks for stored user data,
 * then redirects to Dashboard (authenticated) or Login (not authenticated).
 * See the app flow diagram in AGENTS.md.
 */
function SplashIntro() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(isAuthenticated ? '/dashboard' : '/login', { replace: true });
    }, 800);

    return () => clearTimeout(timer);
  }, [isAuthenticated, navigate]);

  return (
    <Box className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <Typography variant="h4" component="h1">
        {import.meta.env.VITE_APP_NAME}
      </Typography>
      <CircularProgress />
    </Box>
  );
}

export default SplashIntro;
