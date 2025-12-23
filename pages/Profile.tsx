
import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Profil Instansi</h1>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Sejarah Singkat</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Lembaga Pemasyarakatan (Lapas) Kelas IIA Kerobokan merupakan Unit Pelaksana Teknis di bawah naungan Kantor Wilayah Kementerian Hukum dan Hak Asasi Manusia Bali. Berdiri sejak tahun 1979, Lapas ini memiliki peran vital dalam pembinaan warga binaan di wilayah hukum Provinsi Bali.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Dikenal dengan julukan "Hotel Prodeo Kerobokan", institusi ini terus bertransformasi menuju modernisasi melalui digitalisasi layanan dan penguatan integritas petugas guna mewujudkan Wilayah Bebas dari Korupsi (WBK).
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <img src="https://picsum.photos/seed/history/800/600" alt="History" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center text-white">
                  <i className="fas fa-bullseye text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Visi Kami</h2>
              </div>
              <p className="text-slate-700 italic text-lg leading-relaxed">
                "Mewujudkan Kepastian Hukum dan Perlindungan Hak Asasi Manusia melalui Penyelenggaraan Pemasyarakatan yang Berintegritas, Transparan, dan Akuntabel."
              </p>
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center text-white">
                  <i className="fas fa-list-check text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Misi Kami</h2>
              </div>
              <ul className="space-y-4">
                {[
                  'Menyelenggarakan pembinaan warga binaan yang terukur dan aplikatif.',
                  'Mewujudkan penegakan hukum yang transparan dan bebas Pungli.',
                  'Meningkatkan kompetensi dan profesionalisme SDM petugas.',
                  'Memperkuat koordinasi antar lembaga penegak hukum.',
                ].map((misi, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-600">
                    <i className="fas fa-check-circle mt-1 text-blue-600"></i>
                    <span>{misi}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">Struktur Organisasi</h2>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 overflow-x-auto">
            {/* Visual placeholder for Org Chart */}
            <div className="min-w-[800px] py-10 flex flex-col items-center">
              <div className="w-64 p-4 bg-blue-900 text-white rounded-lg font-bold shadow-lg">Kepala Lapas</div>
              <div className="w-1 h-8 bg-slate-300"></div>
              <div className="flex space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-48 p-3 bg-slate-100 text-slate-800 rounded-lg font-bold border border-slate-200">KPLP</div>
                  <div className="w-1 h-6 bg-slate-300"></div>
                  <div className="w-40 p-2 bg-white text-slate-600 rounded border border-slate-100 text-sm">Seksi Keamanan</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-48 p-3 bg-slate-100 text-slate-800 rounded-lg font-bold border border-slate-200">Kasi Binadik</div>
                  <div className="w-1 h-6 bg-slate-300"></div>
                  <div className="w-40 p-2 bg-white text-slate-600 rounded border border-slate-100 text-sm">Layanan Kunjungan</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-48 p-3 bg-slate-100 text-slate-800 rounded-lg font-bold border border-slate-200">Kasi Giatja</div>
                  <div className="w-1 h-6 bg-slate-300"></div>
                  <div className="w-40 p-2 bg-white text-slate-600 rounded border border-slate-100 text-sm">Bengkel Kerja</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-48 p-3 bg-slate-100 text-slate-800 rounded-lg font-bold border border-slate-200">Kasi Admin</div>
                  <div className="w-1 h-6 bg-slate-300"></div>
                  <div className="w-40 p-2 bg-white text-slate-600 rounded border border-slate-100 text-sm">Keuangan & Umum</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
