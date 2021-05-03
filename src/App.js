// import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
// import SideBarMobileView from './components/SideBarMobileView';
import Home from './pages';
function App() {
  return (
    <div className="container">
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
