
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight, Clock } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");
  
  const featuredPost = {
    id: "1",
    title: "Como aumentar as vendas do seu restaurante em 30% usando o RestGester",
    excerpt: "Descubra as estratégias comprovadas que ajudaram centenas de restaurantes a aumentar seu faturamento com automação e análise de dados.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    author: "Ana Silva",
    date: "15 Abr 2024",
    category: "Gestão",
    readTime: "8 min",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl quis nisl. Nulla facilisi. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl quis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl quis nisl. Nulla facilisi. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl quis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl quis nisl. Nulla facilisi. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl quis nisl."
  };
  
  const posts = [
    {
      id: "2",
      title: "7 dicas para reduzir o desperdício de alimentos no seu restaurante",
      excerpt: "Aprenda estratégias práticas para controlar seu estoque e reduzir custos desnecessários.",
      image: "https://images.unsplash.com/photo-1488992783499-418eb1f62d08?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      author: "Carlos Mendes",
      date: "10 Abr 2024",
      category: "Sustentabilidade",
      readTime: "5 min",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl quis nisl. Nulla facilisi. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl quis nisl."
    },
    {
      id: "3",
      title: "Como criar um programa de fidelidade eficiente para seu restaurante",
      excerpt: "Fidelizar clientes é mais barato que conquistar novos. Veja como criar um programa que funciona.",
      image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      author: "Juliana Alves",
      date: "5 Abr 2024",
      category: "Marketing",
      readTime: "6 min",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl quis nisl. Nulla facilisi. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl quis nisl."
    },
    {
      id: "4",
      title: "Tendências gastronômicas para ficar de olho em 2024",
      excerpt: "Descubra as tendências que estão moldando o setor de restaurantes este ano.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      author: "Ricardo Torres",
      date: "28 Mar 2024",
      category: "Tendências",
      readTime: "7 min",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl quis nisl. Nulla facilisi. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl quis nisl."
    },
    {
      id: "5",
      title: "Como gerenciar sua equipe com eficiência usando o RestGester",
      excerpt: "Aprenda a escalar turnos, monitorar desempenho e motivar sua equipe através do sistema.",
      image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      author: "Fernanda Costa",
      date: "20 Mar 2024",
      category: "Gestão de Equipes",
      readTime: "9 min",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl quis nisl. Nulla facilisi. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl quis nisl."
    },
    {
      id: "6",
      title: "5 estratégias para otimizar suas reservas e maximizar a ocupação",
      excerpt: "Descubra como utilizar o sistema de reservas para evitar no-shows e maximizar a ocupação das mesas.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      author: "Paulo Mendonça",
      date: "15 Mar 2024",
      category: "Operações",
      readTime: "6 min",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl quis nisl. Nulla facilisi. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl quis nisl."
    },
    {
      id: "7",
      title: "Como interpretar relatórios financeiros do seu restaurante",
      excerpt: "Entenda quais métricas são mais importantes e como analisá-las para tomar decisões baseadas em dados.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      author: "Mariana Santos",
      date: "8 Mar 2024",
      category: "Finanças",
      readTime: "8 min",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl quis nisl. Nulla facilisi. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl quis nisl."
    }
  ];
  
  const allPosts = [featuredPost, ...posts];
  
  // Get unique categories
  const allCategories = ["Todos", ...Array.from(new Set(allPosts.map(post => post.category)))];
  
  // Filter posts based on category and search query
  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === "Todos" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.category.toLowerCase().includes(searchQuery.toLowerCase());
                          
    return matchesCategory && (searchQuery === "" || matchesSearch);
  });

  // Featured post should always be visible unless filtered by category or search
  const showFeaturedPost = (activeCategory === "Todos" || featuredPost.category === activeCategory) && 
                          (searchQuery === "" || 
                           featuredPost.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           featuredPost.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           featuredPost.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           featuredPost.category.toLowerCase().includes(searchQuery.toLowerCase()));
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the filter
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 pb-20">
        <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold font-playfair text-restaurant-primary mb-6">
                Blog <span className="text-restaurant-secondary">RestGester</span>
              </h1>
              <p className="text-lg text-restaurant-muted">
                Dicas, tendências e estratégias para transformar a gestão do seu restaurante
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-2 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {allCategories.map((category, i) => (
                <Button 
                  key={i} 
                  variant={category === activeCategory ? "default" : "outline"}
                  className={`rounded-full ${category === activeCategory ? 'bg-restaurant-secondary hover:bg-restaurant-secondary/90' : ''}`}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </motion.div>
            
            <motion.form 
              className="relative max-w-xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onSubmit={handleSearch}
            >
              <Input 
                type="text" 
                placeholder="Buscar artigos..." 
                className="pl-12 py-6 rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </motion.form>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            {/* Featured Post */}
            {showFeaturedPost && (
              <motion.div 
                className="mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover-lift">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="h-64 lg:h-auto relative">
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4";
                        }}
                      />
                      <div className="absolute top-4 left-4 bg-restaurant-secondary text-white text-sm font-medium px-3 py-1 rounded-full">
                        Em destaque
                      </div>
                    </div>
                    
                    <div className="p-8 lg:p-10 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-3">
                          <span className="bg-restaurant-light text-restaurant-primary text-xs font-medium px-2 py-1 rounded">
                            {featuredPost.category}
                          </span>
                          <span className="text-restaurant-muted text-sm flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {featuredPost.readTime}
                          </span>
                        </div>
                        
                        <h2 className="text-2xl lg:text-3xl font-bold font-playfair text-restaurant-primary mb-4">
                          {featuredPost.title}
                        </h2>
                        
                        <p className="text-restaurant-muted mb-6">
                          {featuredPost.excerpt}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                            <User className="h-5 w-5 text-gray-500" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-restaurant-primary">{featuredPost.author}</p>
                            <p className="text-xs text-restaurant-muted flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {featuredPost.date}
                            </p>
                          </div>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          className="text-restaurant-secondary hover:text-restaurant-secondary/90 hover:bg-restaurant-secondary/10 p-0"
                          onClick={() => navigate(`/blog/${featuredPost.id}`)}
                        >
                          Ler mais <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Regular Posts */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, i) => (
                  <motion.div 
                    key={post.id} 
                    className="bg-white rounded-xl overflow-hidden shadow-md hover-lift"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    whileHover={{ y: -10, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.15)" }}
                    onClick={() => navigate(`/blog/${post.id}`)}
                  >
                    <div className="h-48 relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4";
                        }}
                      />
                      <div className="absolute top-4 left-4 bg-restaurant-light text-restaurant-primary text-xs font-medium px-2 py-1 rounded">
                        {post.category}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold font-playfair text-restaurant-primary mb-3 line-clamp-2 cursor-pointer hover:text-restaurant-secondary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-restaurant-muted mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                            <User className="h-4 w-4 text-gray-500" />
                          </div>
                          <div>
                            <p className="text-xs font-medium text-restaurant-primary">{post.author}</p>
                            <p className="text-xs text-restaurant-muted">
                              {post.date}
                            </p>
                          </div>
                        </div>
                        
                        <span className="text-xs text-restaurant-muted">
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-restaurant-muted">Nenhum artigo encontrado.</p>
                <Button 
                  variant="outline" 
                  className="mt-4 border-restaurant-secondary text-restaurant-secondary hover:bg-restaurant-secondary/10"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("Todos");
                  }}
                >
                  Limpar filtros
                </Button>
              </div>
            )}
            
            {filteredPosts.length > 0 && (
              <motion.div 
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Button variant="outline" className="border-restaurant-secondary text-restaurant-secondary hover:bg-restaurant-secondary/10">
                  Carregar mais artigos
                </Button>
              </motion.div>
            )}
          </div>
        </section>
        
        <section className="py-16 bg-restaurant-light">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold font-playfair text-restaurant-primary mb-6">
                Inscreva-se na nossa newsletter
              </h2>
              <p className="text-restaurant-muted mb-8">
                Receba dicas, tutoriais e notícias diretamente na sua caixa de entrada
              </p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Input 
                  type="email" 
                  placeholder="Seu melhor email" 
                  className="flex-1"
                />
                <Button className="bg-restaurant-secondary hover:bg-restaurant-secondary/90">
                  Inscrever-se
                </Button>
              </motion.div>
              
              <p className="text-xs text-restaurant-muted mt-4">
                Ao se inscrever, você concorda com nossa Política de Privacidade.
                Nunca enviaremos spam!
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
