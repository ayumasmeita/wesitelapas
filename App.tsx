
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Layanan from './pages/Layanan';
import Berita from './pages/Berita';
import InfoPublik from './pages/InfoPublik';
import Pengaduan from './pages/Pengaduan';
import Survei from './pages/Survei';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/info-publik" element={<InfoPublik />} />
          <Route path="/pengaduan" element={<Pengaduan />} />
          <Route path="/survei" element={<Survei />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
