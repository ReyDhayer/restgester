
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";

const StatusPage = () => {
  const services = [
    {
      name: "API Principal",
      status: "operational",
      uptime: "99.98%",
      lastIncident: "Nenhum nos últimos 90 dias"
    },
    {
      name: "Serviço de Reservas",
      status: "operational",
      uptime: "99.95%",
      lastIncident: "23 Mar 2024"
    },
    {
      name: "Dashboard Admin",
      status: "operational",
      uptime: "99.99%",
      lastIncident: "Nenhum nos últimos 90 dias"
    },
    {
      name: "Serviço de Autenticação",
      status: "operational",
      uptime: "100%",
      lastIncident: "Nenhum nos últimos 90 dias"
    },
    {
      name: "Armazenamento de Dados",
      status: "operational",
      uptime: "99.97%",
      lastIncident: "15 Feb 2024"
    },
    {
      name: "Integração com Delivery",
      status: "partial",
      uptime: "98.50%",
      lastIncident: "Hoje"
    }
  ];

  const incidents = [
    {
      date: "25 Abr 2024",
      title: "Lentidão na integração com serviços de delivery",
      status: "investigating",
      messages: [
        { time: "08:30", content: "Estamos investigando relatos de lentidão nas integrações com aplicativos de delivery." },
        { time: "09:15", content: "Identificamos o problema em um de nossos servidores de API. Nossa equipe está trabalhando na solução." },
        { time: "09:45", content: "Implementamos uma correção temporária. O serviço está funcionando com capacidade parcial enquanto finalizamos a solução definitiva." }
      ]
    },
    {
      date: "23 Mar 2024",
      title: "Interrupção temporária do serviço de reservas",
      status: "resolved",
      messages: [
        { time: "14:22", content: "Detectamos uma interrupção no serviço de reservas." },
        { time: "14:45", content: "Nossa equipe identificou um problema durante uma atualização de banco de dados." },
        { time: "15:30", content: "O serviço foi restaurado e está funcionando normalmente. Pedimos desculpas pelo inconveniente." }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "partial":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-red-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "operational":
        return "Operacional";
      case "partial":
        return "Degradação Parcial";
      case "down":
        return "Interrupção";
      default:
        return status;
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "operational":
        return "bg-green-100 text-green-800";
      case "partial":
        return "bg-yellow-100 text-yellow-800";
      case "down":
        return "bg-red-100 text-red-800";
      case "investigating":
        return "bg-blue-100 text-blue-800";
      case "resolved":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 pb-20">
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto animate-fade-in">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <h1 className="text-4xl font-bold font-playfair text-restaurant-primary mb-2">
                    Status dos Serviços
                  </h1>
                  <p className="text-restaurant-muted">
                    Última atualização: {new Date().toLocaleString('pt-BR')}
                  </p>
                </div>
                
                <div className="mt-4 md:mt-0 flex items-center p-3 rounded-lg bg-green-50 animate-pulse-soft">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                  <span className="font-medium text-green-700">Todos os sistemas operacionais</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {services.map((service, i) => (
                  <div 
                    key={i} 
                    className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover-lift animate-fade-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-restaurant-primary">{service.name}</h3>
                      {getStatusIcon(service.status)}
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-restaurant-muted">Status:</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(service.status)}`}>
                          {getStatusText(service.status)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-restaurant-muted">Uptime:</span>
                        <span className="font-medium">{service.uptime}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-restaurant-muted">Último incidente:</span>
                        <span className="text-sm">{service.lastIncident}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold font-playfair text-restaurant-primary mb-6">
                  Incidentes Recentes
                </h2>
                
                {incidents.length > 0 ? (
                  <div className="space-y-6">
                    {incidents.map((incident, i) => (
                      <div 
                        key={i} 
                        className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden animate-fade-in"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      >
                        <div className="p-6 border-b border-gray-100">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                            <div>
                              <div className="text-sm text-restaurant-muted mb-1">{incident.date}</div>
                              <h3 className="text-lg font-semibold text-restaurant-primary">{incident.title}</h3>
                            </div>
                            
                            <div className="mt-2 md:mt-0">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(incident.status)}`}>
                                {incident.status === "resolved" ? "Resolvido" : "Investigando"}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-4">
                          <h4 className="text-sm font-medium text-restaurant-primary mb-2">Atualizações:</h4>
                          <div className="space-y-3">
                            {incident.messages.map((message, j) => (
                              <div key={j} className="flex">
                                <div className="text-xs font-medium text-restaurant-muted w-16">{message.time}</div>
                                <div className="text-sm ml-2 flex-1">{message.content}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-xl animate-fade-in">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-restaurant-primary mb-2">Nenhum incidente recente</h3>
                    <p className="text-restaurant-muted">Todos os sistemas estão funcionando normalmente</p>
                  </div>
                )}
              </div>
              
              <div className="bg-restaurant-light rounded-xl p-6 animate-fade-in">
                <h2 className="text-xl font-semibold text-restaurant-primary mb-4">Inscreva-se para notificações de status</h2>
                <p className="text-restaurant-muted mb-4">Receba atualizações por email quando houver interrupções nos serviços.</p>
                
                <form className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Seu email" 
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-restaurant-secondary"
                  />
                  <button className="bg-restaurant-secondary hover:bg-restaurant-secondary/90 text-white font-medium px-6 py-2 rounded-lg transition-colors">
                    Inscrever-se
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StatusPage;
