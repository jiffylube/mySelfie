import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Landing from "./Components/Landing";
import Faceapi from "./Components/Faceapi";
// import Main from "./Components/MainPage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Faceapi /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/mainpage" element={<Faceapi />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
