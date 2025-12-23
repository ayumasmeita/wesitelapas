
import React from 'react';
import { SERVICES } from '../constants';

const Layanan: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Layanan Publik</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">Informasi lengkap seputar prosedur, persyaratan, dan alur layanan di Lapas Kelas IIA Kerobokan.</p>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100`}>
              <div className="lg:w-1/3 h-64 lg:h-auto overflow-hidden">
                <img src={`https://picsum.photos/seed/${service.id}/800/800`} className="w-full h-full object-cover" alt={service.title} />
              </div>
              <div className="lg:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-blue-900 text-white rounded-2xl flex items-center justify-center text-2xl">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{service.title}</h2>
                </div>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {service.description} Kami menjamin seluruh proses layanan dilakukan secara transparan tanpa pungutan liar. Seluruh warga binaan berhak mendapatkan layanan ini sesuai ketentuan yang berlaku.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                      <i className="fas fa-file-alt mr-2"></i> Persyaratan
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• KTP / Identitas diri asli</li>
                      <li>• Surat Ijin dari Pihak Menahan</li>
                      <li>• Bukti Hubungan Keluarga</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                      <i className="fas fa-clock mr-2"></i> Jadwal
                    </h4>
                    <p className="text-sm text-slate-600">
                      Senin - Kamis: 09.00 - 15.00 WITA<br/>
                      Jumat: 09.00 - 11.30 WITA
                    </p>
                  </div>
                </div>
                <button className="mt-8 px-6 py-3 bg-blue-900 text-white rounded-xl font-bold w-fit hover:bg-blue-800 transition-all flex items-center space-x-2">
                  <i className="fas fa-external-link-alt"></i>
                  <span>Daftar Layanan Online</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layanan;
