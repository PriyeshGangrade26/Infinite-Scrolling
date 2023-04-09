import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { PageNotFound } from "./components/PageNotFound";
import { Header } from "./components/Header.jsx";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const CheckAuthentication = () => {
    setAuthenticated(true);
  };

  const Logout = () => {
    setAuthenticated(false);
  };

  const location = useLocation();

  return (
    <>
      {["/home", "/about"].includes(location.pathname) && (
        <Header Logout={Logout} />
      )}

      <Routes>
        <Route
          path="/"
          element={<Login setAuthenticated={CheckAuthentication} />}
        />
        <Route
          path="/home"
          element={
            authenticated ? <Home/> : <Navigate to="/" />
          }
        />
        <Route
          path="/about"
          element={
            authenticated ? <About/> : <Navigate to="/" />
          }
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </>
  );
};

const MainApp = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export { MainApp };
