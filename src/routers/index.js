import { useRoutes } from 'react-router-dom';
import AuthenticationRoutes from './AuthenticationRouter';
import AdminRouter from './AdminRouter';

export default function ThemeRoutes() {
  return useRoutes([AuthenticationRoutes, AdminRouter]);
}
