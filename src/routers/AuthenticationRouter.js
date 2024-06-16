import Authlayout from "../layouts/authlayout";

// const AuthLogin = Loadable(lazy(() => import('../views/auth/authentication/Login')));
// const AuthRegister = Loadable(lazy(() => import('../views/auth/authentication/Register')));

const AuthenticationRoutes = {
  path: "/user",
  element: <Authlayout />,
  children: [
    // {
    //   path: 'auth/login',
    //   element: <AuthLogin />
    // },
    // {
    //   path: 'auth/register',
    //   element: <AuthRegister />
    // }
  ],
};

export default AuthenticationRoutes;
