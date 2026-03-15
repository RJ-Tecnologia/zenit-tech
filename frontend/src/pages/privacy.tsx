import { motion } from 'motion/react';

export default function Privacy() {
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
            Política de <span className="text-[#38bdf8]">Privacidade</span>
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none text-slate-400">
            <p className="mb-6">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
            
            <h2 className="text-2xl font-semibold text-white mt-10 mb-4">1. Introdução</h2>
            <p className="mb-6">
              A ZenitTech valoriza a sua privacidade e está comprometida em proteger os seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você visita nosso site ou utiliza nossos serviços, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10 mb-4">2. Dados que Coletamos</h2>
            <p className="mb-6">
              Podemos coletar as seguintes informações pessoais quando você entra em contato conosco ou utiliza nossos formulários:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone / WhatsApp</li>
              <li>Informações sobre o projeto ou empresa</li>
              <li>Dados de navegação (cookies, endereço IP, tipo de navegador)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-10 mb-4">3. Como Usamos seus Dados</h2>
            <p className="mb-6">
              Utilizamos as informações coletadas para:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Responder a suas dúvidas e solicitações de orçamento</li>
              <li>Fornecer e melhorar nossos serviços</li>
              <li>Enviar comunicações relevantes sobre projetos e serviços</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-10 mb-4">4. Compartilhamento de Dados</h2>
            <p className="mb-6">
              A ZenitTech não vende, aluga ou comercializa seus dados pessoais. Podemos compartilhar suas informações apenas com prestadores de serviços parceiros estritamente necessários para a execução dos nossos serviços (como provedores de hospedagem em nuvem), sempre sob acordos de confidencialidade.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10 mb-4">5. Segurança dos Dados</h2>
            <p className="mb-6">
              Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela internet é 100% seguro.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10 mb-4">6. Seus Direitos</h2>
            <p className="mb-6">
              De acordo com a LGPD, você tem o direito de:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a exclusão ou anonimização de dados desnecessários</li>
              <li>Revogar o consentimento a qualquer momento</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-10 mb-4">7. Contato</h2>
            <p className="mb-6">
              Para exercer seus direitos ou tirar dúvidas sobre esta Política de Privacidade, entre em contato através do e-mail: contato@zenittech.com.br
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
