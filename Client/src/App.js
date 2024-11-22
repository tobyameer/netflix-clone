import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import SignIn from "./components/pages/SignIn/SignIn";
import Profiles from "./components/Profiles";
import HomeMovie from "./components/pages/Movies/HomeMovie";
import MovieWatch from "./components/pages/Movies/MovieWatch";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  const ProtectedPage = () => {
    if (!user) {
      return <Navigate to="/login" />; // Redirect to login if not authenticated
    }
    return (
      <div>
        <Routes>
          <Route exact path="/">
            {user ? <Home /> : <Navigate to="/" />}
          </Route>
          <Route path="/register" element={<ProtectedPage />}></Route>
          <Route path="/signIn" element={<ProtectedPage />}></Route>
          {user && (
            <>
              <Route path="/watch" element={user ? <MovieWatch /> : <Home />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route
                path="/profiles"
                element={user ? <Profiles /> : <Home />}
              />
              <Route path="/register" element={<Home />} />
            </>
          )}
        </Routes>
        <Routes location>
          <Route exact path="/" element={user ? <HomeMovie /> : <Home />} />
          <Route
            exact
            path="/series"
            element={user ? <HomeMovie type={"series"} /> : <Home />}
          />
          <Route
            exact
            path="/movies"
            element={user ? <HomeMovie type={"movie"} /> : <Home />}
          />
          <Route path="/watch" element={user ? <MovieWatch /> : <Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/profiles" element={user ? <Profiles /> : <Home />} />
          <Route path="/register" element={<Home />} />
        </Routes>
        )}
      </div>
    );
  };
}
export default App;
