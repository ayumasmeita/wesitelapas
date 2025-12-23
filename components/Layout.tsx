
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import ChatBot from './ChatBot';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-slate-200">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
              K
            </div>
            <div>
              <h1 className="text-sm md:text-lg font-bold text-blue-900 leading-tight">Lapas Kelas IIA</h1>
              <p className="text-xs text-slate-600 font-medium">Kerobokan - Bali</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? 'bg-blue-900 text-white shadow-md'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-blue-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 p-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-3 p-3 rounded-xl ${
                  location.pathname === link.path
                    ? 'bg-blue-50 text-blue-900 border-l-4 border-blue-900'
                    : 'text-slate-600'
                }`}
              >
                <i className={`fas ${link.icon} w-5`}></i>
                <span className="font-medium">{link.name}</span>
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Lapas Kelas IIA Kerobokan</h2>
            <p className="text-slate-400 mb-6 max-w-md">
              Mewujudkan kepastian hukum dan perlindungan hak asasi manusia melalui penyelenggaraan pemasyarakatan yang transparan dan akuntabel.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Terkait</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="https://www.kemenkumham.go.id" className="hover:text-white">Kemenkumham RI</a></li>
              <li><a href="https://ditjenpas.go.id" className="hover:text-white">Ditjen Pemasyarakatan</a></li>
              <li><a href="https://bali.kemenkumham.go.id" className="hover:text-white">Kanwil Bali</a></li>
              <li><a href="#" className="hover:text-white">E-Reporting</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
            <div className="space-y-3 text-slate-400">
              <p className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt mt-1"></i>
                <span>Jl. Tangkuban Perahu No.1, Kerobokan Kelod, Bali</span>
              </p>
              <p className="flex items-center space-x-3">
                <i className="fas fa-phone"></i>
                <span>(0361) 730414</span>
              </p>
              <p className="flex items-center space-x-3">
                <i className="fas fa-envelope"></i>
                <span>lapas.kerobokan@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Lapas Kelas IIA Kerobokan. All rights reserved.
        </div>
      </footer>

      {/* AI Assistant */}
      <ChatBot />
    </div>
  );
};

export default Layout;
