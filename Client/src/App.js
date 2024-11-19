import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import SignIn from "./components/pages/SignIn/SignIn";
import Profiles from "./components/Profiles";
import HomeMovie from "./components/pages/Movies/HomeMovie";
import MovieWatch from "./components/pages/Movies/MovieWatch";

function App() {
  const user = true;
  return (
    <div>
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
    </div>
  );
}

export default App;
