
import Layout from './component/layout/Layout';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermOfService from './pages/TermsOfService';
import Home from './component/home/Home';





import Footer from './component/footer/Footer';
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contact-Us' element={<ContactUs />} />
          <Route path='/Term-Of-Service' element={<TermOfService />} />
          <Route path='/Privacy-Policy' element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Layout>
      
      
    </>


  )
}

export default App;
