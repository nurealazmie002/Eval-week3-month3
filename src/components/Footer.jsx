import { useLocation } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

function Footer() {
  const location = useLocation();
  if (location.pathname === '/' || location.pathname === '/login') {
    return null;
  }

  return (
    <footer className="bg-gray-800 text-gray-300 p-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h3 className="text-xl font-bold text-white mb-1">Nova Shop</h3>
          <p className="text-sm">&copy; {new Date().getFullYear()} Nova Shop. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/nurealazmie002" className="hover:text-green-400 transition" aria-label="GitHub">
            <FiGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/nureal-azmie-8a6637378/" className="hover:text-green-400 transition" aria-label="LinkedIn">
            <FiLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/nureal_azmie/" className="hover:text-green-400 transition" aria-label="Twitter">
            <FiInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;