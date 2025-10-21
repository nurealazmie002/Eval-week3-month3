import { createContext, useContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();

  const login = useCallback(async (username, password) => {
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('token', 'fake_token_1234');
      setIsAuthenticated(true);
      return true;
    } else {
      throw new Error('Username atau password salah!');
    }
  }, []); 

  const logout = useCallback(() => {
    navigate('/'); 
    localStorage.removeItem('token');
    setIsAuthenticated(false);

  }, [navigate]);

  const value = { isAuthenticated, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth harus dipakai di dalam AuthProvider');
  }
  return context;
};