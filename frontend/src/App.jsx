import Login from "./pages/login/Login.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Signup from "./pages/signup/Signup.jsx";
import Home from "./pages/home/Home.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/authContext.jsx";

function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <div className="p-4 min-h-screen flex items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to={"/"} /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to={"/"} /> : <Signup />}
          />
        </Routes>
        <Toaster />
        {/* <Home /> */}
      </div>
    </>
  );
}

export default App;
