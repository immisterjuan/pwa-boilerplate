import { Box, Button, Container, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm" className="py-8">
      <Box className="flex flex-col items-center gap-4 text-center">
        <Typography variant="h4" component="h1">
          PWA Boilerplate
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Vite + React + TypeScript + Tailwind CSS + Material UI, installable
          and offline-ready.
        </Typography>
        <Button variant="contained">Get started</Button>
      </Box>
    </Container>
  );
}

export default App;
