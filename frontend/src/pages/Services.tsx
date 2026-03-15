import { motion } from 'motion/react';
import { Globe, Code2, Server, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: 'Desenvolvimento de Sites',
      description: 'Sites institucionais e landing pages com design moderno e otimizados para conversão.',
      icon: Globe,
      features: ['Sites responsivos', 'Landing pages', 'Otimização SEO', 'Design personalizado']
    },
    {
      title: 'Sistemas Web Simples',
      description: 'Sistemas básicos para gestão e controle do seu negócio de forma prática.',
      icon: Code2,
      features: ['Sistemas de cadastro', 'Controle de estoque', 'Painéis administrativos', 'Integração com APIs']
    },
    {
      title: 'Suporte em Infraestrutura',
      description: 'Configuração e manutenção básica de servidores e hospedagem.',
      icon: Server,
      features: ['Configuração de hospedagem', 'Deploy de aplicações', 'Backup de dados', 'Suporte técnico']
    },
    {
      title: 'Consultoria de TI',
      description: 'Orientação para escolha de ferramentas e soluções tecnológicas.',
      icon: ShieldCheck,
      features: ['Análise de necessidades', 'Recomendação de ferramentas', 'Planejamento técnico', 'Suporte na decisão']
    }
  ];

  const technologies = [
    'HTML/CSS', 'JavaScript', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Git', 'Linux', 'cPanel', 'WordPress'
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#0b1120] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[#0b1120]/0 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-semibold tracking-wider text-[#3b82f6] uppercase mb-4"
            >
              NOSSOS SERVIÇOS
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              Soluções completas em <span className="text-[#38bdf8]">tecnologia</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Oferecemos serviços essenciais de desenvolvimento web e suporte em infraestrutura para empresas que estão começando sua jornada digital.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#151e32]/80 backdrop-blur-sm border border-white/5 rounded-3xl p-10 hover:border-white/10 transition-colors group flex flex-col"
                >
                  <div className="bg-[#0b1120] border border-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                    <service.icon className="w-8 h-8 text-[#e2e8f0]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed text-sm">{service.description}</p>
                  
                  <ul className="space-y-4 mt-auto">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-[#3b82f6] mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold tracking-wider text-[#3b82f6] uppercase mb-4"
            >
              STACK TECNOLÓGICO
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-12"
            >
              Tecnologias que utilizamos
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
            >
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="px-6 py-3 bg-[#151e32]/80 backdrop-blur-sm border border-white/5 rounded-xl text-slate-300 text-sm font-medium hover:border-white/10 transition-colors"
                >
                  {tech}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 pb-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Tem um projeto em mente?
              </h2>
              <p className="text-slate-400 text-lg mb-10">
                Vamos conversar e encontrar a melhor solução para o seu negócio.
              </p>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
