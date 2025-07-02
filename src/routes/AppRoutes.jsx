import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';

import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/login/LoginPage';
import RegisterPage from '../pages/signup/RegisterForm';
import ProductListPage from '../pages/product/ProductListPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path="/product" element={<MainLayout />}>
        <Route index element={<ProductListPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}
