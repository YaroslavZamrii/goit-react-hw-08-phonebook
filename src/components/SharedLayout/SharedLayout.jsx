import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppNavigation from 'components/AppNavigation/AppNavigation';
import Container from '@mui/material/Container';

export const SharedLayout = () => {
  return (
    <>
      <AppNavigation />
      <div>
        <Container maxWidth="xl">
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </div>
    </>
  );
};
