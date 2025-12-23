
import React, { useState } from 'react';

const Survei: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Survei Kepuasan Masyarakat</h1>
        <p className="text-slate-600 mb-12">Bantu kami menjadi lebih baik dengan memberikan penilaian terhadap layanan kami.</p>

        {!submitted ? (
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 border border-slate-100">
            <h2 className="text-2xl font-bold mb-10 text-slate-800">Seberapa puas Anda dengan pelayanan kami hari ini?</h2>
            
            <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-4xl md:text-6xl transition-all transform hover:scale-125 ${
                    rating >= star ? 'text-amber-400' : 'text-slate-200'
                  }`}
                >
                  <i className="fas fa-star"></i>
                </button>
              ))}
            </div>

            <div className="space-y-6 text-left max-w-lg mx-auto mb-10">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Unsur yang Dinilai</label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none">
                  <option>Kecepatan Pelayanan</option>
                  <option>Keramahan Petugas</option>
                  <option>Kemudahan Prosedur</option>
                  <option>Kualitas Fasilitas</option>
                  <option>Transparansi Informasi</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Komentar Tambahan (Opsional)</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none resize-none"
                  placeholder="Ceritakan pengalaman Anda..."
                ></textarea>
              </div>
            </div>

            <button
              onClick={() => setSubmitted(true)}
              disabled={rating === 0}
              className="px-12 py-4 bg-blue-900 text-white rounded-2xl font-bold shadow-xl hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Kirim Penilaian
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl p-16 border border-slate-100 animate-fade-in">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <i className="fas fa-check text-4xl"></i>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Terima Kasih!</h2>
            <p className="text-slate-600 text-lg mb-8">
              Penilaian Anda sangat berharga bagi kami dalam meningkatkan kualitas pelayanan di Lapas Kelas IIA Kerobokan.
            </p>
            <button
              onClick={() => { setSubmitted(false); setRating(0); }}
              className="text-blue-900 font-bold hover:underline"
            >
              Isi survei lagi
            </button>
          </div>
        )}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-blue-900 mb-4 flex items-center">
              <i className="fas fa-chart-line mr-2"></i> Real-time IKM
            </h3>
            <div className="flex items-end space-x-2">
              <span className="text-4xl font-black text-slate-900">19.23</span>
              <span className="text-slate-400 text-sm mb-1">/ 20.00</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">Indeks Kepuasan Masyarakat (IKM) Bulan Mei 2024</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-blue-900 mb-4 flex items-center">
              <i className="fas fa-users mr-2"></i> Responden
            </h3>
            <div className="text-4xl font-black text-slate-900">842</div>
            <p className="text-xs text-slate-500 mt-2">Total responden dalam 30 hari terakhir</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survei;
