import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart.js'; 

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Produk tidak ditemukan');
        return res.json();
      })
      .then(setProduct)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return <p className="p-6 text-center text-green-700">Loading...</p>;
  if (error)
    return <p className="p-6 text-center text-red-600">Error: {error}</p>;
  if (!product) return null;

  return (
    <div className="p-4 sm:p-6 bg-green-50 min-h-screen flex items-center justify-center">
      <div className="grid md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-4xl">
        <div className="p-4 flex items-center justify-center bg-white">
          <img
            src={product.image} 
            alt={product.title}
            className="w-full h-64 sm:h-80 object-contain" 
          />
        </div>

        <div className="p-6 sm:p-8 flex flex-col justify-center">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 font-medium text-green-700 hover:text-green-800 self-start hidden sm:block"
          >
            ← Kembali
          </button>
          
          <span className="text-sm text-gray-500 capitalize mb-2">{product.category}</span>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-800">
            {product.title}
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-green-600 mb-4">
            ${product.price}
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            {product.description}
          </p>
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-700 transition duration-200"
          >
            Tambah ke keranjang
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;