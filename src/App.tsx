import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './components/NewNavbar/NewNavbar'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
