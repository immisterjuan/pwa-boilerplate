import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/layout';
import {
  About,
  Account,
  Dashboard,
  Login,
  Registration,
  Settings,
  SplashIntro,
} from './components/pages';
import { useAuth } from './hooks/useAuth';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<SplashIntro />} />
      <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />} />
      <Route
        path="/register"
        element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Registration />}
      />

      {/* Protected routes: redirect to /login when there's no stored user. */}
      <Route element={isAuthenticated ? <AppLayout /> : <Navigate to="/login" replace />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
