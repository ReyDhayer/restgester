
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const HelpPage = () => {
  const helpCategories = [
    {
      title: "Primeiros Passos",
      icon: "🚀",
      topics: ["Configuração inicial", "Tour pelo sistema", "Importação de dados"]
    },
    {
      title: "Gestão de Reservas",
      icon: "📅",
      topics: ["Criar reservas", "Gerenciar disponibilidade", "Políticas de cancelamento"]
    },
    {
      title: "Controle de Mesas",
      icon: "🍽️",
      topics: ["Mapa de mesas", "Alocação automática", "Rotatividade"]
    },
    {
      title: "Gestão de Estoque",
      icon: "📦",
      topics: ["Cadastro de produtos", "Controle de validade", "Alertas automáticos"]
    },
    {
      title: "Relatórios",
      icon: "📊",
      topics: ["Relatórios diários", "Análise de desempenho", "Exportação de dados"]
    },
    {
      title: "Fidelização",
      icon: "🏆",
      topics: ["Programa de pontos", "Promoções", "Análise de clientes"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 pb-20">
        <section className="py-16 bg-gradient-to-b from-restaurant-secondary/10 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold font-playfair text-restaurant-primary mb-6">
                Como podemos <span className="text-restaurant-secondary">ajudar?</span>
              </h1>
              <p className="text-lg text-restaurant-muted mb-8">
                Encontre respostas para todas as suas dúvidas sobre o RestGester
              </p>
              
              <div className="relative max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Input 
                  type="text" 
                  placeholder="Busque por tópicos como 'reservas', 'mesas', 'estoque'..." 
                  className="pl-12 h-14 rounded-full shadow-md"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-restaurant-muted h-5 w-5" />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-restaurant-secondary hover:bg-restaurant-secondary/90 h-10">
                  Buscar
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold font-playfair text-restaurant-primary mb-10 text-center">
              Explore nossos tópicos de ajuda
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {helpCategories.map((category, i) => (
                <div 
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover-lift animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="text-4xl mb-4 animate-float">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-restaurant-primary mb-4">{category.title}</h3>
                  
                  <ul className="space-y-2">
                    {category.topics.map((topic, j) => (
                      <li key={j}>
                        <a 
                          href="#" 
                          className="text-restaurant-muted hover:text-restaurant-secondary flex items-center" 
                        >
                          <span className="mr-2">→</span>
                          {topic}
                        </a>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="ghost" 
                    className="mt-6 text-restaurant-secondary hover:text-restaurant-secondary/90 hover:bg-restaurant-secondary/10 p-0"
                  >
                    Ver todos os artigos →
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-restaurant-light rounded-xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between animate-fade-in">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h3 className="text-2xl font-bold font-playfair text-restaurant-primary mb-2">Não encontrou o que procura?</h3>
                <p className="text-restaurant-muted">Nossa equipe de suporte está pronta para ajudar com qualquer questão.</p>
              </div>
              <Button className="bg-restaurant-secondary hover:bg-restaurant-secondary/90">
                Contatar suporte
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HelpPage;
