import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-zenit[#0b1120] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="bg-linear-to-br from-[#3b82f6] to-zenit[#38bdf8] w-10 h-10 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-white">Zenit</span>
                <span className="text-zenit[#38bdf8]">Tech</span>
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Transformando ideias em soluções digitais robustas. Especialistas em desenvolvimento de sistemas e infraestrutura para impulsionar o seu negócio.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 hover:text-zenit[#38bdf8] transition-colors">Home</Link></li>
              <li><Link to="/sobre" className="text-slate-400 hover:text-zenit[#38bdf8] transition-colors">Quem Somos</Link></li>
              <li><Link to="/servicos" className="text-slate-400 hover:text-zenit[#38bdf8] transition-colors">Serviços</Link></li>
              <li><Link to="/contato" className="text-slate-400 hover:text-zenit[#38bdf8] transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-zenit[#38bdf8] shrink-0" />
                <span>contato@zenittech.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-zenit[#38bdf8] shrink-0" />
                <span>+55 (11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-zenit[#38bdf8] shrink-0" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Zenit Tech. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link to="/termos" className="hover:text-zenit[#38bdf8] transition-colors">Termos de Uso</Link>
            <Link to="/privacidade" className="hover:text-zenit[#38bdf8] transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
