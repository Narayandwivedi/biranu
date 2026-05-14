import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import JobBoard from './pages/JobBoard'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminDashboard = location.pathname.startsWith('/adm/dashboard');

  return (
    <div className="min-h-screen flex flex-col">
      <ToastContainer position="top-right" autoClose={3000} />
      {!isAdminDashboard && <Navbar />}
      <main className="flex-1">
        {children}
      </main>
      {!isAdminDashboard && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<JobBoard />} />
          <Route path="/adm" element={<AdminLogin />} />
          <Route path="/adm/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
