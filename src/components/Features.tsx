
import { Calendar, Star, Settings, Users, Home } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Calendar className="h-6 w-6 text-restaurant-secondary" />,
      title: "Gestão de Reservas",
      description: "Organize e controle todas as reservas do seu restaurante em um só lugar, evitando conflitos e maximizando o uso das mesas."
    },
    {
      icon: <Home className="h-6 w-6 text-restaurant-secondary" />,
      title: "Controle de Mesas",
      description: "Visualize em tempo real a ocupação do seu restaurante, com status de cada mesa e tempo de permanência dos clientes."
    },
    {
      icon: <Settings className="h-6 w-6 text-restaurant-secondary" />,
      title: "Gestão de Estoque",
      description: "Controle automático de estoque, com alertas de produtos próximos do fim e relatórios de consumo por período."
    },
    {
      icon: <Users className="h-6 w-6 text-restaurant-secondary" />,
      title: "Gerenciamento de Equipe",
      description: "Organize escalas, gerencie funções e monitore o desempenho da sua equipe com dados precisos."
    },
    {
      icon: <Star className="h-6 w-6 text-restaurant-secondary" />,
      title: "Fidelização de Clientes",
      description: "Crie programas de fidelidade, colete avaliações e mantenha um histórico completo de preferências dos clientes."
    }
  ];

  return (
    <section id="features" className="py-20 bg-restaurant-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-restaurant-primary mb-4">
            Recursos Completos para o seu Restaurante
          </h2>
          <p className="text-lg text-restaurant-muted">
            Nossa plataforma foi desenvolvida por especialistas em gastronomia para oferecer todas as ferramentas que seu restaurante precisa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-restaurant-secondary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-restaurant-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-restaurant-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
