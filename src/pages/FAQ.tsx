
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const FAQPage = () => {
  const [openCategory, setOpenCategory] = useState("general");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const handleToggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? "" : category);
    setOpenIndex(null);
  };
  
  const handleToggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqCategories = [
    {
      id: "general",
      title: "Perguntas Gerais",
      questions: [
        {
          q: "O que é o RestGester?",
          a: "O RestGester é um sistema completo de gestão para restaurantes que permite controlar reservas, mesas, estoque, equipe e relacionamento com clientes em uma única plataforma integrada."
        },
        {
          q: "Preciso instalar algum software?",
          a: "Não, o RestGester é uma solução baseada em nuvem que pode ser acessada de qualquer dispositivo com conexão à internet, sem necessidade de instalação."
        },
        {
          q: "O sistema funciona em tablets e celulares?",
          a: "Sim, o RestGester possui design responsivo e aplicativos dedicados para Android e iOS, permitindo acesso e operação completa em smartphones e tablets."
        },
        {
          q: "Como funciona o período de teste?",
          a: "Oferecemos 14 dias de teste gratuito com acesso a todas as funcionalidades. Não é necessário cartão de crédito para começar o teste."
        }
      ]
    },
    {
      id: "pricing",
      title: "Preços e Planos",
      questions: [
        {
          q: "Quais são os planos disponíveis?",
          a: "Oferecemos três planos principais: Básico, Profissional e Enterprise, cada um com diferentes conjuntos de recursos adequados para diferentes tamanhos de estabelecimento."
        },
        {
          q: "Posso mudar de plano depois?",
          a: "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. O valor será ajustado proporcionalmente ao tempo restante da sua assinatura."
        },
        {
          q: "Existe contrato de fidelidade?",
          a: "Não exigimos contratos de longo prazo. Nossos planos são cobrados mensalmente e você pode cancelar a qualquer momento."
        },
        {
          q: "Há descontos para pagamento anual?",
          a: "Sim, oferecemos 20% de desconto para pagamentos anuais em todos os nossos planos."
        }
      ]
    },
    {
      id: "features",
      title: "Funcionalidades",
      questions: [
        {
          q: "Como funciona o controle de reservas?",
          a: "O sistema permite gerenciar reservas online e presenciais, com confirmação automática, lembretes por email/SMS e gerenciamento de filas de espera."
        },
        {
          q: "Como o controle de estoque funciona?",
          a: "O módulo de estoque monitora ingredientes e produtos, atualiza automaticamente os níveis após cada venda, alerta sobre itens próximos do fim e gera relatórios de consumo."
        },
        {
          q: "É possível integrar com sistemas de delivery?",
          a: "Sim, o RestGester oferece integração com os principais aplicativos e plataformas de delivery do mercado."
        },
        {
          q: "O sistema gera relatórios financeiros?",
          a: "Sim, o sistema gera relatórios detalhados de vendas, custos, lucratividade por item, fluxo de caixa e comparativos de desempenho entre períodos."
        }
      ]
    },
    {
      id: "security",
      title: "Segurança e Dados",
      questions: [
        {
          q: "Como meus dados são protegidos?",
          a: "Utilizamos criptografia de ponta a ponta, servidores com certificação ISO 27001 e backups diários automáticos para garantir a segurança dos seus dados."
        },
        {
          q: "Estão em conformidade com a LGPD?",
          a: "Sim, nosso sistema está totalmente em conformidade com a Lei Geral de Proteção de Dados (LGPD) do Brasil e o GDPR europeu."
        },
        {
          q: "Posso exportar meus dados caso decida sair?",
          a: "Sim, oferecemos ferramentas para exportar todos os seus dados em formatos padrão como CSV, Excel ou JSON caso você decida não usar mais o sistema."
        },
        {
          q: "Com que frequência são feitos backups?",
          a: "Realizamos backups incrementais a cada hora e backups completos diariamente, com retenção de 30 dias para garantir a segurança dos seus dados."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 pb-20">
        <section className="py-12 bg-gradient-to-b from-restaurant-primary to-restaurant-primary/90">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold font-playfair text-white mb-6">
                Perguntas Frequentes
              </h1>
              <p className="text-lg text-white/80 mb-10">
                Encontre respostas para as dúvidas mais comuns sobre o RestGester
              </p>
              
              <div className="relative max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Input 
                  type="text" 
                  placeholder="Busque sua dúvida aqui..." 
                  className="pl-12 h-14 rounded-full shadow-md"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category) => (
                <div 
                  key={category.id} 
                  className="mb-8 animate-fade-in border-b pb-6"
                >
                  <button
                    onClick={() => handleToggleCategory(category.id)}
                    className="w-full flex items-center justify-between text-left py-4"
                  >
                    <h2 className="text-2xl font-bold font-playfair text-restaurant-primary">{category.title}</h2>
                    {openCategory === category.id ? 
                      <ChevronUp className="h-6 w-6 text-restaurant-secondary" /> : 
                      <ChevronDown className="h-6 w-6 text-restaurant-secondary" />
                    }
                  </button>
                  
                  {openCategory === category.id && (
                    <div className="mt-4 space-y-4">
                      {category.questions.map((faq, i) => (
                        <div 
                          key={i} 
                          className="bg-white rounded-lg border border-gray-200 shadow-sm animate-fade-in"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          <button
                            onClick={() => handleToggleQuestion(i)}
                            className="w-full flex items-center justify-between text-left p-4 hover:bg-gray-50"
                          >
                            <h3 className="font-medium text-restaurant-primary">{faq.q}</h3>
                            {openIndex === i ? 
                              <ChevronUp className="h-5 w-5 text-restaurant-secondary" /> : 
                              <ChevronDown className="h-5 w-5 text-restaurant-secondary" />
                            }
                          </button>
                          
                          {openIndex === i && (
                            <div className="p-4 pt-0 text-restaurant-muted animate-fade-in">
                              <p className="border-t pt-4">{faq.a}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="max-w-4xl mx-auto mt-16 bg-restaurant-light rounded-xl p-8 text-center animate-fade-in">
              <h3 className="text-2xl font-bold font-playfair text-restaurant-primary mb-4">Não encontrou o que procurava?</h3>
              <p className="text-restaurant-muted mb-6">Nossa equipe de suporte está pronta para responder qualquer pergunta</p>
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

export default FAQPage;
