
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample blog posts data (in a real app, this would come from an API)
  const allPosts: BlogPost[] = [
    {
      id: "1",
      title: "Como aumentar as vendas do seu restaurante em 30% usando o RestGester",
      excerpt: "Descubra as estratégias comprovadas que ajudaram centenas de restaurantes a aumentar seu faturamento com automação e análise de dados.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      author: "Ana Silva",
      date: "15 Abr 2024",
      category: "Gestão",
      readTime: "8 min",
      content: `
        <h2>Otimizando a Experiência do Cliente com Tecnologia</h2>
        
        <p>No competitivo mercado de restaurantes atual, oferecer apenas boa comida já não é suficiente. Os clientes esperam uma experiência completa, desde o momento em que fazem uma reserva até o pagamento da conta. É aqui que o RestGester se destaca como uma ferramenta transformadora.</p>
        
        <p>A implementação de um sistema integrado de gestão permite que seu restaurante colete dados valiosos sobre as preferências dos clientes, otimize o tempo de atendimento e crie experiências personalizadas que incentivam o retorno.</p>
        
        <h2>Gestão de Estoque Inteligente</h2>
        
        <p>Um dos maiores desafios de qualquer restaurante é o controle preciso do estoque. Com o RestGester, nossos clientes relatam uma redução média de 15% nos custos de insumos através do monitoramento em tempo real dos estoques e previsões de demanda baseadas em dados históricos.</p>
        
        <p>O sistema alerta automaticamente quando os itens estão próximos do ponto de reposição e sugere quantidades ideais de compra, considerando sazonalidades e eventos especiais.</p>
        
        <h2>Fidelização Através de Dados</h2>
        
        <p>Conquistar um novo cliente pode custar cinco vezes mais do que manter um atual. O módulo de CRM do RestGester permite criar programas de fidelidade eficazes, identificar clientes frequentes e suas preferências, além de segmentar campanhas de marketing direcionadas.</p>
        
        <p>Restaurantes que implementaram nossas estratégias de fidelização viram um aumento médio de 22% na frequência de retorno dos clientes em apenas três meses.</p>
        
        <h2>Conclusão</h2>
        
        <p>A transformação digital no setor de restaurantes não é apenas uma tendência, mas uma necessidade competitiva. O RestGester oferece as ferramentas necessárias para que seu estabelecimento não apenas sobreviva, mas prospere neste novo cenário.</p>
        
        <p>Entre em contato conosco hoje mesmo para uma demonstração personalizada e descubra como podemos ajudar seu restaurante a alcançar todo o seu potencial.</p>
      `
    },
    {
      id: "2",
      title: "7 dicas para reduzir o desperdício de alimentos no seu restaurante",
      excerpt: "Aprenda estratégias práticas para controlar seu estoque e reduzir custos desnecessários.",
      image: "https://images.unsplash.com/photo-1488992783499-418eb1f62d08?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      author: "Carlos Mendes",
      date: "10 Abr 2024",
      category: "Sustentabilidade",
      readTime: "5 min",
      content: `
        <h2>Introdução</h2>
        <p>O desperdício de alimentos é um dos maiores desafios enfrentados pelo setor de restaurantes. Além do impacto ambiental negativo, ele representa uma significativa perda financeira. Estudos mostram que restaurantes podem perder até 10% de sua receita devido ao desperdício de alimentos.</p>
        
        <h2>1. Implemente um sistema de inventário eficiente</h2>
        <p>Utilize o RestGester para monitorar seu estoque em tempo real. Nosso sistema permite controlar os prazos de validade e gerar alertas automáticos quando produtos estão próximos de vencer, permitindo que você planeje seu menu de forma a utilizar esses ingredientes prioritariamente.</p>
        
        <h2>2. Adote o método FIFO (First In, First Out)</h2>
        <p>Organize sua despensa e refrigeradores de forma que os produtos mais antigos sejam utilizados primeiro. Isso parece óbvio, mas muitos restaurantes negligenciam esta prática simples e acabam descartando alimentos que poderiam ter sido aproveitados.</p>
        
        <h2>3. Análise de dados para previsão de demanda</h2>
        <p>O RestGester utiliza inteligência artificial para analisar o histórico de vendas e prever com maior precisão a demanda futura. Isso permite que você faça pedidos mais precisos e reduza o excesso de estoque.</p>
        
        <h2>4. Treine sua equipe</h2>
        <p>Invista em treinamento para sua equipe sobre técnicas de armazenamento correto e preparo que maximizem o aproveitamento dos ingredientes.</p>
        
        <h2>5. Revise o tamanho das porções</h2>
        <p>Analise o retorno dos pratos e identifique quais costumam voltar com sobras significativas. Considere ajustar o tamanho das porções ou oferecer opções de tamanhos diferentes.</p>
        
        <h2>6. Crie um menu circular</h2>
        <p>Desenvolva receitas que permitam reutilizar sobras de ingredientes de forma criativa em novos pratos. Por exemplo, pães do dia anterior podem se transformar em croutons para saladas ou farinha de rosca para empanados.</p>
        
        <h2>7. Estabeleça parcerias com ONGs</h2>
        <p>Para alimentos que não foram servidos mas ainda estão em condições de consumo, considere estabelecer parcerias com organizações que redistribuem alimentos para pessoas em situação de vulnerabilidade.</p>
        
        <h2>Conclusão</h2>
        <p>Implementar estas estratégias pode parecer trabalhoso inicialmente, mas os benefícios são significativos tanto para seu negócio quanto para o meio ambiente. O RestGester pode ser seu aliado nessa jornada, fornecendo as ferramentas necessárias para uma gestão eficiente que minimize o desperdício e maximize seus lucros.</p>
      `
    },
    // Add data for the rest of the blog posts
    {
      id: "3",
      title: "Como criar um programa de fidelidade eficiente para seu restaurante",
      excerpt: "Fidelizar clientes é mais barato que conquistar novos. Veja como criar um programa que funciona.",
      image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      author: "Juliana Alves",
      date: "5 Abr 2024",
      category: "Marketing",
      readTime: "6 min",
      content: `
        <h2>A Importância da Fidelização de Clientes no Setor Gastronômico</h2>
        
        <p>Em um mercado cada vez mais competitivo, a fidelização de clientes tornou-se uma estratégia fundamental para o sucesso de qualquer restaurante. Dados recentes mostram que aumentar a retenção de clientes em apenas 5% pode elevar os lucros em até 95%.</p>
        
        <h2>Entendendo o Comportamento do Cliente</h2>
        
        <p>O primeiro passo para criar um programa de fidelidade eficaz é compreender profundamente o comportamento dos seus clientes. O RestGester oferece ferramentas analíticas avançadas que permitem:</p>
        
        <ul>
          <li>Identificar padrões de consumo</li>
          <li>Analisar frequência de visitas</li>
          <li>Mapear preferências gastronômicas</li>
          <li>Avaliar ticket médio por cliente</li>
        </ul>
        
        <h2>Estratégias Comprovadas de Fidelização</h2>
        
        <p>Com base em nossa experiência com milhares de restaurantes, identificamos as estratégias mais eficazes para fidelização:</p>
        
        <h3>1. Sistema de Pontos Inteligente</h3>
        <p>Implemente um sistema onde os clientes acumulam pontos baseados não apenas no valor gasto, mas também na frequência de visitas e recomendações. Nossos dados mostram que programas de pontos bem estruturados aumentam a frequência de visitas em até 35%.</p>
        
        <h3>2. Benefícios Exclusivos</h3>
        <p>Ofereça vantagens únicas para membros do programa, como:</p>
        <ul>
          <li>Reservas prioritárias</li>
          <li>Degustações exclusivas</li>
          <li>Acesso antecipado a novos pratos</li>
          <li>Eventos especiais com o chef</li>
        </ul>
        
        <h3>3. Personalização da Experiência</h3>
        <p>Utilize os dados coletados para criar experiências personalizadas. Por exemplo, ofereça promoções especiais no aniversário do cliente ou sugira pratos baseados em preferências anteriores.</p>
        
        <h2>Implementação e Monitoramento</h2>
        
        <p>O sucesso de um programa de fidelidade depende de uma implementação cuidadosa e monitoramento constante. O RestGester fornece dashboards em tempo real para acompanhar:</p>
        
        <ul>
          <li>Taxa de adesão ao programa</li>
          <li>Engajamento dos membros</li>
          <li>ROI das campanhas</li>
          <li>Feedback dos participantes</li>
        </ul>
        
        <h2>Casos de Sucesso</h2>
        
        <p>O Restaurante Bella Vita, após implementar nosso programa de fidelidade, registrou:</p>
        <ul>
          <li>Aumento de 40% na frequência de visitas dos clientes cadastrados</li>
          <li>Crescimento de 25% no ticket médio</li>
          <li>Redução de 30% no custo de aquisição de novos clientes</li>
        </ul>
        
        <h2>Conclusão</h2>
        
        <p>Um programa de fidelidade bem estruturado é um investimento que traz retornos significativos a longo prazo. Com as ferramentas certas e uma estratégia bem definida, seu restaurante pode construir uma base sólida de clientes fiéis que não apenas retornam, mas também se tornam embaixadores da sua marca.</p>
        
        <p>Entre em contato com nossa equipe para uma demonstração personalizada de como o RestGester pode ajudar a implementar um programa de fidelidade de sucesso em seu restaurante.</p>
      `
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
      content: `
        <h2>O Futuro da Gastronomia: Tendências que Estão Revolucionando o Setor</h2>
        
        <p>O setor gastronômico está em constante evolução, e estar atento às tendências é fundamental para manter seu restaurante competitivo. Neste artigo, exploraremos as principais tendências que estão moldando o futuro da gastronomia em 2024.</p>
        
        <h2>1. Sustentabilidade e Consciência Ambiental</h2>
        
        <p>A sustentabilidade deixou de ser um diferencial para se tornar uma necessidade. Restaurantes que adotam práticas sustentáveis têm registrado um aumento médio de 25% na preferência dos consumidores. Principais iniciativas:</p>
        
        <ul>
          <li>Ingredientes locais e sazonais</li>
          <li>Embalagens biodegradáveis</li>
          <li>Gestão eficiente de resíduos</li>
          <li>Menu com opções plant-based</li>
        </ul>
        
        <h2>2. Tecnologia e Experiência Digital</h2>
        
        <p>A integração da tecnologia na experiência gastronômica vai além do delivery. Restaurantes que implementaram soluções tecnológicas registraram:</p>
        
        <ul>
          <li>Aumento de 30% na eficiência operacional</li>
          <li>Redução de 20% no tempo de espera</li>
          <li>Crescimento de 40% na satisfação do cliente</li>
        </ul>
        
        <h2>3. Personalização e Experiências Únicas</h2>
        
        <p>Os consumidores buscam cada vez mais experiências personalizadas. O RestGester permite criar perfis detalhados dos clientes, possibilitando:</p>
        
        <ul>
          <li>Recomendações baseadas em preferências</li>
          <li>Menus personalizados para restrições alimentares</li>
          <li>Experiências gastronômicas exclusivas</li>
        </ul>
        
        <h2>4. Gastronomia Funcional e Saudável</h2>
        
        <p>A busca por alimentação saudável continua em ascensão. Restaurantes que incorporaram opções funcionais registraram aumento de 35% nas vendas. Tendências específicas incluem:</p>
        
        <ul>
          <li>Pratos ricos em probióticos</li>
          <li>Opções low-carb e keto-friendly</li>
          <li>Ingredientes adaptogênicos</li>
          <li>Bebidas funcionais</li>
        </ul>
        
        <h2>5. Automação e Eficiência Operacional</h2>
        
        <p>A automação de processos está transformando a gestão de restaurantes. O RestGester oferece soluções que permitem:</p>
        
        <ul>
          <li>Gestão inteligente de estoque</li>
          <li>Previsão de demanda baseada em IA</li>
          <li>Otimização de cardápio</li>
          <li>Análise de rentabilidade em tempo real</li>
        </ul>
        
        <h2>6. Dark Kitchens e Novos Modelos de Negócio</h2>
        
        <p>O mercado de dark kitchens deve crescer 25% em 2024. Benefícios incluem:</p>
        
        <ul>
          <li>Redução de custos operacionais</li>
          <li>Maior alcance geográfico</li>
          <li>Flexibilidade para testar novos conceitos</li>
        </ul>
        
        <h2>7. Experiências Híbridas</h2>
        
        <p>A integração entre experiências presenciais e digitais será fundamental. Restaurantes que adotaram modelos híbridos registraram:</p>
        
        <ul>
          <li>Aumento de 45% no engajamento dos clientes</li>
          <li>Crescimento de 30% nas vendas totais</li>
          <li>Maior fidelização de clientes</li>
        </ul>
        
        <h2>Conclusão</h2>
        
        <p>O setor gastronômico está passando por uma transformação significativa. Restaurantes que se adaptarem a essas tendências estarão melhor posicionados para prosperar no futuro. O RestGester oferece as ferramentas necessárias para implementar essas tendências de forma eficiente e lucrativa.</p>
        
        <p>Agende uma demonstração para descobrir como podemos ajudar seu restaurante a se manter à frente das tendências do mercado.</p>
      `
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
      content: `
        <h2>Maximizando o Potencial da Sua Equipe com o RestGester</h2>
        
        <p>A gestão eficiente de equipes é um dos pilares fundamentais para o sucesso de qualquer restaurante. Com o RestGester, você tem acesso a ferramentas avançadas que transformam a maneira como você gerencia sua equipe.</p>
        
        <h2>Desafios na Gestão de Equipes em Restaurantes</h2>
        
        <p>Pesquisas mostram que restaurantes enfrentam desafios específicos na gestão de pessoas:</p>
        
        <ul>
          <li>Alta rotatividade (média do setor: 75% ao ano)</li>
          <li>Dificuldade no controle de horários</li>
          <li>Comunicação ineficiente entre turnos</li>
          <li>Treinamento inconsistente</li>
        </ul>
        
        <h2>Soluções Integradas do RestGester</h2>
        
        <h3>1. Escala Inteligente de Turnos</h3>
        <p>Nossa ferramenta de escalonamento utiliza IA para:</p>
        <ul>
          <li>Prever demanda por horário e dia</li>
          <li>Otimizar alocação de pessoal</li>
          <li>Reduzir custos com horas extras</li>
          <li>Garantir cobertura adequada em horários de pico</li>
        </ul>
        
        <h3>2. Monitoramento de Desempenho</h3>
        <p>Acompanhe métricas importantes:</p>
        <ul>
          <li>Tempo médio de atendimento</li>
          <li>Satisfação do cliente por garçom</li>
          <li>Vendas por funcionário</li>
          <li>Pontualidade e assiduidade</li>
        </ul>
        
        <h3>3. Programa de Incentivos</h3>
        <p>Implemente sistemas de recompensa baseados em:</p>
        <ul>
          <li>Metas de vendas</li>
          <li>Avaliações positivas de clientes</li>
          <li>Sugestões implementadas</li>
          <li>Tempo de casa</li>
        </ul>
        
        <h2>Caso de Sucesso: Restaurante Sabor & Arte</h2>
        
        <p>Após implementar o sistema de gestão de equipes do RestGester, o restaurante Sabor & Arte alcançou:</p>
        
        <ul>
          <li>Redução de 40% na rotatividade de funcionários</li>
          <li>Economia de 25% em custos com horas extras</li>
          <li>Aumento de 30% na satisfação dos colaboradores</li>
          <li>Melhoria de 35% nas avaliações de atendimento</li>
        </ul>
        
        <h2>Ferramentas de Comunicação e Colaboração</h2>
        
        <p>O RestGester oferece uma plataforma integrada para:</p>
        
        <ul>
          <li>Chat em tempo real entre equipes</li>
          <li>Compartilhamento de documentos e procedimentos</li>
          <li>Registro de ocorrências e soluções</li>
          <li>Feedback instantâneo</li>
        </ul>
        
        <h2>Treinamento e Desenvolvimento</h2>
        
        <p>Nossa plataforma inclui:</p>
        
        <ul>
          <li>Módulos de treinamento online</li>
          <li>Biblioteca de procedimentos padrão</li>
          <li>Avaliações de conhecimento</li>
          <li>Certificações internas</li>
        </ul>
        
        <h2>Análise de Dados e Relatórios</h2>
        
        <p>Tome decisões baseadas em dados com relatórios detalhados sobre:</p>
        
        <ul>
          <li>Produtividade por turno</li>
          <li>Custos de pessoal</li>
          <li>Eficiência operacional</li>
          <li>Tendências de desempenho</li>
        </ul>
        
        <h2>Conclusão</h2>
        
        <p>Uma equipe bem gerenciada é a base de um restaurante de sucesso. O RestGester oferece as ferramentas necessárias para transformar sua gestão de pessoas, aumentar a produtividade e reduzir custos operacionais.</p>
        
        <p>Entre em contato para uma demonstração personalizada e descubra como podemos ajudar a maximizar o potencial da sua equipe.</p>
      `
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
      content: `
        <h2>Otimizando suas Reservas: Estratégias para Maximizar a Ocupação do seu Restaurante</h2>
        
        <p>Em um mercado competitivo, a gestão eficiente de reservas pode ser a diferença entre um restaurante lotado e mesas vazias. Descubra como o RestGester pode ajudar a maximizar sua ocupação e reduzir no-shows.</p>
        
        <h2>O Impacto dos No-Shows</h2>
        
        <p>Estudos mostram que no-shows podem custar até 20% da receita de um restaurante. Entenda os números:</p>
        
        <ul>
          <li>Perda média de receita por no-show: R$ 120,00</li>
          <li>Taxa média de no-shows sem gestão: 15-20%</li>
          <li>Impacto no planejamento de insumos e pessoal</li>
        </ul>
        
        <h2>1. Sistema Inteligente de Reservas</h2>
        
        <p>O RestGester oferece um sistema completo que inclui:</p>
        
        <ul>
          <li>Confirmação automática por WhatsApp/SMS</li>
          <li>Lembretes personalizados</li>
          <li>Lista de espera inteligente</li>
          <li>Histórico detalhado de clientes</li>
        </ul>
        
        <h2>2. Política de Reservas Eficiente</h2>
        
        <p>Implementar políticas claras que reduzem no-shows:</p>
        
        <ul>
          <li>Sistema de pré-autorização de cartão</li>
          <li>Políticas de cancelamento transparentes</li>
          <li>Programa de fidelidade integrado</li>
          <li>Gestão de depósitos para grupos</li>
        </ul>
        
        <h2>3. Otimização de Turnos</h2>
        
        <p>Maximize a ocupação com estratégias inteligentes:</p>
        
        <ul>
          <li>Análise de duração média das refeições</li>
          <li>Definição dinâmica de turnos</li>
          <li>Gestão de mesas flexível</li>
          <li>Previsão de demanda por horário</li>
        </ul>
        
        <h2>4. Experiência do Cliente</h2>
        
        <p>Melhore a experiência de reserva:</p>
        
        <ul>
          <li>Interface intuitiva para reservas online</li>
          <li>Personalização de preferências</li>
          <li>Integração com datas especiais</li>
          <li>Comunicação multicanal</li>
        </ul>
        
        <h2>5. Análise de Dados</h2>
        
        <p>Tome decisões baseadas em dados:</p>
        
        <ul>
          <li>Padrões de reserva por dia/horário</li>
          <li>Taxa de ocupação por mesa</li>
          <li>Perfil de consumo por reserva</li>
          <li>ROI por canal de reserva</li>
        </ul>
        
        <h2>Caso de Sucesso: Restaurante Marina Bay</h2>
        
        <p>Após implementar o sistema de reservas do RestGester, o restaurante alcançou:</p>
        
        <ul>
          <li>Redução de 80% nos no-shows</li>
          <li>Aumento de 35% na ocupação</li>
          <li>Crescimento de 25% no ticket médio</li>
          <li>Melhoria de 40% na satisfação dos clientes</li>
        </ul>
        
        <h2>Integração com Marketing</h2>
        
        <p>Potencialize suas reservas com estratégias de marketing:</p>
        
        <ul>
          <li>Promoções para horários de baixa ocupação</li>
          <li>Campanhas segmentadas por perfil</li>
          <li>Integração com redes sociais</li>
          <li>Sistema de recomendação</li>
        </ul>
        
        <h2>Conclusão</h2>
        
        <p>A gestão eficiente de reservas é fundamental para a rentabilidade do seu restaurante. Com o RestGester, você tem as ferramentas necessárias para otimizar sua ocupação, reduzir no-shows e aumentar a satisfação dos clientes.</p>
        
        <p>Solicite uma demonstração e descubra como podemos transformar a gestão de reservas do seu restaurante.</p>
      `
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
      content: `
        <h2>Dominando seus Números: Um Guia Completo para Análise Financeira de Restaurantes</h2>
        
        <p>Em um mercado cada vez mais competitivo, compreender e interpretar corretamente os relatórios financeiros é crucial para o sucesso do seu restaurante. O RestGester oferece ferramentas avançadas para transformar dados em decisões estratégicas.</p>
        
        <h2>Métricas Fundamentais</h2>
        
        <h3>1. Custo da Mercadoria Vendida (CMV)</h3>
        <p>O controle do CMV é essencial para a lucratividade:</p>
        <ul>
          <li>Meta ideal: 28-32% da receita</li>
          <li>Monitoramento por categoria de produto</li>
          <li>Análise de variações sazonais</li>
          <li>Identificação de desperdícios</li>
        </ul>
        
        <h3>2. Custos Operacionais</h3>
        <p>Principais indicadores a monitorar:</p>
        <ul>
          <li>Custos de pessoal (meta: 25-35% da receita)</li>
          <li>Aluguel e utilities (meta: 5-10%)</li>
          <li>Marketing e promoção (meta: 3-5%)</li>
          <li>Manutenção e reparos</li>
        </ul>
        
        <h2>Análise de Rentabilidade</h2>
        
        <p>O RestGester permite análises detalhadas de:</p>
        
        <h3>1. Margem por Produto</h3>
        <ul>
          <li>Contribuição por item do cardápio</li>
          <li>Análise de mix de vendas</li>
          <li>Engenharia de cardápio</li>
          <li>Precificação dinâmica</li>
        </ul>
        
        <h3>2. Performance por Período</h3>
        <ul>
          <li>Comparativo mensal/anual</li>
          <li>Análise por turno</li>
          <li>Sazonalidade</li>
          <li>Eventos especiais</li>
        </ul>
        
        <h2>Indicadores de Fluxo de Caixa</h2>
        
        <p>Monitore a saúde financeira com:</p>
        
        <ul>
          <li>Previsão de receitas e despesas</li>
          <li>Gestão de contas a pagar/receber</li>
          <li>Análise de capital de giro</li>
          <li>Planejamento de investimentos</li>
        </ul>
        
        <h2>Dashboards Personalizados</h2>
        
        <p>O RestGester oferece visualizações intuitivas:</p>
        
        <ul>
          <li>KPIs em tempo real</li>
          <li>Gráficos comparativos</li>
          <li>Alertas personalizados</li>
          <li>Relatórios automatizados</li>
        </ul>
        
        <h2>Caso de Sucesso: Restaurante Pier 23</h2>
        
        <p>Após implementar a análise financeira do RestGester, o restaurante alcançou:</p>
        
        <ul>
          <li>Redução de 15% no CMV</li>
          <li>Aumento de 25% na margem líquida</li>
          <li>Otimização de 20% no mix de produtos</li>
          <li>Melhoria de 30% no fluxo de caixa</li>
        </ul>
        
        <h2>Planejamento Estratégico</h2>
        
        <p>Utilize os dados para:</p>
        
        <ul>
          <li>Definição de metas realistas</li>
          <li>Planejamento de expansão</li>
          <li>Análise de investimentos</li>
          <li>Gestão de riscos</li>
        </ul>
        
        <h2>Integração com Outras Áreas</h2>
        
        <p>Conecte dados financeiros com:</p>
        
        <ul>
          <li>Gestão de estoque</li>
          <li>Controle de pessoal</li>
          <li>Marketing e vendas</li>
          <li>Satisfação do cliente</li>
        </ul>
        
        <h2>Conclusão</h2>
        
        <p>A análise financeira eficiente é a base para decisões estratégicas acertadas. O RestGester fornece as ferramentas necessárias para transformar dados em insights acionáveis, permitindo que você tome decisões mais informadas e lucrativas.</p>
        
        <p>Agende uma demonstração para descobrir como nosso sistema pode revolucionar a gestão financeira do seu restaurante.</p>
      `
    }
  ];
  
  useEffect(() => {
    if (id) {
      // Simulate API call to fetch blog post
      setLoading(true);
      const foundPost = allPosts.find(post => post.id === id);
      
      // Simulate delay to show loading state
      const timer = setTimeout(() => {
        setPost(foundPost || null);
        setLoading(false);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [id]);
  
  // Get related posts based on the same category
  const relatedPosts = post 
    ? allPosts
        .filter(p => p.id !== post.id && p.category === post.category)
        .slice(0, 3) 
    : [];
  
  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-28 pb-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-center items-center py-20">
              <div className="animate-pulse flex flex-col items-center">
                <div className="w-3/4 h-8 bg-gray-200 rounded mb-4"></div>
                <div className="w-2/4 h-6 bg-gray-200 rounded mb-10"></div>
                <div className="w-full h-64 bg-gray-200 rounded mb-6"></div>
                <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
                <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
                <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
                <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-28 pb-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold text-restaurant-primary mb-4">
                Artigo não encontrado
              </h2>
              <p className="text-restaurant-muted mb-8">
                O artigo que você está procurando não está disponível.
              </p>
              <Button 
                variant="restaurant" 
                onClick={() => navigate('/blog')}
              >
                <ArrowLeft className="h-4 w-4 mr-2" /> 
                Voltar para o blog
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <motion.div
        className="fixed top-0 left-0 h-1 bg-restaurant-secondary z-50"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: '0%' }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
      <main className="pt-28 pb-20">
        <article>
          <motion.div 
            className="w-full h-[40vh] md:h-[60vh] relative"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10"></div>
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4";
              }}
            />
            <div className="container mx-auto px-4 md:px-6 relative z-20">
              <div className="absolute bottom-8 left-4 md:left-6 md:right-6 max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                    onClick={() => navigate('/blog')}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" /> 
                    Voltar para o blog
                  </Button>
                  
                  <motion.div 
                    className="flex items-center gap-2 mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <span className="bg-restaurant-secondary text-white text-xs font-medium px-2 py-1 rounded transform hover:scale-105 transition-transform duration-300">
                      {post.category}
                    </span>
                    <span className="text-white/90 text-sm flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </motion.div>
                  
                  <motion.h1 
                    className="text-3xl md:text-5xl font-bold font-playfair text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    {post.title}
                  </motion.h1>
                  
                  <motion.div 
                    className="flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3 transform hover:scale-110 transition-transform duration-300">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white hover:text-restaurant-secondary transition-colors duration-300">{post.author}</p>
                      <p className="text-xs text-white/80 flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="prose prose-lg max-w-none prose-headings:font-playfair prose-headings:text-restaurant-primary prose-p:text-restaurant-muted prose-a:text-restaurant-secondary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {relatedPosts.length > 0 && (
                <motion.div 
                  className="mt-16 pt-8 border-t border-gray-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.h3 
                    className="text-2xl font-bold font-playfair text-restaurant-primary mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Artigos relacionados
                  </motion.h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost, i) => (
                      <motion.div 
                        key={relatedPost.id} 
                        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1 transition-transform duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 * i, duration: 0.5 }}
                        onClick={() => navigate(`/blog/${relatedPost.id}`)}
                      >
                        <div className="h-40 relative overflow-hidden">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            onError={(e) => {
                              e.currentTarget.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4";
                            }}
                          />
                        </div>
                        <div className="p-4">
                          <span className="text-xs font-medium text-restaurant-secondary">{relatedPost.category}</span>
                          <h4 className="text-lg font-semibold text-restaurant-primary mt-2 line-clamp-2 hover:text-restaurant-secondary transition-colors duration-300">
                            {relatedPost.title}
                          </h4>
                          <p className="text-sm text-restaurant-muted mt-2 line-clamp-2">{relatedPost.excerpt}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
