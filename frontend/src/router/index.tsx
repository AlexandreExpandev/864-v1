import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/components/core/Layout';
import HomePage from '@/pages/HomePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        {/* Future feature routes will be added here */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
