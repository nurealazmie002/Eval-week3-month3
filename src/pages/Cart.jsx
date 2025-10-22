import { useCart } from '../hooks/useCart.js';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, clearCart, totalPrice, itemCount } = useCart();
  const navigate = useNavigate();
  

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="p-8 text-center min-h-[calc(100vh-80px)] flex flex-col justify-center items-center bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Keranjang Belanja Kosong</h1>
        <p className="text-gray-600 mb-6">Ayo, mulai belanja dan temukan produk favoritmu!</p>
        <Link
          to="/products"
          className="bg-green-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-700 transition"
        >
          Lihat Produk
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-[calc(100vh-80px)]">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">Keranjang Belanja</h1>
      
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 sm:gap-8">
        
        <div className="md:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex bg-white p-3 sm:p-4 rounded-lg shadow-md items-center">
              <img src={item.image} alt={item.title} className="w-16 h-16 sm:w-20 sm:h-20 object-contain mr-4" />
              <div className="grow">
                <h2 className="font-semibold text-gray-800 line-clamp-2">{item.title}</h2>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                <p className="font-semibold text-green-600">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 font-medium ml-4"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>

        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md md:sticky top-28">
            <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Ringkasan</h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Total Item:</span>
              <span className="font-semibold">{itemCount}</span>
            </div>
            <div className="flex justify-between mb-4 text-xl">
              <span className="text-gray-800 font-semibold">Total Harga:</span>
              <span className="font-bold text-green-600">${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition"
            >
              Lanjutkan Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full bg-transparent text-red-500 font-semibold py-2 rounded-md hover:bg-red-50 transition mt-2"
            >
              Kosongkan Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;