import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import type { ReactNode } from 'react';

export interface AppDockItem {
  label: string;
  value: string;
  icon: ReactNode;
}

export interface AppDockProps {
  value: string;
  onChange: (value: string) => void;
  items?: AppDockItem[];
}

const defaultItems: AppDockItem[] = [
  { label: 'Dashboard', value: 'dashboard', icon: <DashboardIcon /> },
  { label: 'Account', value: 'account', icon: <AccountCircleIcon /> },
  { label: 'Settings', value: 'settings', icon: <SettingsIcon /> },
  { label: 'About', value: 'about', icon: <InfoIcon /> },
];

/** Bottom navigation dock that wraps the app's primary section icons. */
function AppDock({ value, onChange, items = defaultItems }: AppDockProps) {
  return (
    <Paper elevation={3} className="fixed bottom-0 left-0 right-0">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue: string) => onChange(newValue)}
      >
        {items.map((item) => (
          <BottomNavigationAction
            key={item.value}
            label={item.label}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}

export default AppDock;
