
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Users, Clock, CheckCircle } from "lucide-react";

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 pb-20">
        <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold font-playfair text-restaurant-primary mb-6">
                Suporte <span className="text-restaurant-secondary">RestGester</span>
              </h1>
              <p className="text-lg text-restaurant-muted mb-10">
                Estamos aqui para ajudar você a aproveitar ao máximo nosso sistema de gestão
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MessageSquare className="h-10 w-10 text-restaurant-secondary" />,
                  title: "Chat ao Vivo",
                  description: "Converse com um especialista em tempo real para resolver suas dúvidas."
                },
                {
                  icon: <Users className="h-10 w-10 text-restaurant-secondary" />,
                  title: "Suporte Dedicado",
                  description: "Equipe especializada pronta para auxiliar no seu sucesso."
                },
                {
                  icon: <Clock className="h-10 w-10 text-restaurant-secondary" />,
                  title: "Resposta Rápida",
                  description: "Garantimos resposta em até 24 horas para todos os tickets."
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover-lift animate-fade-in"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-restaurant-primary mb-3">{item.title}</h3>
                  <p className="text-restaurant-muted">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-white rounded-xl shadow-lg border border-gray-100 p-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl font-bold font-playfair text-restaurant-primary mb-6">Entre em contato</h2>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-restaurant-primary mb-1">Nome</label>
                    <Input id="name" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-restaurant-primary mb-1">Email</label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-restaurant-primary mb-1">Assunto</label>
                  <Input id="subject" placeholder="Como podemos ajudar?" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-restaurant-primary mb-1">Mensagem</label>
                  <Textarea id="message" placeholder="Descreva sua dúvida ou problema..." className="min-h-[120px]" />
                </div>
                
                <Button className="bg-restaurant-secondary hover:bg-restaurant-secondary/90 mt-2 w-full md:w-auto">
                  Enviar mensagem
                </Button>
              </form>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold font-playfair text-restaurant-primary mb-4">Perguntas Frequentes</h2>
              <p className="text-restaurant-muted">Respostas rápidas para suas dúvidas mais comuns</p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: "Como instalar o sistema RestGester?",
                  answer: "O RestGester é uma solução baseada em nuvem, você não precisa instalar nada. Basta acessar com seu login e senha em qualquer dispositivo com conexão à internet."
                },
                {
                  question: "Quanto tempo leva para implementar?",
                  answer: "A implementação completa leva em média 1 semana, incluindo treinamento da equipe e importação de dados existentes."
                },
                {
                  question: "O sistema funciona offline?",
                  answer: "O RestGester possui um módulo offline que armazena dados temporariamente e sincroniza automaticamente quando a conexão é restabelecida."
                },
                {
                  question: "Como faço para treinar minha equipe?",
                  answer: "Oferecemos sessões de treinamento online gratuitas como parte do pacote de implementação, além de uma biblioteca completa de tutoriais em vídeo."
                }
              ].map((faq, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-lg p-6 mb-4 shadow-sm hover-lift animate-fade-in"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <h3 className="text-lg font-semibold text-restaurant-primary mb-2 flex items-center">
                    <CheckCircle className="h-5 w-5 text-restaurant-secondary mr-2" />
                    {faq.question}
                  </h3>
                  <p className="text-restaurant-muted pl-7">{faq.answer}</p>
                </div>
              ))}
              
              <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <Button variant="outline" className="border-restaurant-secondary text-restaurant-secondary hover:bg-restaurant-secondary/10">
                  Ver todas as perguntas
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SupportPage;
