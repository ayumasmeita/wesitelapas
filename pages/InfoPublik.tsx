
import React from 'react';

const InfoPublik: React.FC = () => {
  const documents = [
    { title: 'Laporan Kinerja Instansi Pemerintah (LKjIP) 2023', category: 'Laporan', size: '2.4 MB' },
    { title: 'Rencana Strategis (Renstra) 2020-2024', category: 'Perencanaan', size: '1.8 MB' },
    { title: 'Daftar Informasi Publik (DIP) 2024', category: 'Data', size: '850 KB' },
    { title: 'Laporan Realisasi Anggaran Q1 2024', category: 'Keuangan', size: '1.2 MB' },
    { title: 'SOP Layanan Kunjungan Tatap Muka', category: 'Prosedur', size: '500 KB' },
  ];

  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Informasi Publik (PPID)</h1>
          <p className="text-slate-600">Akses dokumen resmi dan transparansi data Lapas Kelas IIA Kerobokan.</p>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="mb-12 flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            placeholder="Cari dokumen..." 
            className="flex-grow px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:ring-2 focus:ring-blue-900 outline-none shadow-sm"
          />
          <select className="px-6 py-4 rounded-2xl bg-white border border-slate-200 outline-none shadow-sm">
            <option>Semua Kategori</option>
            <option>Laporan</option>
            <option>Keuangan</option>
            <option>Prosedur</option>
          </select>
        </div>

        <div className="space-y-4">
          {documents.map((doc, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:border-blue-200 hover:shadow-md transition-all">
              <div className="flex items-center space-x-5">
                <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center text-xl">
                  <i className="fas fa-file-pdf"></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{doc.title}</h3>
                  <div className="flex items-center space-x-3 mt-1">
                    <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full">{doc.category}</span>
                    <span className="text-xs text-slate-400">{doc.size}</span>
                  </div>
                </div>
              </div>
              <button className="w-10 h-10 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all">
                <i className="fas fa-download"></i>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 bg-slate-900 rounded-3xl text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Maklumat Pelayanan</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                "Dengan ini, kami menyatakan sanggup menyelenggarakan pelayanan sesuai standar pelayanan yang telah ditetapkan dan apabila tidak menepati janji ini, kami siap menerima sanksi sesuai peraturan perundang-undangan yang berlaku."
              </p>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <i className="fas fa-signature text-2xl text-blue-400"></i>
                </div>
                <div>
                  <div className="font-bold">Kepala Lapas</div>
                  <div className="text-sm text-slate-500">Lapas Kelas IIA Kerobokan</div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="font-bold mb-4 text-blue-400">Butuh Informasi Lain?</h3>
              <p className="text-sm text-slate-300 mb-6">Jika informasi yang Anda butuhkan tidak tersedia di sini, Anda dapat mengajukan Permohonan Informasi Publik secara tertulis.</p>
              <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-all">
                Ajukan Permohonan Informasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPublik;
