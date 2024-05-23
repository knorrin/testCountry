import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePages/HomePages';
import CountryDetailPage from './pages/CountryDetailPage/CountryDetailPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/country/:name' element={<CountryDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
