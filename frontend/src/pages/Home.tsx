import { motion } from 'motion/react';
import { ArrowRight, Globe, Code2, Server, Zap, Shield, TrendingUp, Users, Sparkles} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-24 min-h-screen bg-zenit[#0b1120] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-zenit[600px] bg-zenit[radial-gradient(ellipse_at_top,_var(--stops))] from-blue-900/20 via-zenit[#0b1120]/0 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl lg:text-[80px] font-bold text-white leading-[1.1] tracking-tight"
          >
            Soluções digitais que <br />
            <span className="text-transparent bg-clip-text bg-linear-to-br from-[#3b82f6] to-zenit[#38bdf8]">
              transformam
            </span>
            <br />
            negócios
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-xl text-slate-400 max-w-2xl leading-relaxed"
          >
            Desenvolvemos sites profissionais, sistemas web e oferecemos suporte em infraestrutura de TI para pequenos e médios negócios.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contato"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-linear-to-br from-[#3b82f6] to-[#06b6d4] rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
            >
              Iniciar Projeto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/servicos"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[#151e32] border border-white/10 rounded-xl hover:bg-white/5 transition-colors"
            >
              Nossos Serviços
            </Link>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32"
        >
          {[
            {
              title: 'Sites',
              description: 'Design profissional',
              icon: Globe,
            },
            {
              title: 'Sistemas',
              description: 'Soluções web',
              icon: Code2,
            },
            {
              title: 'Infraestrutura',
              description: 'Suporte de TI',
              icon: Server,
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-[#151e32]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-zenit[#38bdf8] mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Por que nos escolher */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-40 text-center"
        >
          <p className="text-sm font-semibold tracking-wider text-[#3b82f6] uppercase mb-4">Por que nos escolher</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            Excelência em cada <span className="text-zenit[#38bdf8]">detalhe</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              {
                title: 'Agilidade',
                description: 'Entregas rápidas com metodologias ágeis, sem comprometer a qualidade do código.',
                icon: Zap,
              },
              {
                title: 'Segurança',
                description: 'Infraestrutura segura com as melhores práticas de proteção de dados.',
                icon: Shield,
              },
              {
                title: 'Escalabilidade',
                description: 'Arquiteturas preparadas para crescer junto com o seu negócio.',
                icon: TrendingUp,
              },
              {
                title: 'Suporte Dedicado',
                description: 'Acompanhamento contínuo e suporte técnico especializado.',
                icon: Users,
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-[#151e32]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors flex flex-col"
              >
                <div className="w-12 h-12 bg-zenit[#0b1120] rounded-xl flex items-center justify-center mb-6 border border-white/5">
                  <feature.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed grow">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Produto em destaque */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-40"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#151e32] border border-[#3b82f6]/30 text-zenit[#38bdf8] text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4 mr-2" />
                Produto em destaque
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                App de Finanças <br />
                <span className="text-zenit[#38bdf8]">Pessoais</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Nosso produto SaaS em desenvolvimento — um aplicativo completo de gestão financeira para pessoas físicas. Controle seus gastos, receitas e investimentos de forma simples e intuitiva.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  'Controle de receitas e despesas',
                  'Dashboard com visão completa',
                  'Categorização inteligente',
                  'Relatórios e gráficos detalhados'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-[#151e32] flex items-center justify-center mr-4 border border-[#3b82f6]/30">
                      <div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/servicos"
                className="inline-flex items-center text-zenit[#38bdf8] hover:text-[#3b82f6] font-medium transition-colors"
              >
                Saiba mais sobre nossos serviços
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-[#3b82f6]/20 to-transparent rounded-3xl blur-3xl"></div>
              <div className="relative bg-[#151e32] border border-white/10 rounded-3xl overflow-hidden aspect-4/3 flex items-center justify-center">
                {/* Placeholder for the dashboard image */}
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt="Dashboard Financeiro" 
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-br from-zenit[#0b1120] via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-40"
        >
          <div className="bg-linear-to-br from-[#3b82f6] to-[#06b6d4] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pronto para transformar sua ideia em realidade?
              </h2>
              <p className="text-white/80 text-lg mb-10">
                Entre em contato e vamos conversar sobre como podemos ajudar o seu negócio a crescer com tecnologia.
              </p>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-zenit-dark bg-white rounded-xl hover:bg-slate-50 transition-colors shadow-xl shadow-black/10"
              >
                Fale com a gente
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
