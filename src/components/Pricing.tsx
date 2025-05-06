
import { Button } from "./ui/button";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    name: string;
    price: string;
    period: string;
  };
}

const CheckoutModal = ({ isOpen, onClose, plan }: CheckoutModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleConfirmSubscription = () => {
    setIsLoading(true);
    // Simular processamento do pagamento
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = 'https://sistemasgestaoestoque.netlify.app/dashboard';
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white rounded-xl p-6 max-w-md w-full mx-4"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-restaurant-primary">Checkout</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Plano selecionado:</h4>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-xl font-bold text-restaurant-primary">{plan.name}</p>
            <p className="text-restaurant-secondary text-2xl font-bold mt-2">
              {plan.price}<span className="text-sm text-gray-500">{plan.period}</span>
            </p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome no cartão</label>
            <input type="text" className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Número do cartão</label>
            <input type="text" className="w-full p-2 border rounded-md" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Validade</label>
              <input type="text" placeholder="MM/AA" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
          </div>
        </div>

        <Button 
          variant="default" 
          className="w-full bg-restaurant-secondary hover:bg-restaurant-secondary/90"
          onClick={handleConfirmSubscription}
          disabled={isLoading}
        >
          {isLoading ? "Processando..." : "Confirmar assinatura"}
        </Button>

        <p className="text-sm text-gray-500 text-center mt-4">
          Você terá acesso imediato ao sistema após a confirmação do pagamento
        </p>
      </motion.div>
    </div>
  );
};

export const Pricing = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handlePlanSelect = (plan: typeof plans[0]) => {
 
    if (!localStorage.getItem("currentUser")) {
      navigate("/login");
      return;
    }
    setSelectedPlan(plan);
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
    setSelectedPlan(null);
  };
  const plans = [
    {
      name: "Básico",
      price: "R$149",
      period: "/mês",
      description: "Ideal para pequenos restaurantes",
      features: [
        "Gestão de reservas",
        "Controle de mesas",
        "Cadastro de clientes",
        "Até 3 usuários",
        "Suporte básico"
      ],
      isFeatured: false,
      buttonText: "Começar agora"
    },
    {
      name: "Profissional",
      price: "R$299",
      period: "/mês",
      description: "Perfeito para restaurantes em crescimento",
      features: [
        "Todas as funcionalidades do Básico",
        "Gestão de estoque",
        "Controle financeiro",
        "Programa de fidelidade",
        "Até 10 usuários",
        "Suporte prioritário"
      ],
      isFeatured: true,
      buttonText: "Experimente grátis"
    },
    {
      name: "Enterprise",
      price: "R$599",
      period: "/mês",
      description: "Para redes de restaurantes",
      features: [
        "Todas as funcionalidades do Profissional",
        "Múltiplas unidades",
        "Relatórios avançados",
        "API para integrações",
        "Usuários ilimitados",
        "Suporte 24/7"
      ],
      isFeatured: false,
      buttonText: "Fale com vendas"
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-restaurant-primary mb-4">
            Planos que se adaptam ao seu negócio
          </h2>
          <p className="text-lg text-restaurant-muted">
            Escolha o plano perfeito para as necessidades do seu restaurante. Todos incluem acesso às atualizações.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              className={`rounded-xl p-6 ${
                plan.isFeatured 
                  ? "bg-restaurant-secondary text-white shadow-lg shadow-restaurant-secondary/20 border-2 border-restaurant-secondary/50" 
                  : "bg-white text-restaurant-primary shadow-md border border-gray-200"
              } transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ 
                y: -10,
                boxShadow: plan.isFeatured 
                  ? "0 20px 30px -10px rgba(0, 0, 0, 0.2)" 
                  : "0 15px 25px -10px rgba(0, 0, 0, 0.1)" 
              }}
            >
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.isFeatured ? "text-white" : "text-restaurant-primary"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`${plan.isFeatured ? "text-white/80" : "text-restaurant-muted"}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mt-2 ${plan.isFeatured ? "text-white/80" : "text-restaurant-muted"}`}>
                  {plan.description}
                </p>
                {plan.isFeatured && (
                  <motion.span 
                    className="inline-block mt-3 bg-white text-restaurant-secondary text-xs font-semibold px-3 py-1 rounded-full"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: [0.8, 1.05, 1] }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Mais popular
                  </motion.span>
                )}
              </div>
              
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                  >
                    <Check 
                      className={`h-5 w-5 mr-2 flex-shrink-0 ${
                        plan.isFeatured ? "text-white" : "text-restaurant-secondary"
                      }`} 
                    />
                    <span className={plan.isFeatured ? "text-white/90" : "text-restaurant-muted"}>
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant={plan.isFeatured ? "default" : "restaurantOutline"} 
                  className={`w-full ${
                    plan.isFeatured 
                      ? "bg-white text-restaurant-secondary hover:bg-gray-50" 
                      : ""
                  }`}
                  onClick={() => handlePlanSelect(plan)}
                >
                  {plan.buttonText}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center text-restaurant-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p>
            Todos os planos incluem 14 dias de teste gratuito. Não é necessário cartão de crédito.
          </p>
        </motion.div>
      </div>

      {selectedPlan && (
        <CheckoutModal 
          isOpen={isCheckoutOpen}
          onClose={handleCloseCheckout}
          plan={selectedPlan}
        />
      )}
    </section>
  );
};
