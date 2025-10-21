import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx'; 
import { motion } from 'framer-motion';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const backgroundImageUrl =
  'https://images.pexels.com/photos/388415/pexels-photo-388415.jpeg';

// Varian animasi untuk "shake"
const shakeVariants = {
  initial: {
    x: 0
  },
  shake: {
    x: [-10, 10, -10, 10, -5, 5, 0], // Animasi gemetar
    transition: { duration: 0.4, ease: "easeInOut" }
  },
};

function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated } = useAuth(); 
  const from = location.state?.from?.pathname || '/products'; 

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isLoading) return; 

    setIsLoading(true); 
    setError('');

    try {
       await login(user, pass);
       navigate(from, { replace: true });
    } catch (err) {
       setError(err.message);
    } finally {
       setIsLoading(false); 
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative p-4 sm:p-6 overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-green-600 opacity-40"></div>
      
      <motion.form
        onSubmit={handleLogin}
        className="relative w-full max-w-md bg-white/90 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-md z-10 border-t-4 border-green-600 "
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
           ...shakeVariants[error ? 'shake' : 'initial']
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
      >
        <h1 className="text-3xl font-extrabold text-center text-green-700 mb-2">
          Nova Shop
        </h1>
        <h2 className="text-center text-gray-600 mb-8">
          Masuk untuk mulai berbelanja
        </h2>

         <div className="mb-4">
           <label className="block text-sm font-medium text-gray-700 mb-1">
             Username
           </label>
           <input
             type="text"
             value={user}
             onChange={(e) => setUser(e.target.value)}
             className="text-gray-800 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow"
             required
           />
         </div>

         <div className="mb-6 relative">
           <label className="block text-sm font-medium text-gray-700 mb-1">
             Password
           </label>
           <input
             type={showPassword ? 'text' : 'password'} 
             value={pass}
             onChange={(e) => setPass(e.target.value)}
             className="text-gray-800 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow"
             required
           />
           <button
             type="button" 
             onClick={() => setShowPassword(!showPassword)}
             className="absolute right-3 top-[38px] text-gray-500 hover:text-green-600"
           >
             {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
           </button>
         </div>
         
         {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
         )}

        <button
          type="submit"
          disabled={isLoading} 
          className={`w-full text-white font-semibold py-2 rounded-md transition duration-200 cursor-pointer
            ${isLoading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-green-600 hover:bg-green-700'
            }
          `}
        >
          {isLoading ? 'Loading...' : 'Login'}
        </button>

        <p className="mt-4 text-sm text-gray-600 text-center">
          Hint : username = admin, password = 1234
        </p>
      </motion.form>
    </div>
  );
}

export default Login;