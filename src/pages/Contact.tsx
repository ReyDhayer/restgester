
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 pb-20">
        <section className="py-12 bg-gradient-to-b from-restaurant-light to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold font-playfair text-restaurant-primary mb-6">
                Entre em <span className="text-restaurant-secondary">Contato</span>
              </h1>
              <p className="text-lg text-restaurant-muted mb-6">
                Estamos aqui para responder suas perguntas e ajudar você a aproveitar ao máximo o RestGester
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-1/3 order-2 lg:order-1">
                <div className="sticky top-32">
                  <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 mb-8 animate-fade-in">
                    <h2 className="text-xl font-semibold text-restaurant-primary mb-6 flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-restaurant-secondary" />
                      Onde estamos
                    </h2>
                    
                    <div className="space-y-4 text-restaurant-muted">
                      <p>
                        <strong>Escritório Sede:</strong><br />
                        Av. Paulista, 1000<br />
                        São Paulo - SP, 01310-000
                      </p>
                      
                      <p>
                        <strong>Escritório Rio de Janeiro:</strong><br />
                        Av. Rio Branco, 500<br />
                        Rio de Janeiro - RJ, 20040-002
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <h2 className="text-xl font-semibold text-restaurant-primary mb-6 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-restaurant-secondary" />
                      Horário de atendimento
                    </h2>
                    
                    <div className="space-y-3 text-restaurant-muted">
                      <div className="flex justify-between">
                        <span>Segunda - Sexta</span>
                        <span>8:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábado</span>
                        <span>9:00 - 15:00</span>
                      </div>
                      <div className="flex justify-between text-restaurant-primary font-medium">
                        <span>Domingo</span>
                        <span>Fechado</span>
                      </div>
                      
                      <hr className="my-4" />
                      
                      <div>
                        <div className="flex items-center mb-2">
                          <Phone className="h-5 w-5 mr-2 text-restaurant-secondary" />
                          <span className="font-medium text-restaurant-primary">Telefone:</span>
                        </div>
                        <p>0800 123 4567</p>
                        <p>+55 (11) 3456-7890</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-2">
                          <Mail className="h-5 w-5 mr-2 text-restaurant-secondary" />
                          <span className="font-medium text-restaurant-primary">Email:</span>
                        </div>
                        <p>contato@restgester.com</p>
                        <p>suporte@restgester.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-2/3 order-1 lg:order-2">
                <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 mb-8 animate-fade-in">
                  <h2 className="text-2xl font-semibold font-playfair text-restaurant-primary mb-6">Envie-nos uma mensagem</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-restaurant-primary mb-2">Nome completo</label>
                        <Input id="name" placeholder="Seu nome" />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-restaurant-primary mb-2">Email</label>
                        <Input id="email" type="email" placeholder="seu@email.com" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-restaurant-primary mb-2">Telefone</label>
                        <Input id="phone" placeholder="(00) 00000-0000" />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-restaurant-primary mb-2">Assunto</label>
                        <Input id="subject" placeholder="Como podemos ajudar?" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-restaurant-primary mb-2">Mensagem</label>
                      <Textarea id="message" placeholder="Escreva sua mensagem aqui..." className="min-h-[150px]" />
                    </div>
                    
                    <Button className="bg-restaurant-secondary hover:bg-restaurant-secondary/90 w-full md:w-auto">
                      Enviar mensagem
                    </Button>
                  </form>
                </div>
                
                <div className="rounded-xl overflow-hidden h-[400px] shadow-md animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098371235959!2d-46.65683042512519!3d-23.56509186691936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1682086055339!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
