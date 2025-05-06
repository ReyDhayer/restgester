
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CTA = () => {
  const navigate = useNavigate();
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [count5k, setCount5k] = useState(0);
  const [count1m, setCount1m] = useState(0);
  const [count18, setCount18] = useState(0);
  const [count48, setCount48] = useState(0);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      
      const duration = 2000;
      
      const interval5k = setInterval(() => {
        setCount5k(prev => {
          if (prev >= 5000) {
            clearInterval(interval5k);
            return 5000;
          }
          return prev + 100;
        });
      }, duration / 50);

      const interval1m = setInterval(() => {
        setCount1m(prev => {
          if (prev >= 1000000) {
            clearInterval(interval1m);
            return 1000000;
          }
          return prev + 20000;
        });
      }, duration / 50);

      const interval18 = setInterval(() => {
        setCount18(prev => {
          if (prev >= 18) {
            clearInterval(interval18);
            return 18;
          }
          return prev + 1;
        });
      }, duration / 18);

      const interval48 = setInterval(() => {
        setCount48(prev => {
          if (prev >= 48) {
            clearInterval(interval48);
            return 48;
          }
          return prev + 1;
        });
      }, duration / 48);

      return () => {
        clearInterval(interval5k);
        clearInterval(interval1m);
        clearInterval(interval18);
        clearInterval(interval48);
      };
    }
  }, [isInView]);
  return (
    <section className="py-20 bg-restaurant-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-restaurant-secondary/50 to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(249,115,22,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-playfair text-white mb-6 animate-fade-in">
            Pronto para transformar a gestão do seu restaurante?
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Junte-se a milhares de restaurantes que já estão usando nossa plataforma para melhorar seus processos e aumentar a lucratividade.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="xl" className="bg-white text-restaurant-primary hover:bg-white/90">
              Comece gratuitamente
            </Button>
            <Button 
              size="xl" 
              variant="outline" 
              className="border-blue text-blue hover:bg-white/10"
              onClick={() => navigate('/consultor')}
              
            >
              Falar com um consultor
            </Button>
          </div>
          
          <motion.div 
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              { title: "Restaurantes", value: `${count5k.toLocaleString()}+` },
              { title: "Reservas gerenciadas", value: `${(count1m/1000000).toFixed(1)} milhão+` },
              { title: "Economia média", value: `${count18}%` },
              { title: "Satisfação", value: `${(count48/10).toFixed(1)}/5` }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <motion.p 
                  className="text-3xl font-bold text-white mb-1"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  {stat.value}
                </motion.p>
                <motion.p 
                  className="text-white/70"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  {stat.title}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
