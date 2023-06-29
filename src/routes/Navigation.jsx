import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Character } from '@/pages';
import { MainLayout } from '@/layouts';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/character/:id" element={<Character />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
