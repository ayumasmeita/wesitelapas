
import { NavLink, ServiceItem, NewsItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/', icon: 'fa-home' },
  { name: 'Profile', path: '/profile', icon: 'fa-user-shield' },
  { name: 'Layanan', path: '/layanan', icon: 'fa-concierge-bell' },
  { name: 'Berita', path: '/berita', icon: 'fa-newspaper' },
  { name: 'Info Publik', path: '/info-publik', icon: 'fa-info-circle' },
  { name: 'Pengaduan', path: '/pengaduan', icon: 'fa-exclamation-triangle' },
  { name: 'Survei', path: '/survei', icon: 'fa-poll' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'visitation',
    title: 'Layanan Kunjungan',
    description: 'Pendaftaran kunjungan tatap muka dan online (Video Call) bagi keluarga WBP.',
    icon: 'fa-users',
  },
  {
    id: 'legal-aid',
    title: 'Bantuan Hukum',
    description: 'Layanan bantuan hukum gratis bagi Warga Binaan Pemasyarakatan.',
    icon: 'fa-balance-scale',
  },
  {
    id: 'integration',
    title: 'Layanan Integrasi',
    description: 'Pengurusan Pembebasan Bersyarat (PB), Cuti Menjelang Bebas (CMB), dan CB.',
    icon: 'fa-handshake',
  },
  {
    id: 'health',
    title: 'Layanan Kesehatan',
    description: 'Pusat layanan kesehatan 24 jam bagi WBP di dalam Lapas.',
    icon: 'fa-heartbeat',
  },
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Peningkatan Keterampilan WBP melalui Pelatihan Pertukangan',
    date: '20 Mei 2024',
    summary: 'Lapas Kerobokan mengadakan pelatihan pertukangan untuk membekali WBP dengan skill mandiri.',
    imageUrl: 'https://picsum.photos/seed/prison1/800/600',
  },
  {
    id: '2',
    title: 'Razia Rutin Kamar Hunian Guna Cegah Peredaran Narkoba',
    date: '18 Mei 2024',
    summary: 'Petugas melakukan penggeledahan rutin di seluruh blok hunian untuk memastikan keamanan.',
    imageUrl: 'https://picsum.photos/seed/prison2/800/600',
  },
  {
    id: '3',
    title: 'Kunjungan Kerja Kakanwil Kemenkumham Bali',
    date: '15 Mei 2024',
    summary: 'Kakanwil mengapresiasi inovasi layanan digital yang diterapkan di Lapas Kelas IIA Kerobokan.',
    imageUrl: 'https://picsum.photos/seed/prison3/800/600',
  },
];
