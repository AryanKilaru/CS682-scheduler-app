import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import Dashboard from "./layouts/dashboard";
import TaskAssignment from "./layouts/taskAssignment";
import Schedule from "./layouts/schedule";
import Login from "./layouts/authentication/login";
import Signup from "./layouts/authentication/signup/index"
import ForgotPassword from './layouts/authentication/forgotPassword/index';
import ResetPassword from "./layouts/authentication/resetPassword/index";
import NotFound from './layouts/Notfound';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/tasks" element={<TaskAssignment />} />
        <Route exact path="/schedule" element={<Schedule />} />
        <Route exact path="/hello" component={<NotFound />} />
      </Routes>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Welcome to Scheduler App
    //     </p>
    //     <a
    //       className="App-link"
    //       href="http://localhost:3001"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Scheduler App
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
