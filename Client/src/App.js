import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import SignIn from "./components/pages/SignIn/SignIn";
import Profiles from "./components/Profiles";
import HomeMovie from "./components/pages/Movies/HomeMovie";
import MovieWatch from "./components/pages/Movies/MovieWatch";
// import { useContext } from "react";
// import { AuthContext } from "./authContext/AuthContext";

function App() {
  // const { user } = useContext(AuthContext);

  // if (!user) {
  //   return <Navigate to="/signIn" />; // Redirect to login if not authenticated
  // }
  return (
    <div>
      <Routes>
        {/* {user ? <Home /> : <Navigate to="/" />} */}
        {/* <Route path="/register" element={<ProtectedPage />}></Route>
          <Route path="/signIn" element={<ProtectedPage />}></Route> */}
        {/* {user && ( */}

        {/* <Route path="/watch" element={user ? <MovieWatch /> : <Home />} /> */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/watch" element={<MovieWatch />} />
        <Route path="/register" element={<Home />} />
        <Route exact path="/home" element={<HomeMovie />} />
        {/* <Route
            exact
            path="/series"
            element={<HomeMovie type={"series"} />}
          />
          <Route
            exact
            path="/movies"
            element={user ? <HomeMovie type={"movie"} /> : <Home />}
          /> */}
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
