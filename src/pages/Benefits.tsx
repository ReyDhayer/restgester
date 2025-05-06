
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Benefits as BenefitsSection } from "@/components/Benefits";
import { CTA } from "@/components/CTA";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const BenefitsPage = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });
  const controls = useAnimation();
  const [count32, setCount32] = useState(0);
  const [count28, setCount28] = useState(0);
  const [count45, setCount45] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      const duration = 2000;
      const interval32 = setInterval(() => {
        setCount32(prev => {
          if (prev >= 32) {
            clearInterval(interval32);
            return 32;
          }
          return prev + 1;
        });
      }, duration / 32);

      const interval28 = setInterval(() => {
        setCount28(prev => {
          if (prev >= 28) {
            clearInterval(interval28);
            return 28;
          }
          return prev + 1;
        });
      }, duration / 28);

      const interval45 = setInterval(() => {
        setCount45(prev => {
          if (prev >= 45) {
            clearInterval(interval45);
            return 45;
          }
          return prev + 1;
        });
      }, duration / 45);

      return () => {
        clearInterval(interval32);
        clearInterval(interval28);
        clearInterval(interval45);
      };
    }
  }, [isInView, controls]);

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 pb-20">
        <section className="py-12 bg-gradient-to-b from-restaurant-light to-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold font-playfair text-restaurant-primary mb-6">
                Transforme seu <span className="text-restaurant-secondary">Restaurante</span>
              </h1>
              <p className="text-lg text-restaurant-muted">
                Descubra como o RestGester pode revolucionar a gestão do seu estabelecimento
              </p>
            </motion.div>
          </div>
        </section>
        
        <BenefitsSection />
        
        <section className="py-20 bg-restaurant-light">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold font-playfair text-restaurant-primary mb-6">
                    Resultados mensuráveis para seu negócio
                  </h2>
                  
                  <div className="space-y-6">
                    <motion.div 
                      className="flex gap-4"
                      ref={statsRef}
                      variants={cardVariants}
                      initial="hidden"
                      animate={controls}
                      custom={0}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div 
                        className="flex-shrink-0 w-12 h-12 rounded-full bg-restaurant-secondary text-white flex items-center justify-center text-lg font-bold"
                        variants={numberVariants}
                      >
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          {count32}%
                        </motion.span>
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold text-restaurant-primary mb-2">Aumento de eficiência</h3>
                        <p className="text-restaurant-muted">Nossos clientes relatam um aumento médio de 32% na eficiência operacional após 3 meses.</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex gap-4"
                      variants={cardVariants}
                      custom={1}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div 
                        className="flex-shrink-0 w-12 h-12 rounded-full bg-restaurant-secondary text-white flex items-center justify-center text-lg font-bold"
                        variants={numberVariants}
                      >
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          {count28}%
                        </motion.span>
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold text-restaurant-primary mb-2">Redução de custos</h3>
                        <p className="text-restaurant-muted">Economia média de 28% nos custos operacionais através do melhor gerenciamento de estoque e pessoal.</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex gap-4"
                      variants={cardVariants}
                      custom={2}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div 
                        className="flex-shrink-0 w-12 h-12 rounded-full bg-restaurant-secondary text-white flex items-center justify-center text-lg font-bold"
                        variants={numberVariants}
                      >
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                        >
                          {count45}%
                        </motion.span>
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold text-restaurant-primary mb-2">Satisfação do cliente</h3>
                        <p className="text-restaurant-muted">Aumento de 45% nos índices de satisfação do cliente devido ao serviço mais ágil e personalizado.</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                <div className="relative">
                  <motion.div 
                    className="absolute -top-6 -right-6 w-64 h-64 bg-restaurant-secondary/10 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                  <motion.img 
                    src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Restaurant results" 
                    className="w-full h-full object-cover rounded-lg shadow-lg relative z-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default BenefitsPage;
