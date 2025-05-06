import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Consultant = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const GEMINI_API_KEY = 'AIzaSyC-my8IR3_1GxBF6_MIzDdBJgXdqvb2YhY';
  const MAX_RETRIES = 3;
  const RETRY_DELAY = 1000;

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      let retries = 0;
      while (retries < MAX_RETRIES) {
        try {
          const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}&alt=json`;
          console.log('Sending request to:', url);
          
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              contents: [{
                parts: [{
                  text: `Você é o Gest AI, um especialista no sistema RestGester, gestao de restaurantes. Responda a seguinte pergunta de forma profissional e amigável: ${input}`,
                }],
              }],
              generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 1024,
              },
            }),
          });

          if (!response.ok) {
            if (response.status === 429 || response.status >= 500) {
              retries++;
              if (retries < MAX_RETRIES) {
                await sleep(RETRY_DELAY * retries);
                continue;
              }
            }
            if (response.status === 404) {
  throw new Error('Endpoint da API não encontrado. Por favor, verifique se a URL está correta e se a API está ativa.');
} else {
  throw new Error(`Erro na API (${response.status}): ${response.statusText}. Por favor, verifique a URL e as credenciais da API.`);
}
          }

          const data = await response.json();

          if (!data.candidates || !data.candidates[0] || !data.candidates[0].content || !data.candidates[0].content.parts || !data.candidates[0].content.parts[0]) {
            throw new Error('Resposta da API em formato inválido');
          }

          const assistantMessage = {
            role: 'assistant' as const,
            content: data.candidates[0].content.parts[0].text,
          };

          setMessages(prev => [...prev, assistantMessage]);
          break;
        } catch (error) {
          console.error('Error:', error);
          if (retries === MAX_RETRIES - 1) {
            let errorMessage = 'Desculpe, ocorreu um erro ao processar sua mensagem.';
            
            if (error instanceof Error) {
              if (error.message.includes('Erro na API')) {
                errorMessage = 'Não foi possível conectar ao serviço neste momento. Por favor, verifique sua conexão com a internet e tente novamente.';
              } else if (error.message.includes('formato inválido')) {
                errorMessage = 'Houve um problema ao processar a resposta. Nossa equipe técnica foi notificada.';
              } else if (error.message.includes('404')) {
                errorMessage = 'Endpoint da API não encontrado. Por favor, verifique se a URL está correta.';
              }
            }

            setMessages(prev => [...prev, {
              role: 'assistant',
              content: `${errorMessage} Se o problema persistir, entre em contato com o suporte.`,
            }]);
          } else {
            await sleep(RETRY_DELAY * retries);
          }
        }
      }
    } finally {
      setIsLoading(false);
    }
  }
  // Remove the misplaced closing brace here
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="container mx-auto px-4 py-8 max-w-4xl"
    >
      <div className="text-center mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl text-restaurant-primary mb-4 font-serif font-medium"
        >
          Consultor Virtual RestGester
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-restaurant-muted text-lg font-serif font-light"
        >
          Olá! Eu sou o Gest AI, seu assistente especializado no RestGester.
          Como posso ajudar você hoje?
        </motion.p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
        <ScrollArea className="h-[500px] pr-4" ref={chatContainerRef}>
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`flex items-start gap-3 mb-4 ${message.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'}`}
                whileHover={{ scale: 1.02, rotate: 2 }}
                whileTap={{ scale: 0.98, rotate: -2 }}
              >
                <motion.div
                  className={`p-2 rounded-full shadow-lg ${message.role === 'assistant' ? 'bg-restaurant-secondary text-white' : 'bg-restaurant-primary text-white'}`}
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                >
                  {message.role === 'assistant' ? <Bot size={20} /> : <User size={20} />}
                </motion.div>
                <motion.div
                  className={`flex-1 p-4 rounded-xl shadow-sm ${message.role === 'assistant' ? 'bg-gray-100' : 'bg-restaurant-primary/10'}`}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                >
                  <p className="text-restaurant-primary/90 font-cursive italic text-xl font-light">{message.content}</p>
                </motion.div>
              </motion.div>
            ))}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-restaurant-muted font-serif"
              >
                <Loader2 className="animate-spin" size={20} />
                <span>Gest AI está digitando...</span>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollArea>

        <div className="mt-4 flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Digite sua mensagem..."
            className="flex-1"
          />
          <Button
            onClick={handleSendMessage}
            disabled={isLoading || !input.trim()}
            className="bg-restaurant-secondary hover:bg-restaurant-secondary/90"
          >
            <Send size={20} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default Consultant;