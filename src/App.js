import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ListIssues from './Components/ListIssues/ListIssues';

function App() {
  
  return (
    <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<ListIssues />} ></Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
