import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div style={{margin: 'auto' }}>
      <Outlet />
    </div>
  );
}
