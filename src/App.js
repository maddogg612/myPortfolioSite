// import logo from './logo.svg';
import './css/App.css';
import Navbar from './components/Navbar';
import Container from './containers/main';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/about" component={Container} />
        <Route path="/skills" component={Container} />
        <Route path="/projects" component={Container} />
        <Route path="/contact" component={Container} />
      </div>
    </Router>
  );
}

export default App;
