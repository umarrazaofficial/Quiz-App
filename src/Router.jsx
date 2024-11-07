import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/atoms/Login";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "./Context/authContext";
import SignUp from "./components/atoms/SignUp";
import ThankYou from "./components/atoms/ThankYou";
import Dashboard from "./Pages/dashboard";

const Router = () => {
  function PublicRoute({ children, redirectTo, isLoggedIn }) {
    return isLoggedIn ? <Navigate to={redirectTo} /> : children;
  }

  function PrivateRoute({ children, redirectTo, isLoggedIn }) {
    return isLoggedIn ? children : <Navigate to={redirectTo} />;
  }
  const { isLoggedIn, allowedPages } = useContextHook(AuthContext, [
    "isLoggedIn",
    "allowedPages",
  ]);
  const redirectTo =
    allowedPages?.length > 0 ? `/${allowedPages[0]}` : "/dashboard";
  // const loadBussinessStore = allowedPages.some(
  //   (elem) => elem === "business-store"
  // );
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <PrivateRoute redirectTo="/" isLoggedIn={isLoggedIn}>
            <Layout showTemplate={isLoggedIn}>
              <Dashboard />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/sign-in"
        element={
          <PublicRoute isLoggedIn={isLoggedIn} redirectTo={redirectTo}>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/sign-up"
        element={
          <PublicRoute isLoggedIn={isLoggedIn} redirectTo={redirectTo}>
            <SignUp />
          </PublicRoute>
        }
      />
      <Route
        path="/thank-you"
        element={
          <PublicRoute isLoggedIn={isLoggedIn} redirectTo={redirectTo}>
            <ThankYou />
          </PublicRoute>
        }
      />
      <Route
        path="*"
        element={
          <PublicRoute isLoggedIn={isLoggedIn} redirectTo={redirectTo}>
            <Login />
          </PublicRoute>
        }
      />
    </Routes>
  );
};

export default Router;
