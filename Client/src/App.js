import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import SignIn from "./components/pages/SignIn/SignIn";
import Profiles from "./components/Profiles";
import HomeMovie from "./components/pages/Movies/HomeMovie";
import MovieWatch from "./components/pages/Movies/MovieWatch";
import { AuthContext } from "./authContext/AuthContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Routes>
        {/* Home route: If user is not authenticated, redirect to signIn */}
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/signin" />}
        />

        {/* SignIn route: If user isi authenticated, redirect to Home */}
        <Route path="/signin" element={<SignIn />} />

        {/* Profiles route */}
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/signin" />}
        />
        <Route
          path="/"
          element={user ? <HomeMovie /> : <Navigate to="/signin" />}
        />
        <Route
          path="/watch"
          element={user ? <MovieWatch /> : <Navigate to="/signin" />}
        />
      </Routes>
    </div>
  );
}

export default App;
