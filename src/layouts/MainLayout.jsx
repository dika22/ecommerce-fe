import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <Header />
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
