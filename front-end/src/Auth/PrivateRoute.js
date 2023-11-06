import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = props => {
    const user = null;

    if (!user) {
        return <Redirect to="/login" />
    }

    return <Route {...props} />  // possible approach if not so many routes...
}

// const ProtectedRoute = ({
//   isAuthenticated,
//   redirectPath = '/login'
// }: ProtectedRouteProps): JSX.Element => {
//   const pathName = usePathname();

//   if (!isAuthenticated) {
//     addRouteToSessionStorage(pathName);
//     return <Navigate to={redirectPath} replace />;
//   }

//   return (
//     <MainLayout>
//       <Outlet />
//     </MainLayout>
//   );
// };

// export default ProtectedRoute;

//  usage:
{/* <Routes>
{!isAuthenticated && (
  <Route path="/" element={<Navigate to="/login" replace />} />
)}

<Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
  <Route path="/" element={<Navigate to="/page1" replace />} />
  <Route path="/page1" element={<Page1 />} />
  <Route path="/page2" element={<Page2 />} />
</Route> */}
