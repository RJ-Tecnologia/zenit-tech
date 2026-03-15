import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Quem Somos', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-zenit[#0b1120]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-linear-to-br from-[#3b82f6] to-zenit-accent w-10 h-10 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-white">Zenit</span>
              <span className="text-zenit-accent">Tech</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex items-center space-x-1 mr-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.path
                      ? 'bg-white/10 text-white'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              to="/contato"
              className="bg-linear-to-r from-[#3b82f6] to-[#06b6d4] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
            >
              Fale Conosco
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-zenit-dark border-b border-white/5"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium ${location.pathname === link.path
                    ? 'bg-white/10 text-white'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-linear-to-r from-[#3b82f6] to-[#06b6d4] text-white px-6 py-3 rounded-lg font-medium"
            >
              Fale Conosco
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
