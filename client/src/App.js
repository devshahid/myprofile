import "./App.css";
import "./css/signin.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Components/Login/SignIn";
import Register from "./Components/Login/Register";
import ForgotPassword from "./Components/Login/ForgotPassword";
import Profile from "./Components/Dashboard/Profile";
import Skills from "./Components/Dashboard/Skills";
// import Sidebar from "./Components/Dashboard/Sidebar";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Profile />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
