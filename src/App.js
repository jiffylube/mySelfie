import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Landing from "./Components/Landing";
// import Faceapi from "./Components/Faceapi";
import Faceapi from "./Components/MainPage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react"

function App() {
  // Create a lifting state
  const [currentEmail, setCurrentEmail] = useState(null);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/mainpage" element={<Faceapi currentEmail={currentEmail} />} />
          <Route path="/login" element={<Login setCurrentEmail={setCurrentEmail} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
