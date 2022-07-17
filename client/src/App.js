import "./App.css";
import "./css/signin.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Components/Login/SignIn";
import Register from "./Components/Login/Register";
import ForgotPassword from "./Components/Login/ForgotPassword";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
