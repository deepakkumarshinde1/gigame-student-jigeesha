import { Navigate, Outlet } from "react-router-dom";

function ProtectedRouting({ type }) {
  let isLoggedIn = false;

  if (type === 1) {
    return <>{isLoggedIn ? <Outlet /> : <Navigate to="/login" />}</>;
  } else {
    return <>{isLoggedIn ? <Navigate to="/users" /> : <Outlet />}</>;
  }
}

// login / registration => isLogin (avoid avoid this page) else load

// users => isLogin (load) else avoid this page
export default ProtectedRouting;
