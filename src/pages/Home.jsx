import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-linear-gradient from-green-50 to-white min-h-[calc(100vh-145px)] sm:min-h-[calc(100vh-120px)] flex flex-col items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl"
      >
        <img
          src="https://images.pexels.com/photos/5632403/pexels-photo-5632403.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Shopping illustration"
          className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg mb-10"
        />

        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-6">
          Selamat Datang di Nova Shop
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Nova Shop adalah platform e-commerce modern yang memudahkanmu mencari
          produk terbaik dari seluruh dunia. Nikmati pengalaman belanja yang
          cepat, aman, dan menyenangkan seperti Tokopedia :)!
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/products")}
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200"
        >
          Lihat Produk
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-16 bg-white shadow-lg rounded-2xl p-8 max-w-3xl border border-green-100"
      >
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Kenapa Memilih Nova Shop?
        </h2>
        <ul className="text-left text-gray-700 space-y-3 list-disc list-inside">
          <li>Koleksi produk lengkap & selalu update.</li>
          <li>Transaksi cepat dengan sistem pembayaran aman.</li>
          <li>Pengiriman cepat ke seluruh Indonesia.</li>
          <li>Ulasan pengguna yang jujur & transparan.</li>
          <li>Dukungan pelanggan 24 jam siap membantu.</li>
        </ul>
      </motion.div>
    </div>
  );
}

export default Home;