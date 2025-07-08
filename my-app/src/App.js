import './App.css';
import Home from "./pages/Home";
import MessagesPage from "./pages/MessagePage";
import FeedbackPage from "./pages/FeedBackpage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  // const messages = [
  //   { sender: 'Mom', text: 'Dinner is ready!' },
  //   { sender: 'Boss', text: 'Meeting at 3 PM!' },
  //   { sender: 'Friend', text: 'Wanna go out?' },
  //   { sender: 'AI Bot 🤖', text: 'You are learning fast!' }
  // ];
  return (
    <>
    <BrowserRouter>
      <div className="App">
        <h1>🌐 React Router Demo</h1>

        {/* Navigation Links */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
          <Link to="/messages" style={{ marginRight: "15px" }}>Messages</Link>
          <Link to="/feedback">Feedback</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
        </div>
    </BrowserRouter>
    </>
  );
}

export default App;
