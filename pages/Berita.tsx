
import React from 'react';
import { NEWS } from '../constants';

const Berita: React.FC = () => {
  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Warta Kerobokan</h1>
          <p className="text-slate-600">Berita dan update terkini seputar kegiatan di Lapas Kelas IIA Kerobokan.</p>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {NEWS.map((item) => (
            <article key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-2xl transition-all flex flex-col h-full">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-blue-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  Kegiatan
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center space-x-2 text-slate-400 text-xs mb-4">
                  <i className="far fa-calendar-alt"></i>
                  <span>{item.date}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 group-hover:text-blue-900 transition-colors">
                  {item.title}
                </h2>
                <p className="text-slate-600 text-sm mb-8 line-clamp-3 leading-relaxed">
                  {item.summary}
                </p>
                <div className="mt-auto">
                  <button className="flex items-center text-blue-900 font-bold group-hover:translate-x-2 transition-transform">
                    Baca Selengkapnya <i className="fas fa-arrow-right ml-2 text-xs"></i>
                  </button>
                </div>
              </div>
            </article>
          ))}
          
          {/* Mocking more news for the page */}
          {[4, 5, 6].map(i => (
            <article key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-2xl transition-all flex flex-col h-full opacity-70">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={`https://picsum.photos/seed/news${i}/800/600`} 
                  alt="News" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center space-x-2 text-slate-400 text-xs mb-4">
                  <i className="far fa-calendar-alt"></i>
                  <span>{10 + i} Mei 2024</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2">
                  Inovasi Pengawasan Berbasis IT di Blok Hunian
                </h2>
                <p className="text-slate-600 text-sm mb-8 line-clamp-3 leading-relaxed">
                  Implementasi teknologi terbaru guna mendukung sistem keamanan yang lebih efektif dan efisien.
                </p>
                <div className="mt-auto">
                  <button className="flex items-center text-blue-900 font-bold">
                    Baca Selengkapnya <i className="fas fa-arrow-right ml-2 text-xs"></i>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 flex justify-center space-x-2">
          {[1, 2, 3].map(p => (
            <button key={p} className={`w-10 h-10 rounded-lg font-bold flex items-center justify-center transition-all ${p === 1 ? 'bg-blue-900 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}>
              {p}
            </button>
          ))}
          <button className="w-10 h-10 rounded-lg bg-white text-slate-600 border border-slate-200 flex items-center justify-center hover:bg-slate-50">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Berita;
