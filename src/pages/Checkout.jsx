import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleConfirmPayment = () => {
   alert('Pembayaran berhasil! Terima kasih telah berbelanja.');
    clearCart();
    navigate('/products');
  };
  
  if (cartItems.length === 0) {
   return (
      <div className="p-8 text-center min-h-[calc(100vh-80px)] flex flex-col justify-center items-center bg-gray-50">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Tidak ada item untuk di-checkout.</h1>
          <button onClick={() => navigate('/products')} className="bg-green-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-700 transition">
            Kembali ke Produk
          </button>
      </div>
   )
  }

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-[calc(100vh-80px)] flex justify-center items-start">
      <div className="max-w-2xl w-full bg-white p-6 sm:p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">Checkout</h1>
        
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Ringkasan Pesanan</h2>
        <div className="space-y-3 mb-4 max-h-60 overflow-y-auto pr-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-700 line-clamp-1">{item.title} (x{item.quantity})</p>
                <p className="text-sm text-gray-500">${item.price} / item</p>
              </div>
              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between text-2xl font-bold mb-6">
            <span>Total:</span>
            <span className="text-green-600">${totalPrice.toFixed(2)}</span>
          </div>
          
          <button
            onClick={handleConfirmPayment}
            className="w-full bg-green-600 text-white font-bold py-3 text-lg rounded-md hover:bg-green-700 transition"
          >
            Konfirmasi Pembayaran (Simulasi)
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;