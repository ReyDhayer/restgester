import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Proprietário do Restaurante Sabor & Arte",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      content: "O RestGester revolucionou a forma como gerenciamos nosso restaurante. A eficiência aumentou significativamente e nossos clientes notaram a diferença no atendimento.",
      rating: 5
    },
    {
      name: "Ana Beatriz",
      role: "Gerente do Café Aroma",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      content: "Desde que implementamos o sistema, nossa gestão de estoque melhorou 100%. Não temos mais problemas com desperdício e o controle financeiro ficou muito mais preciso.",
      rating: 5
    },
    {
      name: "Pedro Santos",
      role: "Chef do Restaurante Fusion",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      content: "A interface intuitiva e as funcionalidades abrangentes do RestGester nos ajudaram a melhorar todos os aspectos do nosso negócio. É uma ferramenta indispensável.",
      rating: 5
    },
    {
      name: "Mariana Costa",
      role: "Proprietária do Bistrô Mar & Terra",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      content: "O suporte ao cliente é excepcional e o sistema é muito completo. Conseguimos reduzir custos e aumentar nossa margem de lucro em 30%.",
      rating: 5
    },
    {
      name: "Roberto Almeida",
      role: "Gerente do Restaurante Tradição",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      content: "A implementação foi muito tranquila e o treinamento da equipe foi rápido. O sistema é intuitivo e nos ajudou a melhorar muito nosso atendimento.",
      rating: 5
    },
    {
      name: "Juliana Lima",
      role: "Proprietária da Pizzaria Bella",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      content: "O controle de delivery e pedidos online ficou muito mais organizado. Nossos clientes adoraram a praticidade do sistema.",
      rating: 5
    }
  ];

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
                O que nossos <span className="text-restaurant-secondary">Clientes</span> dizem
              </h1>
              <p className="text-lg text-restaurant-muted">
                Descubra como o RestGester está transformando a gestão de restaurantes por todo o Brasil
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80";
                      }}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-restaurant-primary">{testimonial.name}</h3>
                      <p className="text-sm text-restaurant-muted">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-restaurant-muted italic">"{testimonial.content}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;