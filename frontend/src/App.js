//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Ide from './pages/ide';
import Main from './pages/Main';
import Login from './pages/Login';
import List from './pages/List';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/list" element={<List />} />
        <Route path='/ide' element={<Ide />} />
      </Routes>
    </Router>
  );
}

export default App;
