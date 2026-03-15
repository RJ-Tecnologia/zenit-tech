import { motion } from 'motion/react';

export default function Terms() {
  return (
    <div className="pt-24 min-h-screen bg-[#0b1120] relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[#0b1120]/0 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Termos de <span className="text-[#38bdf8]">Uso</span>
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none text-slate-400">
            <p className="mb-6">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
            
            <h2 className="text-2xl font-semibold text-white mt-10 mb-4">1. Aceitação dos Termos</h2>
            <p className="mb-6">
              Ao acessar e usar o site da ZenitTech, você concorda em cumprir e ficar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá usar nosso site ou serviços.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10 mb-4">2. Serviços Oferecidos</h2>
            <p className="mb-6">
              A ZenitTech oferece serviços de desenvolvimento de software, consultoria em TI, infraestrutura e soluções tecnológicas. Os detalhes específicos, prazos e valores de cada projeto serão definidos em contrato específico firmado entre as partes.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10 mb-4">3. Propriedade Intelectual</h2>
            <p className="mb-6">
              Todo o conteúdo presente neste site, incluindo textos, gráficos, logotipos, ícones, imagens e software, é propriedade da ZenitTech ou de seus licenciadores e está protegido por leis de direitos autorais e propriedade intelectual.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10 mb-4">4. Uso Aceitável</h2>
            <p className="mb-6">
              Você concorda em usar nosso site apenas para fins lícitos e de maneira que não infrinja os direitos de terceiros, nem restrinja ou iniba o uso e aproveitamento do site por qualquer outra pessoa.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10 mb-4">5. Limitação de Responsabilidade</h2>
            <p className="mb-6">
              A ZenitTech não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos resultantes do seu acesso ou uso do nosso site ou serviços, na máxima extensão permitida pela lei aplicável.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10 mb-4">6. Modificações dos Termos</h2>
            <p className="mb-6">
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. O uso contínuo do site após tais alterações constitui sua aceitação dos novos termos.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10 mb-4">7. Contato</h2>
            <p className="mb-6">
              Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através do email: contato@zenittech.com.br
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
