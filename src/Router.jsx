import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/atoms/Login";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "./Context/authContext";
import SignUp from "./components/atoms/SignUp";
import ThankYou from "./components/atoms/ThankYou";
import Dashboard from "./Pages/dashboard";
import AddQuiz from "./Pages/addquiz";
import StartQuiz from "./Pages/startquiz";

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
  const loadAddQuiz = allowedPages.some((elem) => elem === "add-quiz");
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
        path="/quiz"
        element={
          <PrivateRoute redirectTo="/" isLoggedIn={isLoggedIn}>
            <Layout showTemplate={isLoggedIn}>
              <StartQuiz />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/add-quiz"
        element={
          <PrivateRoute redirectTo="/" isLoggedIn={loadAddQuiz}>
            <Layout showTemplate={isLoggedIn}>
              <AddQuiz />
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
