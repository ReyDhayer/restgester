
import { motion } from "framer-motion";

export const Benefits = () => {
  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="flex-1 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((num) => (
                <motion.div 
                  key={num} 
                  className="bg-white rounded-xl shadow-md overflow-hidden" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: num * 0.1 }}
                  whileHover={{ y: -8, boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.15)' }}
                >
                  <img 
                    src={[
                      "https://images.unsplash.com/photo-1669410647983-ef742ccdfe6d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    ][num - 1]} 
                    alt={[
                      "Gestão de restaurante moderna",
                      "Interior elegante de restaurante",
                      "Pratos gourmet preparados",
                      "Equipe profissional em ação"
                    ][num - 1]} 
                    className="w-full h-48 object-cover"
                    onError={e => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 max-w-lg order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-restaurant-primary mb-6">
              Transforme a Experiência do seu Cliente e Aumente seus Lucros
            </h2>
            
            <div className="space-y-6">
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-restaurant-secondary/10 flex items-center justify-center text-restaurant-secondary font-bold">
                  01
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-restaurant-primary mb-2">Aumente sua eficiência</h3>
                  <p className="text-restaurant-muted">Reduza o tempo de atendimento e erros operacionais com fluxos de trabalho otimizados.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-restaurant-secondary/10 flex items-center justify-center text-restaurant-secondary font-bold">
                  02
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-restaurant-primary mb-2">Reduza custos operacionais</h3>
                  <p className="text-restaurant-muted">Controle melhor seu estoque, reduza desperdícios e otimize sua equipe.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-restaurant-secondary/10 flex items-center justify-center text-restaurant-secondary font-bold">
                  03
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-restaurant-primary mb-2">Melhore a experiência do cliente</h3>
                  <p className="text-restaurant-muted">Ofereça um atendimento personalizado baseado no histórico e preferências dos clientes.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-restaurant-secondary/10 flex items-center justify-center text-restaurant-secondary font-bold">
                  04
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-restaurant-primary mb-2">Tome decisões baseadas em dados</h3>
                  <p className="text-restaurant-muted">Acesse relatórios detalhados e indicadores de desempenho para otimizar seu negócio.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
