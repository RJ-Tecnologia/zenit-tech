import { motion } from 'motion/react';
import { Target, Eye, Lightbulb, Rocket, Code, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-zenit-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-150 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-900/10 via-zenit-dark/0 to-transparent"></div>
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
              QUEM SOMOS
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              Conheça a <span className="text-zenit-accent">Zenit Tech</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Somos uma empresa de tecnologia focada em transformar ideias em soluções digitais de alto impacto. Nascemos da paixão por criar e da vontade de fazer a diferença.
            </motion.p>
          </div>
        </section>

        {/* History */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-sm font-semibold tracking-wider text-[#3b82f6] uppercase mb-4">
                  NOSSA HISTÓRIA
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  Do código à transformação digital
                </h2>
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                  <p>
                    A Zenit Tech nasceu no ano de 2026 com a visão de democratizar o acesso à tecnologia de qualidade. Tudo começou quando um grupo de amigos, apaixonados por tecnologia e inovação, decidiu unir suas habilidades para criar soluções digitais que realmente fizessem a diferença.
                  </p>
                  <p>
                    Desde o início, nosso foco foi claro: entregar valor real aos nossos clientes. Começamos com projetos pequenos, mas rapidamente ganhamos a confiança de empresas locais, o que nos permitiu expandir nossa atuação para projetos mais complexos e desafiadores.
                  </p>
                  <p>
                    Hoje, a Zenit Tech é uma empresa em crescimento, com uma equipe talentosa e dedicada, pronta para enfrentar os desafios do mercado e continuar entregando soluções inovadoras que impulsionem o sucesso dos nossos clientes. Nossa jornada está apenas começando, e estamos animados para o que o futuro nos reserva.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mt-12 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {[
                  { value: '100%', label: 'Foco no Cliente' },
                  { value: 'Ágil', label: 'Metodologia' },
                  { value: 'Sob Medida', label: 'Soluções' },
                  { value: 'Inovação', label: 'Constante' },
                ].map((stat, index) => (
                  <div key={index} className="bg-[#151e32]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-8 text-center hover:border-white/10 transition-colors flex flex-col justify-center min-h-40">
                    <div className="text-4xl font-bold text-zenit-accent mb-2">{stat.value}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Nossos Pilares</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Missão',
                  description: 'Entregar soluções tecnológicas que impulsionem negócios, combinando inovação, qualidade e atendimento excepcional.',
                  icon: Target,
                },
                {
                  title: 'Visão',
                  description: 'Ser referência no mercado de tecnologia, reconhecida pela excelência em desenvolvimento de software e infraestrutura.',
                  icon: Eye,
                },
                {
                  title: 'Valores',
                  description: 'Inovação, transparência, comprometimento, qualidade e foco no sucesso do cliente em cada projeto.',
                  icon: Lightbulb,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-[#151e32]/80 backdrop-blur-sm border border-white/5 p-10 rounded-3xl text-center hover:border-white/10 transition-colors"
                >
                  <div className="mx-auto bg-zenit-dark border border-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                    <item.icon className="w-6 h-6 text-zenit-accent" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 pb-40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-sm font-semibold tracking-wider text-[#3b82f6] uppercase mb-4">
                NOSSA JORNADA
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Linha do Tempo</h2>
            </div>

            <div className="relative">
              {/* Central Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-linear-to-b from-[#3b82f6]/50 via-[#3b82f6]/20 to-transparent hidden md:block"></div>

              <div className="space-y-12 md:space-y-24">
                {[
                  {
                    year: '2026',
                    title: 'Fundação da Zenit Tech',
                    description: 'Nascemos com a missão de democratizar o acesso à tecnologia de qualidade para empresas de pequeno e médio porte.',
                    icon: Rocket,
                    align: 'right'
                  },
                  {
                    year: '2026',
                    title: 'Aplicativo Zenit Finance',
                    description: 'Iniciamos o desenvolvimento do nosso app de finanças pessoais, identificando uma grande oportunidade no mercado.',
                    icon: Code,
                    align: 'left'
                  },
                  {
                    year: '2026',
                    title: 'Expansão de Serviços',
                    description: 'Ampliamos nossa atuação para desenvolvimento de sites, sistemas de site e infraestrutura de TI para lojistas e empresas.',
                    icon: Users,
                    align: 'right'
                  },
                  {
                    year: '2026',
                    title: 'Crescimento Contínuo',
                    description: 'Seguimos construindo soluções inovadoras e expandindo nossa base de clientes com foco em resultados.',
                    icon: Award,
                    align: 'left'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className={`flex flex-col md:flex-row items-center justify-between w-full ${item.align === 'left' ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className="hidden md:block w-5/12"></div>

                    {/* Icon on the line */}
                    <div className="z-10 flex items-center justify-center w-10 h-10 bg-zenit-dark border border-[#3b82f6]/50 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.2)] mb-4 md:mb-0">
                      <item.icon className="w-5 h-5 text-zenit-accent" strokeWidth={1.5} />
                    </div>

                    <div className="w-full md:w-5/12">
                      <div className="bg-[#151e32]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
                        <span className="text-sm font-bold text-[#3b82f6] mb-2 block">{item.year}</span>
                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
