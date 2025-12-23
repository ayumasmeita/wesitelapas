
import React, { useState } from 'react';

const Pengaduan: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Layanan Publik',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', category: 'Layanan Publik', message: '' });
  };

  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Pusat Pengaduan</h1>
          <p className="text-slate-600">Sampaikan keluhan, kritik, atau laporan terkait pelanggaran integritas petugas kami.</p>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-bullhorn text-xl"></i>
            </div>
            <h3 className="font-bold mb-2">Lapor Pungli</h3>
            <p className="text-xs text-slate-500">Laporkan oknum yang meminta imbalan atas layanan gratis.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-shield-alt text-xl"></i>
            </div>
            <h3 className="font-bold mb-2">Whistleblowing</h3>
            <p className="text-xs text-slate-500">Kanal rahasia untuk melaporkan pelanggaran prosedur.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-comment-medical text-xl"></i>
            </div>
            <h3 className="font-bold mb-2">Saran Layanan</h3>
            <p className="text-xs text-slate-500">Bantu kami meningkatkan kualitas layanan dengan ide Anda.</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-blue-900 p-8 md:p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6">Formulir Pengaduan</h2>
              <p className="text-blue-100 text-sm mb-8">
                Identitas Anda akan kami rahasiakan. Kami menjamin keamanan pelapor sesuai dengan ketentuan Whistleblowing System (WBS).
              </p>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-green-400"></i>
                <span>Respon cepat 1x24 Jam</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-green-400"></i>
                <span>Data dienkripsi aman</span>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 p-8 md:p-12">
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center">
                <i className="fas fa-check-circle mr-3"></i>
                Laporan Anda telah terkirim dan sedang diproses oleh tim internal.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-900 focus:ring-0 transition-all outline-none" 
                    placeholder="Masukkan nama..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Aktif</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-900 focus:ring-0 transition-all outline-none" 
                    placeholder="nama@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Kategori Laporan</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-900 focus:ring-0 outline-none"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  <option>Layanan Publik</option>
                  <option>Pungutan Liar</option>
                  <option>Infrastruktur</option>
                  <option>Petugas Tidak Ramah</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Detail Pengaduan</label>
                <textarea 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-900 focus:ring-0 transition-all outline-none resize-none" 
                  placeholder="Ceritakan kronologi secara detail..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-blue-900 text-white rounded-xl font-bold shadow-lg hover:bg-blue-800 transition-all transform active:scale-95"
              >
                Kirim Laporan Resmi
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pengaduan;
