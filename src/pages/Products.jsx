import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then(setCategories)
      .catch((err) => console.error('Gagal fetch kategori:', err));
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    const url = selectedCategory
      ? `https://fakestoreapi.com/products/category/$}`
      : 'https://fakestoreapi.com/products';

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Gagal memuat data produk');
        return res.json();
      })
      .then(setProducts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  if (error) return <p className="p-8 text-center text-red-600">Error: {error}</p>;

  return (
    <div className="p-4 sm:p-8 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
        Daftar Produk
      </h1>

      <div className="mb-6 flex flex-wrap justify-center gap-2 sm:gap-3">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-md font-medium transition ${
            !selectedCategory
              ? 'bg-green-600 text-white'
              : 'bg-white text-green-700 border border-green-200 hover:bg-green-100'
          }`}
        >
          Semua
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-md font-medium transition capitalize ${
              selectedCategory === cat
                ? 'bg-green-600 text-white'
                : 'bg-white text-green-700 border border-green-200 hover:bg-green-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-center text-green-700 text-xl">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;