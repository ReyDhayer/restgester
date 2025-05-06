
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="pt-28 pb-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-white -z-10"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-restaurant-secondary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-restaurant-accent/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-restaurant-primary mb-6 leading-tight">
              Gerencie seu restaurante com <span className="text-restaurant-secondary">elegância</span> e eficiência
            </h1>
            <p className="text-lg text-restaurant-muted mb-8 max-w-lg">
              Uma solução completa para transformar a gestão do seu restaurante, automatizar processos e aumentar seus lucros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="restaurant" size="xl" className="animate-bounce-subtle">
                Começar agora
              </Button>
              <Button variant="restaurantOutline" size="xl">
                Agendar demonstração
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-2">
                <img 
                  src="https://randomuser.me/api/portraits/women/32.jpg" 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img 
                  src="https://randomuser.me/api/portraits/men/22.jpg" 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <div className="w-10 h-10 rounded-full bg-restaurant-light border-2 border-white flex items-center justify-center text-xs font-medium text-restaurant-primary">
                  +5k
                </div>
              </div>
              <p className="text-sm text-restaurant-muted">
                Confiado por mais de <span className="font-semibold">5.000+</span> restaurantes
              </p>
            </div>
          </div>
          
          <div className="flex-1 relative animate-zoom-in">
            <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Restaurant Management Dashboard" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-lg font-medium">Dashboard Intuitivo</h3>
                  <p className="text-white/80 text-sm">Visualize as principais métricas do seu negócio</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 max-w-[200px] animate-bounce-subtle">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium text-sm">Vendas</span>
              </div>
              <p className="text-xl font-bold text-restaurant-primary">+32%</p>
              <p className="text-xs text-restaurant-muted">comparado ao mês passado</p>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 max-w-[200px] animate-bounce-subtle" style={{animationDelay: '1s'}}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <span className="font-medium text-sm">Clientes</span>
              </div>
              <p className="text-xl font-bold text-restaurant-primary">+156</p>
              <p className="text-xs text-restaurant-muted">novos clientes nesta semana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
