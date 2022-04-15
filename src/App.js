import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Landing from "./Components/Landing";
import Main from "./Components/MainPage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}/>
        {/* <Route><Main /></Route>
        <Route><Login /></Route>
        <Route><Signup /></Route> */}
        </Routes>
      </Router>
      {/* <Main /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
    </>
  );
}

export default App;
