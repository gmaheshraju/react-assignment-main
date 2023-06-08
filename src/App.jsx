import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import ProblemSet from "./pages/ProblemSet";
import Problem from "./pages/Problem";


const problems = [
  {
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    acceptance: "56%",
  },
  {
    title: "Three Sum",
    difficulty: "Medium",
    acceptance: "82%",
  },
  {
    title: "Two Sum",
    difficulty: "Easy",
    acceptance: "95.9%",
  },
  {
    title: "Rotate Binary tree",
    difficulty: "Hard",
    acceptance: "32%",
  },
];

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-100 h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/problems" element={<ProblemSet />} />
          <Route path="/problems/:problemId" element={<Problem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
