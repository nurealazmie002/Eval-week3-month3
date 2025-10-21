import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart.js';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    addToCart(product);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col hover:shadow-lg transition transform hover:-translate-y-1"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain mb-3 rounded-md" 
      />
      <div className="flex-grow">
        <h3 className="font-semibold text-gray-800 mb-1 text-sm line-clamp-2">
          {product.title}
        </h3>
        <p className="text-gray-500 text-xs capitalize mb-2">{product.category}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-green-700 font-bold text-lg">${product.price}</p>
        <button
          onClick={handleAddToCart}
          className="bg-green-600 text-white px-3 py-1 text-sm rounded-md font-semibold hover:bg-green-700 transition"
        >
          Tambah ke keranjang
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;