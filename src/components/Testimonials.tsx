
export const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Beatriz",
      role: "Proprietária, Restaurante Sabor & Arte",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      content: "O sistema Saboroso revolucionou a gestão do nosso restaurante. As reservas nunca estiveram tão organizadas e o controle de estoque nos ajudou a reduzir o desperdício em mais de 30%."
    },
    {
      name: "Carlos Eduardo",
      role: "Chef Executivo, Bistrô Elegance",
      image: "https://randomuser.me/api/portraits/men/43.jpg",
      content: "Como chef, sempre tive dificuldade com o lado administrativo. O Saboroso tornou isso simples e intuitivo, permitindo que eu foque no que realmente importa: criar experiências gastronômicas incríveis."
    },
    {
      name: "Mariana Silva",
      role: "Gerente, Cantina Famiglia",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      content: "O módulo de gestão de equipe é simplesmente perfeito. Consigo organizar as escalas sem conflitos e tenho uma visão clara do desempenho de cada colaborador."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-restaurant-light to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-restaurant-primary mb-4">
            Veja o que nossos clientes dizem
          </h2>
          <p className="text-lg text-restaurant-muted">
            Restaurantes de todos os tamanhos estão transformando seus negócios com nossa plataforma.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-restaurant-primary">{testimonial.name}</h4>
                  <p className="text-sm text-restaurant-muted">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="italic text-restaurant-muted">{testimonial.content}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 bg-restaurant-light rounded-full px-6 py-2 animate-bounce-subtle">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-restaurant-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-restaurant-secondary"></span>
            </span>
            <span className="text-sm font-medium text-restaurant-primary">
              +350 reviews de clientes satisfeitos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
