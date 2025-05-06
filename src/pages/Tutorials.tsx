
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PlayCircle, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const TutorialsPage = () => {
  const tutorials = [
    {
      title: "Configuração Inicial do RestGester",
      description: "Aprenda como configurar seu restaurante no sistema em menos de 30 minutos",
      image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "15 min",
      category: "Iniciante",
      date: "02 Mar 2024",
      youtubeId: "dQw4w9WgXcQ" // Example YouTube ID
    },
    {
      title: "Gestão Avançada de Reservas",
      description: "Técnicas para otimizar suas reservas e evitar conflitos de horários",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "22 min",
      category: "Intermediário",
      date: "15 Mar 2024",
      youtubeId: "dQw4w9WgXcQ" // Example YouTube ID
    },
    {
      title: "Como Usar o Módulo de Estoque",
      description: "Controle completo do seu inventário para reduzir desperdícios",
      image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "18 min",
      category: "Intermediário",
      date: "21 Mar 2024",
      youtubeId: "dQw4w9WgXcQ" // Example YouTube ID
    },
    {
      title: "Relatórios Financeiros",
      description: "Como extrair insights valiosos dos relatórios do RestGester",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "25 min",
      category: "Avançado",
      date: "28 Mar 2024",
      youtubeId: "dQw4w9WgXcQ" // Example YouTube ID
    },
    {
      title: "Programa de Fidelidade",
      description: "Implemente estratégias para fidelizar seus clientes e aumentar o retorno",
      image: "https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "20 min",
      category: "Intermediário",
      date: "05 Apr 2024",
      youtubeId: "dQw4w9WgXcQ" // Example YouTube ID
    },
    {
      title: "Integração com Apps de Delivery",
      description: "Como conectar o RestGester com plataformas de entrega",
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "30 min",
      category: "Avançado",
      date: "12 Apr 2024",
      youtubeId: "dQw4w9WgXcQ" // Example YouTube ID
    }
  ];

  const [activeCategory, setActiveCategory] = useState("Todos");
  
  const categories = [
    { name: "Todos", count: tutorials.length },
    { name: "Iniciante", count: tutorials.filter(t => t.category === "Iniciante").length },
    { name: "Intermediário", count: tutorials.filter(t => t.category === "Intermediário").length },
    { name: "Avançado", count: tutorials.filter(t => t.category === "Avançado").length }
  ];

  const filteredTutorials = activeCategory === "Todos"
    ? tutorials
    : tutorials.filter(tutorial => tutorial.category === activeCategory);

  const openYoutubeVideo = (youtubeId: string) => {
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 pb-20">
        <section className="py-12 bg-restaurant-primary">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold font-playfair text-white mb-6">
                Tutoriais <span className="text-restaurant-secondary">RestGester</span>
              </h1>
              <p className="text-lg text-white/80 mb-10">
                Aprenda a usar todas as funcionalidades do sistema com nossos vídeos e guias passo a passo
              </p>
              
              <div className="inline-flex flex-wrap justify-center gap-3">
                {categories.map((cat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                  >
                    <Button 
                      variant={activeCategory === cat.name ? "default" : "outline"}
                      className={activeCategory === cat.name 
                        ? "bg-restaurant-secondary hover:bg-restaurant-secondary/90" 
                        : "border-white/30 text-white hover:bg-white/10"
                      }
                      onClick={() => setActiveCategory(cat.name)}
                    >
                      {cat.name} ({cat.count})
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial, i) => (
                <motion.div 
                  key={i}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover-lift"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -10, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.15)" }}
                >
                  <div className="relative">
                    <img 
                      src={tutorial.image} 
                      alt={tutorial.title}
                      className="w-full h-52 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <Button 
                        variant="default"
                        size="sm"
                        className="gap-2 bg-restaurant-secondary hover:bg-restaurant-secondary/90"
                        onClick={() => openYoutubeVideo(tutorial.youtubeId)}
                      >
                        <PlayCircle className="h-4 w-4" />
                        Assistir tutorial
                      </Button>
                    </div>
                    <div className="absolute top-4 right-4 bg-restaurant-primary/80 text-white text-xs font-medium px-2 py-1 rounded">
                      {tutorial.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-restaurant-primary mb-2">{tutorial.title}</h3>
                    <p className="text-restaurant-muted mb-4">{tutorial.description}</p>
                    
                    <div className="flex items-center text-sm text-restaurant-muted">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="mr-4">{tutorial.duration}</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{tutorial.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredTutorials.length === 0 && (
              <div className="text-center py-20">
                <p className="text-lg text-restaurant-muted">Nenhum tutorial encontrado nesta categoria.</p>
              </div>
            )}
            
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button variant="outline" className="border-restaurant-secondary text-restaurant-secondary hover:bg-restaurant-secondary/10">
                Carregar mais tutoriais
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TutorialsPage;
