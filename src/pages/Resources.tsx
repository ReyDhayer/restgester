import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";

const ResourcesPage = () => {
  const resources = [
    {
      title: "Gestão de Pedidos",
      description: "Sistema completo para gerenciamento de pedidos, com acompanhamento em tempo real e histórico detalhado.",
      icon: "🛍️"
    },
    {
      title: "Controle de Estoque",
      description: "Monitore seu inventário, receba alertas de baixo estoque e gere relatórios de consumo.",
      icon: "📦"
    },
    {
      title: "Gestão de Funcionários",
      description: "Controle de ponto, escalas de trabalho e avaliação de desempenho da sua equipe.",
      icon: "👥"
    },
    {
      title: "Relatórios Financeiros",
      description: "Análises detalhadas de vendas, custos e lucratividade com gráficos intuitivos.",
      icon: "📊"
    },
    {
      title: "Fidelização de Clientes",
      description: "Programa de pontos, descontos personalizados e comunicação direcionada.",
      icon: "⭐"
    },
    {
      title: "Integração com Delivery",
      description: "Conexão com principais plataformas de entrega e gestão de pedidos online.",
      icon: "🚚"
    },
    {
      title: "Cardápio Digital",
      description: "Cardápio online atualizado em tempo real com fotos e descrições detalhadas.",
      icon: "📱"
    },
    {
      title: "Reservas Online",
      description: "Sistema de reservas integrado com confirmação automática e gestão de mesas.",
      icon: "📅"
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
                Recursos Completos para o seu <span className="text-restaurant-secondary">Restaurante</span>
              </h1>
              <p className="text-lg text-restaurant-muted">
                Descubra todas as ferramentas que o RestGester oferece para transformar a gestão do seu estabelecimento
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-semibold text-restaurant-primary mb-3">{resource.title}</h3>
                  <p className="text-restaurant-muted">{resource.description}</p>
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

export default ResourcesPage;