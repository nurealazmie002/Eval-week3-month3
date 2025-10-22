import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-linear-to-b from-green-50 to-white px-6">
      <h2 className="text-4xl font-extrabold text-green-600 mb-4 animate-pulse">
        404 - Halaman Tidak Ditemukan
      </h2>
      <p className="text-gray-700 text-lg mb-8 text-center max-w-md">
        Maaf, halaman yang kamu cari tidak tersedia. 
        Periksa kembali URL atau kembali ke halaman utama.
      </p>
      <Link
        to="/" 
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300"
      >
        Kembali ke Login
      </Link>
    </div>
  );
}

export default NotFound;