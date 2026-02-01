import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage";
import { ProtectedRoute } from "./ProtectedRoute";
import FindBrain from "./pages/FindBrain";


function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={
            //ProtectedRoute check the token and then render Dashboard
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="findbrain" element={<FindBrain />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;