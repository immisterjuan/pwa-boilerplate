import { useMemo } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import AppTopBar from './AppTopBar';
import AppDock from './AppDock';

const DOCK_ROUTES = ['dashboard', 'account', 'settings', 'about'];

/**
 * Shared authenticated-app shell: top bar + routed page content + bottom dock.
 * Used by the Dashboard/Account/Settings/About pages (see src/App.tsx routes).
 */
function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentSection = useMemo(() => {
    const segment = location.pathname.split('/').filter(Boolean)[0] ?? 'dashboard';
    return DOCK_ROUTES.includes(segment) ? segment : 'dashboard';
  }, [location.pathname]);

  return (
    <Box className="min-h-screen pb-16">
      <AppTopBar />
      <Box component="main" className="p-4">
        <Outlet />
      </Box>
      {/* Spacer so fixed-position AppDock doesn't overlap page content. */}
      <Toolbar />
      <AppDock value={currentSection} onChange={(value) => navigate(`/${value}`)} />
    </Box>
  );
}

export default AppLayout;
