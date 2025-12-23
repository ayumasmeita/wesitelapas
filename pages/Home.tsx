
import React from 'react';
import { SERVICES, NEWS } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/bali-prison/1920/1080" 
            className="w-full h-full object-cover opacity-50" 
            alt="Hero Background" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 bg-blue-600 bg-opacity-20 border border-blue-500 rounded-full text-blue-400 text-sm font-semibold tracking-wider uppercase animate-fade-in">
            Lembaga Pemasyarakatan Kelas IIA Kerobokan
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Berintegritas, Melayani,<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Pasti Mengayomi.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Menyelenggarakan sistem pemasyarakatan yang transparan dan profesional untuk mewujudkan warga binaan yang mandiri dan taat hukum.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/layanan" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-xl transition-all transform hover:-translate-y-1">
              Lihat Layanan Kami
            </Link>
            <Link to="/profile" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold backdrop-blur-md transition-all">
              Tentang Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Layanan Unggulan</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <Link to="/layanan" className="text-blue-600 font-semibold text-sm flex items-center group-hover:underline">
                Pelajari Selengkapnya <i className="fas fa-arrow-right ml-2 text-xs"></i>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-900 py-20">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Warga Binaan', val: '1,200+' },
            { label: 'Petugas Lapas', val: '150+' },
            { label: 'Program Latihan', val: '25+' },
            { label: 'Indeks Kepuasan', val: '4.8/5' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-5xl font-black text-white mb-2">{stat.val}</div>
              <div className="text-blue-300 text-sm md:text-base font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* News Preview */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Berita Terbaru</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
          <Link to="/berita" className="mt-4 md:mt-0 text-blue-600 font-bold flex items-center hover:underline">
            Semua Berita <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
              <div className="h-56 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide">{item.date}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                  {item.summary}
                </p>
                <Link to="/berita" className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors">
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Punya Keluhan atau Saran?</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto opacity-90">
            Kami berkomitmen untuk terus meningkatkan kualitas pelayanan publik. Sampaikan aspirasi Anda melalui kanal pengaduan resmi kami.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/pengaduan" className="px-8 py-4 bg-white text-blue-900 rounded-xl font-bold shadow-xl hover:bg-blue-50 transition-all transform hover:-translate-y-1">
              Ajukan Pengaduan
            </Link>
            <Link to="/survei" className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white rounded-xl font-bold transition-all">
              Isi Survei Kepuasan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
