import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage'
import RegistrarPage from './pages/RegistrarPage/RegistrarPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registrar' element={<RegistrarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
