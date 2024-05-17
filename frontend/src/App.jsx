import Login from "./pages/login/Login.jsx";

import "./App.css";
import Signup from "./pages/signup/Signup.jsx";
import Home from "./pages/home/Home.jsx";

function App() {
  return (
    <>
      <div className="p-4 min-h-screen flex items-center justify-center">
        {/* <Login />
        <Signup /> */}
        <Home />
      </div>
    </>
  );
}

export default App;
