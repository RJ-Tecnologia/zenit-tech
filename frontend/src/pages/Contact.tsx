import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const text = `Olá equipe Zenit Tech, meu nome é ${formData.name}.%0A%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0AAssunto: ${formData.subject}%0A%0AMensagem:%0A${formData.message}`;
    
    // O seu número de WhatsApp com o código do país (55)
    const whatsappNumber = '5514981816764';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24 min-h-screen bg-zenit-dark[#0b1120] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[#0b1120]/0 to-transparent"></div>
      </div>

      <div className="relative z-10">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-semibold tracking-wider text-[#3b82f6] uppercase mb-4"
            >
              CONTATO
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              Vamos <span className="text-[#38bdf8]">conversar</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              Preencha o formulário abaixo ou fale diretamente com nossa equipe. Estamos prontos para ajudar a tirar o seu projeto do papel.
            </motion.p>
          </div>
        </section>

        <section className="py-12 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
              
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-4 flex flex-col space-y-8"
              >
                <h2 className="text-2xl font-bold text-white mb-2">Informações de Contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#151e32] border border-white/5 p-3 rounded-xl">
                      <Mail className="w-5 h-5 text-[#3b82f6]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Email</h3>
                      <p className="text-sm text-slate-400">contato@zenittech.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-[#151e32] border border-white/5 p-3 rounded-xl">
                      <Phone className="w-5 h-5 text-[#22c55e]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">WhatsApp (Zenit Tech)</h3>
                      <p className="text-sm text-slate-400">(14) 98181-6764</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-[#151e32] border border-white/5 p-3 rounded-xl">
                      <MapPin className="w-5 h-5 text-[#a855f7]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Localização</h3>
                      <p className="text-sm text-slate-400">São Paulo, SP - Brasil</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div className="bg-[#064e3b]/20 border border-[#059669]/20 rounded-2xl p-6 mt-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="w-5 h-5 text-[#22c55e]" />
                    <h3 className="text-white font-semibold">Fale com a Zenit Tech</h3>
                  </div>
                  <p className="text-sm text-slate-400 mb-6">
                    Prefere um contato mais direto? Chame nossa equipe no WhatsApp para um atendimento rápido.
                  </p>
                  <a 
                    href="https://wa.me/5514981816764" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#22c55e] rounded-xl hover:bg-[#16a34a] transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Abrir WhatsApp
                  </a>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-8 bg-[#151e32]/80 backdrop-blur-sm border border-white/5 rounded-3xl p-8 lg:p-10"
              >
                <h2 className="text-2xl font-bold text-white mb-8">Envie sua mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        Nome *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#0b1120] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent transition-all text-sm"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#0b1120] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent transition-all text-sm"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#0b1120] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent transition-all text-sm"
                        placeholder="(14) 98181-6764"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                        Assunto
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-[#0b1120] border border-white/10 rounded-xl px-4 py-3 text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent transition-all text-sm appearance-none"
                      >
                        <option value="" disabled>Selecione</option>
                        <option value="Desenvolvimento de Site">Desenvolvimento de Site</option>
                        <option value="Sistema Web">Sistema Web</option>
                        <option value="Suporte em Infraestrutura">Suporte em Infraestrutura</option>
                        <option value="Consultoria">Consultoria</option>
                        <option value="Outros">Outros</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#0b1120] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent transition-all resize-none text-sm"
                      placeholder="Conte-nos sobre o seu projeto..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] hover:opacity-90 text-white font-medium py-3.5 px-6 rounded-xl transition-opacity"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Mensagem
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}