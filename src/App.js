import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Schedule from './pages/Schedule';
import About from './pages/About';
import ContactUs from './pages/ContactUs';




function App() {
  return (
    <>
      <Router>
        <Header />
        <div className='flex flex-col justify-between h-screen'>
          <main className='w-full py-auto mx-auto'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/schedule' element={<Schedule />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact-us' element={<ContactUs />} />
            </Routes>
          </main>
        </div>
      </Router>
      <ToastContainer />
      <footer className='invisible lg:visible fixed sticky bottom-0'>
        <Footer />
      </footer>
    </>
  );
}

export default App;
