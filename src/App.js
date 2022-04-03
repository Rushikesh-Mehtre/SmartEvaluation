import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import AboutPage from "./pages/About/AboutPage";
import PrivacyPage from "./pages/Privacy/PrivacyPage";
import ReviewPage from "./pages/Reviews/ReviewPage";
import CandidateReviewPage from "./pages/Candidate Review/CandidateReviewPage";
import EditCandidateData from "./pages/EditCandidateData/EditCandidateData";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/reviews" element={<ReviewPage />} />
        <Route
          path="/candidate-report/:candidateId"
          element={<CandidateReviewPage />}
        />
        <Route
          path="/edit-candidate-report/:candidateId"
          element={<EditCandidateData />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </div>
  );
}

export default App;
