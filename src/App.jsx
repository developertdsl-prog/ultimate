import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LifestyleHub from './pages/LifestyleHub';
import FashionHub from './pages/FashionHub';
import DIYGallery from './pages/DIYGallery';
import BeautyArticle from './pages/BeautyArticle';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import OTP from './pages/OTP';
import ResetPassword from './pages/ResetPassword';
import './index.css';

import { Outlet } from 'react-router-dom';

const MainLayout = () => (
  <div className="app-wrapper">
    <Navbar />
    <main className="main-content">
      <Outlet />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Hub Pages with Navbar/Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/lifestyle" element={<LifestyleHub />} />
          <Route path="/fashion" element={<FashionHub />} />
          <Route path="/diy" element={<DIYGallery />} />
          <Route path="/article/:id" element={<BeautyArticle />} />
        </Route>

        {/* Auth Pages without Navbar/Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
