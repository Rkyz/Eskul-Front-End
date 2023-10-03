import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Helmet } from 'react-helmet';
import Dashboard from './pages/User/Dashboard/Landing';
import AdminDashboard from './pages/Admin/Dashboard/Dashboard';


function App() {
 return (
  <>
    <Helmet>
    <html className="h-full" />
    <body className="h-full dark:bg-dark bg-light" />
  </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
  </>
 );
}

export default App;