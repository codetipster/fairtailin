import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
