import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBarMobileView from './components/SideBarMobileView';
function App() {
  return (
    <div className="container">
      <Router>
        <SideBarMobileView />
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
